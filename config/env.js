const path = require('path');

require('dotenv').config({
  path: path.resolve(`${__dirname}/../`, '.env.build'),
  debug: process.env.DEBUG,
});
