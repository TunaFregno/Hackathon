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
// Function that simulates the .forEach method. It expects an array and a function.

function myEach(arr, func) {
	for (let i= 0; i < arr.length; i++) {
  	console.log(func(arr[i]));
  }
}

let plusTwo = (num) =>  num + 2;

let myArr = [1, 2, 4, 6, 8, 10];

console.log(myEach(myArr, plusTwo));



// 6. MYMAP
// Function that simulates the .map method. It expects an array and a function.

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



// 8. MERGE
// Takes two or more objects and returns one object with all the properties. If a property is in more than one object, the object passed first should have priority.

const merge = (...args) => {
    let Obj = {};
    args.forEach(obj => {
      for (let key in obj) {
        if (!Obj.hasOwnProperty(key)) {
          Obj[key] = obj[key];
        }
      }
    });
    return Obj;
};

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })); // { a: 3, b: 2, c: 4 }
console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5})); // { a: 3, b: 2, c: 4, e: 8 }



// 9. INVERT
// Returns a new object with the values of the passed object as properties and the keys as values.

const invert = (obj) => {

    let newObj = {};
    for (let key in obj) {
         newObj[obj[key]] = key;
      }
    return newObj;
};
  
console.log(invert({ a: 3, b: 2 }))// { 2: 'b', 3: 'a' } 



// 10. Min, Max, Length and Average
// Return the smallest and highest value of an array as well as its length and its average value.

const minMaxLengthAverage = (arr) => {

    let newArr = [];
    newArr.push(Math.min(...arr));
    newArr.push(Math.max(...arr));
    newArr.push(arr.length);
    
    const avg = arr.reduce((accumulator, currentVal) => accumulator + currentVal) / arr.length;
    newArr.push(avg);
    
    return newArr;
};
  
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // [ 3, 100, 5, 40 ]



// 11. ARRAY OF MULTIPLES
// Takes (num, length) as arguments and returns an array of multiples of num up to length.

const arrayOfMultiples = (num, len) => {

  let newArr = [];
	for (let i = 1; i < len + 1; i++) {
  newArr.push( num * i)
  }
  return newArr;
};

console.log(arrayOfMultiples(7, 5));



// 12. OBJECT TO AN ARRAY OF ARRAYS
// Converts an object into an array of keys and values.

const objectToArray = (obj) => {

  let newArr = [];
	for (let key in obj){
  newArr.push([key, obj[key]])
  }
  return newArr;
};

console.log(objectToArray({likes: 2, dislikes: 3, followers: 10})) //[["likes", 2], ["dislikes", 3], ["followers", 10]]



// 13. PRINT THE CENTURY
// Takes in a year and returns the correct century.

const century = year => {
	const c = Math.floor((year - 1) / 100) + 1;
	return c + (c == 21 ? "st" : "th") + " century"
}

console.log(century(999)) // "10th century"
console.log(century(1001)) // "11th century"
console.log(century(2005)) // "21st century"


// 14. MYFILTER
// Function that simulates the .filter method. It expects an array and a function.

const myFilter = (collection, fn) => {
  const result = [];
  myEach(collection, function(el, index, arr) {
    if (fn(el, index, arr)) {
      result.push(el);
    }
  });

  return result;
}

const filtered = myFilter([2, 8, 5, 15], function(el, index) {
  return el % index === 0;
});

console.log(myFilter(myNewArr, plusFive));



// 15. RECTANGLE INTERSECTION
// Expects two rectangles and returns the intersected rectangle (if any).

const createRect = rect => {
  return {
    left: Math.min(rect[0][0], rect[1][0]),
    right: Math.max(rect[0][0], rect[1][0]),
    bottom: Math.min(rect[0][1], rect[1][1]),
    top: Math.max(rect[0][1], rect[1][1])
  };
};

const intersect = (rect1, rect2) => {
  let firstRect = createRect(rect1);
  let secondRect = createRect(rect2);

  let left = Math.max(firstRect.left, secondRect.left);
  let right = Math.min(firstRect.right, secondRect.right);
  let bottom = Math.max(firstRect.bottom, secondRect.bottom);
  let top = Math.min(firstRect.top, secondRect.top);

  if (left > right || bottom > top) {
    return [];
  }

  return [[left, bottom], [right, top]];
};

console.log(intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]])); // => [2, 2], [4, 3]
console.log(intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]])); // => [2, 1], [4, 4]



// 16. Loves Me, Loves Me Not…
// Given a number of petals, return a string which repeats the phrases “Loves me” and “Loves me not” for every alternating petal.


