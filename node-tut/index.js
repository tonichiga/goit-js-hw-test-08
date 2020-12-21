// const message = 'Hello Node';
// console.log(message);

// import { v4 as uuidv4 } from 'uuid';
const uuid = require("uuid");
console.log(uuid);

const sayHello = () => {
  const id = uuid.v4();
  console.log("Hello from Node");
  console.log("id:", uuid.v4());
};
sayHello();
