function delayFn(time) {
  return new Promise((res) => {
    setTimeout(res, time);
  });
}

function stater() {
  console.log("times upp!");
}

// delayFn(3000).then(() => {
//   console.log("Promise resolved");
//   stater();
// });

// console.log("ended");

function divide(num1, num2) {
  return new Promise((res, rej) => {
    if (num2 === 0) rej();
    else res(num1 / num2);
  });
}

divide(12, 0)
  .then((ans) => console.log(ans))
  .catch(() => {
    console.log("Oops No division by zero");
  });
