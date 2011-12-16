(function() {

  var numbers = [];
  for (var i=0; i<1000; i++) numbers.push(i);
  var objects = _.map(numbers, function(n){ return {num : n}; });
  var randomized = _.sortBy(numbers, function(){ return Math.random(); });

  // Arrays
  JSLitmus.test('_.chunks()', function() {
    return _.chunks(numbers, 3);
  });

  // Collections
  JSLitmus.test('_.frequency()', function() {
    return _.frequency(numbers);
  });

})();
