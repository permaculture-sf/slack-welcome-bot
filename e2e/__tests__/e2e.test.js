const test = require('tape-async');
const kill = require('tree-kill');
const debug = require('debug')('e2e:smoke');
const request = require('supertest');
const { startServer } = require('../util');

require('debug').enable('e2e:*');

debug('Starting');

test('app exists', (t) => new Promise(() => {
  let serverProcessId;

  startServer().then((pid) => {
    serverProcessId = pid;
    request('http://localhost:8888')
      .get('/.netlify/functions/hello')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        t.deepEqual(JSON.parse(res.text), {
          msg: 'Hello, World!',
        });
      })
      .end((err) => {
        kill(serverProcessId);
        t.end(err);
      });
  });
}));

test('heartbeat endpoint', (t) => new Promise(() => {
  let serverProcessId;

  startServer().then((pid) => {
    serverProcessId = pid;
    request('http://localhost:8888')
      .get('/.netlify/functions/heartbeat')
      .expect(200)
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
