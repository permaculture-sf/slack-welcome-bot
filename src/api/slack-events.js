const RequestEvent = require('../lib/request-event');

// eslint-disable-next-line import/prefer-default-export
async function handler(event) {
  const requestEvent = new RequestEvent(event);
  const data = event && requestEvent.isPost() && requestEvent.parsedBody();

  return {
    statusCode: 200,
    body: JSON.stringify({ accepted: data.challenge }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

module.exports = { handler };
