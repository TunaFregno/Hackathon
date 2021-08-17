// 1. FAKENEWS!
// count the number of fake news within the array.

/* function fakeNews(arg) {
    let fake = 0;
        for (let i = 0; i < arg.length; i++) {
            if (arg[i] === false) {
            fake ++;
            }  
        }
    return fake;
} */

const fakeNews = arr => "There is " + arr.filter(arg => arg === false).length + " fake news !";

const news = [true, false, false, true, false, false, false, true, true, true]; 
console.log(fakeNews(news))



// 2. THE ECHO!
// Returns the same sentence minus two letters until only the first letter is left.

function checkEcho(str) {
    if (str.length === 0) {
    return '';
    } else {
        str = str.slice(0, -2);
        console.log(str);
        checkEcho(str);
    }   
}
  
const yodel = "Yodelayheeeeehooooo";
console.log(checkEcho(yodel));



// 3.  CREATE CALCULATOR
// Allows a user to send 2 numbers, the type of operation and return the result.

function calculator(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num2 === 0 ? "Cannot divide by 0" :num1 / num2;
            break;
        default:
            return "Operator isn't recognize. Please try again."
    }
}

console.log(calculator(2, 10, "-")); 
console.log(calculator(20, 3, "*")); 
console.log(calculator(10, 0, "/")) 



// 4. DISTANCING
// Get Area and Perimeter based on the radius.

class Distanciation{

    constructor(radius) {
        this.radius = radius;
    }
  
    getArea(){
    return Math.PI * this.radius ** 2;
    //return Math.PI * Math.pow(this.radius, 2);
    }
  
    getPerimeter(){
    return 2 * Math.PI * this.radius;
    } 
}

const socialDistancing = new Distanciation(5);

console.log(socialDistancing.getArea()); // 78.53
console.log(socialDistancing.getPerimeter()) // 31.41



// 5. MYEACH
// Function that simulates the forEach method. It expects an array and a function.

function myEach(arr, func) {
	for (let i= 0; i < arr.length; i++) {
  	console.log(func(arr[i]));
  }
}


let plusTwo = (num) =>  num + 2;

let myArr = [1, 2, 4, 6, 8, 10];

console.log(myEach(myArr, plusTwo));
