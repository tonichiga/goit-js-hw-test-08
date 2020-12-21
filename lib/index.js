"use strict";

// const message = 'Hello Node';
// console.log(message);
// import { v4 as uuidv4 } from 'uuid';
var uuid = require('uuid');

console.log(uuid);

var sayHello = function sayHello() {
  var id = uuid.v4();
  console.log('Hello from Node');
  console.log('id:', uuid.v4());
};

sayHello();