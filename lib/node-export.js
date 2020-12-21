"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.sayBye = sayBye;

// Для ноды
// function sayHello() {
//     console.log('Hello');
// };
// module.exports = {
//     sayHello,
// };
// Для браузера
// function sayHello() {
//     console.log('Hello');
// };
// export default {
//     sayHello,
// };
// v.2 
function _default() {
  console.log('Hello from export default');
}

function sayBye() {
  console.log('Say bye!');
}