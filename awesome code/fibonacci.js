// noprotect

function fib1(n) {
  if(n <= 2) {
    return 1;
  } else {
    var a = fib1(n - 1);
    var b = fib1(n - 2);
    return a + b;
  }
}

// https://en.wikipedia.org/wiki/Call_stack#Structure

function fib2(n) {
  var fiber = { arg: n, returnAddr: null, a: 0 /* b is tail call */ };
  rec: while (true) {
    if (fiber.arg <= 2) {
      var sum = 1;
      while (fiber.returnAddr) {
        fiber = fiber.returnAddr;
        if (fiber.a === 0) {
          fiber.a = sum;
          fiber = { arg: fiber.arg - 2, returnAddr: fiber, a: 0 };
          continue rec;
        }
        sum += fiber.a;
      }
      return sum;
    } else {
      fiber = { arg: fiber.arg - 1, returnAddr: fiber, a: 0 };
    }
  }
}

var p = performance;

var c = 33;

// for (var i = 0; i < 10; i++) {
//   fib1(c);
//   fib1(c);
//   fib2(c);
//   fib2(c);
// }

fib1(c);
console.log('result stack', fib1(c));
fib2(c);
console.log('result fiber', fib2(c));

var s1 = p.now();
fib1(c);
var e1 = p.now();

var s2 = p.now();
fib2(c);
var e2 = p.now();