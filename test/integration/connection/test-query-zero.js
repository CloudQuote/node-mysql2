'use strict';

const common = require('../../common');
const connection = common.createConnection();
const assert = require('assert');

let rows;
connection.query('SELECT ? AS result', 0, (err, _rows) => {
  if (err) {
    throw err;
  }
  rows = _rows;
  connection.end();
});

process.on('exit', () => {
  assert.deepEqual(rows, [{ result: 0 }]);
});
