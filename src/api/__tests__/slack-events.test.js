const test = require('tape-async');
const { handler } = require('../slack-events');

test('slack-events url_verification', async (t) => {
  const mockChallenge = '7X8z79kUqugwJuhry5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const request = {
    httpMethod: 'POST',
    body: JSON.stringify({
      type: 'url_verification',
      token: 'sn9B4G2rxxxxxxxxxxxxxxxx',
      challenge: mockChallenge,
    }),
  };
  const response = await handler(request);

  t.ok(response, 'returns response');
  t.equal(response.statusCode, 200, 'events status');
  t.equal(JSON.parse(response.body).accepted, mockChallenge, 'events status');
  t.equal(response.headers['Content-Type'], 'application/json', 'json header');
  t.end();
});
