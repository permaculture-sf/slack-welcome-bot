// eslint-disable-next-line import/prefer-default-export
async function handler(event) {
  const params = event && event.queryStringParameters;
  const challenge = params ? params.challenge : false;

  return {
    statusCode: 200,
    body: JSON.stringify(challenge ? { accepted: challenge } : { msg: true }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

module.exports = { handler };
