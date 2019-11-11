// eslint-disable-next-line import/prefer-default-export
async function handler(event) {
  const data = event && event.httpMethod === 'POST' && JSON.parse(event.body);
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
