const { produce } = require('immer');

class RequestEvent {
  constructor(event) {
    this.event = produce(event, (draft) => draft);
  }
}

module.exports = RequestEvent;
