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

const checkEcho = (str) => {
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

const calculator = (num1, num2, operator) => {
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

const myEach = (arr, func) => {
	for (let i= 0; i < arr.length; i++) {
  	console.log(func(arr[i]));
  }
}

let plusTwo = (num) =>  num + 2;

let myArr = [1, 2, 4, 6, 8, 10];

console.log(myEach(myArr, plusTwo));



// 6. MYMAP
// Function that simulates the .map method. It expects an array and a function.

const myMap = (arr, func) => {
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

const wordCount = (sentence) => {
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




// 23. WHO IS THE PRESIDENT? 
// Returns the majority of vote in the array.

const whoIsThePresident = arr => {

	if(!arr.length){return "Is it a democratic vote here ? Please vote again."}
	
	let vote = [];
	arr.forEach(candidate => vote[candidate] ? vote[candidate]++ : vote[candidate] = 1);
	
	let highestScore = [Object.keys(vote)[0], Object.values(vote)[0]];
	
	for(candidate in vote)
	{
		if(vote[candidate] > highestScore[1])
		{
			highestScore = [candidate, vote[candidate]];
		} else if (candidate != highestScore[0] && vote[candidate] === highestScore[1]) {
			highestScore.push("DRAW");
		}
	}

	return highestScore.includes("DRAW") ? "We got a draw ! Please vote again." : `${highestScore[0]} is our new president with ${highestScore[1]} votes !`
}


whoIsThePresident(["Teddy Bear", "Chewbacca", "Dracula", "Chewbacca"]); // Chewbacca is our new president with 2 votes !
whoIsThePresident(["Chewbacca", "Teddy Bear", "Dracula", "Chewbacca", "Dracula"]); // We got a draw ! Please vote again.
whoIsThePresident([]); // Is it a democratic vote here ? Please vote again.




// 24. LONGEST WORD

const longest_word = (sentence) => {
 let longest = " ";
 let array = sentence.split(' ');
    for (let i = 0; i < array.length; i++ ) {
        if (array[i].length > longest.length) {
            longest = array[i];
        } 
    }
  return longest;
} 

console.log(longest_word("This is an amazing test")) 
console.log(longest_word("Valentina Colin")) 
console.log(longest_word("Numbers 123")) 



// 25. SUM OF NUMBERS EXERCISE

const sum_nums = (num) => {
    let total = 0;
    
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            total += i;
        } 
    }
    
    return total;
}
   
console.log(sum_nums(6)) // 21
console.log(sum_nums(1)) // 1
console.log(sum_nums(0)) // 0



// 26. TURN MINUTES INTO HOURS EXERCISE

const time_conversion = (minutes) => {
    let h = Math.floor(minutes / 60);
    let m = minutes%60;

    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

console.log(time_conversion(155)) // "02:35"
console.log(time_conversion(61)) // "01:01"
console.log(time_conversion(60)) // "01:00"
console.log(time_conversion(59)) // "00:59"




// 27. COUNTING VOWELS IN A STRING 


const count_vowels = (string) => {
 let vowels = 'aeiou';
 let totalV = 0;
 
    for (let i = 0; i < string.length; i++){
        if ( vowels.indexOf(string[i].toLowerCase()) > -1 ) totalV ++;
    }

    return totalV;
}

console.log(count_vowels("alphabet")) // 3
console.log(count_vowels("Propulsion Academy")) // 7
console.log(count_vowels("AaaAa")) // 5
console.log(count_vowels("fly")) // 0



// 28. PALINDROME EXERCISE

const palindrome = (string) => {
    let r = '';
    for (let i = string.length -1; i >= 0; i--){
       r+= string[i];
    }
    
    if (r === string) {
        return true
    } else return false
}
  
console.log(palindrome("ABBA")) // true
console.log(palindrome("tacocat")) // true
console.log(palindrome("abcd")) // false



// 29. METHOD THAT RETURNS TRUE IF THE LETTER “Z” APPEARS WITHIN THREE LETTERS AFTER AN “A”.


const nearby_az = (string) => {

  for ( let i = 0; i < string.length; i++){
   if (string[3] === 'z' || string[2] === 'z' || string[1] === 'z') {
   return true;
   } else return false;
  }

}

console.log(nearby_az("abbcz")) // false
console.log(nearby_az("acz")) // true
console.log(nearby_az("abcz")) // true
console.log(nearby_az("abba")) // false



// 30. IF A PAIR OF NUMBERS IN THE ARRAY SUMS TO ZERO, RETURN THE POSITIONS OF THOSE TWO NUMBERS.

const two_sum = (nums) => {
 let indx = [];
  
  for (let i = 0; i < nums.length; i++)
   for (let y = 0; y < nums.length; y++) 
     if (nums[i] + nums[y] === 0)
      indx.push([i, y]);

 if ( indx.length === 0 ) {
  return null;
 }
 return indx;
}

console.log(two_sum([1, 3, -1, 5])) // [[0, 2]]
console.log(two_sum([1, 3, -1, 5, -3])) // [[0, 2], [1, 4]] 
console.log(two_sum([1, 5, 3, -4])) // null 



// 31. LAST POSITION KID
// Return the position of the kid who gets two toys.

// n kids are sitting in a circle.
// k toys available to distribute.
// i position to start from.


const toyShare = (n, k, p) => {
    let lastKid = n;
   
    for (let i = p; p < k; p++) {
        lastKid--
        if (lastKid === 0){
            lastKid = n;
        }
    }
    return lastKid;
}
  
console.log(toyShare(3, 5, 1))



// 32. CHECKING IF THE VALUE IS BOOLEAN


const is_it_true = (args) => {
 if ( typeof args === typeof true) {
  return true;
 } else return false;
}

console.log(is_it_true(true)) // true
console.log(is_it_true(false)) // true
console.log(is_it_true('true')) // false
console.log(is_it_true(1)) // false
console.log(is_it_true('false')) // false



// 33. REPEAT A NUM OF STRINGS EXERCISE

const repeat_string_num_times = (str, num) => {
  let repeatS = '';
  if (num <= 0) {
    return '';
   } for ( let i = 0; i < num; i++) {
    repeatS += str;
   }
   return repeatS;
  }

console.log(repeat_string_num_times("abc", 3)) // 'abcabcabc'
console.log(repeat_string_num_times("abc", 1)) // 'abc'
console.log(repeat_string_num_times("abc", 0)) // ''
console.log(repeat_string_num_times("abc", -1)) // ''



// 34. ANAGRAM EXERCISE


const isAnagram = (test, original) => {
  let sort1 = test.toLowerCase().split('').sort().join('');
  let sort2 = original.toLowerCase().split('').sort().join('');
  if (sort1 === sort2) return true;
  else return false;
}

console.log(isAnagram("foefet", "toffee")) // true
console.log(isAnagram("Buckethead", "DeathCubeK")) // true
console.log(isAnagram("Twoo", "WooT")) // true
console.log(isAnagram("dumble", "bumble")) // false
console.log(isAnagram("ound", "round")) // false
console.log(isAnagram("apple", "pale")) // false



// 35.  RETURN THE SUM OF THE NUM IN A RANGE 

const add_all = (arr) => {
 let arr1 = arr[0];
 let arr2 = arr[1];
 let total = 0;
 
 for (let i = arr1; arr1 <= arr2; arr1++) {
   total += arr1;
 }
 return total;
}

console.log(add_all([1, 4])) // 10
console.log(add_all([5, 10])) // 45
console.log(add_all([9, 10])) // 19
console.log(add_all([0, 0])) // 0
console.log(add_all([-1, 1])) // 0



// 36. RETURN TRUE IF THE NUMBER IS THE RESULT OF I POWER BY 2

function is_power_of_two(num) {
  for (let i = 0; i < num; i++){
  let res = Math.pow(2,i);
   if ( num === res) {
     return true;
   } 
  } 
  return false;
}

console.log(is_power_of_two(8)) // true
console.log(is_power_of_two(16)) // true
console.log(is_power_of_two(32)) // true
console.log(is_power_of_two(12)) // false 
console.log(is_power_of_two(24)) // false 



// 37. RETURN THE HIGHTS AND THE LOWEST

const highAndLow = (numbers) => {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");



// 38. FUNCTION THAT DOES THE SAME AS Math.max

const maximo = (...numeros) => {
  let resultado = -Infinity;
  for (let numero of numeros) {
    if (numero > resultado) resultado = numero;
  }
  return resultado;
}
console.log(maximo(4, 1, 9, -2)); // → 9



// 39. COUNT CHARACTERS IN A WORD

const contarCaracteres = (word, letter) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count += 1;
    }
  }
  return count;
}


const contarFs = (word) => {
  return contarCaracteres(word, "F");
};

console.log(contarFs("FFC")); // → 2
console.log(contarCaracteres("kakkkerlak", "k")); // → 4



// 40. CALCULAR CENTURY

const century = (year) => {
	
  let divedToHundred = year / 100;
  let centuryResult = Math.ceil(divedToHundred)
  
  return `${centuryResult}th century`;
}

console.log(century(999)) // "10th century"
console.log(century(1001)) // "11th century"
console.log(century(2005)) // "21st century"



// 41. Adding a Function to the String Prototype

String.prototype.swapCase = function () {

  let arr = this.split("");
  let newArr = [];

    for(let x of arr){
        if(x == x.toUpperCase()){
               newArr.push(x.toLowerCase());  
        }else if(x == x.toLowerCase()){
              newArr.push(x.toUpperCase());
        }
    }
    return newArr.join("")
}


console.log("Hello".swapCase()) // "hELLO"
console.log("aBcD".swapCase()) // "aBcD"



// 42. Length of a Nested Array

const getLength = (arr) => {

	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}

console.log(getLength([1, [2, 3]])) // 3
console.log(getLength([1, [2, [3, 4]]])) // 4



// 43. Check if it is an Array

const isArray = (parameter) => {
	if (Array.isArray(parameter)){
  console.log(true) 
  } else {
   console.log(false)
  }
}


isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false




// 44. SMALLEST DIGIT 

const smallest = (num) => {

	let numSplit = num.toString().split('');
  
  let numToInt = numSplit.map((n) => {
  	 return parseInt(n)
  })
  
  let minNum =  Math.min(...numToInt);
  
  let numsArr = [];
  
 	for (let i in numToInt) {
    
      if ( numToInt[i] === minNum) {
      numsArr.push([minNum, parseInt(i)])
    	}
    }
  return numsArr; 
 
}


console.log(smallest(261235));  // [ 1, 2 ]
console.log(smallest(5967392)); // [ 2, 6 ]
console.log(smallest(517418));  // [ [ 1, 1 ], [ 1, 4 ] ]
console.log(smallest(467498));  // [ [ 4, 0 ], [ 4, 3 ] ]



// 45. BREAK CAME CASE

const breakUpCamelCase = (str) => {

  let newWord = ''
  
    for (let i in str) {
      if (str[i] === str[i].toUpperCase()){
        newWord += ` ${str[i]}`;
      } else {
        newWord += str[i];
      }
    }
    
     return newWord
   
  }
  
  
  console.log(breakUpCamelCase('breakUpCamelCase'));   // break Up Camel Case
  console.log(breakUpCamelCase('fullStackProgram'));   // full Stack Program