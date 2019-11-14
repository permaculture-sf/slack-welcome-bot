const test = require('tape-async');
const { handler } = require('../slack-events');

test('slack-events default', async (t) => {
  let response;

  try {
    response = await handler();
    t.ok(response, 'returns response');
    t.equal(response.statusCode, 200, 'events status');
    t.equal(response.body, '{"msg":true}', 'events status');
    t.equal(
      response.headers['Content-Type'],
      'application/json',
      'json header',
    );
    t.end();
  } catch (e) {
    t.end(e);
  }
});

test('slack-events url_verification', async (t) => {
  let response;
  const request = {
    httpMethod: 'POST',
    body: JSON.stringify({
      type: 'url_verification',
      token: 'sn9B4G2rxxxxxxxxxxxxxxxx',
      challenge: '7X8z79kUqugwJuhry5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    }),
  };

  try {
    response = await handler(request);
    t.ok(response, 'returns response');
    t.equal(response.statusCode, 200, 'events status');
    t.deepEqual(
      JSON.parse(response.body),
      {
        accepted: '7X8z79kUqugwJuhry5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      },
      'events status',
    );
    t.equal(
      response.headers['Content-Type'],
      'application/json',
      'json header',
    );
    t.end();
  } catch (e) {
    t.end(e);
  }
});
