const RequestEvent = require('../lib/request-event');

// eslint-disable-next-line import/prefer-default-export
async function handler(event) {
  const requestEvent = new RequestEvent(event);
  const data = event && requestEvent.isPost() && requestEvent.parsedBody();
  const challenge = data ? data.challenge : false;

  return {
    statusCode: 200,
    body: JSON.stringify(challenge ? { accepted: challenge } : { msg: true }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

module.exports = { handler };
