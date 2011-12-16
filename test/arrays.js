$(document).ready(function() {
  module("Arrays");

  test("arrays: chunks", function() {
    equals(JSON.stringify(_.chunks([1, 2, 3, 4], 2)), "[[1,2],[3,4]]", 'can chunk an even array');
    equals(JSON.stringify(_.chunks([1, 2, 3, 4, 5], 2)), "[[1,2],[3,4],[5]]", 'can chunk an odd array');
    equals(JSON.stringify(_.chunks([1, 2, 3, 4, 5], 6)), "[[1,2,3,4,5]]", 'will return everything in one chunk if size > array');
    equals(JSON.stringify(_.chunks([1, 2, 3, 4, 5], 0)), "[]", 'will return no chunks if size is 0 or less');
    equals(JSON.stringify(_.chunks([1, 2, 3, 4, 5], NaN)), "[]", 'will return no chunks if size isNaN');
    equals(JSON.stringify(_([1, 2, 3, 4, 5]).chunks(2)), "[[1,2],[3,4],[5]]", 'can perform OO-style chunks()');
    var result = (function(){ return _.chunks(arguments, 2); }(1, 2, 3, 4, 5));
    equals(JSON.stringify(result), "[[1,2],[3,4],[5]]", 'works on the arguments object.');
  });
});
