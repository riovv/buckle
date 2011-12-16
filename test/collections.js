$(document).ready(function() {
  module("Collections");

  test("collections: frequency", function() {
    equals(JSON.stringify(_.frequency([1, 1, 2, 1, 'foo'])), '{\"1\":3,\"2\":1,\"foo\":1}', 'can calculate frequency in an Array');
    equals(JSON.stringify(_.frequency({'a': 1, 'b': 1, 'c': 2, 'd': 1,'e': 'foo'})), '{\"1\":3,\"2\":1,\"foo\":1}', 'can calculate frequency in an Object');
    equals(JSON.stringify(_.frequency([1, 1, 2, 1, [], {}, function(){}])), '{\"1\":3,\"2\":1}', 'ignores all kind of Objects');
    equals(JSON.stringify(_({'a': 1, 'b': 1, 'c': 2, 'd': 1,'e': 'foo'}).frequency()), '{\"1\":3,\"2\":1,\"foo\":1}', 'can perform OO-style frequency()');
    var result = (function(){ return _.frequency(arguments); }(1, 1, 2, 1, 'foo'));
    equals(JSON.stringify(result), '{\"1\":3,\"2\":1,\"foo\":1}', 'works on the arguments object.');
  });
});
