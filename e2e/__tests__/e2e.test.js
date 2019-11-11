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
      .get('/api/heartbeat')
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

test('slack event endpoint', async (t) => {
  const serverProcessId = await startServer();

  try {
    await request('http://localhost:8888')
      .get('/api/slack-events')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        t.deepEqual(JSON.parse(res.text), {
          msg: true,
        });
      });

    await request('http://localhost:8888')
      .post('/api/slack-events')
      .send({
        type: 'url_verification',
        token: 'sn9B4G2rxxxxxxxxxxxxxxxx',
        challenge: '7X8z79kUqugwJuhry5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        t.deepEqual(JSON.parse(res.text), {
          accepted: '7X8z79kUqugwJuhry5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        });
      });
  } catch (err) {
    t.end(err);
  }

  kill(serverProcessId);
});
