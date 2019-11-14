const test = require('tape-async');
const RequestEvent = require('../request-event');

test('request event instantiates', (t) => {
  t.ok(new RequestEvent({}), 'instantiates');
  t.end();
});
