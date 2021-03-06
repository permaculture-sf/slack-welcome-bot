require('./config/env');

const { WebClient } = require('@slack/web-api');
const debug = require('debug')('bot');

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C1232456';

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({ channel: conversationId, text: 'Hello there' });

  // `res` contains information about the posted message
  debug.log('Message sent: ', res.ts);
})();
