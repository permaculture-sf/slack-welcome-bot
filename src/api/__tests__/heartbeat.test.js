const test = require('tape');
const { handler } = require('../heartbeat');

test('heartbeat', (t) => {
  const request = handler();

  request
    .then((res) => {
      t.ok(res, 'returns response');
      t.equal(res.body, '{"msg":true}', 'heartbeat status');
      t.equal(res.headers['Content-Type'], 'application/json', 'json header');
      t.end();
    })
    .catch(t.end);
});
