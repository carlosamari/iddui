var view = function() {
  console.log('view executed');
};

var fn = function() {
  console.log('fn executed');
  return 'result';
};

var trapFn = trap(view, fn);
console.log(trapFn()); // output: fn executed, view executed, result
