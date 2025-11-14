function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  try {
    if (b == 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (e) {
    return e.message;
  }
}
module.exports = { add, divide, subtract };
