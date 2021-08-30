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

const lovesMe = n => {
	let str = ""
	for (let i = 0; i < n; i++) {
		let phrase = i % 2 === 0 ? "Loves me, " : "Loves me not, "
		if (i === n - 1) phrase = phrase.toUpperCase()
		str += phrase
	}
	return str.slice(0,-2)
}

console.log(lovesMe(3)) 



// 17. HISTORICAL MARKER
//  Able to choose if you want to sort it ascendingly or descendingly thanks to the keywords DSC/ASC. 

const sortDates = (arr, str) =>{
    let sortArr = arr.sort()
    if (str === 'DSC') {
        sortArr = sortArr.reverse()
    }
    return sortArr;
} 

console.log(sortDates(["20-02-2020_12:30", "20-02-2018_12:30", "20-02-2020_12:15"], "ASC")) 
// ["20-02-2018_12:30", "20-02-2020_12:15", "20-02-2020_12:30"]
    
console.log(sortDates(["15-06-2020_12:30", "15-06-2018_12:30", "15-06-2020_12:15"], "DSC")) 
// ["15-06-2020_12:30", "15-06-2020_12:15", "15-06-2018_12:30"]
    
console.log(sortDates(["10-02-2000_10:03", "14-02-2000_18:29", "01-01-1999_00:55"], "ASC")) 
// ["01-01-1999_00:55", "10-02-2000_10:03", "14-02-2000_18:29"]


// 18. ENIGMA
// Expects a message and encrypts it or decrypts it based on our “enigma” dictionary.

const encrypt = (str) => {

    const enigma = {
        a: 'm',
        b: 'a',
        c: 'f',
        d: 'b',
        e: 'c',
        f: 'n',
        g: 'z',
        h: 'w',
        i: 'x',
        j: 'u',
        k: 'p',
        l: 'd',
        m: 'y',
        n: 'q',
        o: 'o',
        p: 'r',
        q: 't',
        r: 'e',
        s: 'v',
        t: 'h',
        u: 'i',
        v: 'j',
        w: 'k',
        x: 'l',
        y: 'g',
        z: 's'
    }
    
    let newStr = str.split('')
    let encWord = [];
    
    for (let l in newStr) {
        for (let letter in enigma) {
            if (newStr[l] === ' ') {
                encWord.push(' ')
                break
            } 
        
            if (newStr[l] === letter) {
                encWord.push(enigma[letter]);
            }
        }
    }
    
    return encWord.join('')
}

const decrypt = (str) => {

    const enigma = {
        a: 'm',
        b: 'a',
        c: 'f',
        d: 'b',
        e: 'c',
        f: 'n',
        g: 'z',
        h: 'w',
        i: 'x',
        j: 'u',
        k: 'p',
        l: 'd',
        m: 'y',
        n: 'q',
        o: 'o',
        p: 'r',
        q: 't',
        r: 'e',
        s: 'v',
        t: 'h',
        u: 'i',
        v: 'j',
        w: 'k',
        x: 'l',
        y: 'g',
        z: 's'
    }
    
    let newStr = str.split('')
    let decWord = [];
    
    for (let l in newStr) {
        for (let letter in enigma) {
            if (newStr[l] === ' '){
                decWord.push(' ')
                break
            } 

            if (newStr[l] === enigma[letter]) {
                decWord.push(letter);
            }
        }
    }

    return decWord.join('') 
} 
    
console.log(encrypt('attack')) 
// 'mhhmfp'
console.log(encrypt('fire in the hole'))
// 'nxec xq hwc wodc'
console.log(decrypt('x eofp ho bcfegrh mdd hwcvc clcefxvcv')) 
// 'i rock to decrypt all these exercises'



// 19. GET ALL THE PAIRS
// Returns all the pair of numbers with a sum reaching the targeted numbers.

const allPairs = (arr, total) => {

	let newArr= [];
  
    for (let num in arr){
   	    for (let n in arr){
   		    if (arr[num] + arr[n] === total){
   	
    		    newArr.push([arr[num], arr[n]]);
	
   		    }
  	    }
 	}

    newArr.sort()
  
    for (let i = 0; i < newArr.length; i++) {
    	if (newArr[i][0] === newArr[newArr.length -1][1] && newArr[i][1] === newArr[newArr.length -1][0]) {
      	    newArr.pop()
        
        }

    } 
  
    return newArr
}


