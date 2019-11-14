const { produce } = require('immer');

class RequestEvent {
  constructor(event) {
    this.event = produce(event, (draft) => draft);
  }

  isPost() {
    return this.event.httpMethod === 'POST';
  }
}

module.exports = RequestEvent;
