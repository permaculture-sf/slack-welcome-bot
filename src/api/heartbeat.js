// eslint-disable-next-line import/prefer-default-export
async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: true }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

module.exports = { handler };
