const RequestEvent = require('../lib/request-event');
const SlackEvent = require('../lib/slack-event');

// eslint-disable-next-line import/prefer-default-export
async function handler(event) {
  const requestEvent = new RequestEvent(event);
  const data = event && requestEvent.isPost() && requestEvent.parsedBody();
  const slackEvent = new SlackEvent(data);

  if (slackEvent.isChallenge()) {
    return {
      statusCode: 200,
      body: JSON.stringify({ accepted: data.challenge }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
  console.log(event.body);

  return {
    statusCode: 200,
    body: '',
  };
}

module.exports = { handler };