console.log(allPairs([2, 4, 5, 3], 7)) 
// [[2, 5], [3, 4]]
// 2 + 5 = 7 and 3 + 4 = 7
console.log(allPairs([5, 3, 9, 2, 1], 3)) 
// [[1, 2]]
console.log(allPairs([4, 5, 1, 3, 6, 8], 9)) 
// [[1, 8], [3, 6], [4, 5]]



// 20. TIC TAC TOE

function ticTacToe(arr) {
	let winningComb = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
  let combs = [];
  for (let list in arr){
  	combs = combs.concat(arr[list]);
  } 
  for (let i in winningComb) {
        
   	if (combs[winningComb[i][0]] === "X" && combs[winningComb[i][1]] === "X" && combs[winningComb[i][2]] === "X"){
    		return 'Winner: X'
   	} 
    
    if (combs[winningComb[i][0]] === 'O' && combs[winningComb[i][1]] === 'O' && combs[winningComb[i][2]] === 'O'){
    		return 'Winner: O';
  	} 
 } return 'Draw. Play again'
}


console.log(ticTacToe([
    ["X", "O", "X"],
    ["O", "X",  "O"],
    ["O", "X",  "X"]
])) // "Winner: X"

console.log(ticTacToe([
    ["O", "O", "O"],
    ["O", "X", "X"],
    ["E", "X", "X"]
])) // "Winner: O"

console.log(ticTacToe([
    ["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
])) // "Draw. Play again"




// 21. REMOVE THE LAST VOWEL 

function killLastVowel(sentences) {
	let eachW = sentences.split(' ');
  let vowLs = 'aeiouAEIOU';
  let newArrW = [];
  let flag = true;
  
  for (let words in eachW) {
  	newArrW.push(eachW[words].split('').reverse().join(''))
    console.log(vowLs[words])
  }
  
  
  return newArrW

}


console.log(killLastVowel("Propulsion is a great place to get headache."))
// "Propulsin s  gret plac t gt headach."

console.log(killLastVowel("I love Javascript so much."))
// " lov Javascrpt s mch."




// 22. SORT YOUR CONTACS

function sortContacts(arr, sorting) {
	if(arr){
        if(sorting === "ASC"){
            return arr.sort(ascending) 
        }else if(sorting === "DESC"){
            return arr.sort(descending) 
        }else {
            return "Please choose how to sort your contacts";
        }
    }else{
        return [];
    }

}

function ascending(a,b){
    if (a.split(" ")[1] < b.split(" ")[1]){
       return -1; 
    } else{
        return 1;
    }
}
function descending(a,b){
    if (a.split(" ")[1] > b.split(" ")[1]){
       return -1; 
    } else{
        return 1;
    }
}

console.log(sortContacts([
    "Bat Man",
    "Bat Girl",
    "Dean Rouflaquette",
    "Albert Musketeer",
    "Captain America"
], "ASC"))
// ['Captain America','Bat Girl','Bat Man','Albert Musketeer','Dean Rouflaquette']

console.log(sortContacts([
    "Boutros Boutros-Ghali",
    "Kofi Annan",
    "Ban Ki-moon",
    "António Guterres"
], "DESC"))
// ['Ban Ki-moon','António Guterres','Boutros Boutros-Ghali','Kofi Annan']



console.log(sortContacts([], "DESC")) // []
console.log(sortContacts(null, "DESC")) // []
console.log(sortContacts(undefined, "DESC")) // []



console.log(sortContacts([
    "Bat Man",
    "Bat Girl",
    "Dean Rouflaquette",
    "Albert Musketeer",
    "Captain America"
])) // "Please choose how to sort your contacts"




// 23. DONT WORRY, BE HAPPY


function happyOrNot(num) {
	let str = num.toString().split('');
  let empt = [];
  let total = 0;
  
  for (let n in str){
    empt.push(parseInt(str[n])**2)
  } 
  for (let v in empt) {
   total += empt[v]
  }
  if ( total === 1) {
   return true
  } else if (total === 4) {
   return false
  } else {
   return happyOrNot(total)
  }
	
}


console.log(happyOrNot(19)) // true
// because 19 >> 1^2 + 9^2 = 82 >> 8^2 + 2^2 = 68 >> 6^2 + 8^2 = 100 >> 1^2 + 0^2 + 0^2 = 1
// We reached 1 meaning that 19 is a Happy Number.

console.log(happyOrNot(203)) // true
console.log(happyOrNot(11)) // false
console.log(happyOrNot(107)) // false