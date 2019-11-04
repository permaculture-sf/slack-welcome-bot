const { spawn } = require('child_process');
const debug = require('debug')('e2e:util');

const startServer = () => new Promise((resolve, reject) => {
  debug('Attempting to start Netlify dev server');

  const netlifyDev = spawn('netlify', ['dev']);

  netlifyDev.stdout.on('data', (data) => {
    if (
      data
        .toString()
        .split('\n')
        .some((v) => v.search('Server now ready') >= 0)
    ) {
      debug('Server started on http://localhost:8888');

      resolve(netlifyDev.pid);
    }
  });

  netlifyDev.on('close', (code) => {
    const msg = `Server closed with code "${code}"`;

    debug(msg);
    reject(new Error(msg));
  });
});

module.exports = { startServer };
