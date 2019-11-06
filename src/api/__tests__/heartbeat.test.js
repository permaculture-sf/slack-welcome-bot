const test = require('tape-async');
const { handler } = require('../heartbeat');

test('heartbeat', async (t) => {
  let response;

  try {
    response = await handler();
    t.ok(response, 'returns response');
    t.equal(response.body, '{"msg":true}', 'heartbeat status');
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
