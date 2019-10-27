const path = require('path');

require('dotenv').config({
  path: path.resolve(`${__dirname}/../`, '.env.local'),
  debug: process.env.DEBUG,
});