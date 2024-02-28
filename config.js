'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, PG_USER, PG_HOST, PG_DATABASE, PG_PASSWORD, PG_PORT } = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    pg: {
        user: PG_USER,
        host: PG_HOST,
        database: PG_DATABASE,
        password: PG_PASSWORD,
        port: PG_PORT,
    },
};

