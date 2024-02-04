let operation = prompt("Choose the option: add, sub, mult or div");

let addOpt = 'add';
let subOpt = 'sub';
let multOpt = 'mult';
let divOpt = 'div';

let a = parseInt(prompt('Write first digit'));
let b = parseInt(prompt('Write second digit'));

let result;

operation === addOpt && alert(`Your request is: ${a} + ${b} = ${result = (a + b)}`);
operation === subOpt && alert(`Your request is: ${a} - ${b} = ${result = (a - b)}`);
operation === multOpt && alert(`Your request is: ${a} * ${b} = ${result = (a * b)}`);
operation === divOpt && alert(`Your request is: ${a} / ${b} = ${result = (a / b)}`);