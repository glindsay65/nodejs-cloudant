var vows   = require('/usr/lib/node_modules/vows/lib/vows')
  , assert = require('assert')
  , cfg    = require('../../cfg/tests.js')
  , nano   = require('../../nano')(cfg);

function list_db (callback) {
  nano.db.create("li1", function () {
    nano.db.list(function (e,b) {
      callback(e,b);
      return;
    });
  });
}

function list_db_ok (e,b) {
  assert.isNull(e);
  assert.notEqual(b.indexOf("li1"),-1);
}

vows.describe('nano.db.list').addBatch({
  "list_db": {
    topic: function () { list_db(this.callback); }
  , "=": list_db_ok
  }
}).exportTo(module);