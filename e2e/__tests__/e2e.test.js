const test = require('tape-async');
const kill = require('tree-kill');
const request = require('supertest');
const { startServer } = require('../util');

require('debug').enable('e2e:*');

test('heartbeat endpoint', (t) => new Promise(() => {
  let serverProcessId;

  startServer().then((pid) => {
    serverProcessId = pid;
    request('http://localhost:8888')
      .get('/.netlify/functions/heartbeat')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        t.deepEqual(JSON.parse(res.text), {
          msg: true,
        });
      })
      .end((err) => {
        kill(serverProcessId);
        t.end(err);
      });
  });
}));

test('slack event endpoint', (t) => new Promise(() => {
  let serverProcessId;

  startServer().then((pid) => {
    serverProcessId = pid;
    request('http://localhost:8888')
      .get('/.netlify/functions/slack-events')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        t.deepEqual(JSON.parse(res.text), {
          msg: true,
        });
      })
      .end((err) => {
        kill(serverProcessId);
        t.end(err);
      });
  });
}));
