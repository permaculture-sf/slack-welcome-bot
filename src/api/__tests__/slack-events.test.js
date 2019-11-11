const test = require('tape-async');
const { handler } = require('../slack-events');

test('slack/events', async (t) => {
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
