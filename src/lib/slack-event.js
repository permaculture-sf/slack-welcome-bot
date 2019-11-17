class SlackEvent {
  constructor(event) {
    this.event = event;
  }

  isChallenge() {
    return typeof this.event.challenge === 'string';
  }

  isTeamJoin() {
    return this.event.event.type === 'team_join';
  }
}

module.exports = SlackEvent;
