'use strict';

var vows        = require("vows"),
    assert      = require("assert"),
    cube        = require("../"),
    test_helper = require("./test_helper");

var suite = vows.describe("visualizer");

function frontend_components() {
  cube.evaluator.register.apply(this, arguments);
  cube.visualizer.register.apply(this, arguments);
}

// suite.addBatch(
//   test_helper.with_server('evaluator', frontend_components, {
//
//   "POST /event/put with invalid JSON": {
//     topic: test_helper.request({method: "POST", path: "/1.0/event/put"}, "This ain't JSON.\n"),
//     "responds with status 400": function(response) {
//       assert.equal(response.statusCode, 400);
//       assert.deepEqual(JSON.parse(response.body), {error: "SyntaxError: Unexpected token T"});
//     }
//   }
// }));

suite['export'](module);
