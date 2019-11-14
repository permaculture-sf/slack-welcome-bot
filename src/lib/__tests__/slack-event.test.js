const test = require('tape-async');
const SlackEvent = require('../slack-event');

test('SlackEvent initializes', (t) => {
  t.ok(new SlackEvent({}), 'initializes');
  t.end();
});

test('SlackEvent.isChallenge()', (t) => {
  const event = new SlackEvent({ challenge: 'foobar' });
  t.equal(event.isChallenge(), true, 'is challenge');
  t.end();
});
