define("outputTest/0.0.1/b-debug", [], function(require, exports) {
  exports.getB = function(id) {

  };
});



define("outputTest/0.0.1/c-debug", [], function(require, exports) {
  exports.getC = function(id) {

  };
});

define("outputTest/0.0.1/excludeMergeA-debug", ["./a-debug", "./b-debug", "./c-debug", "#jquery/1.7.2/jquery-debug", "#widget/1.0.0/widget-debug", "#base/1.0.0/base-debug", "#class/1.0.0/class-debug", "#events/1.0.0/events-debug"], function(require, exports) {
  var $ = require('#jquery/1.7.2/jquery-debug');
  var widget = require('#widget/1.0.0/widget-debug');
  var moduleA = require('./a-debug');
  var moduleB = require('./b-debug');
  var modulec = require('./c-debug');

  exports.get = function(id) {
    var dom = $(id);
    widget.render(dom, module);
  };
});

