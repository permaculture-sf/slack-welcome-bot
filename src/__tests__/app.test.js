const test = require('tape');
const App = require('../app');

test('app exists', (t) => {
  t.equal(typeof App === 'object', true);
  t.end();
});
