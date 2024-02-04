// const addOption = (+);
// const subOption = (-);
// const multOption = (*);
// const divOption = (/);

let userRequest = prompt("Choose the option: add, sub, mult or div");
let firstDigit = parseInt(prompt('Write first digit'));
let secondtDigit = parseInt(prompt('Write second digit'));
let result;

userRequest === "add" && result = firstDigit + secondtDigit;
userRequest === "sub" && result = firstDigit - secondtDigit;
userRequest === "mult" && result = firstDigit * secondtDigit;
userRequest === "div" && result = firstDigit / secondtDigit;

alert(firstDigit + ' ' + userRequest + ' ' + secondtDigit + '=' + result);

// if {
//     userRequest = "add";
//     do
// }

// console.log(typeof(userRequest));



// addOption = userRequest;
// subOption = userRequest;
// multOption = userRequest;
// divOption = userRequest;

// console.log(true);

// userRequest = 'add';
// userRequest = 'sub';
// userRequest = 'mult';
// userRequest = 'div';

// let userChoice = userRequest(true);



// alert('Your request result is: ' + (firstDigit + userChoice + secondtDigit));