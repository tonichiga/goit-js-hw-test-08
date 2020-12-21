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

export default function () {
    console.log('Hello from export default');
}

export function sayBye() {
    console.log('Say bye!');
}