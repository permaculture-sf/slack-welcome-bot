class SlackEvent {
  constructor(event) {
    this.event = event;
  }

  isChallenge() {
    return typeof this.event.challenge === 'string';
  }
}

module.exports = SlackEvent;
