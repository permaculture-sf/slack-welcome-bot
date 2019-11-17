const test = require('tape-async');
const SlackEvent = require('../slack-event');

test('SlackEvent initializes', (t) => {
  t.ok(new SlackEvent({}), 'initializes');
  t.end();
});

test('SlackEvent.isChallenge()', (t) => {
  const event = new SlackEvent({
    challenge: 'foobar',
    type: 'url_verification',
  });
  t.equal(event.isChallenge(), true, 'is challenge');
  t.end();
});

test('SlackEvent.isTeamJoin()', (t) => {
  const event = new SlackEvent({
    type: 'event_callback',
    event: {
      type: 'team_join',
      user: {
        id: 'UN1xxx',
        team_id: 'TN3xxx',
      },
    },
  });
  t.equal(event.isTeamJoin(), true, 'assert event type');
  t.end();
});
