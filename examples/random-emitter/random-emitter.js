process.env.TZ = 'UTC';

var util = require("util"),
    cube = require("../../"), // replace with require("cube")
    options = require("./random-config"),
    setImmediate = require("../../set-immediate");

util.log("starting emitter");
var emitter = cube.emitter(options["collector"]);

var start = Date.now() + options["offset"],
    stop = start + options["duration"],
    step = options["step"],
    value = 0,
    count = 0;

function insert(start){
  if(start > stop){
    util.log("sent " + count + " events");
    util.log("stopping emitter");
    emitter.close();
    return;
  }
  count++;
  emitter.send({
    type: "random",
    time: new Date(start),
    data: {
      value: value += Math.random() - .5
    }
  });
  setImmediate(function(){ insert(start + step) });
}

insert(start);
