// const utils = require('./node-export'); //Для Ноды
// utils.sayHello();


// Для браузера
// import {sayHello} from './node-export.js'
// sayHello();

// v.2

// import * as utils from './node-export.js';
// utils.sayHello();

// v.3

// import utils from './node-export.js'
// utils.sayHello();

// v.4

import fn, {sayBye} from './node-export.js'
fn();
sayBye();