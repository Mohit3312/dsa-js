// Recursion : When function call itself
// If a function call itself then there must be an end point otherwise it will get called for infinite time

let counter = 1;
function demo(number) {
  // function definition
  if (counter > number) {
    return;
  }

  console.log("I am function", counter++);
  demo(number); // Recursion Function
}

demo(10); // Calling
