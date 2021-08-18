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



// 6. MYMAP
// Function that simulates the forEach method. It expects an array and a function.

function myMap(arr, func) {
    let newArr = [];
	for (let i= 0; i < arr.length; i++) {
  	newArr.push(func(arr[i]));
  }
  return newArr;
}

let plusFive = (num) =>  num + 5;

let myNewArr = [0, 2, 4, 10];

console.log(myMap(myNewArr, plusFive));



// 7. WORD COUNT
// Count the number of words. Returns an error message with the first 30 words.

function wordCount(sentence) {
	let splitSentence = sentence.split(' ')
  let counter = 0;
  
  if (splitSentence.length > 30){
  	let slicingSentence = splitSentence.slice(0, 29);
    let joinSentence = slicingSentence.join(" ")
    return `ERROR: you wrote ${splitSentence.length} words. We only can accept the following words: ${joinSentence}. -`
  } else {
  	return splitSentence.length;
  }
}

console.log(wordCount("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupery")); 
console.log(wordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu")) 