'use strict';

const config = require('./config');
const response = require('./util/response');

module.exports = {
    handler: handler
}

function handler(event, context, callback) {
    console.log(config.someEnvVar);
    callback(null, response.ok(config));
};