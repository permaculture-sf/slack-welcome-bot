const test = require('tape-async');
const RequestEvent = require('../request-event');

test('RequestEvent instantiates', (t) => {
  t.ok(new RequestEvent({}), 'instantiates');
  t.end();
});

test('RequestEvent.isPost()', (t) => {
  const event = new RequestEvent({ httpMethod: 'POST' });
  t.equal(event.isPost(), true, 'assert post method');
  t.end();
});
