// node // **************CODE WAR!!!!!!!**************

//
// You are going to be given a word. Your job is to
// return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"
// #Input
//
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
//
// #Output
//
// The middle character(s) of the word represented as a string.


// function getMiddle(s){
//  var middleLetters = '';
//   if(s.length % 2 === 0){
//     var even =s.length /2;
//     return middleLetters+= s.slice(even -1, even + 1);
//
//
//
//   } else if (s.length % 2 !== 0){
//     var odd = s.charAt((s.length/2));
//     return middleLetters+= odd;
//   }
// }



//
// // bit counting     *******************
//
// function printBinary(n) {
//   var bin ="";
//
//   while (n > 0){
//   bin = n % 2 + bin;
//   n = Math.floor(n / 2);
//
//   }
//   return bin;
// }
//
// function countBits(n){
//   var count=0;
//   var result = printBinary(n);
//   var num = result.split("");
// for (var i =0; i < num.length; i++){
//   if (num[i] === "1"){
//     count+=1;
//   }
// }
// return count;
// }
// console.log(countBits(1234));
// // var num= result.split("");
// //   for (var i = 0; i <num.length;i++){
// //     if (num[i] === 1){
// //       count++;
// //     }
// //   }
// //   return count;
// //   }
//
//
// console.log(countBits(1234));

//
// // Complete the solution so that it
// splits the string into pairs of two characters.
// If the string contains an odd number of characters
// then it should replace the missing second character of the
// final pair with an underscore ('_').
//
// Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// function solution(string) {
// 	var array = string.split("");
// 	var collector = [];
// 	var result = [];
// 	for (var i = 0 ; i < array.length; i = i +2) {
// 		var pair = [];
// 		pair.push(array[i], array[i+1])
// 		collector.push(pair)
// 	}
// 	for (var j = 0; j < collector.length; j++) {
// 	  var pairString = ""
// 	  pairString = collector[j].join("")
// 	  result.push(pairString)
// 	}
// 	if (result[result.length-1].length%2 !== 0) {
// 	  result[result.length-1]+= "_"
// 	}
// 	return result;
// }
// console.log(solution('abc'));

// ***************************OR******************
// function solution(str){
//    var strPair = [];
//
//    for(var i = 0; i < str.length; i+=2){
//      var char1 = str[i];
//          char2 = str[i+1];
//
//
//          if (char2 !== undefined){
//            strPair.push(char1+char2);
//    } else {
//      strPair.push(char1+'_');
//    }
// }
//   return strPair;
// }





// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered


//
//
// function scramble(str1, str2) {
// var string1= str1.toLowerCase();
// var string2 = str2.toLowerCase();
// if(string1 || string2 === "undefined") {
//     return false;
//   }
//  for (var i = 0; i < string1.length; i++){
//    var char = string1[i];
//    if (string2.indexOf(char) !== -1){
//      return true;
//    }
//  }
//  return false;
//  }
// console.log(scramble('scriptjava','javascript'));









// #Find the missing letter
//
// Write a method that takes an array of consecutive (increasing)
// letters as input and that returns the missing letter in the array.
//
// You will always get an valid array. And it will be always exactly
// one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
//  -> 'e'
// ['O','Q','R','S'] -> 'P'

// function findMissingLetter(array){
//   var str="";
//   var alphaBet= ["a","b","c","d","e","f","g","h","i","j","k","l",
//   "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   var uppAlph= alphaBet.toUpperCase();
//   for (var j= 0; j < alphaBet.length; j++){
//      var alphChar= alphaBet[j];
//      var nextAlph= alphaBet[j+1];
// for (var i = 0; i < array.length-1; i++){
//   var char= array[i];
//   var nextChar = array[i+1];
//
//
//
// if (alphChar === char && nextAlph !== nextChar){
//
//  str = nextAlph;
// }
//
//
//    }
//
// }
//
//
//
//   return str;
// }
// console.log(findMissingLetter(['a','b','c','d','f']));





// A child plays with a ball on the nth floor of a big building. The height of this floor is known.
//
// (float parameter "h" in meters. Condition 1) : h > 0)
//
// He lets out the ball. The ball bounces for example to two-thirds of its height.
//
// (float parameter "bounce". Condition 2) : 0 < bounce < 1)
//
// His mother looks out of a window that is 1.5 meters from the ground.
//
// (float parameters "window". Condition 3) : window < h).
//
// How many times will the mother see the ball either falling or bouncing in front of the window?
//
// If all three conditions above are fullfilled, return a positive integer, otherwise return -1.
//
// Note
//
// You will admit that the ball can only be seen if the height of the rebouncing ball is stricty greater than the window parameter.
//
// Example:
//
// h = 3, bounce = 0.66, window = 1.5, result is 3

// function bouncingBall(h,  bounce,  window) {
//  var rebounds = -1;
//  if (bounce > 0 && bounce < 1) {
//  while (h > window);
//   rebounds+=2;
//    h *= bounce;
//  return rebounds;
//  }
// }




//
// function zero() {return 0;}
// function one() {return 1;}
// function two() {return 2;}
// function three() {return 3;}
// function four() {return 4;}
// function five() {return 5;}
// function six() {return 6;}
// function seven() {return 7;}
// function eight() {return 8;}
// function nine() {return 9;}
//
// function plus() {
// var add = function () + function ();
// }
// function minus() {}
// function times() {}
// function dividedBy()


// var idx = 'abcde'.indexOf('D');
// idx = idx + 11;
// console.log(idx); // ?
// idx * 2;
// console.log(idx); // ?
// // 2
// var num = 33;
// var isEven = num % 2 === 0;
// console.log(isEven); // ?
// console.log(!isEven); // ?
// // // 3
// var str1 = 'marker';
// var num = 'whiteboard'.length - str1.length;
// console.log(num); // ?
// var str2 = 'bootcamp';
// console.log(str2[num].toUpperCase()); // ?
// var char = str2[num].toLowerCase(); // ?
// console.log(char + '!'); // ?
// // // 4
// var sentence = 'welcome to bootcamp prep';
// var lastChar = sentence[sentence.length - 1];
// console.log(lastChar); // ?
// console.log(sentence.indexOf(lastChar)); // ?


// var num = 2; // feel free to change the value of this variable
// if (num < 0) {
//   console.log('if');
// } else if (num > 0) {
//   console.log('else if');
// } else {
//   console.log('else');
// }



// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true
//
// function isOdd(num) {
// if (num % 2 === 0){
//   return false;
// }else{
//   return true;
// }
// }
// console.log(isOdd(5));    // => true

//
// function hello(str) {
//   console.log("hello"+ str);
// }
// console.log(hello("child"));



// printFives
//
// // Write a function `printFives(max)` that prints out the multiples of 5 that are
// // less than max.
// //
// // Try to solve this in two ways, using a conditional (if) and without using a
// // conditional
// //
// // Example:
// //
// // printFives(20) // prints
// // 0
// // 5
// // 10
// // 15
// function printFives(max){
//   for (var i = 0; i < max; i+=5){
//     if (i % 5 === 0){
//       console.log(i);
//     }
//   }
// }
// console.log(printFives(20));



// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91
// function printReverse(min, max){
//   for (var i = max; i >=min; i--){
//     console.log(i);
//   }
// }
// console.log(printReverse(90, 94));


// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795
// function sumNums(max){
//   var sum=0;
//   for (var i =0; i <= max;i++){
//     sum += i;
//
//   }
// return sum;
// }
// console.log(sumNums(4));

// isFactorOf

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false

//
// function isFactorOf(number, factor){
//   if (number % factor === 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isFactorOf(6,2));



// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18
// function fizzBuzz(max){
//   for (var i =0; i <  max; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//       continue;
//     }else if ( i % 3 === 0|| i % 5 === 0){
//       console.log(i);
//     }
//   }
//
// }
// console.log(fizzBuzz(20));


// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(15485863); // => true
// isPrime(3548563); // => false
// function isPrime(number){
//   for (var i =0; i < number;i++){
//     if (number % i === 0){
//       return false;
//     }else{
//       return true;
//     }
//   }
//
// }
// console.log(isPrime(15485863));


// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson
// function logEach(array){
//   for (var i =0; i < array.length;i++){
//     console.log(i, array[i]);
//   }
// }
// console.log(logEach(["Anthony", "John", "Carson"]));


// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

// function range(start, end){
//   var newArr=[];
//   for (var i = start; i <= end; i++){
//     newArr.push(i);
//   }
//   return newArr;
// }
// console.log(range(1,4));



// sumArray

// Write a function sumArray(array) that takes in an array of numbers are returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30


// function sumArray(array){
//   var sum = 0;
// for (var i = 0; i <array.length;i++ ){
//   var ele= array[i];
//   sum += ele;
// }
// return sum;
// }
// console.log(sumArray([5, 6, 4]));


// capWords

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']
//
//
// function capWords(words){
//   var newArr=[];
//   for (var i =0; i < words.length;i++){
//     var capWord= words[i].toUpperCase();
//     newArr.push(capWord);
//
//   }
//   return newArr;
// }
// console.log(capWords(['hello', 'boOtCaMp', 'PREP!']));

//
// wordPeriods

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'
// function wordPeriods(sentence){
//   var sent= "";
//   var word= sentence. split (" ");
//   for (var i = 0; i < word.length;i++){
//     var eleDot= word[i]+".";
//     sent+= eleDot;
//   }
//
//   return sent;
// }
// console.log(wordPeriods('hello world'));


// maxValue

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

// function maxValue(array){
//   var max =0;
//   for (var i =0; i < array.length;i++){
//     if (array[i] > max){
//       max =+ array[i];
//     }
//   }
//   return max;
// }
// console.log(maxValue([12, 6, 43, 2]));


//
//
// Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
// function should return true if the arrays have different lengths. The
// function should return false otherwise.
//
// Examples:



// diffArrayLen(a1, a2); // => false
// diffArrayLen(a1, a3); // => true
// ***********************************************************************/
// var a1 = ['a', 'b', 'c'];
// var a2 = ['w', 'x', 'y'];
// var a3 = [1, 3, 7, 4];
// function diffArrayLen(arr1, arr2) {
// if (arr1.length !== arr2.length)
//   return true;
//
//
// }
// console.log(diffArrayLen(a1,a2));


// Write a function `mirrorArray(array)` that takes in an array as an
// argument and returns a new array "mirrored" as shown in the examples:
//
// Examples:
//
// mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
// mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
// ***********************************************************************/

// function mirrorArray(array) {
// newArr=[];
// for (var i =0; i < array.length;i++){
//   var ele= array[i];
//   newArr.push(ele);
// }
//   for (var j = array.length-1; j >= 0;j--){
//     var negEle = array[j];
//     newArr.push(negEle);
//   }
//
// return newArr;
// }
// console.log(mirrorArray([1,2,3]));
//
//
// function slicilo(array){
//   newArr= array.slice(0,2);
//
//   return newArr;
// }
// console.log(slicilo(['a', 'b', 'c', 'd']));


// Write a function `avgValue(array)` that takes in an array of numbers and
// returns the average number.
//
// Examples:

// avgValue([10, 20]); // => 15
// avgValue([2, 3, 7]); // => 4
// avgValue([100, 60, 64]); // => 74.66666666666667
// // ***********************************************************************/
//
// function avgValue(array) {
//   var sum=0;
//   var avg;
// for (var i = 0; i < array.length; i++){
//   var ele= array[i];
//   sum += ele;
//
// }
// avg = sum / array.length;
// return avg;
// }
// console.log(avgValue([10, 20]));


//
// Write a function `abbreviate(sentence)` that takes in a sentence string
// and returns a new sentence where words longer than 4 characters have
// their vowels removed. Assume the sentence has all lowercase characters.
// Feel free to use the array below in your solution:



// Examples:

// abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'
// // ***********************************************************************/
//
// function removeVowels(word){
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var newWord="";
//   for (var i =0; i < word.length;i++){
//     var char = word[i];
//     if (vowels.indexOf(char) === -1){
//       newWord += char;
//     }
//   }
//   return newWord;
// }
// function abbreviate(sentence) {
// var newWord=[];
// var words= sentence.split(" ");
// for (var i =0; i < words.length;i++){
//   var word= words[i];
//   if (word.length >=5){
//     newWord.push(removeVowels(word));
//   }else {
//     newWord.push(word);
//   }
//
// }
// return newWord.join(" ");
// }
// console.log(abbreviate('bootcamp prep is fun'));

// function findUniq(arr) {
//  for (var i =0; i < arr.length;i++){
//  if (arr[i] !== arr[i+1] && arr[i] !== arr[i+2]){
//  return arr[i];
//  }
// }
// }
// console.log(findUniq([ 0, 1, 0 ]));


// Write a function `firstLastCap(sentence)` that takes in a sentence and
// returns a new sentence where the first and last letters of each word is
// uppercase. All other characters should be lowercase.
//
// Examples:
//
// firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
// firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
// ***********************************************************************/
//  return a new sentence
// split the sentence to words
//  words[i]=== word
// first char word[0].toUpperCase()
// last char = word[word.length-1].touppercase
// function firstLastCap(sentence) {
// var newSent=[];
// var words= sentence.split(" ");
// for (var i =0; i < words.length; i++){
//   var word= words[i];
//   var firstChar = word[0].toUpperCase();
//   var lastChar= word[word.length-1].toUpperCase();
//   var middleChar= word.slice(1,-1).toLowerCase();
//   var capWord= firstChar+middleChar+lastChar;
//   newSent.push(capWord);
// }
// return newSent.join(" ");
// }
// console.log(firstLastCap('hello BOOTCAMP PrEp'));


// Write a function `catBuilder(name, color, toys)` that returns a cat object
// object with the corresponding properties.
//
// // Example:
// //
// var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
// // cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
// //
// // var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
// // cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
// // ***********************************************************************/
//
// function catBuilder(name, color, toys) {
// var cat ={
//   name: name,
//   color: color,
//   toys: toys
// };
// return cat;
// }
// console.log(catBuilder(cat1));

// var word= "hello";
// var chpped= word.slice(1,-1);
// console.log(chpped);
// Write a function `printObject(obj)` that prints out all key-value pairs
// of an object. HINT: use a for loop.
//
// Example:
//
// var bootcamp = {
//  name: 'App Academy',
//  color: 'Red',
//  population: 120,
// };
// //
// // printObject(bootcamp); // prints
// //
// // `name - App Academy`
// // `color - Red`
// // `population - 120`
// // ***********************************************************************/
// //
// //
// function printObject(obj) {
// for (var key in obj){
//   console.log( key +"-" + obj[key]);
// }
// }
// console.log(printObject(bootcamp));


// Write a function `getFullName(person)` that takes in an person object
// and returns a string containing their full name.
//
// Examples:
// //
// var p1 = {firstName: 'John', lastName: 'Doe'};
// // getFullname(p1); // => 'John Doe'
// //
// // var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// // getFullname(p2); // => 'Charlie Brown'
// // ***********************************************************************/
//
// function getFullname(person) {
// var name= person.firstName+ " "+ person.lastName;
// return name;
// }
// console.log(getFullname(p1));


// Write a function `valuePair(obj1, obj2, key)` that takes in two objects
// and a key (string). The function should return an array containing the
// corresponding values of the objects for the given key.
//
// Examples:
//
// var object1 = {name: 'One', location: 'NY', age: 3};
// var object2 = {name: 'Two', location: 'SF'};
// //
// // valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// // valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
// // ***********************************************************************/
//
// function valuePair(obj1, obj2, key) {
// var val1= obj1[key];
// var val2= obj2[key];
// var arr= [val1,val2];
// return arr;
// }
//
// console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
// console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]


/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/
// var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'};
// function doesKeyExist(obj, key) {
// return obj[key] !== undefined;
// }
// console.log(doesKeyExist(obj1,"course"));



// Write a function `adults(people)` that takes in an array of person
// objects. The function should return an array containing the names of
// those who have an age of 18 or higher.
//
// Example:

// var ppl = [
//   {name: 'John', age: 20},
//   {name: 'Jim', age: 13},
//   {name: 'Jane', age: 18},
//   {name: 'Bob', age: 7}
// ];
//
// // adults(ppl); // => [ 'John', 'Jane' ]
// // ***********************************************************************/
//
// function adults(people) {
//   var newArr=[];
// for (var i =0; i < people.length;i++){
//   var person = people[i];
//   if (person.age >= 18 ){
//     newArr.push(person.name);
//   }
// }
// return newArr;
// }
// console.log(adults(ppl));


// Write a function `hasFavoriteFood(obj, food)` that takes in an object
// and a food string. The function should return true if the object has
// that favorite food. See the examples below.
//
// Examples:

// var dog = {
//   name: 'Fido',
//   favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
// };
//
// // hasFavoriteFood(dog, 'sausage'); // => true
// // hasFavoriteFood(dog, 'cat food'); // => false
//
// var person = {
//   name: 'Al',
//   favoriteFoods: ['pizza', 'burgers', 'ramen']
// };
//
// // hasFavoriteFood(person, 'burgers'); // => true
// // hasFavoriteFood(person, 'fish'); // => false
// // ***********************************************************************/
//
// function hasFavoriteFood(obj, food) {
//   return obj.favoriteFoods.indexOf(food) > -1;
// }
// console.log(hasFavoriteFood(person,"fish"));


// Write a function `countScores(people)` that takes in an array of score
// objects (people) as its input. A score object has two key-value pairs:
// a name (string) and a score (number). `countScores(people)` should
// return an object that has key-value pairs where each name is a key and
// the value is their total score.

// Example 1

// var ppl = [ {name: "Anthony", score: 10},
//             {name: "Fred", score : 10},
//             {name: "Anthony", score: -8},
//             {name: "Winnie", score: 12}];

// var countPpl = countScores(ppl);
// countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// Example 2

// var peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
// // countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
// // ***********************************************************************/
//
//
// function countScores(people) {
//   var scoreObj= {};
// for (var i = 0; i < people.length;i++){
//   var person = people[i];
//   var score= person.score;
//   var name= person.name;
//   if (scoreObj[name]){
//     scoreObj[name] += score;
//   }else{
//     scoreObj[name] = score;
//   }
// }
// return scoreObj;
// }
// console.log(countScores(peeps));
/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:


***********************************************************************/
//
// function isPrime(number) {
//   if (number < 2){
//   return false;
//   }
//   for (var i = 2; i < number;i++){
//   if (number % i === 0){
//     return false;
//   }
//   }
//   return true;
// }
// console.log(isPrime(2)); // => true
// // isPrime(1693); // => true
// console.log(isPrime(15)); // => false
// isPrime(303212); // => false
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/
// So we need to go through the prime array and push the num through the prime array.
//  so prime length must be lest tahn n to be able get the full length.
// function firstNPrimes(n) {
//   var prime=[];
//   // for (var num = 2; prime.length < n; num++)
// var num = 2;
// while (prime.length < n){
//   if(isPrime(num)){
//     prime.push(num);
//   }
//   num++;
// }
// return prime;
// }
// console.log(firstNPrimes(4));
// /***********************************************************************
// Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
// the sum of the first `n` prime numbers.
//
// Examples:
//
// sumOfNPrimes(0); // => 0
// sumOfNPrimes(1); // => 2
// sumOfNPrimes(4); // => 17
// ***********************************************************************/
//
// function sumOfNPrimes(n) {
// var sum = 0;
// var primes= firstNPrimes(n);
// for (var i =0; i < primes.length; i++){
//   var prime= primes[i];
//   sum += prime;
// }
// return sum;
// }
// console.log(sumOfNPrimes(4));


// Write a function `peakFinder(array)` that takes in an array of numbers.
// It should return an array containing the indices of all the peaks. A
// peak is an element that is greater than both of its neighbors. If it is
// the first or last element, it is a peak if it is greater than its one
// neighbor. Assume the array has a length of at least 2.
//
// Hint: this can be solved using a single loop
//
// Examples:
//
// peakFinder([1, 2, 3, 2, 1]); //=> [2]
// peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
// peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
// ***********************************************************************/

// function peakFinder(array) {
// var arr=[];
// for (var i =0; i < array.length;i++){
//   var current= array[i];
//   var next =array[i+1];
//   var before= array[i-1];
//   if (i === 0 && current > next){
//     arr.push(i);
//   }else if ((i === array.length-1) && current > before){
//     arr.push(i);
//   }else if ((current > before) && current > next){
//     arr.push(i);
//   }
// }
// return arr;
// }
// console.log(peakFinder([1, 2, 3, 2, 1]));



// Write a function `divisibleByThreePairSum(array)` that takes an array of
// numbers. It should return an array of all the pairs of indices, whose
// elements sum to a multiple of three.
//
// Examples:
//
// var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
//
// var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// arr2 //=> [[1, 3]]
// ***********************************************************************/

// function divisibleByThreePairSum(array) {
// var newArr=[];
// for (var i = 0; i < array.length; i++){
//   for (var j = i+1; j < array.length; j++){
//   var current = array[i];
//   var next = array[j];
//   var sum = current + next;
//   if (sum % 3 === 0){
//     newArr.push([i,j]);
//   }
//   }
//   }
// return newArr;
// }
// console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));

//
// Write a function `zipArray(arr1, arr2)` that takes in two arrays and
// "zips" them together by returning a single 2D-array. Assume that both
// input arrays have the same length.
//
// Examples:
//
// var a1 = ['a', 'b', 'c', 'd'];
// var a2 = [10, 20, 30, 40];
//
// // var result = zipArray(a1, a2);
// // result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
// // ***********************************************************************/
//
// function zipArray(arr1, arr2) {
//   var newArr=[];
//
//   for (var i = 0; i < arr1.length; i++){
//     newArr.push([arr1[i],arr2[i]]);
//   }
//
// return newArr;
// }
// console.log(zipArray(a1,a2));


// *********************************************************************
// Write a function `twoDimensionalTotal(array)` that takes in a 2D array
// of numbers and returns the total sum of all elements.
//
// var arr1 = [
//   [5, 2, 5, 3],
//   [12, 13],
// ];
// //
// // twoDimensionalTotal(arr1); // => 40
// //
// // var arr2 = [
// //   [2],
// //   [1, 9],
// //   [1, 1, 1]
// // ]
// //
// // twoDimensionalTotal(arr2); // => 15
// // ***********************************************************************/
//
// function twoDimensionalTotal(array) {
//   var sum=0;
// for (var i =0; i < array.length;i++){
//     var ele= array[i];
//   for (var j = 0; j < ele.length; j++){
//
//   sum+= ele[j];
// }
// }
// return sum;
// }
// console.log(twoDimensionalTotal(arr1));



/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/
// function findVowels(word){
//   var vowels= ["a","e","o","i","u",];
//   var newWord=[];
//   for (var i =0; i < word.length;i++){
//     var char = word[i].toLowerCase();
//     if (vowels.indexOf(char) > -1){
//       var capVowel= char.toUpperCase();
//       newWord.push(capVowel);
//     }else {
//       newWord.push(char);
//     }
//   }
//   return newWord.join(" ");
// }
// console.log(findVowels("hello wordld"));
// // function capVowels(string) {
// //
// // }



/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/
// function isPrime(num){
//   if (num < 2){
//     return false;
//   }
//
//   for (var i =2; i < num;i++){
//     if (num % i === 0){
//       return false;
//     }
//   }
//   return true;
// }
// // console.log(isPrime(3,5));
// function nextTwoPrimes(num) {
//   var twoPrime=[];
//
// for (var i = num+1; twoPrime.length < 2; i++){
//   if (isPrime(i)){
//     twoPrime.push(i);
//   }
// }
//   return twoPrime;
// }
// console.log(nextTwoPrimes(2));


/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

// function pairProduct(arr, num) {
// var newArr=[];
// for (var i =0; i < arr.length; i++){
//   for (var j =i+1; j < arr.length; j++){
//     if((arr[i]* arr[j]) === num){
//       newArr.push([i , j]);
//     }
//   }
// }
// return newArr;
// }
// console.log(pairProduct([1, 2, 3, 12, 8], 24));


// var arr2 = [
//   ['a'],
//   ['b', 'c', 'd', 'e']
// ];
//
// // twoDimensionalSize(arr2); // => 5
// // ***********************************************************************/
//
// function twoDimensionalSize(array) {
//   var count= 0;
//
//   for ( var i =0; i < array.length;i++){
//     var ele = array[i];
// count+= ele.length;
//
// }
// return count;
// }
// console.log(twoDimensionalSize(arr2));


// Write a function elementCount(array) that returns a object. Each key
// corresponds to an element in the array and the value corresponds to how
// many times that element appears in the array.
//
// Example:
// elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
// ***********************************************************************/

// function elementCount(array) {
// var count={};
// for (var i =0; i < array.length ; i++){
//   var key = array[i];
//   if (count[key] === undefined){
//     count[key] =1;
//   }else{
//     count[key]++;
//   }
// }
// return count;
// }
// console.log(elementCount(["a", "a", "b", "b"]));


/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


// var punctuation = [";", "!", ".", "?", ",", "-"];
//
// Examples:
//
// titleize("forest gump, the runner", ["the"])
// => "Forest Gump, the Runner"
//
// titleize("MASTER AND COMMANDER", ["and"])
// => "Master and Commander"
//
// titleize("i LOVE; lover of mine", ["love", "of"])
// => "I love; Lover of Mine"
//
// titleize("shall we dance?", ["dance"])
// => "Shall We dance?"
// ***********************************************************************/
// function removePunctuation(word){
//   var punctuation = [";", "!", ".", "?", ",", "-"];
//
//     var lastChar = word[word.length-1];
//
//     if (punctuation.indexOf(lastChar) !== -1){
//       return word.slice(0,-1);
//     }else{
//       return word;
//     }
//
// }
//
//
// function isStopWord(word, stopWords){
//   var noPunc= removePunctuation(word);
//   return stopWords.indexOf(noPunc)!== -1;
// }
//
// function titleize(title, stopWords) {
//   var words= title.split(" ");
//   var goodTitle= [];
//
//   for (var i =0; i < words.length; i++){
//     var word= words[i].toLowerCase();
//
//     if (isStopWord(word,stopWords)){
//       goodTitle.push(word);
//     }else{
//     word= word[0].toUpperCase()+word.slice(1);
//     goodTitle.push(word);
//     }
//
//   }
// return goodTitle.join(" ");
// }
// console.log(titleize("shall we dance?", ["dance"]));
/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.

Examples:

longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1
***********************************************************************/

// function longWordCount(sentence) {
// var count=0;
// var words= sentence.split(" ");
// for (var i = 0; i < words.length; i++){
//   var word= words[i];
//   if (word.length > 7){
//     count += 1;
//   }
// }
// return count;
// }
// console.log(longWordCount("two reallylong words inthisstring"));


/***********************************************************************
Write a function `factorial(n)`, that returns the factorial of the
number `n`. For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

Examples:

factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/
//
// function factorial(n) {
// if (n <= 1){
//   return 1;
// }
// return n * factorial(n-1);
// }
// console.log(factorial(4));


/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/
//
// function lcm(num1, num2) {
// for (var i = num1; i < num1*num2;i+=num1){
//   if (i% num2 === 0 ){
//     return i;
//   }
// }
// return i;
// }
// console.log(lcm(6,10));




// Write a function `hipsterfy(sentence)` that takes takes a string
// containing several words as input. Remove the last vowel from each word.
// `'y'` is not a vowel.
//
// Examples:
//
// hipsterfy("proper"); // => "propr"
// hipsterfy("proper tonic panther"); // => "propr tonc panthr"
// hipsterfy("towel flicker banana"); // => "towl flickr banan"
// hipsterfy("runner anaconda"); // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
// ***********************************************************************/
// function removeVowels(word){
//   var vowels= ["a","e","i","o","u","A","E","I","O","U"];
//   for (var i = word.length-1; i >= 0;i--){
//     var char = word[i];
//     if (vowels.indexOf(char) !== -1){
//       var hipsterWord = word.slice(0,i)+ word.slice(i + 1);
//       return hipsterWord;
//     }
//   }
//
// }
// // console.log(removeVowels("runner"));
// function hipsterfy(sentence) {
//   var words= sentence.split(" ");
//   var sent= [];
//
//     for (var i =0; i < words.length; i++){
//       var word= words[i];
//       sent.push(removeVowels(word));
//       console.log(word);
//     }
//     var hipSent= sent.join(" ");
//     return hipSent;
// }
// console.log("runner anaconda");
// ************************************** CODERBYTE************************

// function FirstReverse(str) {
//
//  var newStr=[];
//  var words = str.split("");
//  for (var i = words.length-1; i >= 0; i--){
//      var word = words[i];
//      newStr.push (word);
//  }
//      return newStr.join("");
// }

// function FirstReverse(str) {
// return str.split("").reverse().join("");
// }
// console.log(FirstReverse("I Love Code"));

// function vowelCap(word){
//   var vowels= ["a","e","i","o","u","A","E","I","O","U"];
//   var capWord= word;
//   for (var i =0; i < capWord.length;i++){
//     var char = capWord[i];
//     if(vowels.indexOf(char) !== -1){
//       var capVowel= char.toUpperCase();
//         capWord= capWord.slice(0,i)+capVowel+capWord.slice(i+1);
//
//   }
//   }
// return capWord;
// }
// console.log(vowelCap("hello"));
// // function wordChange(word){
// //   var newWord=[];
// //
// //
// //   for (var i =0; i < word.length;i++){
// //     var char = word[i];
// //     var next= word[i+1];
// //     if (alphabetS.indexOf(char) !== -1){
// //       newWord.push(next);
// //     }
// //   }
// //   return newWord.join("");
// // }
// // console.log(wordChange("hi"));
// function LetterChanges(str) {
//   var newStr=[];
// // var words= str.split(" ");
// for (var i =0; i < str.length; i++){
//   // var word = words[i];
//   var Charcode= str.charCodeAt(i);
//   var next= String.fromCharCode(Charcode+1);
//   if (vowelCap(next)!== -1)
//   newStr.push(vowelCap(next));
// }
// var string= newStr.join(" ");
// return string;
//
// }
// console.log(LetterChanges("hello*3"));


// YOU NEED TO GET THIS RIGHT!!!! THIS IS FROM CODERBYTE**************

// function LetterChanges(str) {
//     var newStr = "";
//     var vowels = ["a", "e", "i", "o", "u"];
//     for (var i = 0; i < str.length; i++) {
//         var index = str.charCodeAt(i);/* this one is getting the number of the index*/
//
//         var char;
//         if (index === 122 || index === 90) {/*this is checking if the index is Z or z and if it is returning A or a */
//             char = "A";
//         } else if ((index >= 65 && index < 90) || (index >= 97 && index < 122)) { /* this is lowerCase range and upperCase range!check the table http://www.asciitable.com/*/
//             index++;/* this is increasing the index by one*/
//             char = String.fromCharCode(index);
//         } else {
//             char = String.fromCharCode(index);
//         }
//
//         if (vowels.indexOf(char.toLowerCase()) !== -1) {
//             newStr += char.toUpperCase();
//         } else {
//             newStr += char;
//         }
//     }
//     return newStr;
// }
// function LetterChanges(str){
//   var newStr="";
//   var vowels=["a", "e", "i", "o", "u"];
//   for (var i =0; i < str.length; i++){
//     var index = str.charCodeAt(i);
//     var char ;
//     if (index === 122 || index === 90){
//       char ="A";
//     } else if ((index >= 65 && index < 90) || (index >= 97 && index < 122)){
//       index++;
//       char = String. fromCharCode(index);
//     }
//   }
// }


//
// function LetterChanges(str){
//   var vowels=["a", "e", "i", "o", "u"];
//   var newStr="";
//   for (var i =0; i < str.length;i++){
//     index= str.charCodeAt(i);
//     var char;
//     if (index === 122 || index === 90){
//       char = "A";
//     }else if ((index >= 65 && index < 90)|| (index >=97 && index < 122)){
//       index++;
//       char = String.fromCharCode(index);
//     }else {
//       char = String.fromCharCode(index);
//     }
//     if (vowels.indexOf(char.toLowerCase()) !== -1) {
//         newStr += char.toUpperCase();
//     } else {
//       newStr += char;
//       }
//   }
//   return newStr;
// }
// console.log(LetterChanges("abcd"));



// ***************************************************************************
//
// Write a function `objectSize(obj)` that takes in an object and returns
// the number of key-value pairs in the object.
//
// Examples:

// var obj1 = {
//   name: 'Fido',
//   age: '4'
// };
//
// // objectSize(obj1); // => 2
//
// var obj2 = {
//   name: 'App Academy',
//   course: 'Bootcamp Prep',
//   locations: ['SF', 'NY']
// };
//
// // objectSize(obj2); // => 3
// // ***********************************************************************/
//
// function objectSize(obj) {
//   var count=0;
//
//   for (var key in obj){
//   count ++;
//
//   }
//   return count;
// }
// console.log(objectSize(obj2));


// Write a function `threeInARow(arr)` that takes in an array of numbers
// and returns true if the array contains 3 of the same number
// consecutively. The function should return false otherwise.
//
// Examples:
//
// // threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
// // threeInARow([10, 9, 20, 33, 3, 3]); // => false;
// // ***********************************************************************/
//
// function threeInARow(arr) {
//   for (var i =0; i < arr.length; i++){
//     var current= arr[i];
//     var next = arr[i+1];
//     var after= arr[i+2];
//
//     if (current === next && current === after){
//       return true;
//     }
//
//   }
// return false;
// }
// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));
// console.log(threeInARow([10, 9, 20, 33, 3, 3]));


/***********************************************************************
Write a function `threeIncreasing(arr)` that takes in an array of
numbers and returns true if the array contains 3 consecutive numbers in
increasing order. The function should return false otherwise.

Note that the 3 consecutive numbers should be increasing by 1, so the
the second  number is 1 greater than the first, and the third number is
1 greater  than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false
***********************************************************************/

// function threeIncreasing(arr) {
//
//   for (var i =0; i < arr.length; i++){
//   var current = arr[i];
//   var next= arr[i+1];
//   var after= arr[i+2];
//   if ((next === current+1) && (after === next+1)){
//     return true;
//   }
// }
// return false;
// }
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));
//
// //
// // Write a function `power(base, exp)` that takes in two numbers, a base
// // and exponent. The function should return `base` raised to `exp` power.
// // Solve this using a loop.
// //
// // For example, power(2, 5) is 2 raised to the 5th power,
// // which is 2 * 2 * 2 * 2 * 2 = 32
// //
// // Examples:
// //
// // power(2, 5); // => 32
// // power(2, 10); // => 1024
// // power(9, 2); // => 81
// // power(9, 3); // => 729
// // power(11, 0); // => 1
// // power(11, 1); // => 11
// // ***********************************************************************/
//
// function power(base, exp) {
//   if (base === 0){
//   return 1;
//   }
// return Math.pow(base,exp);
// }
// console.log(power(2,10));


// Write a function `reverb(word)` that takes in a word string and returns
// the word with all characters after the last vowel repeated.
//
// Examples:

// reverb('running'); // => 'runninging'
// reverb('wild'); // => 'wildild'
// reverb('debugged'); // => 'debuggeded'
// reverb('my'); // => 'my'
// ***********************************************************************/
//
// function reverb(word) {
//  var vowels=["a", "e", "i", "o", "u"];
//  for (var i =word.length-1;i >=0; i--){
//    var char= word[i];
//    if (vowels.indexOf(char) > -1){
//      var afterVowel= word.slice(i);
//      return word+afterVowel;
//    }
//  }
//  return word;
// }
// console.log(reverb('running'));


/***********************************************************************
Write a function `countOfLetter(string, char)` that takes in a string
and a character and returns the number of times that character appears
in the string

Examples:

countOfLetter('mississippi', 's'); // => 4
countOfLetter('MISSISSIPPI', 'p'); // => 2
countOfLetter('BOOTCAMP', 't'); // => 1
***********************************************************************/

// function countOfLetter(string, char) {
//   var count=0;
//
//     for (var i =0; i <string.length; i ++){
//       if (string[i].toLowerCase() === char){
//         count++;
//       }
//     }
//   return count;
// }
// console.log(countOfLetter('MISSISSIPPI', 'p'));


/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

// function countRepeats(string) {
// var count=0;
// for (var i = 0; i < string.length; i++){
//   var current= string[i];
//   var after= string[i+1];
//   if (current === after){
//     count++;
//   }
// }
// return count;
// }
// console.log(countRepeats('mississippi'));


/***********************************************************************
Write a function `pairToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairToString(array2); // => 'food!'
***********************************************************************/
//
// var array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
// function pairsToString(arr) {
//   var newStr="";
//
//   for (var i =0; i < arr.length; i++){
//     var ele= arr[i];
//     var num = ele[1];
//     var char= ele[0];
//
//       for (var j = 0; j < num;j++){
//         newStr+= char;
//       }
//
//   }
//   return newStr;
// }
// console.log(pairsToString(array2));


/***********************************************************************
Write a function `myForEach(arr, cb)` that accepts an array and a
callback. It should call the `cb` for every element of the array,
passing the element, its corresponding index, and the array itself to
the callback. Do not use the built-in `Array.prototype.forEach` method.
The return value is irrelevant.

Examples:

function printInfo(ele, i, arr) {
  console.log(ele, "is at position", i, "in array", arr);
}

myForEach(['a', 'b', 'c'], printInfo); // prints
a is at position 0 in array [ 'a', 'b', 'c' ]
b is at position 1 in array [ 'a', 'b', 'c' ]
c is at position 2 in array [ 'a', 'b', 'c' ]


function printHalf(num) {
  console.log(num / 2);
}

myForEach([10, 50, 120], printHalf); // prints
5
25
60

Note that in the example above, the `printHalf` callback function only
expects a single parameter. If we try to pass more than one parameter to
the function, it will ignore the extras. `printHalf(10, 'what?', false)`
will print 5.
***********************************************************************/
// function printHalf(num) {
//   console.log(num / 2);
// }
//
// function myForEach(array, cb) {
//   var result;
// for (var i =0; i < array.length; i++){
//   var ele= array[i];
//   result = (cb(ele,i,array));
// }
// return result;
// }
// console.log(myForEach([10, 50, 120], printHalf));






/***********************************************************************
Write a function `mySelect(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. It should return a new array of all the elements
in the input array `arr` where the callback `cb` returns true.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

mySelect([1,2,3,4,5,6], isEven); // => [ 2, 4, 6 ]


function isNegative(num) {
  return num < 0;
}

mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]

Note that in the examples above, the callback functions only expect a
single paramter, but your `mySelect` function should still try to pass 3
parameters to the callback. This allows us to create a versatile
`mySelect` function that works with various callbacks.
// ***********************************************************************/
// function isNegative(num) {
//   return num < 0;
// }
// function mySelect(arr, cb) {
//   var result;
//   var newArr=[];
// for (var i = 0; i < arr.length; i++){
//   if(cb(arr[i], i, arr)){
//     newArr.push(arr[i]);
//   }
// }
// return newArr;
// }
// console.log(mySelect([12, -14, 4, -10.2, 0], isNegative));



// Write a function `myMap(arr, cb)` that accepts an array and a callback.
// It should pass each element, its corresponding index, and the array
// itself to the callback. Do not use the built in `Array.prototype.map`
// method. It should return an array where each element is the return value
// of the callback given the element in the corresponding position. See
// the examples.
//
// Examples:

// function doubler(num) {
//   return num * 2;
// }
//
// // myMap([2, 4, 6, 1], doubler); // => [ 4, 8, 12, 2 ]
// //
// // myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]
// // ***********************************************************************/
//
// function myMap(arr, cb) {
// var newArr=[];
// for(var i =0; i < arr.length;i++){
//   newArr.push(cb(arr[i],i, arr));
// }
// return newArr;
// }
// console.log(myMap([2, 4, 6, 1], doubler));


// Write a function `myEvery(arr, cb)` that takes in an array and a
// callback. The function should call the cb for every element of the array.
// The function should return true only if the callback returns true when
// passed in every the element of the array. The function should return
// false otherwise.
//
// Examples:

// function isEven(num) {
//   return num % 2 === 0;
// }
//
// // myEvery([10, 4, 8, 20], isEven); // => true
// // myEvery([2, 2, 10, 11, 12], isEven); // => false
// // ***********************************************************************/
//
// function myEvery(arr, cb) {
// for (var i =0; i < arr.length; i++){
//   if (cb(arr[i])=== false){
//     return false;
//   }
// }
// return true;
// }
// console.log(myEvery([2, 2, 10, 11, 12], isEven));



// Write a function `mySome(arr, cb)` that takes in an array and a callback.
// The function should call the callback for every element of the array.
// The function should return true if the callback returns true when passed
// in any element of the array. The function should return false otherwise.
//
// Example:

// function isNegative(num) {
//   return num < 0;
// }
//
// // mySome([10, -10, 11, 4], isNegative); // => true
// // mySome([-10, -10, -11, -4], isNegative); // => true
// // mySome([2, 4, 6, 8], isNegative); // => false
// // ***********************************************************************/
//
// function mySome(arr, cb) {
//
//   for (var i =0; i < arr.length; i++){
//     if (cb(arr[i])=== true ){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(mySome([2, 4, 6, 8], isNegative));



/***********************************************************************
Write the function `countAdjacentSums(arr, n)` that takes an array and
number. It should count the number of times that two adjacent numbers in
an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
***********************************************************************/
//
// function countAdjacentSums(arr, n) {
//   var count=0;
//
//   for (var i =0; i < arr.length;i++){
//     var current= arr[i];
//     var next= arr[i+1];
//     if (current + next === n){
//       count++;
//     }
// }
// return count;
// }
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));



/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); //=> 0
signFlipCount([-12, 0, -3, -5]); //=> 0
signFlipCount([-12, 10, -3, -5]); //=> 2
signFlipCount([1, -2, -3, -4]); //=> 1
signFlipCount([-1, 11.3, -3, 100]); //=> 3
***********************************************************************/

// function signFlipCount(numbers) {
//   count=0;
//
// for (var i =0; i < numbers.length;i++){
//   var num= numbers[i];
//   var nextNum= numbers[i+1];
//   if (num === 0){
//     continue;
//   }else if( num < 0 && nextNum > 0 || num > 0 && nextNum < 0){
//     count++;
//   }
// }
// return count;
// }
// console.log(signFlipCount([-12, 10, -3, -5]));



/***********************************************************************
Write a function `powerSequence(base, length)` that takes in two numbers,
`base` and `length`. The function should return an array containing a
power sequence with the given `length`. Assume that the `length` is at
least 1.

The first number of a power sequence begins with `base`. The second
number of the sequence is the product between the first number and the
base. The third number of the sequence is the product between the second
number and the base...

Examples:

powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3); // => [ 8, 64, 512 ]
***********************************************************************/

// function powerSequence(base, length) {
// var seq= [base];
// while(seq.length < length ){
//   var last= seq[seq.length-1];
//   var next= base * last;
//   seq.push(next);
// }
// return seq;
// }
// console.log(powerSequence(3, 4));


/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

// function collapseString(str) {
//   var newStr="";
//
//     for (var i =0; i < str.length;i++){
//       var current= str[i];
//       var next= str[i+1];
//     if (current !== newStr[newStr.length-1]){
//       newStr+= current;
//     }
//
// }
//   return newStr;
// }
// console.log(collapseString('apple'));

//
// function creditSum(array)  { //array is an array of arrays, in these subarrays are numbers or numbers in string form
//   var sum = 0; // adds up all the numbers in a single subArray
//   var sumArray = [];
//     for (var i = 0; i<array.length; i++) { //iterate through main array
//       //each element in this for loop is an array containing numbers/string-numbers
//       for (var j = 0; j<array[i].length; j++)  { //iterate through each subarray
//         //each element in here is a number or "number"
//         if (!isNaN(array[i][j])) { //we check to see if the number is in string form
//             sum = sum + parseInt(array[i][j]); //regardless of what it is we use parseInt to get it's numerical value
//             if (j === array[i].length - 1) { //if we reach the end of the array
//               sumArray.push(i); //we push our first index position (i) into our sumArray
//               sumArray[i]=sum; //we set that index to the value of sum
//               sum = 0; //we reset sum otherwise when the next set of for loops run sum will
//                        //start with the value of the all the previous elements from a different array
//             }
//
//         }
//       }
//     }
//   var max = sumArray[0]; //sumArray is a collection of the sum of each of the numbers in inner arrays
//   var maxIndex = 0;
//
//   var k = 0;
//     while ( k < sumArray.length){ //iterate through sum array
//      k++;
//
//       if (sumArray[k] >= max) { //if the sum in sumArray at the index position of k is greater than or equal to max
//         max = sumArray[k]; //set max equal to this new value
//         maxIndex = k; //track the index position of the highest value sum
//       }
//   }
//
//   return array[maxIndex]; //return the number at the index position of the largest sum
// }
// console.log(creditSum([""]));

/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/

// function oddWordsOut(sentence) {
// var words= sentence.split(" ");
// var oddSent= [];
//
// for (var i = 0; i < words.length; i += 1){
//   var word= words[i];
//   if (word.length % 2 === 0){
//     oddSent.push(word);
//
//   }
// }
// return oddSent.join(" ");
// }
// console.log(oddWordsOut('go to the store and buy milk'));



/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

// function hasAllVowels(str) {
//   var vowels=["a", "e", "i", "o", "u"];
// for (var i =0; i < vowels.length; i++){
//   if (str.indexOf(vowels[i])=== -1){
//     return false;
//   }
// }
// return true;
// }
// console.log(hasAllVowels('have you gone biking?'));


// Write a function favoriteWord(favoriteLetter, sentence) that takes in a
// single letter and a sentence string. The function should return the word
// in the sentence that contains `favoriteLetter` the most. If there are
// ties, return the word that appears first in the sentence.
//
// Examples
//
// favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
// favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
// favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
// favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
// ***********************************************************************/

// function favoriteWord(favoriteLetter, sentence) {
//   var newStr="";
//   var count= 0;
//   var words= sentence.split(" ");
//
//     for (var i =0; i < words.length; i++){
//       var word= words[i];
//       for (var j=0 ;j < word.length; j++){
//         var char = word[j];
//         if (char === favoriteLetter){
//           count++;
//           newStr= word;
//         }
//
//     }

//   }
//
// return newStr;
// }
// console.log(favoriteWord('a', 'sinful caesar sipped his snifter'));






// [123-123-123,111-11-11]
// input is array of strings;
//  i need to return a string with maximum sum;
//  i need to define sum and max value and make a newStr.
//  need to loop through the array to get each card string.
//  convert the string number into integers.
// add the integers to the sum for the card and check it with the maximum if
// the sum is greater than max than set max to sum . and after loop set sum to 0.
//  after we are done witht the finding the max card number we set our string equal to max.

// function creditSum(array){
//   var currentSum =0;// we set the sum to 0 to be able to add the digits to the sum.
//   var maxSum= 0;//set the maxsum to 0 to find the maximum of the digit sum
//   var maxStr="";
//   // this is string card numbers to assign the card number to this string.
//   for (var i = 0; i < array.length; i++){//looping through the array of strings to get each card string of numbers.
//     var card = array[i];// each card string
//     for (var j = 0; j < card.length;j++){//looping through the card digits which is a string
//
//       if (card[j] !== "-"){// here we are checking if the card number if is not a "-"
//         var cardDigit= parseInt(card[j]);//if it is not a dash we are turn it to a digit number
//         currentSum += cardDigit;//add it to the sum.
//       }
//     }//after we close the for loop of the cards we will check if the sum is bigger than maxSum
//     if (currentSum >= maxSum ){ //if th sum is greater than maxSum get sum; and maxStr= get the card number string.
//       maxSum = currentSum;//and if it is greater we assign maxSum to sum.
//       maxStr= card;//after finding the maxSum of the cards.we assign maxStr to our card string number.
//
//     }
//     currentSum=0;
//
// }
// return maxStr; //returning the newStr here.
// }
//
//
//
// // console.log(creditSum(["123-123-123","111-11-11"]));
// // console.log(creditSum(["123-123-123","111-11-11","1234-1234-1234"]));
// console.log(creditSum(["1234-1234-23456","123-123-125","111-11-11","1234-1234-1234",]));


// Write a function favoriteWord(favoriteLetter, sentence) that takes in a
// single letter and a sentence string. The function should return the word
// in the sentence that contains `favoriteLetter` the most. If there are
// ties, return the word that appears first in the sentence.
//
// Examples
//
// favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
// favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
// favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
// favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
// ***********************************************************************/
// split the sentence to words
//  loop through the words to find each word.
// loop through the word to check char
// if char is repeated add to count.
// if the count
// function favoriteWord(favoriteLetter, sentence) {
// var count=0;
// var newStr='';
// var words= sentence.split(" ");
// for (var i =0; i < words.length; i++){
//   var word= words[i];
//   for (var j=0; j < word.length;j++){
//     var char = word[i];
//     if (char === favoriteLetter){
//       count++;
//       newStr= word;
//
//     }
//     count=0;
//   }
// }
// return newStr;
// }
// console.log(favoriteWord('a', 'sinful caesar sipped his snifter'));
// console.log(favoriteWord('p', 'sinful caesar sipped his snifter'));
// console.log(favoriteWord('s', 'sinful caesar sipped his snifter'));
// console.log(favoriteWord('x', 'sinful caesar sipped his snifter'));



/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/


// function mindPsAndQs(str) {
// var max=0;
// var current=0;
// for (var i= 0; i < str.length;i++){
//   var char = str[i];
//   if (char === "P" || char === "Q"){
//     current++;
//     if (current > max){
//       max = current;
//     }
//   }else {
//     current = 0;
//   }
// }
// return max;
// }
// console.log(mindPsAndQs('APCDQQPPC'));


/***********************************************************************
Write a function commonFactors(num1, num2) that returns an array that
contains the common factors between both numbers. A factor is a number
that divides another number with no remainder.

Examples:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
// ***********************************************************************/

// return a new Arr of common factors.
// function commonFactors(num1, num2) {
//   var max;
// if (num1 < num2){
//    max =num1;
// }else {
//    max=num2;
// }
// var factor=[];
// for (var i =1; i <= max;i++){
//   if (num1 % i === 0 && num2 % i ===0){
//     factor.push(i);
//   }
// }
// return factor;
// }
// console.log(commonFactors(12, 50));

//
// function commonFactors(num1, num2) {
//   var max;
//   var factor=[];
//   if (num1 < num2 ){
//    max = num1;
//  }else {
//    max = num2;
//  }
//  for (var i =1; i <= max; i++){
//    if (num1 % i ===0 && num2 % i ===0){
//      factor.push(i);
//    }
//  }
//  return factor;
// }
// console.log(commonFactors(12,50));


// // Write a function `commonPrimeFactors` that takes in two numbers as
// // arguments and returns an array of all prime factors that are common
// // between the two numbers. A factor is a number that divides another
// // number without resulting in a remainder.
// //
// // Examples:
// //
// // commonPrimeFactors(12, 50); // => [ 2 ]
// // commonPrimeFactors(6, 24); // => [ 2, 3 ]
// // commonPrimeFactors(11,22); // => [ 11 ]
// // commonPrimeFactors(45, 60); // => [ 3, 5 ]
// // ***********************************************************************/
// function isPrime(num){
//   if (num < 2){
//     return false;
//   }
//   for (var i =2; i < num;i++){
//     if (num % i === 0){
//       return false;
//     }
//   return true;
//   }
//
// }
// console.log(isPrime(6));
// function commonFact(num1,num2){
//   var max;
//   var fact=[];
//   if(num1 < num2){
//   max= num1;
// }else{
//   max= num2;
// }
// for (var i = 1; i <= max;i++){
//   if (num1 % i === 0 && num2 % i === 0){
//     fact.push(i);
//   }
// }
// return fact;
// }
// function commonPrimeFactors(num1, num2){
//   var factors= commonFact(num1,num2);
//   var primeFact=[];
//   for(var i =0; i < factors.length;i++){
//     var facts= factors[i];
//     if (isPrime(facts)){
//       primeFact.push(facts);
//     }
//   }
//   return primeFact;
// }
// console.log(commonPrimeFactors(11,22));


/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.

Example:

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

matchingPairs; //=> {
  one: "one",
  three: "three"
}
***********************************************************************/

// function objectSelect(obj, callback) {
// var result={};
// for (var key in obj){
//   var val=obj[key];
// }
// }
// Using the JavaScript language, have the function SimpleAdding(num) add up all
// the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
//  For the test cases, the parameter num will be any number from 1 to 1000.

// function SimpleAdding(num) {
//
//   var sum=0;
//   for(var i = 1;i<= num;i++){
//     sum += i;
//
//   }
//   return sum;
// }
// console.log(SimpleAdding(4));


//
// function LetterCapitalize(str) {
//   var newStr="";
//   var word;
//   var words= str.split(" ");
//
//     for (var i =0; i < words.length; i++)
//      word= words[i];
//     var capWord = word[0].toUpperCase();
//     var cC= capWord+ word.slice(1);
//     return cC;
// }
// console.log(LetterCapitalize("hello world"));


//
// - write a function called evenSum()
// - you are given a positive integer
// - if the integer is even, return the sum of every even number from 0 to that number
// - if it's odd, return -1

// first i need to loop through the number from 0 to the number
// than find if the i is % 2 === 0 if it is means it is an even number and we will add it to the sum.
// function  evenSum (num){
//   var sum =0;
//   if (num % 2 === 0){
//     for (var i =0; i <= num;i+=2){
//       sum =+ i;
//     }
//   } else{
//     return -1;
//   }
//     return sum;
// }
// console.log(evenSum(2));
// console.log(evenSum(10));
// console.log(evenSum(3));
// console.log(evenSum(9));

// Using the JavaScript language, have the function SimpleSymbols(str) take the
// str parameter being passed and determine if it is an acceptable
// sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with
// several letters between them (ie. ++d+===+c++==a) and for the string to be
//  true each letter must be surrounded by a + symbol. So the
//  string to the left would be false. The string will not be empty and will have at least one letter.





// i need to split the str by +
// than loop thoru the strs and see if the + is next to an alphabet!
//  if it is than return true; else false;
// function SimpleSymbols(str) {
//   var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
//   "P","Q","R","S","T","U","V","W","X","Y","Z"];
//
//   for (var i =0; i < str.length; i++){
//     var char = str[i].toUpperCase();
//     var beforeChar = str[i-1];
//     var afterChar = str[i+1];
//     if(alphabet.indexOf(char) !== -1){
//       if(beforeChar !== "+" || afterChar !== "+"){
//         return false;
//       }
//
//     }
//
//
//   }
// return true;
//
// }
//
//
// console.log(SimpleSymbols("+=3=+s+"));
// console.log(SimpleSymbols("f++d+"));
// console.log(SimpleSymbols("+a+====c===+t+="));
// console.log(SimpleSymbols("aaaaaaaa+====c===+t+="));
// console.log(SimpleSymbols("====+c===+t+="));
// console.log(SimpleSymbols("====+c+===+t+="));
// // console.log(SimpleSymbols("=+=+==+"));
//
//
// var obj = {
//   one: "one",
//   two: "something else",
//   three: "three",
//   four: "another thing."
// };
//
// function isEqual(a, b) {
//   return a === b;
// }
//
// // var matchingPairs = objectSelect(obj, isEqual);
//
// // matchingPairs; //=> {
// //   one: "one",
// //   three: "three"
// // }
// // ***********************************************************************/
//
// function objectSelect(obj, callback) {
// var result={};
// for (var key in obj){
//   var val= obj[key];
//   if (callback(key,val)){
//     result[key]= val;
//   }
// }
// return result;
// }


/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/
// [array.length-1]%2=== 0
// function splitHalfArray(array) {
// var midIndex=  Math.floor(array.length /2);
// if (array.length % 2 === 0){
//   return [array.slice(0,midIndex), array.slice(midIndex)];
// } else {
//   return [array.slice(0,midIndex), array.slice(midIndex+1)];
// }
// }
// console.log(splitHalfArray([1, 2, 3, 4, 5]));


//
// Challenge
// Using the JavaScript language, have the function TimeConvert(num)
// take the num parameter being passed and return the
// number of hours and minutes the parameter converts to
//  (ie. if num = 63 then the output should be 1:3).
//  Separate the number of hours and minutes with a colon.
// every 1 hour is 60 minutes, if the num is > 60 num - 60
// 1hr= 60minj
//
// function TimeConvert(num) {
//   var hour= 60;
// if (num > hour ){
// return num % hour;
// }
//
//
// }
// console.log(TimeConvert(126));



// function FirstFactorial(num) {
//
//   if (num <= 1){
//       return 1;
//   }
//     return   num * FirstFactorial(num - 1)  ;
// }
// console.log(FirstFactorial(4));

//
// function AlphabetSoup(str) {
//
// var arr= str.split("");
// var soort= arr.sort();
// return soort.join("") ;
// }
// console.log(AlphabetSoup("coderbyte"));





// Have the function ABCheck(str) take
// the str parameter being passed and return
// the string true if the characters a and b are
// separated by exactly 3 places anywhere in the string at least once
// (ie. "lane borrowed" would result in true because there is exactly three
// characters between a and b). Otherwise return the string false.
//


//
// function ABCheck(str){
//
//   for (var i = 0; i < str.length; i++) {
//     var current = str[i];
//     var after= str[i+4];
//     console.log("i"+ current);
//     console.log("i+3"+ after);
//     if (current === "a" && after === "b"){
//       return true;
//     }
//     }
//     return false;
//
// }
// console.log(ABCheck("lane borrowed"));


// Have the function VowelCount(str) take the str
// string parameter being passed and return the
// number of vowels the string contains (ie.
//   "All cows eat grass and moo" would return 😎.
//    Do not count y as a vowel for this challenge.
//
// Use the Parameter Testing feature in the box
//  below to test your code with different arguments.
// function VowelCount(str){
//   var count=0;
//   var vowels= ["a","e","i","o","u"];
//   var chars= str.split("");
//
//     for (var i = 0; i < chars.length;i++){
//     var char = chars[i].toLowerCase();
//     if (vowels.indexOf(char) !== -1){
//       count++;
//     }
//     }
//     return count;
// }
// console.log(VowelCount("All cows eat grass and moo"));
// console.log(VowelCount("eating rice"));



// Have the function WordCount(str) take the str
//  string parameter being passed and return the
//  number of words the string contains
//  (e.g. "Never eat shredded wheat or cake" would return 6).
//  Words will be separated by single spaces.

// function WordCount(str){
//   var count=0;
//   var words=str.split(" ");
//   for (var i=0; i < words.length;i++){
//     var word= words[i];
//     count++;
//   }
//   return count;
// }
// console.log(WordCount("Never eat shredded wheat or cake"));



// Have the function Division(num1,num2) take both parameters
// being passed and return the Greatest Common Factor.
//  That is, return the greatest number that evenly
//  goes into both numbers with no remainder.
//  For example: 12 and 16 both are divisible by 1, 2, and 4 so
//  the output should be 4. The range for both parameters will be from 1 to 10^3.
//
// Use the Parameter Testing feature in the box below to
//  test your code with different arguments.


// function Division(num1,num2){
//   var max;//biggest factor
//   var greater=0;
//   if (num1 < num2){
//     max = num1;
//   }
//   if (num2 < num1){
//     max = num2;
//   }
//   for (var i = 1; i <= max;i++){
//     if (num1 % i === 0 && num2 % i === 0){
//       greater = i;
//
//     }
//
//
//   }
//   return greater;
// }
// console.log(Division(12,16));


/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/

// function threeUniqueVowels(string) {
// var vowels= ["a","e","i","o","u"];
// var count=0;
//
// for (var i =0; i < vowels.length; i++){
//   var vowel= vowels[i];
//   if (string.indexOf(vowel)!== -1){
//     count++;
//   }
//
// }
// if (count >= 3){
//   return true;
// }
// return false;
// }
// console.log(threeUniqueVowels('bootcamp'));


// Write a function vowelShift(sentence) that takes in a sentence string.
// The function should return a new sentence, where every vowel is replaced
// with the next vowel in the alphabet.
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// vowelShift('bootcamp'); // => 'buutcemp'
// vowelShift('hello world'); // => 'hillu wurld'
// vowelShift('on the hunt'); // => 'un thi hant'
// ***********************************************************************/

// function vowelShift(sentence) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var newSent="";
//   for (var i =0; i < sentence.length; i++){
//     var char = sentence[i];
//     var vowelIndex= vowels.indexOf(char);
//     if (vowelIndex > -1){
//       var nextVowelIndex= (vowelIndex +1) % 5;
//       newSent += vowels[nextVowelIndex];
//     } else {
//       newSent += char;
//     }
//
//   }
//   return newSent;
// }
// console.log(vowelShift('bootcamp'));



/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

// function moreDotLessDash(str) {
// var countDot = 0;
// var countDash = 0;
// for (var i =0; i < str.length;i++){
//   var char= str[i];
//   if (char === "."){
//     countDot++;
//   } else if (char === "-"){
//     countDash++;
//   }
// }
// if (countDot > countDash){
//   return true;
// }
// return false;
// }
// console.log(moreDotLessDash('2-D arrays are fun. I think.'));
// console.log(moreDotLessDash('.-.-.')); // => true
// console.log(moreDotLessDash('.-')); // => false
// console.log(moreDotLessDash('..--')); // => false



/***********************************************************************
Write a function `isSorted(array)` that takes in an array of numbers and
returns true if the elements of the array are in increasing sorted order
and returns false if the elements are not in increasing order.

Examples:

isSorted([3, 5, 11, 9, 15, 16]); // => false
isSorted([3, 5, 11, 13, 15, 16]); // => true
isSorted([9, 4, 1, 5, 6, 2]); // => false
isSorted([1, 2, 4, 5, 6, 9]); // => true
***********************************************************************/

// function isSorted(array) {
// for (var i =0; i < array.length;i++){
//   var current =array[i];
//   var next = array[i+1];
//   if (current > next ){
//     return false;
//   }
//
//   }
// return true;
//
// }
// console.log(isSorted([3, 5, 11, 9, 15, 16]));
// console.log(isSorted([3, 5, 11, 13, 15, 16]));
// console.log(isSorted([1, 2, 4, 5, 6, 9]));
// console.log(isSorted([9, 4, 1, 5, 6, 2]));



/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/

// function toFeet(distances) {
//   newArr=[];
// for (var i =0; i < distances.length;i++ ){
//   var currentDist= distances[i];
//   var split = currentDist.split(" ");
// // console.log(split);
//   var num = split[0];
//   var measure= split[1];
//   if (measure === "yards"){
//     var newD = (num*3)+"feet";
//       newArr.push(newD);
//   } else{
//     newArr.push(currentDist);
//   }
// }
// return newArr;
// }
//
//
// var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
// // toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
//
// var arr2 = ['2 yards', '3 feet', '10 yards'];
// // toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
// console.log(toFeet(arr1));
// console.log(toFeet(arr2));


// /***********************************************************************
// Write a function `smallestPrime(array)` that takes in an array of
// numbers and returns the smallest prime number in the array.
//
// HINTS:
// - start by creating an `isPrime` helper function
// - the smallest prime number is 2
//
// Examples:
//
// var arr1 = [ 6, 7, 12, 11, 5, 4 ];
// smallestPrime(arr1); // => 5
//
// var arr2 = [11, -7, 7, 8, 6, 10];
// smallestPrime(arr2); // => 7
//
// var arr3 = [];
// smallestPrime(arr3); // => null
//
// var arr4 = [4, 6, 8, 10];
// smallestPrime(arr4); // => null
// ***********************************************************************/
// function isPrime(num){
//   if (num < 1){
//     return false;
//   }
//   for (var i =2;i < num;i++){
//     if (num % i === 0){
//       return false;
//     }
//
//   }
//   return true;
// }
// // console.log(isPrime(4));
//
// function smallestPrime(array) {
// var smallest= null;
// for (var i = 2; i < array.length; i++){
//   var ele= array[i];
//
//   if (isPrime(ele) && (ele < smallest || smallest === null)){
//     smallest= ele;
//   }
//
//   }
// return smallest;
// }
// var arr2 = [11, -7, 7, 8, 6, 10];
// console.log(smallestPrime(arr2));



/***********************************************************************
Write a function safeSpeedChange(speeds) that takes in an array of speed
numbers. The function should return true if consecutive speeds in the
array differ by no more than 5, false otherwise.

Examples:

safeSpeedChange([3, 3, 2, 6, 8, 7]); //=> true
safeSpeedChange([3, 3, 2, 6, 12, 10]); // => false
safeSpeedChange([8, 10, 4, 3, 2]); // => false
***********************************************************************/

// function safeSpeedChange(speeds) {
// for (var i =0; i < speeds.length;i++){
//   var speed= speeds[i];
//   var nextSpeed= speeds[i+1];
//   if ((nextSpeed - speed) >= 5 ){
//     return false;
//   }
// }
// return true;
// }
// console.log(safeSpeedChange([3, 3, 2, 6, 8, 7]));
// console.log(safeSpeedChange([3, 3, 2, 6, 12, 10]));


/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
***********************************************************************/
//
// function isUniqueAnagram(word1, word2) {
//   if (word1.length !== word2.length){
//     return false;
//   }
//
//   for (var i =0; i < word1.length;i++){
//     var word1Char= word1[i];
//
//     if (word2.indexOf(word1Char) === -1){
//       return false;
//     }
//   }
//   return true;
//
// }
// console.log(isUniqueAnagram('iceman', 'cinema'));
// console.log(isUniqueAnagram('abcd', 'adcb'));
// console.log(isUniqueAnagram('abcd', 'adxb'));
// console.log(isUniqueAnagram('abcd', 'abcdx'));


// /***********************************************************************
// Write a function `reverseHipsterfy(sentence)` that takes in a sentence
// and removes all vowels, except the last vowels of every word.
//
// Examples:
//
// reverseHipsterfy("proper"); // => 'prper'
// reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
// reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
// reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
// reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
// reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
// ***********************************************************************/
// function lastIndexVowel(word){
//   var vowels = 'aeiou';
//   for (var i = word.length-1;i >=0; i-- ){
//     var char = word[i];
//     if (vowels.indexOf(char) > -1){
//       return i;
//
//     }
//   }
// }
// console.log(lastIndexVowel("proper"));
//
// function revHipWord(word){
//   var vowels = 'aeiou';
//   var newWord="";
//   var lastVowelIdx= lastIndexVowel(word);
//   for (var i =0; i < word.length;i++){
//     var char = word[i];
//     if (vowels.indexOf(char) === -1 || i === lastVowelIdx){
//       newWord+= char;
//     }
//   }
//   return newWord;
// }
// console.log(revHipWord("proooper"));
// function reverseHipsterfy(sentence) {
// var words= sentence.split(" ");
// var newWords=[];
// for (var i =0; i < words.length;i++){
//   var word= words[i];
//   var newWord= revHipWord(word);
//   newWords.push(newWord);
// }
// return newWords.join(" ");
// }
// console.log(reverseHipsterfy("proper tonic panther"));



/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/
// function handScore(string){
//   var score = 0;
//   var value={
//   J : 1,
//   Q : 2,
//   K : 3
//   };
//   for (var i =0; i < string.length;i++){
//     var card= string[i];
//     score+= value[card];
//   }
//   return score;
// }
//
// function winningHand(hand1, hand2) {
//   var score1= handScore(hand1);
//   var score2= handScore(hand2);
//
//   if (score1 > score2){
//     return hand1;
//   } else if (score2 > score1){
//     return hand2;
//   } else{
//   return "DRAW";
//   }
// }
// console.log(winningHand('KJKJ', 'QQQQ'));



/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/

// function shiftChars(word, num) {
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   var shifted="";
//
//   for (var i =0; i < word.length;i++){
//     var char = word[i];
//     var index= alphabet.indexOf(char);
//     var newIndex= (index+num)% 26;
//     shifted += alphabet[newIndex];
// }
// return shifted;
// }

// Write a function `uncompressString(str)` that takes in a "compressed"
// string and returns the "uncompressed" version of the string. In the
// input `str`, every letter is followed by a single digit number that
// specifies how many times that character is repeated.
//
// HINT: Use the built-in `Number` function to turn the string
// representation of a number into a number
// Number('42'); // => 42;
//
// Examples:
//
// uncompressString('a2b4c1'); // => 'aabbbbc'
// uncompressString('b1o2t1'); // => 'boot'
// uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
// ***********************************************************************/

// function uncompressString(str) {
// var newStr="";
// for (var i =0; i < str.length; i++){
//   var char = str[i];
//   var num = Number(str[i+1]);
//   for (var j =0; j < num;j++){
//     newStr+= char;
//   }
// }
// return newStr;
// }


// Challenge
// Using the JavaScript language, have the function ExOh(str)
//  take the str parameter being passed and return the
//  string true if there is an equal number of x's and o's,
//  otherwise return the string false. Only these two
//  letters will be entered in the string, no punctuation or numbers.
//  For example: if str is "xooxxxxooxo" then the output should return false because
//  there are 6 x's and 5 o's.
// Sample Test Cases
// Input:"xooxxo"
// Output:"true"
//
// Input:"x"
// Output:"false"
// function ExOh(str){
//   var countX = 0;
//   var countO = 0;
//
//   for (var i =0; i < str.length;i++){
//     var char = str[i];
//     if (char === "x" || char === "X"){
//       countX++;
//     } else if (char === "o" || char === "O"){
//       countO++;
//       }
//   }
//   if (countX === countO){
//     return true;
//   }
// return false;
// }
// console.log(ExOh("xooxxxxooxo"));


// Challenge
// Using the JavaScript language, have the function ArithGeo(arr)
// take the array of numbers stored in arr and return the
// string "Arithmetic" if the sequence follows an arithmetic pattern
// or return "Geometric" if it follows a geometric pattern.
// If the sequence doesn't follow either pattern return -1.
// An arithmetic sequence is one where the difference between
// each of the numbers is consistent, where as in a geometric
// sequence, each term after the first is multiplied by some
// constant or common ratio. Arithmetic example: [2, 4, 6, 8] and
// Geometric example: [2, 6, 18, 54]. Negative numbers may be
// entered as parameters, 0 will not be entered, and no array will
// contain all the same elements.
// Sample Test Cases
// Input:5,10,15
// Output:"Arithmetic"
//
// Input:2,4,16,24
// Output:-1
// Chat Conversation End
// Type a message...


// function ArithGeo(arr){
//   var result;
//
//   if (arr.length < 2){
//     return false;
//   }
//   for (var i = 0; i < arr.length -2;i++){
//
//     if (arr[i+1]- arr[i] === arr[i+2]-arr[i+1]){
//       result ="Arithmetic";
//     } else {
//       result = -1;
//     }
//     break;
//   }
//   for (var j = 0; j < arr.length-2;j++){
//     if (arr[j+1] / arr[j] === arr[j+2]/ arr[j+1]){
//       result = "Geometric";
//     }else {
//       result = -1;
//     }
//   }
//   if (result === "Arithmetic"){
//     return Arithmetic;
//   }else if (result === "Geometric" ){
//     return "Geometric";
//   }else{
//     return -1;
//   }
// }
// console.log(ArithGeo([1,2,3,4,8,14]));




// Challenge
// Using the JavaScript language, have the function
// SecondGreatLow(arr) take the array of numbers stored
// in arr and return the second lowest and second greatest numbers,
// respectively, separated by a space. For example:
// if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
// The array will not be empty and will contain at least 2 numbers.
// It can get tricky if there's just two numbers!
// Sample Test Cases
// Input:1, 42, 42, 180
// Output:"42 42"

// Input:4, 90
// Output:"90 4"


// function SecondGreatLow(arr){
//   var output=[];
//   var smallest=0;
//   var secondSmallest=0;
//   var greatest = 0;
//   var secondGreatest = 0;
//   for (var i = 0; i < arr.length;i++){
//     var current = arr[i];
//
//     if (smallest < current && current < secondSmallest){
//       secondSmallest = current;
//       output.push(secondSmallest);
//     } else if (current < greatest && current > secondGreatest){
//       secondGreatest = current;
//       output.push(secondGreatest);
//
//     }
//   }
//   return output.join(" ");
// }
// console.log(SecondGreatLow([7, 7, 12, 98, 106]));
// function uniqueNum(arr){
//   var newArr=[];
//   var repeat;
//   for (var i =0; i < arr.length;i++){
//     if(newArr.indexOf(arr[i]) === -1){
//       newArr.push(arr[i]);
//
//     }
//
//   }
// return newArr;
// }
// console.log(uniqueNum([7, 7, 12, 98, 106]));
//
// function  biggestAndSmallest (arr){
//   var newArr=[];
//   var smallest = 0;
//   var max;
//   var uniqueArr= uniqueNum(arr);
//
//   for (var i = 0; i < uniqueArr.length;i++){
//     var ele= uniqueArr[i];
//     console.log(ele);
//
//     if (ele < smallest ){
//       var removedSmallest= uniqueArr.slice(0,ele);
//       newArr.push(removedSmallest);
//     } else if (ele > max){
//       var removeBiggest= uniqueArr .slice(ele+1);
//       newArr.push(removedBiggest);
//     } else {
//
//       newArr.push(arr);
//     }
//
//   }
//   return newArr;
// }
//
//
// console.log(biggestAndSmallest([7, 7, 12, 98, 106]));
//
//
// function SecondGreatLow(arr){
//
// }
// function uniqueNum(arr){
//   var newArr=[];
//   var repeat;
//   for (var i =0; i < arr.length;i++){
//     if(newArr.indexOf(arr[i]) === -1){
//       newArr.push(arr[i]);
//
//     }
//
//   }
// return newArr;
// }
// function SecondGreatLow(arr) {
// var unique= uniqueNum(arr);
// var secLowest;
// var secHighest;
//
// //sort it up
// unique.sort(function(a, b) {
// return a - b ;
// });
// console.log("this is Unique "+ unique);
//
// //grab the vals
// secLowest = unique[1];
// secHighest = unique[arr.length-2];
//
// //send em back
// return secLowest + ' ' +secHighest;
//
// }
// console.log(SecondGreatLow([7, 7, 12, 98, 106]));
/***********************************************************************
Write a function `uncompressString(str)` that takes in a "compressed"
string and returns the "uncompressed" version of the string. In the
input `str`, every letter is followed by a single digit number that
specifies how many times that character is repeated.

HINT: Use the built-in `Number` function to turn the string
representation of a number into a number
Number('42'); // => 42;

Examples:

uncompressString('a2b4c1'); // => 'aabbbbc'
uncompressString('b1o2t1'); // => 'boot'
uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
***********************************************************************/

// function uncompressString(str) {
// var newStr="";
// for (var i =0; i < str.length;i++){
//   var ele= str[i];
//   var num = Number(str[i+1]);
//   for (var j = 0; j < num;j++){
//     newStr+= ele;
//   }
// }
// return newStr;
// }
// console.log(uncompressString('a2b4c1'));


/***********************************************************************
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Solve this without recursion.
If you don't know what recursion is, we'll see it tomorrow!

Examples:

fibonacci(0); // => []
fibonacci(1); // => [ 1 ]
fibonacci(2); // => [ 1, 1 ]
fibonacci(3); // => [ 1, 1, 2 ]
fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
***********************************************************************/

// function fibonacci(n) {
//
//   if ( n === 0) {
//     return [];
// }   else if (n === 1){
//       return [1];
// }
//   var seq= [1,1];
//
//   for (var i = 2; i < n;i++){
//     var last= seq[seq.length-1];
//     var secondLast= seq[seq.length-2];
//     var next= last+ secondLast;
//     seq.push(next);
//   }
// return seq;
// }
// console.log(fibonacci(5));



/***********************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the
greatest common factor between num1 and num2. This means that the
function should return the largest number that divides both num1 and
num2.

Examples:

greatestCommonFactor(6, 10); // => 2
greatestCommonFactor(10, 15); // => 5
greatestCommonFactor(4, 7); // => 1
greatestCommonFactor(4, 8); // => 4
greatestCommonFactor(45, 30); // => 15
***********************************************************************/

// function greatestCommonFactor(num1, num2) {
// for (var i =num1; i >= 1; i--){
//   if (num1 % i === 0 && num2 % i === 0){
//     return i;
//   }
//   }
// }
// console.log(greatestCommonFactor(6, 10));


/***********************************************************************
Write a function removeNthLetter(word, n) that takes in a string and an
index `n`. The function should return that word with the character at
index `n` removed.

Examples:

removeNthLetter('bootcamp', 0); // => 'ootcamp'
removeNthLetter('bootcamp', 6); // => 'bootcap'
removeNthLetter('bootcamp', 4); // => 'bootamp'
removeNthLetter('computer', 3); // => 'comuter'
***********************************************************************/

// function removeNthLetter(word, n) {
// return word.slice(0,n)+word.slice(n+1);
// }


/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

// function alternateCase(str) {
//   var newStr="";
// // for (var i =0; i < str.length; i++){
//   if(i % 2 === 0){
//     newStr += str[i].toUpperCase();
// } else {
//   newStr+= str[i].toLowerCase();
// }
// }
// return newStr;
// }
// console.log(alternateCase('BOOTCAMPPREP'));


/***********************************************************************
Write a function stopWatch(totalSeconds) that takes in a number of
seconds. The function should return the time string based on that number
of seconds. The time should be formatted in hours (H), minutes (M), and
seconds(S) in the form HH:MM:SS.

Hint: the seconds and minutes count of the time should never
be greater than 59. How can we use modulo % to accomplish this?

Examples:

stopWatch(0); // => '00:00:00'
stopWatch(4); // => '00:00:04'
stopWatch(128); // => '00:02:08'
stopWatch(1234); // => '00:20:34'
stopWatch(3612); // => '01:00:12'
stopWatch(7640); // => '02:07:20'
stopWatch(86400); // => '24:00:00'
stopWatch(86522); // => '24:02:02'
// stopWatch(99999); // => '27:46:39'
// ***********************************************************************/
// function showDoubleDigits(num) {
//   if (num < 10){
//     return "0"+num;
//   } else {
//     return String(num);
//   }
// }
// // console.log(showDoubleDigits(9));
// function stopWatch(totalSeconds) {
// var secCount= totalSeconds % 60;
// var minCount= Math.floor(totalSeconds / 60) % 60;
// var hourCount = Math.floor(totalSeconds / 3600);
// var time= showDoubleDigits(hourCount)+ ":" + showDoubleDigits(minCount) + ":" +
// showDoubleDigits(secCount);
// return time;
// }
// console.log(stopWatch(86400));


/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/
//
// function nickname(name) {
//   var niks = "";
//   var count=0;// count until 2 and when rich to 2 turn it to upperCase,
//   var vowel=["a","e","i","o","u"];
//
//   for (var i=0; i < name.length;i++){
//     var char = name[i];
//
//     if (vowel.indexOf(char) !== -1){
//       count++;
//
//       if (count === 2){
//
//         var remove=  name.slice(0,i+1);//slice is for the index! you can not add char!
//
//         var result = remove+"-"+remove;
//         var Cap= result.toUpperCase();
//         niks+= Cap;
//         return niks;
//   }
//
//   }
//
// }
// return;
// }
// console.log(nickname('pikachu'));


/***********************************************************************
Write a function tallyCount(array) that takes in an array of strings.
The function should return an object containing a tally count of the
strings in the array.

Examples:

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }

var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }
***********************************************************************/

// function tallyCount(arr) {
//
//   var obj= {};
// for (var i =0; i < arr.length;i++){
//   var k = arr[i];
//   if (obj[k] === undefined){
//     obj[k] = "I";
//   } else {
//     obj[k]+= "I";
//   }
// }
// return obj;
// }
// console.log(tallyCount);


/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/

// function oddOnesOut(array) {
//   var newArr=[];
//
//   for (var i =0; i < array.length;i++){
//     var ele = array[i];
//     if (ele % 2 === 0){
//       newArr.push(ele);
//     }
//   }
// return newArr;
// }
// console.log(oddOnesOut(arr1));
//
// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog'];
// var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']


/***********************************************************************
Write a function `tripletSum(array, sum)` that takes in an array of
numbers (array) and a number (sum). The function should return an array
containing unique triplets of numbers from the array that equal `sum`
when added together. You can assume that the input array contains no
repeated numbers.

Example:

var arr1 = [1, 3, 5, 2, 4];
tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]
tripletSum(arr1, 10); // => [ [ 1, 5, 4 ], [ 3, 5, 2 ] ]
tripletSum(arr1, 11); // => [ [ 5, 2, 4 ] ]
***********************************************************************/

//
// var arr1 = [1, 3, 5, 2, 4];
// function tripletSum(array, sum) {
//   var triplets=[];
//
//   for (var i =0; i < array.length;i++){
//     var num1=array[i];
//
//     for (var j = i+1; j < array.length; j++){
//       var num2= array[j];
//
//       for (var k = j+1; k < array.length; k++){
//         var num3 = array[k];
//         if (num1+num2+num3 === sum){
//           triplets.push([num1,num2,num3]);
//         }
//       }
//     }
//
//   }
// return triplets;
// }
// console.log(tripletSum(arr1,8));


/***********************************************************************
Write a recursive function `factorial(n)`, that returns the factorial
of the number `n`.

For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

Hint: use `if (n === 1)...` as the base case.

Check today's recursive notes if you need help.

Examples:

factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/
//
// function factorial(n) {
// if (n === 1){
//   return 1;
// }
// return n * factorial(n-1);
// }
// console.log(factorial(4));


/***********************************************************************
Write a recursive function `power(base, exp)` that takes in two numbers,
a base and exponent. The function should return `base` raised to `exp`
power.

For example, power(2, 5) is 2 raised to the 5th power,
which is 2 * 2 * 2 * 2 * 2 = 32

Hint: use `if (exp <= 0)...` as the base case.

Check today's recursive notes if you need help.

Examples:

power(2, 5); // => 32
power(2, 10); // => 1024
power(9, 2); // => 81
power(9, 3); // => 729
power(11, 0); // => 1
power(11, 1); // => 11
***********************************************************************/

// function power(base, exp) {
//   if (exp === 0){
//     return 1;
//   }
// return base * power(base,exp-1);
//
// }
// console.log(power(2,10));


/***********************************************************************
Write a function fib(n) that takes in a number and returns the nth number
of the fibonacci sequence.

In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1.
To generate the next number in the sequence, we take the sum of the
previous two fibonacci numbers. For example the first 5 numbers of the
fibonacci sequence are `1, 1, 2, 3, 5`

Hint: use `if (n === 1 || n === 2)...` as the base case.

Check today's recursive notes if you need help.

Examples:

fib(1) // => 1
fib(2) // => 1
fib(3) // => 2
fib(4) // => 3
fib(5) // => 5
fib(6) // => 8
fib(7) // => 13
// ***********************************************************************/
// function fib(n){
//   if (n === 1 || n === 2){
//     return 1;
//   }
//   var answer= fib(n-1)+fib(n-2);
//   return answer;
// }
// console.log(fib(5));


/***********************************************************************
Write a recursive function `countUp(num)` that takes in a number and
prints all whole numbers from `num` to 10. It should print 'done!' upon
reaching 10 or greater. Do this recursively, without loops. Reference the
`countdown` example from the recursion notes.

Hint: use `if (num >= 10)...` as the base case

Examples:

countUp(3); // prints:
3
4
5
6
7
8
9
done!

countUp(20); // prints
done!
***********************************************************************/
//
// function countUp(num) {
// if (num >= 10){
//   console.log("done!");
//   return;
// }
// console.log(num);
// return countUp(num+1);
// }
// console.log(countUp(3));



/***********************************************************************
Write a recursive function `countHalves(n)` that takes in a number and
prints n, n/2, n/4, n/8, n / 16, and so on. This process should stop
once the result goes below 1. It should print `done!` upon going below 1.

Hint: use `if(n < 1)...` as the base case

Example:

countHalves(20); // prints
20
10
5
2.5
1.25
done!


countHalves(100); // prints
100
50
25
12.5
6.25
3.125
1.5625
done!
***********************************************************************/
//
// function countHalves(n) {
// if (n < 1){
//   console.log("done!");
//   return;
// }
// console.log(n);
// return countHalves(n/2);
// }
// console.log(countHalves(100));


/***********************************************************************
Write a recursive function `multiply(a, b)` that takes in two numbers
and returns their product. Do this recursively, without loops. You may
assume that `a` and `b` are nonnegative numbers.

Hint 1: use `if (a === 0)` as the base case
Hint 2: how can you frame a multiplication in terms of a repeated
addition?

Example:

multiply(3, 5); // => 15
multiply(6, 4); // => 24
multiply(0, 100); // => 0
***********************************************************************/

// function multiply(a, b) {
// if (a === 0){
//   return 0;
// }
// var answer= b + multiply(a-1,b);
// return answer;
// }
// console.log(multiply(3,5));


/***********************************************************************
// Write a function `longestBigram(sentence)` that takes in a sentence
// string and returns the longest bigram in the sentence. A bigram is a
// pair of consecutive words.
// When returning the bigram, include the space between the words. Assume
// there will be no punctuation. In the case of a tie, return the earlier
// bigram.
//
// Examples:
//
// longestBigram('measure twice cut once'); // => 'measure twice'
// longestBigram("One must have a mind of winter"); // => 'must have'
// longestBigram("go home to eat"); // => 'go home'
// longestBigram("his last assessment is fun"); // => 'last assessment'
// ***********************************************************************/
//
// function longestBigram(sentence) {
// var words= sentence.split(" ");
// var longest="";
// for (var i = 0; i < words.length-1;i++){
// var word1= words[i];
// var word2= words[i+1];
//
// var bigram = word1+ " "+ word2;
// if (bigram.length >longest.length){
// longest= bigram;
// }
// }
// return longest;
// }
// console.log(longestBigram('measure twice cut once'));


/***********************************************************************
Write a function `maxAdjacentSum(array)` that takes in an array of
numbers and returns the maximum sum of adjacent numbers in the array.

HINT: First think how we can find adjacent elements in an array!

Examples:

var arr1 = [5, 6, 11, 3];
maxAdjacentSum(arr1); // => 17

var arr2 = [3, 2, 13, 5, 4, 7];
maxAdjacentSum(arr2); // => 18
***********************************************************************/
// var arr1 = [5, 6, 11, 3];
// function maxAdjacentSum(array) {
// var largest= null;
//
//   for (var i =0; i < array.length -1; i++){
//     var sum = array[i]+ array[i+1];
//     if (largest === null || sum > largest ){
//       largest= sum;
//     }
//   }
//   return largest;
// }
// console.log(maxAdjacentSum(arr1));



// /***********************************************************************
// Write a function `opposingSums(array)` that takes in an array of numbers
// and returns a new array containing half the number of elements. Assume
// the `array` contains an even number of elements.
//
// The first element of the new array should be the sum between the 1st and
// last element of the original `array`. The second element of the new array
// should be the sum between the 2nd and 2nd to last element. The third
// element of the new array should be the sum between the 3rd and 3rd to
// last element... etc.
// 1.first write a function to  devide the array length to half
// 2. loop through the firat array loop through the second array and sum the
// the first elemant of first array to last element of second array.
// Examples:
//
// var arr1 = [3, 2, 11, 4, 7, 9];
// opposingSums(arr1); // => [ 12, 9, 15 ]
//
// var arr2 = [1, 2, 3, 4]
// opposingSums(arr2); // => [ 5, 5 ]
// ***********************************************************************/
// var arr1 = [3, 2, 11, 4, 7, 9];
// var arr2 = [1, 2, 3, 4];
//
//
// function opposingSums(array) {
// var half= array.length/2;
// var newArr=[];
// for (var i =0; i < half;i++){
//   var num1= array[i];
//   var num2= array[array.length-1-i];
//   var sum= num1+num2;
//   newArr.push(sum);
//
// }
// return newArr;
// }
// console.log(opposingSums(arr2));


// /***********************************************************************
// Write a function `additionSequence(array, seq)` that takes in an array
// of numbers and a sequence of numbers. The function should return a new
// array where numbers of the original array are added to the numbers in
// the sequence.
//
// See the following example.
//
// array = [3, 2, 5, 4, 2, 1, 10];
// sequence = [2, 4, 6];
//
// array:    3 2  5 4 2 1 10
// sequence: 2 4  6 2 4 6  2
// result:   5 6 11 6 6 7 12
//
//
// Examples:
//
// var arr1 = [3, 2, 5, 4, 2, 1, 10];
// var seq1 = [2, 4, 6];
// additionSequence(arr1, seq1);
// // => [3+2, 2+4, 5+6, 4+2, 2+4, 1+6, 10+2] => [ 5, 6, 11, 6, 6, 7, 12 ]
//
// var arr2 = [1, 2, 3, 4, 5, 6, 7];
// var seq2 = [1, 2];
// additionSequence(arr2, seq2); // => [ 2, 4, 4, 6, 6, 8, 8 ]
// ***********************************************************************/
// var arr1 = [3, 2, 5, 4, 2, 1, 10];
// var seq1 = [2, 4, 6];
// function additionSequence(array, sequence) {
//   var newArr=[];
//   for (var i = 0; i < array.length;i++){
//     var num= array[i];
//     var offset= sequence[i % sequence.length];
//     newArr.push(num + offset);
// }
// return newArr;
// }
// console.log(additionSequence(arr1,seq1));


/***********************************************************************
A 1-dimensional array is also known as a flat array.
Write a function `flatten(data)` that accepts a single parameter. The
function should take in an array of any dimension and return the 1-dimensional
version of that array. Solve this recursively.

HINTS:
 - if the parameter is not an array, then we have reached the base case
 - we can use `Array.isArray(data)` to check if data is an array:
      Array.isArray([1,2,3]); //=> true
      Array.isArray(42); //=> false

EXAMPLES:
var array1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
flatten(array1); // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

var array2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
flatten(array2); // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

flatten('base case'); // => [ 'base case' ]

ANOTHER HINT:
From the last example, you may be confused. We said that the function takes
in an array as a parameter, but we passed it a string?!?
If data is not an array, then we can consider it as a 0-dimensional array.

    0-dimensional array: 42
    1-dimensional array: [42]
    2-dimensional array: [[42]]
    3-dimensional array: [[[42]]]

This line of thinking will help you frame the recursion
in your brain. (programmer.mind === 'blown')
***********************************************************************/
// var array1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]];
// function flatten(data) {
// var newArr=[];
//   if (!Array.isArray(data) ){
//     return [data];
//   }
//
//     for(var i = 0; i < data;i++){
//     var ele= data[i];
//     newArr.push(ele);
//   }
//
// return newArr;
// }
// console.log(flatten(array1));


// The main idea is to count all the occuring characters(UTF-8)
// in string. If you have string like this aba then the result
// should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ?
//  Then the result should be empty object literal { }
// function count (string) {
// var count={};
//
//   for (var i = 0; i < string.length;i++){
//     var char = string[i];
//
//     if (count[char] === undefined){
//     count[char]= 1;
//   } else {
//     count[char] += 1;
//   }
// }
// return count;
// }
// console.log(count(""));


// Given an array (arr) as an argument complete the
// function countSmileys that should return the total number of smiling faces.
//
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes.
// Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to.
// Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth
// that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]
// if (ele === ":)"|| ele === ":D"|| ele === ";-D"|| ele === ":~)"|| ele === ";~D"||ele === ";)"){
//   count += 1;
// }
// function countSmileys(arr) {
// var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
// var count = 0;
//
// for (var i=0; i<arr.length; i++){
//   for (var j=0; j<smileys.length; j++){
//     if (arr[i]===smileys[j]){
//       count++;
//     }
//   }
//   }
// }



// Task

// Find all Backwards Read Primes between two positive given
//  numbers (both inclusive), the second one being greater
//  than the first one. The resulting array or the resulting
//  string will be ordered following the natural order of the prime numbers.
//
// Example
//
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]
// function isPrime(num){
//
//   if (num < 2){
//     return false;
//   }
//     for (var i = 2; i < num; i++){
//       if (num % i === 0){
//         return false;
//       }
//     }
//       return true;
// }
//
// // console.log(isPrime(10));
//
// function getPrimes(start, stop) {
//   var primes = [];
//   for (var i = start; i <= stop; i+= 1) {
//
//
//     if (isPrime(i)) {
//       primes.push(i);
//     }
//   }
//   return primes;
// }
// // console.log(getPrimes(2,20));
//
//
//
// function reverse(arr){
// var reversera=[];
//
//   for (var i =0; i < arr.length; i++){
//     var num = arr[i];
//     var rev= parseInt(num.toString().split("").reverse().join(""));
//
//
//         if (rev <10){
//             continue;
//         } else {
//           reversera.push(rev);
//         }
//
//   }
// return reversera;
// }
// // console.log(reverse([ 2, 3, 5, 7, 11, 13, 17, 19,18 ]));
// //
//
// // function backwardsPrime(start, stop){
// //   var newArr=[];
// // for (var i = start; i < stop;i++){
// //
// //   var prime= getPrimes(i);
// //
// //   var rave= reverse(prime);
// //   // console.log(rave);
// //
// //   if (isPrime(rave) >-1){
// //     newArr.push(rave);
// //   }
// // }
// // return newArr;
// // }
// // console.log(backwardsPrime(2,20));



//
// dataand data1 are two strings with rainfall records of
// a few cities for months from January to December.
// The records of towns are separated by \n.
// The name of each town is followed by :.
//
// data and towns can be seen in "Your Test Cases:".
//
// Task:
//
// function: mean(town, strng) should return
//  the average of rainfall for the city town and
//  the strng data or data1 (In R this function is called avg).
// function: variance(town, strng) should return
// the variance of rainfall for the city town and the strng data or data1.
// Examples:
//
// mean("London", data), 51.19(9999999999996)
// variance("London", data), 57.42(833333333374)
// Notes:
//
// if functions mean or variance have as parameter town
//  a city which has no records return -1
// Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.
// Shell tests only variance
// http://www.mathsisfun.com/data/standard-deviation.html
// data and data1 are adapted from http://www.worldclimate.com

//
// function mean(town, strng) {
//     // Your code
// }
// function variance(town, strng) {
//     // Your code
// }


// function isOldEnoughToDrink(age) {
//   if (age >=21){
//    return true;
//   }
//   return false;
// }
// console.log(isOldEnoughToDrink(22));
// function isOldEnoughToDrive(age) {
//     if (age >= 16){
//      return true;
//     }
//     return false;
// }

// var obj1 = {
//   key: 'value'
// };
// function getProperty(obj, key) {
//    for (var key in obj){
//
// }
// return obj[key];
// }
// console.log(getProperty(obj1,k));

// var myObj={};
// function addProperty(obj, key) {
// if (obj[key] === true){
//   return true;
// }
// return false;
// }
// console.log(addProperty(myObj,myProperty));


// var obj1 = {
//   names: 'Sam',
//   age: 20
// };
// function removeProperty(obj, key) {
//   var remove= delete obj[key];
//   return remove;
// }
// console.log(removeProperty(obj1,"names"));

// var person= {
//   name : "name",
//   age :0
// };
//
// function checkAge(name, age) {
// if (person[age] >= 21){
//   return "Welcome!, "+ person[name]+"!";
// }
// return "Go home, "+ person[name]+"!";
// }
//
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function checkAge(name, age) {
// if (age < 21){
//   return "Go home, "+ name+"!";
//
// }
//  return "Welcome!, "+ name+"!";
// }
// console.log(checkAge("Adrian",21));


// function isIsogram(text) {
// var iso=[];
// var words = text.split(" ");
// for (var i =0; i <words.length;i++ ){
//   var word= words[i];
// }
// }
// function getLengthOfTwoWords(word1, word2) {
//   var sum= 0;
//   var full= word1.length+word2.length;
//   sum = full;
//
// }
// function equalsTen(num) {
//   if (num == 10){
//     return true;
//   }
//   return false;
// }
// function cube(num) {
//   var cube= Math.pow(num,3);
//   return cube;
// }
// console.log(cube(3));

// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };
// var person1 = {
//   firstName: 'kamal',
//   lastName: 'abool'
// };
// function addFullNameProperty(obj) {
//   var result= obj.firstName+" "+ obj.lastName;
//   return result;
// }
// console.log(addFullNameProperty(person1));


// function addObjectProperty(obj1, key, obj2) {
//  for (var key in obj1){
//    if (obj1[key])
//  }
// }

// function addToFront(arr, element) {
//    arr.unshift(element);
//   return arr;
// }
// console.log(addToFront([1,2],3));


// function getLengthOfThreeWords(word1, word2, word3) {
//   var sum=0;
//   var result= word1.length + word2.length + word3.length;
//   sum += result;
//   return sum;
// }
// console.log(getLengthOfThreeWords("some","other","words"));

//
// function joinArrays(arr1, arr2) {
//   var result = arr1.concat(arr2);
//   return result;
// }
//
// function getElementsAfter(array, n) {
//   var result= array. slice(0,n);
//   return result;
// }
// console.log(getElementsAfter(["a","b","c","d","e"], 2));


// function getAllElementsButFirst(array) {
//   var result = array.slice(1);
//   return result;
// }
// console.log(getAllElementsButFirst([1,2,3,4]));

//
// function removeFromFront(arr) {
//
//   var result= arr.pop(arr.length-1);
//
//   return newArr;
//
// }
// console.log(removeFromFront([1,2,3]));


// function removeFromBackOfNew(arr) {
// if (arr === undefined){
//   return [];
// }
// var last= arr.length-1;
// var result= arr.slice(0,-1);
// return result;
//
// }
// console.log(removeFromBackOfNew([1,2,3]));
// function getAllLetters(str) {
// var result = str.split("");
// return result;
// }
// console.log(getAllLetters("aaaaabbb"));


// function or(expression1, expression2) {
//   if (expression1 === true && expression2 === false){
//     return true;
//   }
// }

// function isEitherEvenOrAreBoth7(num1, num2) {
//   if (num1 % 2 === 0 && num2 % 2 === 0)  {
//     return true;
//   } else if (num1 === 7 && num2 === 7){
//     return true;
//
//   }
//   return false;
// }
// console.log(isEitherEvenOrAreBoth7(2,3));


var obj1 = {
  a: 1,
  b: 2,
  c: 1
};
// var obj2 = {
//   b: 4,
//   c: 3,
//   d:3
// };
//
// function extend(obj1, obj2) {
//   for (var k in obj2){
//   obj1[k] = obj2[k];
//
// }
//   return obj1;
// }
//  console.log(extend(obj1,obj2));
// function removeNumbersLessThan(obj,num){
//   for (var k in obj){
//     if (obj[k] < num){
//       delete obj[k];
//     }
//   }
//   return obj;
// }
// console.log(removeNumbersLessThan(obj1,2));

//
// function countNumberOfKeys(obj) {
//   var count= 0;
//   for (var k in obj){
//     count ++;
//   }
//   return count;
// // }
// // console.log(countNumberOfKeys(obj1));
// var obj1={
//   a: [1, 3, 4],
//   b: "hi",
//   c: ['hi', 'there']
// };
// function removeArrayValues(obj) {
//   for (var k in obj){
//     if ({
//       delete obj[k];
//     }
//   }
//   return obj;
// }
// console.log(removeArrayValues(obj1));
// function removeStringValues(obj) {
//   for (var k in obj){
//     if (typeof obj[k] === "string"){
//       delete obj[k];
//     }
//   }
//   return obj;
// }
// console.log(removeStringValues(obj1));


// function convertDoubleSpaceToSingle(str) {
//   var single= str.split("  ");
// var result=  single.join(" ");
// return result;
// }
// console.log(convertDoubleSpaceToSingle("string  with  double  spaces"));


// function addToFrontOfNew(arr, element) {
//  var newArr=[];
//  newArr[0]= element;
//  var result = newArr.concat(arr);
//  return result;
//
// }
// console.log(addToFrontOfNew([1,2],3));


// function addToBackOfNew(arr, element) {
//   var newArr= [];
//   for (var i =0; i < arr.length;i++){
//     var ele= arr[i];
//
//     newArr.push(arr[i]);
//
//   }
//   newArr.push(element);
//   return newArr;
// }
// console.log(addToBackOfNew([1,2],3));



// function getAllElementsButNth(array, n) {
//   var ss;
//
//   for (var i = 0; i < array.length; i++){
//     if (i !== n){
//       return array;
//     } else if (i === n){
//     var result1= array.slice(0,n);
//      var result2= array.slice(n+1);
//      ss = result1.concat(result2);
//
//     }
//
//   }
// return ss;
// }
// console.log(getAllElementsButNth(["a","b","c"],2));

//
// function getIndexOf(char, str) {
// for (var i = 0; i < str.length;i++){
// strChar= str[i];
// if (strChar === char){
//   return i;
// }
//
//
// }
//
// }
// console.log(getIndexOf("a","I am a hacker"));


// function findMaxLengthOfThreeWords(word1, word2, word3) {
//   var max= 0;
//   var w1Length= word1.length;
//   var w2Lenegth= word2.length;
//   var w3Lenegth= word3.length;
//   if (w1Length > w2Lenegth && w1Length > w3Lenegth){
//     max = w1Length;
//   }else if (w2Lenegth > w1Length && w2Lenegth > w3Lenegth){
//     max = w2Lenegth;
//   }else if (w3Lenegth > w1Length && w3Lenegth > w2Lenegth){
//     max = w3Lenegth;
//   }
//   return max;
// }
// // console.log(findMaxLengthOfThreeWords("a","Be","see"));
//
// var arr = ['a', 'c', 'e'];
// var obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
//
// function select(arr, obj) {
//   var newObj={};
//   for(var i = 0; i < arr.length;i++){
//     var arrChar=arr[i];
//     for (var k in obj){
//       var value= obj[k];
//     if (k === arrChar){
//       newObj[k] = obj[k];
//     }
//     }
//   }
//
//   return newObj;
// }
// console.log(select(arr,obj1


// var obj = {
//   key: [1000, 10, 50, 10]
// };
// function getElementsThatEqual10AtProperty(obj, key) {
//   var newArr= [];
//   for (var k in obj){
//     var value= obj[k];
//     if (Array.isArray(value)){
//       for (var i = 0; i < value.length;i++){
//         var ele = value[i];
//         if (ele === 10){
//           newArr.push(ele);
//         }
//       }
//     }
//   }
//   return newArr;
// }
// console.log(getElementsThatEqual10AtProperty(obj,"key"));


// function countAllCharacters(str) {
//   var obj={};
//
//   for(var i =0; i < str.length;i++){
//     if (obj[str[i]] === undefined){
//       obj[str[i]]= 0;
//     }
//     obj[str[i]]++;
//   }
// return obj;
// }
// console.log(countAllCharacters("banana"));


// function removeElement(array, discarder) {
//  var newArr=[];
//   for (var i =0; i <array.length;i++){
//     var ele= array[i];
//     if (ele !== discarder){
//       newArr.push(ele);
//
//     }
//   }
// return newArr;
// }
// console.log(removeElement(1,2,3,4,2),2);

//
// var obj = {
//   key: [1, 2, 4]
// };
// function getFirstElementOfProperty(obj, key) {
//   for (var k in obj){
//   if (!Array.isArray(obj[k])){
//     return undefined;
//   } else{
//     return obj[k][0];
//   }
//   }
// }
// console.log(getFirstElementOfProperty(obj,"key"));
//
// var obj = {
//   key: [1, 2, 5]
// };
// function getLastElementOfProperty(obj, key) {
//   for (var k in obj){
//     if (!Array.isArray(obj[k])){
//       return undefined;
//     }else if (obj[key] === undefined){
//       return undefined;
//
//     }else {
//       for (var i =0; i < obj[k].length;i++){
//         return obj[k][obj[k].length-1];
//       }
//     }
//   }
// }
// console.log(getLastElementOfProperty(obj,"key"));


// function computeAverageOfNumbers(nums) {
//   var sum=0;
//   var avg=0;
//   var numsLenght= nums.length;
//   for (var i = 0; i < nums.length; i++){
//
//     sum += nums[i];
//     avg = sum / numsLenght;
//   }
//
//   return avg;
// }
// console.log(computeAverageOfNumbers([1,2,3,4,5]));


// var obj = {
//   key: [1, 2, 3]
// };
//
// function getAverageOfElementsAtProperty(obj, key) {
//   var sum=0;
//   var avg=0;
//   for (var k in obj){
//     var value= obj[k];
//     if (!Array.isArray(value)){
//       return 0;
//     }
//     for (var i =0; i < value.length; i++){
//       var valLength= value.length;
//       sum += value[i];
//       avg= sum / valLength;
//
//     }
//   }
//
//   return avg;
// }
// console.log(getAverageOfElementsAtProperty(obj,"key"));

// var obj = {
//   key: [1, 2, 3, 4, 5]
// };
//
// function getOddElementsAtProperty(obj, key) {
//    newArr=[];
//    for (var k in obj){
//      var value= obj[k];
//      if (!Array.isArray(value)){
//        return newArr;
//      }
//      if (obj.hasOwnPorperty(key) === false){
//        return newArr;
//      }
//       for (var i = 0; i < value.length; i++){
//         var ele= value[i];
//         if(ele % 2  !== 0){
//           newArr.push(ele);
//         }
//       }
//       return newArr;
//    }
// }
// console.log(getOddElementsAtProperty(obj,"key"));



// function getLengthOfLongestElement(arr) {
//   var longest=0;
//
//   for (var i = 0; i < arr.length; i ++){
//     var ele= arr[i];
//     var eleLength= ele.length;
//     if ( eleLength > longest){
//       longest = eleLength;
//     }
//   }
//   return longest;
//
// // }
// var obj = {
//   key: [2, 1, 5]
// };
//
// function getSmallestElementAtProperty(obj, key) {
//   var smallest;
//   for (var k in obj){
//     var value= obj[k];
//     if (!Array.isArray(value)){
//       return undefined;
//     }
//     if (obj.hasOwnProperty(key) === false){
//       return undefined;
//     }
//     for (var i =0; i < value.length; i++){
//       var num1 = value[i];
//       var num2 = value[i+1];
//       if (num1 < num2){
//         smallest = num1;
//       }
//     }
//
//   }
//   return smallest;
// }
// console.log(getSmallestElementAtProperty(obj,"key"));



// function computeProductOfAllElements(arr) {
//
//    if ( arr.length === 0){
//      return 0;
//    }
// for ( var i =0; i < arr.length; i++){
//
//   var current = arr[i];
//   var next= arr[i+1];
//   var after= arr[i+2];
//   var result= (current * next) * after;
//   return result;
// }
//
// }
// console.log(computeProductOfAllElements([2,5,6]));



//
// function getLengthOfShortestElement(arr) {
//   var shortest=arr[0];
//   for (var i =0; i < arr.length; i++){
//     var firstLength= arr[i].length;
//     if (firstLength < shortest ){
//       shortest = firstLength;
//     }
//   }
//   return shortest.length;
// }
// console.log(getLengthOfShortestElement(["one","two","three"]));


//
// function getLongestElement(arr) {
//   var longest= arr[0];
//   if ( arr.length === 0){
//     return "";
//   }
//   for (var i = 0; i < arr.length;i++){
//     if (arr[i].length > longest.length){
//       longest = arr[i];
//     }
//   }
//   return longest;
// }
// console.log(getLongestElement(["one","two","three"]));

//
// function calculateBillTotal(preTaxAndTipAmount) {
//   var tax= preTaxAndTipAmount * 0.095;
//   var tip= preTaxAndTipAmount * 0.15;
//   var result = preTaxAndTipAmount + tax + tip;
//   return result;
// }
// console.log(calculateBillTotal(20));


//
// function joinArrayOfArrays(arr) {
//   var newArr=[];
//   for (var i =0; i < arr.length; i++){
//     var ele= arr[i];
//     for (var j= 0; j < ele.length; j++){
//       var ele2= ele[j];
//       newArr.push(ele2);
//     }
//
//   }
//   return newArr;
// }
// console.log(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]));

// var obj = {
//   key: [1, 2, 3, 4]
// };
//
// function getProductOfAllElementsAtProperty(obj, key) {
// var sum=1;
//  for (var k in obj){
//    var value= obj[k];
//    if (!Array.isArray(obj[k])){
//      return 0;
//    }
//    if (value.length === 0){
//      return 0;
//    }
//    if (obj.hasOwnProperty(key) === false){
//      return 0;
//    }
//    for (var i =0; i < value.length; i++){
//
//     sum *= value[i];
//    }
//  }
// return sum;
// }
// console.log(getProductOfAllElementsAtProperty(obj,"key"));


// function sumDigits(num) {
//   var sum=0;
// var digits=num.toString();
// var digit= digits.split("");
// for (var i =0; i < digit.length;i++){
//   var number= Number(digit[i]);
//
//   sum += number;
//
//
// }
// return sum;
// }
// console.log(sumDigits(1234));

//
// function findShortestWordAmongMixedElements(arr) {
//  var stringCount= 0;
//  var shortest="";
//  var stringArr=[];
//  for (var i = 0;i < arr.length;i++){
//    if (arr.length === 0){
//      return "";
//    }
//    if (typeof(arr[i]) === "string"){
//      stringCount++;
//      stringArr.push(arr[i]);
//
//    }
//  }
//  shortes= stringArr[0];
//   for (var j =0; j < stringArr.length; i++){
//     if (stringArr[j].length < shortest.length){
//       shortest= stringArr[j];
//     }
//   }
//   return shortest;
// }
// console.log(findShortestWordAmongMixedElements([4,"two",2]));
//
//
//
// function findSmallestNumberAmongMixedElements(arr) {
//   var numberCount=0;
//   var shortest=0;
//   var newArr=[];
//   if (arr.length === 0){
//     return 0;
//   }
//   for (var i =0; i < arr.length;i++){
//     if (typeof(arr[i]) === "number"){
//       newArr.push(arr[i]);
//       numberCount++;
//
//     }
//
//   }
//   if (numberCount < 1){
//     return 0;
//   }
//   for (var j =0; j < newArr.length; j++){
//     shortest=newArr[0];
//     if (newArr[j] < shortest){
//       shortest = newArr[j];
//     }
//   }
//   return shortest;
// }
// console.log(findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']));



// function getLongestWordOfMixedElements(arr) {
//   var longest="";
//   var newArr=[];
//    if (arr.length === 0){
//      return "";
//    }
//
//    for (var i =0; i < arr.length; i++){
//      var ele= arr[i];
//      if (typeof(ele) === "string"){
//        newArr.push(ele);
//      }
//    }
//    for (var j =0; j < newArr.length;j++){
//      if (newArr[j] > longest){
//        longest = newArr[j];
//      }
//    }
//    return longest;
// }
// console.log(getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]));


// function computeSummationToN(n) {
// if (n <  1){
//   return 0;
// }
// return n+ computeSummationToN(n-1);
// }
// console.log(computeSummationToN(4));
//
//
// function computeFactorialOfN(n) {
// if (n < 1){
//   return 0;
// }
// return n + computeFactorialOfN(n-1);
// }
// console.log(computeFactorialOfN(55));

//
// function getLongestOfThreeWords(word1, word2, word3) {
//   var longest;
//    if ( word1.length > word2.length && word1.length > word3.length){
//      longest = word1;
//    }
//    else if ( word2.length > word1.length && word2.length > word3.length){
//       longest = word2;
//    }
//    else if ( word3.length > word2.length && word3.length > word1.length){
//      longest =word3;
//    }
//    return longest;
//  }
//
// console.log(getLongestOfThreeWords('these', 'three', 'words'));


//
// function findShortestOfThreeWords(word1, word2, word3) {
//   var shortest="";
//   var shortLength=0;
//   var wordsArr=[word1,word2,word3];
//   for (var i = 0; i < wordsArr.length;i++){
//     shortLength= wordsArr[0];
//     var word= wordsArr[i];
//     if (word.length < shortest.length){
//       shortLength = word;
//       shortest = word;
//     }
//   }
//   return shortest;
// }
// console.log(findShortestOfThreeWords('these', 'three', 'word'));



// function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
//
// }


// function multiplyBetween(num1,num2){
// var product=1;
// if (num1 < num2){
// for (var i = num1; i <num2;i++){
//   console.log(i);
//   product *= i;
//
// }
//
// }
// return product;
// }
// console.log(multiplyBetween(1,4));

//
//
// function findShortestOfThreeWords(word1, word2, word3) {
//   var shortest="";
// var wordsArr=[word1,word2,word3];
// for (var i =0; i < wordsArr.length;i++){
//   shortest= wordsArr[0];
// var ele= wordsArr[i];
// if (ele.length < shortest.length){
//   shortest= ele;
// }
// }
// return shortest;
// }
// console.log(findShortestOfThreeWords('these', 'three', 'word'));




// Write a function tallyCount(array) that takes in an array of strings.
// The function should return an object containing a tally count of the
// strings in the array.
//
// Examples:
//
// var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
// tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
//
// var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
// tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }
// ***********************************************************************/
//
// function tallyCount(arr) {
//   var tally = {};
//
//   for (var i = 0; i < arr.length; i += 1) {
//     var s = arr[i];
//
//     if (tally[s] === undefined) {
//       tally[s] = 'I';
//     } else {
//       tally[s] += 'I';
//     }
//   }
//
//   return tally;
// }
// console.log(tallyCount(['x', 'x', 'y', 'z', 'y', 'x']));



// Write a function oddOnesOut(array) that takes in an array of strings and
// returns a new array array containing only elements that appeared an even
// number of times in the input array.


// function oddOnesOut(array){
//   var count=0;
//   var newArr=[];
// for (var i =0; i < array.length;i++){
//
//   }
// }
//
// }

// obj1 = {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// };
// function getAllKeys(obj) {
//   var newArr=[];
//   for (var k in obj){
//     newArr.push(k);
//   }
//   return newArr;
// }
// console.log(getAllKeys(obj1));


// function convertObjectToList(obj) {
//   var newArr=[];
//   var insideArr=[];
//   for (var k in obj){
//     insideArr.push(k);
//     insideArr.push(obj[k]);
//     newArr.push(insideArr);
//   }
//   return newArr;
// }
// console.log(convertObjectToList(obj1));


//
// var customerData = {
//   'Joe': {
//     visits: 1
//   },
//   'Carol': {
//     visits: 2
//   },
//   'Howard': {
//     visits: 3
//   },
//   'Carrie': {
//     visits: 4
//   }
// };
//
// function greetCustomer(firstName) {
//   var greeting = '';
//
//   if(!obj[firstName]){
//     greeting = 'Welcome! Is this your first time?';
//   }else if (obj[firstName].visit === 1){
//     greeting = 'Welcome back,' + firstName + "! We're glad you liked us the first time!";
//   }else if (obj[firstName].visit > 1){
//     greeting= 'Welcome back,' + firstName + "! So glad to see you again!";
//   }
//   return greeting;
// }
// console.log(greetCustomer(customerData("Joe")));


// var input1='check out how interesting this problem is, it\'s insanely interesting!';
// function flipPairs(input){
//
//   var flipperString;
//
//   var stringArray = input.split('');
//   console.log(stringArray);
//
//   var pairArray = [];
//
//   if (stringArray.length % 2 === 0) {
//     for (var i = 0; i < stringArray.length; i += 2) {
//       pairArray.push([stringArray[i], stringArray[i + 1]]);
//     }
//   } else {
//     for (var k = 0; k < stringArray.length - 1; k += 2) {
//       pairArray.push([stringArray[k], stringArray[k + 1]]);
//     }
//     pairArray.push([stringArray[stringArray.length - 1]]);
//   }
//
//   var flipperPairArray = pairArray.map(function(pair) {
//     return pair.reverse().join('');
//   });
//
//   flipperString = flipperPairArray.join('');
//
//   return flipperString;
//
// }
// console.log(flipPairs(input1));
// console.log(flipPairs(input1));
// console.log(flipPairs(input1));


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// function isOdd(num) {
// if (num % 2 === 0){
//   return true;
// }else{
//   return false;
// }
// }
// console.log(isOdd(2));
// console.log(isOdd(3));
// console.log(isOdd(5));
// console.log(isOdd(6));
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// function plusFive(num) {
//   return num+5;
// }
// console.log(plusFive(10));
// console.log(plusFive(15));
// console.log(plusFive(11));
// console.log(plusFive(13));
// ***************************************************************************


// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
// function threeOrSeven(num) {
// if ((num % 7 === 0) || (num % 3=== 0)){
//   return true;
// }else{
//   return false;
// }
// }
// console.log(threeOrSeven(3));
// console.log(threeOrSeven(42));
// console.log(threeOrSeven(8));
// console.log(threeOrSeven(13));

//
// function logBetween(lowNum, highNum){
//   for (var i =lowNum; i <= highNum;i++){
//     console.log(i);
//   }
// }
// console.log(logBetween(1,4));


// function printReverse(min, max) {
//   for (var i = max - 1; i > min; i -= 1) {
//     console.log(i);
//   }
// }
// console.log(printReverse(0,20));

//
// function sumNums(max){
//   var sum=0;
//   for (var i =0; i <= max;i++){
//     sum+=i;
//   }
//   return sum;
// }
// console.log(sumNums(4));


// function isFactorOf(number, factor){
//   if (number % factor === 0){
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isFactorOf(6,2));
// console.log(isFactorOf(-6,2));
// console.log(isFactorOf(5,0));
// console.log(isFactorOf(22,7));


//
// function fizzBuzz(max){
//   for (var i =3; i < max; i++){
//     if (i % 3 === 0 || i % 5 === 0){
//       console.log(i);
//     }
//   }
// }
// console.log(fizzBuzz(20));
// // console.log(fizzBuzz());
// // console.log(fizzBuzz());
// // console.log(fizzBuzz());


// function isPrime(number){
//   if (number < 0){
//     return false;
//   }else if (number % 2 === 0){
//     return true;
//   }else {
//     return false;
//   }
// }
// console.log(isPrime(5));
//
//
// function logEach(array){
//   for (var i =0; i < array.length; i++){
//     console.log(i+":"+ array[i]);
//   }
// }
// console.log(logEach(["Anthony", "John", "Carson"]));



// function range(start, end){
//   var newArr=[];
//   for (var i =start;i <= end;i++){
//     newArr.push(i);
//   }
//   return newArr;
// }
// console.log(range(1,4));


// function sumArray(array){
//   sum=0;
//   for (var i =0; i < array.length; i++){
//     sum+= array[i];
//   }
//   return sum;
// }
// console.log(sumArray([5, 6, 4]));



// wordPeriods
// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
// function wordPeriods(sentence){
// var words= sentence.split(" ");
// var period=[];
// for (var i =0; i < words.length;i++){
//   var word= words[i];
//   var per =word+".";
//   period.push(per);
// }
// return period.join("");
// }
//
//
// console.log(wordPeriods("hello world"));
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'


// Write a
// function capWords(words){
//   var newWord=[];
//   for (var i =0; i < words.length;i++){
//     var word= words[i];
//     var result= word.toUpperCase();
//     newWord.push(result);
//   }
//   return newWord;
// }
// console.log(capWords(['hello', 'boOtCaMp', 'PREP!']));
 // that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']



// maxValue
// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
// //
// // Examples:
// function maxValue(array){
//   var max = null;
//   for (var i = 0 ; i < array.length; i++){
//     if (max === null || array[i]> max){
//       max = array[i];
//     }
//     }
//   return max;
// }
// console.log(maxValue([12, 6, 43, 2])); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43


// isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// // HINT: use indexOf
// function isInside(array, ele){
//   return array.indexOf(ele) > -1;
// }
// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false



// reverseStr
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// // Examples:
// function reverseStr(str){
//   var string= str.split("");
// return string.reverse().join("");
// }
// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'



// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
// function luckySevens(max){
//   for (var i =7; i <= max; i++){
//     if (i % 7 === 0){
//       console.log(i);
//     }
//   }
// }
// console.log(luckySevens(25)); // => [ 7, 14, 21 ]
//
// console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]



// copyMachine
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
// function copyMachine(element, num){
//   var newArr=[];
//   for (var i = 0; i < num; i++){
//     newArr.push(element);
//   }
//   return newArr;
// }
// console.log(copyMachine('candy', 0)); // => []
// console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
// console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
// console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]


// everyOtherWord
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

// function everyOtherWord(sentence){
// var words= sentence.split(" ");
// var newArr=[];
// for (var i = 0; i < words.length;i+=2){
//   var word= words[i];
//   newArr.push(word);
//
// }
// return newArr;
// }
// console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// console.log(everyOtherWord('the weather is wonderful')); // => [ 'the', 'is' ]


// wordYeller
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
//
//
// function wordYeller(sentence){
//   // we need to split the sentence
//   //  have punctuation array;
//   // if the word.length-1 is index of punctuation continue
//   // if not push the word to the newArr+"!"
//   var words= sentence.split(" ");
//   var newArr=[];
//   var punc= ["." , "!" ,"?" , ":"];
//   for (var i =0; i < words.length; i++){
//     var word = words[i];
//   var lastChar= word.slice(-1);
//   if (lastChar.indexOf(punc)!== -1){
//     newArr.push(word);
//   }else{
//     newArr.push(word+"!");
//   }
//
//
//   }
//   return newArr.join("");
// }
// console.log(wordYeller("Go to the store and grab the following: milk, bread, run, and cake"));



/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true
// ***********************************************************************/
// var a1 = ['a', 'b', 'c'];
// var a2 = ['w', 'x', 'y'];
// var a3 = [1, 3, 7, 4];
// function diffArrayLen(arr1, arr2) {
// if (arr1.length !== arr2.length){
//   return true;
// }else {
//   return false;
// }
// }
// console.log(diffArrayLen(a1,a2));
// console.log(diffArrayLen(a1,a3));


/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// function mirrorArray(array) {
// var newArr=[];
// for (var i =0; i <array.length;i++){
//   var ele=array[i];
//   newArr.push(ele);
// }
// for (var k = array.length-1; k >= 0; k--){
//   newArr.push(array[k]);
// }
//
// return newArr;
// }
// console.log(mirrorArray([1,2,3]));


/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/
//
// function avgValue(array) {
//   var sum=0;
//   var avg;
// for (var i =0; i < array.length; i++){
//   var num = array[i];
//   sum += num;
//   avg = sum / array.length;
//
// }
// return avg;
// }
// console.log(avgValue([10, 20]));


/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
// function removeVowels(word) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var newWord = '';
//
//   for (var i = 0; i < word.length; i += 1) {
//     var char = word[i];
//     if (vowels.indexOf(char) === -1) {
//       newWord += char;
//     }
//   }
//
//   return newWord;
// }
// function abbreviate(sentence) {
//   var newArr=[];
// var words= sentence.split(" ");
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// for (var i =0; i < words.length;i++){
//   var word= words[i];
//   if (word.length >=5){
//     newArr.push(removeVowels(word));
//   }else{
//     newArr.push(word);
//   }
// }
// return newArr.join(" ");
// }
// console.log(abbreviate('bootcamp prep is fun'));


/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/
//
// function firstLastCap(sentence) {
// var newArr=[];
// var words= sentence.split(" ");
// for (var i =0; i < words.length;i++){
//   var word= words[i];
//   var firstChar=word[0].toUpperCase();
//   var lastChar=word[word.length-1].toUpperCase();
//   var middleChar= word.slice(1,-1).toLowerCase();
//   var newWord= firstChar+middleChar+lastChar;
//   newArr.push(newWord);
// }
// return newArr.join(" ");
// }
// console.log(firstLastCap('hello BOOTCAMP PrEp'));


/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/
//
// function catBuilder(name, color, toys) {
// // var cat={
// //   name:name,
// //   color:color,
// //   toye:toys
// // };
// // return cat;
// var cat ={};
// cat.name= name;
// cat.color= color;
// cat.toys= toys;
// return cat;
// }
// console.log(catBuilder('Nyan', 'rainbow', ['poptarts']));



/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/
//
// var bootcamp = {
//  name: 'App Academy',
//  color: 'Red',
//  population: 120,
// };
// function printObject(obj) {
// for (var k in obj){
//   console.log(k+"_"+ obj[k]);
// }
// }
// console.log(printObject(bootcamp));


/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

Examples:

var p1 = {firstName: 'John', lastName: 'Doe'};
getFullname(p1); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullname(p2); // => 'Charlie Brown'
***********************************************************************/
// var p1 = {firstName: 'John', lastName: 'Doe'};
// function getFullname(person) {
//   var fullName= person.firstName+" "+person.lastName;
//   return fullName;
//
// }
// console.log(getFullname(p1));



/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/
// var object1 = {name: 'One', location: 'NY', age: 3};
// var object2 = {name: 'Two', location: 'SF'};
// function valuePair(obj1, obj2, key) {
// var newArr=[];
// newArr.push(obj1[key],obj2[key]);
// return newArr;
// }
// console.log(valuePair(object1, object2, 'location'));


/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
// ***********************************************************************/
// var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'};
// function doesKeyExist(obj, key) {
// if (obj[key] !== undefined){
//   return true;
// }else{
//   return false;
// }
// }
// console.log(doesKeyExist(obj1,"course"));


/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
// ***********************************************************************/
// var ppl = [
//   {name: 'John', age: 20},
//   {name: 'Jim', age: 13},
//   {name: 'Jane', age: 18},
//   {name: 'Bob', age: 7}
// ];
//
// function adults(people) {
// var newArr=[];
// for (var i =0; i < people.length;i++){
//   var person=people[i];
//   if(person.age >=18){
//     newArr.push(person.name);
//   }
// }
// return newArr;
// }
// console.log(adults(ppl));


/***********************************************************************
Write a function `hasFavoriteFood(obj, food)` that takes in an object
and a food string. The function should return true if the object has
that favorite food. See the examples below.

Examples:

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

hasFavoriteFood(dog, 'sausage'); // => true
hasFavoriteFood(dog, 'cat food'); // => false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}

hasFavoriteFood(person, 'burgers'); // => true
hasFavoriteFood(person, 'fish'); // => false
***********************************************************************/
// var person = {
//   name: 'Al',
//   favoriteFoods: ['pizza', 'burgers', 'ramen']
// };
// function hasFavoriteFood(obj, food) {
//   if(obj.favoriteFoods.indexOf(food) > -1){
//   return true;
//   } else {
//   return false;
//   }
// }
// console.log(hasFavoriteFood(person, "burgers"));


/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/
// var peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
//
// function countScores(people) {
//   var scoresObj = {};
//
// for (var i = 0; i < people.length;i++){
//   var person= people[i];
//   var name = person.name;
//   var score= person.score;
//     if(scoresObj[name]){
//     scoresObj[name] += score;
//   } else {
//     scoresObj[name] = score;
//   }
//
// }
// return scoresObj;
// }
// console.log(countScores(peeps));

/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/
/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.

Hint: this can be solved using a single loop

Examples:

peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

// function peakFinder(array) {
// var newArr=[];
// for (var i =0; i < array.length;i++){
//   var current= array[i];
//   var next= array[i+1];
//   var before= array[i-1];
//   if(i === 0 && current > next){
//     newArr.push(i);
//   }else if (i === array.length-1 && current > before){
//     newArr.push(i);
//   }else if (current> before && current > next){
//     newArr.push(i);
//   }
// }
// return newArr;
// }
// console.log(peakFinder([1, 2, 3, 2, 1]));



/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

// function divisibleByThreePairSum(array) {
// var pair=[];
// for (var i =0; i < array.length; i++){
//   for (var j =i+1; j < array.length; j++){
//     var sum= array[i] + array[j];
//     if(sum % 3 === 0){
//       pair.push([i,j]);
//     }
//   }
// }
// return pair;
// }
// console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));


/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

Examples:

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/
// var a1 = ['a', 'b', 'c', 'd'];
// var a2 = [10, 20, 30, 40];
// function zipArray(arr1, arr2) {
// var newArr=[];
// for (var i =0; i < arr1.length;i++){
//   var ele1= arr1[i];
//   var ele2= arr2[i];
//     newArr.push(arr1[i],arr2[i]);
//
// }
// return newArr;
// }
// console.log(zipArray(a1,a2));
/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
// ***********************************************************************/
// var arr2 = [
//   [2],
//   [1, 9],
//   [1, 1, 1]
// ];
//
// function twoDimensionalTotal(array) {
// var sum=0;
// for (var i =0; i < array.length; i++){
//
//   for (var j = 0; j < array[i].length;j++ ){
//
//     sum += array[i][j];
//   }
// }
// return sum;
// }
// console.log(twoDimensionalTotal(arr2));



/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/


// function capVowels(string) {
// var vowels= 'aeiouAEIOU'.split('');
// var newStr="";
//  for (var i = 0; i < string.length; i++){
//   var char = string[i];
//   if(vowels.indexOf(char) >-1){
//     newStr += char.toUpperCase();
//   }else {
//     newStr += char.toLowerCase();
//   }
//  }
//  return newStr;
//  }
// console.log(capVowels('hello world'));


/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/
// function isPrime(n){
//   if (n < 2){
//     return false;
//   }
//    for (var i = 2; i < n; i ++){
//      if (n % 2 === 0){
//        return false;
//      }
//
//    }
//    return true;
// }
//
// function nextTwoPrimes(num) {
//   var primes= [];
//
//   for (var i = num+1; primes.length < 2;i++){
//     if(isPrime(i)){
//     primes.push(i);
//     }
//   }
//   return primes;
// }
// console.log(nextTwoPrimes(3));


/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

// function pairProduct(arr, num) {
//   var newArr=[];
//
//   for (var i = 0; i <arr.length;i++){
//
//     for (var j =i+1;j< arr.length; j++){
//       if (arr[i] * arr[j] === num){
//         newArr.push([i, j]);
//       }
//     }
//   }
// return newArr;
// }
// console.log(pairProduct([1,2,3,4,5], 4));


/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/
// var arr1 = [
//   [1, 2, 3],
//   [4, 5],
//   [6, 7, 8, 9]
// ];
// function twoDimensionalSize(array) {
//   var total= 0;
//
//   for (var i = 0; i < array.length; i++){
//
//     var subArray= array[i];
//     total += subArray.length;
//   }
//   return total;
// }
// console.log(twoDimensionalSize(arr1));


/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.

Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
***********************************************************************/
//
// function elementCount(array) {
//   var countObj = {};
//
//    for (var i =0; i < array.length; i++){
//      var key = array[i];
//      if (countObj[key] === undefined){
//        countObj[key] = 1;
//      } else {
//        countObj[key]++;
//      }
//    }
//    return countObj;
//  }
// console.log(elementCount(["a", "a", "b", "b"]));


/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/
// function removePunctuation(word){
//   // first we need to find the punc in the word which is the last index of the word
//   //  and remove it with slice.otherwise resturn the word.
//   var punctuation = [";", "!", ".", "?", ",", "-"];
//   var lastChar= word[word.length-1];
//   if (punctuation.indexOf(lastChar)!== -1){
//     return word.slice(0,-1);
//   } else {
//     return word;
//   }
// }
//
// function isStopWord(word, stopWords){
//   // first remove the punctuation from the word
//  // we want to check and see if the word and the
// // stop word are similar or not
// //   // true or false;
//   var noPuncWord = removePunctuation(word);
//   return stopWords.indexOf(noPuncWord) !== -1;
// }
// //
// //
// //
// function titleize(title, stopWords) {
// //   //  we need to split the title to words,
// //   // loop through the words and turn them to lowerCase
// //   // afterwards we will check if the word is equal to stop word
// //   //  if it is push the word to the array
// //   //  if not the 0 index of word need to be capitalized and the rest should stay lowerCase
// //   //  puh them trough the array and join them at the end.
//   var words = title.split(" ");
//   var goodTitle=[];
//
//     for (var i = 0; i < words.length; i++){
//       var word= words[i];
//       if (isStopWord(word,stopWords)){
//         goodTitle.push(word);
//       } else {
//         word= word[0].toUpperCase()+word.slice(1);
//         goodTitle.push(word);
//       }
//     }
//     return goodTitle.join(" ");
// }
// console.log(titleize("shall we dance?", ["dance"]));


/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.

Examples:

longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1
***********************************************************************/

// function longWordCount(sentence) {
//   count = 0;
//   var words= sentence.split(" ");
//   for (var i =0; i < words.length; i++){
//     var word= words[i];
//     if (word.length > 7){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(longWordCount("one reallylong word"));



/***********************************************************************
Write a function `factorial(n)`, that returns the factorial of the
number `n`. For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

Examples:

factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/

// function factorial(n) {
//   var product=1;
//
//   for (var i =1; i <=n;i++){
//   product*= i;
// }
// return product;
// }
// console.log(factorial(4));


//
// Write a function `lcm(num1, num2)` that returns the lowest number which
// is a multiple of both num1 and num2.
//
// Examples:
//
// lcm(2, 3); // => 6
// lcm(6, 10); // => 30
// lcm(24, 26); // => 312
// ***********************************************************************/
 // we want to add to num1 until is divisable by num2 we are going to use while loop
// function lcm(num1, num2) {
// var i = num1;
// while (true){
//   if (i % num2 === 0){
//     return i;
//   }
//   i += num1;
// }
// }
// console.log(lcm (2,3));


/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
// function hipsterifyWord(word){
//   var vowels= ["a","e","o","u","A","E","o","U"];
//   for (var i = word.length-1; i >= 0; i--){
//     var char= word[i];
//     if (vowels.indexOf(char) !== -1){
//       var hip= word.slice(0,i)+word.slice(i+1);
//       return hip;
//     }
//   }
// }
// console.log(hipsterifyWord("proper"));
// function hipsterfy(sentence) {
// var newSent=[];
//   var words= sentence.split(" ");
//   for (var i = 0; i < words.length; i++){
//     var word = words[i];
//     newSent.push(hipsterifyWord(word));
//   }
//   return newSent.join(" ");
// }
// console.log(hipsterfy("proper tonic panther"));


/***********************************************************************
Write a function `objectSize(obj)` that takes in an object and returns
the number of key-value pairs in the object.

Examples:

var obj1 = {
  name: 'Fido',
  age: '4'
}

objectSize(obj1); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

objectSize(obj2); // => 3
***********************************************************************/
// var obj2 = {
//   name: 'App Academy',
//   course: 'Bootcamp Prep',
//   locations: ['SF', 'NY']
// };
// function objectSize(obj) {
//  var count = 0;
//  for (var k in obj){
//    count ++;
//  }
//  return count;
// }
// console.log(objectSize(obj2));

/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

// function threeInARow(arr) {
// for (var i = 0; i <arr.length; i++ ){
//   var current= arr[i];
//   var next= arr[i+1];
//   var after= arr[i+2];
//   if ( current === next && next === after){
//     return true;
//   }
//
// }
// return false;
// }
// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));



/***********************************************************************
Write a function `threeIncreasing(arr)` that takes in an array of
numbers and returns true if the array contains 3 consecutive numbers in
increasing order. The function should return false otherwise.

Note that the 3 consecutive numbers should be increasing by 1, so the
the second  number is 1 greater than the first, and the third number is
1 greater  than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]); // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]); // => false
***********************************************************************/

// function threeIncreasing(arr) {
// for (var i =0; i < arr.length; i++){
//   var first= arr[i];
//   var second= arr[i+1];
//   var third= arr[i+2];
//   if ((second - first) === 1 && (third - second) === 1){
//     return true;
//   }
// }
// return false;
// }
// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));


/***********************************************************************
Write a function `power(base, exp)` that takes in two numbers, a base
and exponent. The function should return `base` raised to `exp` power.
Solve this using a loop.

For example, power(2, 5) is 2 raised to the 5th power,
which is 2 * 2 * 2 * 2 * 2 = 32

Examples:

power(2, 5); // => 32
power(2, 10); // => 1024
power(9, 2); // => 81
power(9, 3); // => 729
power(11, 0); // => 1
// power(11, 1); // => 11
// ***********************************************************************/
//
// function power(base, exp) {
//   var product=1;
//
//   for (var i = 0; i < exp; i++){
//     product *= base;
//
//   }
// return product;
// }
// console.log(power(2, 5));



/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/
// function reverb(word) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// for (var  i = word.length - 1; i >= 0; i--){
//   var char = word[i];
//   if (vowels.indexOf(char) > -1){
//
//
//   var afterVowel = word.slice(i);
//   return word+ afterVowel;
//   }
// }
// return word;
// }
// console.log(reverb ("running"));


/***********************************************************************
Write a function `countOfLetter(string, char)` that takes in a string
and a character and returns the number of times that character appears
in the string

Examples:

countOfLetter('mississippi', 's'); // => 4
countOfLetter('MISSISSIPPI', 'p'); // => 2
countOfLetter('BOOTCAMP', 't'); // => 1
***********************************************************************/

// function countOfLetter(string, char) {
// var count= 0;
//
// for (var i =0; i < string.length; i++){
//   var ele = string[i];
// if (ele === char){
//   count++;
// }
// }
// return count;
// }
// console.log(countOfLetter('mississippi', 's'));


/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/
// function charCount(str){
//   var count={};
//   for (var i =0; i < str.length; i++){
//     var char = str[i];
//     if (count[char] === undefined){
//       count[char] = 1;
//
//     } else{
//       count[char]++;
//     }
//   }
//   return count;
// }
// console.log(charCount("aaalvin"));
// function countRepeats(string) {
//   var count= charCount(string);
//   var numRepeats= 0;
//    for (var char in count){
//      if (count[char]>1){
//        numRepeats += 1;
//      }
//    }
//    return numRepeats;
// }
// console.log(countRepeats('mississippi'));




// Write a function `pairsToString(arr)` that takes in an array of pairs.
// The function should return a string corresponding to the pairs.
//
// Examples:
//
// var array1 = [
//   ['a', 3],
//   ['b', 1],
//   ['c', 2]
// ];
//
// pairsToString(array1); // => 'aaabcc'
//
// var array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
//
// pairsToString(array2); // => 'food!'
// ***********************************************************************/
// We want to make a newString, we want the first element of the inside array
// to be our char and the second element of the array to be our number
// and itarate through the number and after the itaration add the char to the string!
//
// var array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
// function pairsToString(arr) {
//   var str="";
//    for (var i =0; i < arr.length;i++){
//      var insideArr= arr[i];
//      var char= insideArr[0];
//      var num = insideArr[1];
//      for (var j =0; j < num; j++){
//        str+= char;
//      }
//    }
//    return str;
// }
// console.log(pairsToString(array2));



/***********************************************************************
Write a function `myForEach(arr, cb)` that accepts an array and a
callback. It should call the `cb` for every element of the array,
passing the element, its corresponding index, and the array itself to
the callback. Do not use the built-in `Array.prototype.forEach` method.
The return value is irrelevant.

Examples:

function printInfo(ele, i, arr) {
  console.log(ele, "is at position", i, "in array", arr);
}

myForEach(['a', 'b', 'c'], printInfo); // prints
a is at position 0 in array [ 'a', 'b', 'c' ]
b is at position 1 in array [ 'a', 'b', 'c' ]
c is at position 2 in array [ 'a', 'b', 'c' ]


function printHalf(num) {
  console.log(num / 2);
}

myForEach([10, 50, 120], printHalf); // prints
5
25
60

Note that in the example above, the `printHalf` callback function only
expects a single parameter. If we try to pass more than one parameter to
the function, it will ignore the extras. `printHalf(10, 'what?', false)`
will print 5.
***********************************************************************/
// function printHalf(num) {
//   console.log(num / 2);
// }
// function myForEach(array, cb) {
// for (var i =0; i < array.length; i++){
// cb(array[i], i, array);
// }
//
// }
// console.log(myForEach([10, 50, 120], printHalf));


/***********************************************************************
Write a function `mySelect(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. It should return a new array of all the elements
in the input array `arr` where the callback `cb` returns true.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

mySelect([1,2,3,4,5,6], isEven); // => [ 2, 4, 6 ]


function isNegative(num) {
  return num < 0;
}

mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]

Note that in the examples above, the callback functions only expect a
single paramter, but your `mySelect` function should still try to pass 3
parameters to the callback. This allows us to create a versatile
`mySelect` function that works with various callbacks.
***********************************************************************/
// function isEven(num) {
//   return num % 2 === 0;
// }
//
// function isNegative(num) {
//   return num < 0;
// }
//
// function mySelect(arr, cb) {
//   var newArr =[];
//   for(var i =0; i < arr.length; i++){
//     if(cb(arr[i], i,arr)){
//     newArr.push(arr[i]);
//   }
//   }
//   return newArr;
// }
// console.log(mySelect([12, -14, 4, -10.2, 0], isNegative));


/***********************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback.
It should pass each element, its corresponding index, and the array
itself to the callback. Do not use the built in `Array.prototype.map`
method. It should return an array where each element is the return value
of the callback given the element in the corresponding position. See
the examples.

Examples:

function doubler(num) {
  return num * 2;
}

myMap([2, 4, 6, 1], doubler); // => [ 4, 8, 12, 2 ]

myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]
***********************************************************************/
// function doubler(num) {
//   return num * 2;
// }
// function myMap(arr, cb) {
//   var newArr=[];
//   for (var i =0; i < arr.length; i++){
//     var result= cb(arr[i], i, arr);
//     newArr.push(result);
//   }
//   return newArr;
// }
// console.log(myMap([2, 4, 6, 1], doubler));


/***********************************************************************
Write a function `myEvery(arr, cb)` that takes in an array and a
callback. The function should call the cb for every element of the array.
The function should return true only if the callback returns true when
passed in every the element of the array. The function should return
false otherwise.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

myEvery([10, 4, 8, 20], isEven); // => true
myEvery([2, 2, 10, 11, 12], isEven); // => false
***********************************************************************/

// function isEven(num) {
//   return num % 2 === 0;
// }
//
// function myEvery(arr, cb) {
// for (var i =0; i < arr.length; i++){
//   if (cb(arr[i]) === false){
//     return false;
//   }
// }
// return true;
// }
// console.log(myEvery([10, 4, 8, 20], isEven));
// console.log(myEvery([2, 2, 10, 11, 12], isEven));


/***********************************************************************
Write a function `mySome(arr, cb)` that takes in an array and a callback.
The function should call the callback for every element of the array.
The function should return true if the callback returns true when passed
in any element of the array. The function should return false otherwise.

Example:

function isNegative(num) {
  return num < 0;
}

mySome([10, -10, 11, 4], isNegative); // => true
mySome([-10, -10, -11, -4], isNegative); // => true
// mySome([2, 4, 6, 8], isNegative); // => false
// ***********************************************************************/
// function isNegative(num) {
//   return num < 0;
// }
// function mySome(arr, cb) {
// for (var i =0; i < arr.length; i++){
//   if (cb(arr[i]) === true){
//     return true;
//   }
//
// }
// return false;
// }
// console.log(mySome([10, -10, 11, 4], isNegative));
// console.log(mySome([-10, -10, -11, -4], isNegative));
// console.log(mySome([2, 4, 6, 8], isNegative));



/***********************************************************************
Write the function `countAdjacentSums(arr, n)` that takes an array and
number. It should count the number of times that two adjacent numbers in
an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
***********************************************************************/

// function countAdjacentSums(arr, n) {
//   var count=0;
//   for (var i = 0; i < arr.length; i++){
//     var current = arr[i];
//     var after = arr[i+1];
//
//     if (current + after === n){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countAdjacentSums([1, 5, 1], 6));
// console.log(countAdjacentSums([7, 2, 4, 6], 7));
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));



/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); //=> 0
signFlipCount([-12, 0, -3, -5]); //=> 0
signFlipCount([-12, 10, -3, -5]); //=> 2
signFlipCount([1, -2, -3, -4]); //=> 1
signFlipCount([-1, 11.3, -3, 100]); //=> 3
***********************************************************************/

// function signFlipCount(numbers) {
//   var count=0;
//
//   for (var i =0; i < numbers.length; i++){
//   var current=numbers[i];
//   var after = numbers[i+1];
//
//   if ((current > 0 && after < 0)||(current < 0 && after > 0)){
//     count++;
//   }
//
//   }
//   return count;
// }
// console.log(signFlipCount([5, 6, 10, 3]));
// console.log(signFlipCount([-12, 0, -3, -5]));
// console.log(signFlipCount([-12, 10, -3, -5]));
// console.log(signFlipCount([1, -2, -3, -4]));
// console.log(signFlipCount([-1, 11.3, -3, 100]));


/***********************************************************************
Write a function `powerSequence(base, length)` that takes in two numbers,
`base` and `length`. The function should return an array containing a
power sequence with the given `length`. Assume that the `length` is at
least 1.

The first number of a power sequence begins with `base`. The second
number of the sequence is the product between the first number and the
base. The third number of the sequence is the product between the second
number and the base...

Examples:

powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3); // => [ 8, 64, 512 ]
***********************************************************************/
//  i need to loop through the length starting from 1 and end to the length;
// If i use math.pow alone it just gives me the last result of the array!
//
// function powerSequence(base, length) {
// var newArr=[];
// for (var i = 1; i <= length; i++){
//   var result= Math.pow(base,i);
//   newArr.push(result);
// }
// return newArr;
// }
// console.log(powerSequence(3, 4));
// console.log(powerSequence(2, 6));
// console.log(powerSequence(8, 3));



/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

// function collapseString(str) {
//   var collapsed="";
//   for (var i=0 ; i< str.length; i++){
//     var char = str[i];
//       if(char !== collapsed[collapsed.length-1]){
//         collapsed+= char;
//       }
//   }
//   return collapsed;
// }
// console.log(collapseString('apple'));
// console.log(collapseString('AAAaalviiiiin!!!'));
// console.log(collapseString('hello   app academy'));



/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.

Examples:

oddWordsOut('go to the store and buy milk'); // => 'go to milk'
oddWordsOut('what is the answer'); // => 'what is answer'
***********************************************************************/
//  first we need to make an empty array
//  devide the sentence to words
//  count the char in the words.(length of the word)
//  if count % 2 ===0 push them into the new array
// //  return the newArr.join
// function oddWordsOut(sentence) {
//   var newArr=[];
//   var words= sentence.split(" ");
//
//     for (var i =0; i < words.length; i++){
//       var word= words[i];
//       if (word.length % 2 === 0){
//         newArr.push(word);
//       }
//     }
//   return newArr.join(" ");
// }
// console.log(oddWordsOut('go to the store and buy milk'));
// console.log(oddWordsOut('what is the answer'));


/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/
//
// function hasAllVowels(str) {
// var vowels=["a", "e", "i", "o", "u"];
//    for (var i =0; i < vowels.length; i++){
//      if (str.indexOf(vowels[i]) === -1){
//        return false;
//      }
//    }
//    return true;
// }
// console.log(hasAllVowels('have you gone biking?')); // => true
// console.log(hasAllVowels('get out of the way, silly')); // => true
// console.log(hasAllVowels('bootcamp prep')); // => false
// console.log(hasAllVowels('hello world'));


/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/
//  what we need to do is to count the char which is similar to the favourit letter
//  decomposit the function check word and char first than sentence and fave


// function letterCount(word,char){
//   var count=0;
//     for (var i =0; i < word.length; i++){
//       var ele= word[i];
//       if (ele === char){
//         count++;
//       }
//     }
//   return count;
// }
// function favoriteWord(favoriteLetter, sentence) {
//   var fave ="";
//   var words= sentence.split(" ");
//
//   for (var i = 0; i < words.length; i++){
//     var word= words[i];
//     if (letterCount(fave,favoriteLetter) < letterCount(word,favoriteLetter)){
//       fave = word;
//     }
//   }
//   return fave;
// }
// console.log(favoriteWord('p', 'sinful caesar sipped his snifter'));
// console.log(favoriteWord('a', 'sinful caesar sipped his snifter'));
// console.log(favoriteWord('s', 'sinful caesar sipped his snifter'));
// console.log(favoriteWord('x', 'sinful caesar sipped his snifter'));
/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/


// function mindPsAndQs(str) {
//   var currentCount=0;
//   var longestCount=0;
//
//   for (var i =0; i < str.length; i++){
//     var char = str[i];
//     if (char === "P" || char === "Q"){
//       currentCount++;
//       if (currentCount > longestCount){
//         longestCount = currentCount;
//       }
//     }else {
//       currentCount = 0;
//     }
//   }
//   return longestCount;
// }
// console.log(mindPsAndQs('BOOTCAMP')); // => 1
// console.log(mindPsAndQs('APCDQQPPC')); // => 4
// console.log(mindPsAndQs('PQPQ')); // => 4
// console.log(mindPsAndQs('PPPXQPPPQ')); // => 5



/***********************************************************************
Write a function commonFactors(num1, num2) that returns an array that
contains the common factors between both numbers. A factor is a number
that divides another number with no remainder.

Examples:

commonFactors(12, 50); // => [ 1, 2 ]
commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
commonFactors(11, 22); // => [ 1, 11 ]
commonFactors(45, 60); // => [ 1, 3, 5, 15 ]
***********************************************************************/

// function commonFactors(num1, num2) {
//   var max;
//   if (num1 < num2){
//     max = num1;
//   }else {
//     max = num2;
//   }
//   var newArr=[];
//
//    for (var i = 1; i <= max; i++){
//      if (num1 % i === 0 && num2 % i === 0){
//        newArr.push(i);
//      }
//  }
//  return newArr;
// }
// console.log(commonFactors(12, 50)); // => [ 1, 2 ]
// console.log(commonFactors(6, 24)); // => [ 1, 2, 3, 6 ]
// console.log(commonFactors(11, 22)); // => [ 1, 11 ]
// console.log(commonFactors(45, 60)); // => [ 1, 3, 5, 15 ]


/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]
***********************************************************************/
// function isPrime(n){
//    if (n < 2){
//      return false;
//    }
//    for (var i =2; i <n; i++){
//      if (n % i === 0){
//        return false;
//      }
//    }
//    return true;
// }
//
// function commonPrimeFactors(num1, num2) {
//   var newArr=[];
//     var max;
//
//   if (num1 < num2){
//     max= num1;
//   } else {
//     max = num2;
//   }
//   for (var i =1; i <= max; i++){
//
//     if (num1 % i === 0 && num2 % i === 0){
//       if (isPrime(i)){
//         newArr.push(i);
//       }
//     }
//   }
//   return newArr;
// }
// console.log(commonPrimeFactors(12, 50)); // => [ 2 ]
// console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ]
// console.log(commonPrimeFactors(11,22)); // => [ 11 ]
// console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]




/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.

Example:

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

matchingPairs; //=> {
  one: "one",
  three: "three"
}
***********************************************************************/
// var obj = {
//   one: "one",
//   two: "something else",
//   three: "three",
//   four: "another thing."
// };
//
// function isEqual(a, b) {
//   return a === b;
// }
// function objectSelect(obj, callback) {
//    var newObj={};
//    for (var k in obj){
//     var val= obj[k];
//     if (callback(k,val)){
//       newObj[k] = val;
//     }
//    }
//    return newObj;
// }
// console.log(objectSelect(obj,isEqual));



/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/

// function splitHalfArray(array) {
//   var midIndex= Math.floor(array.length /2);
//   if (array.length % 2 === 0){
//     return [array.slice(0,midIndex), array.slice(midIndex)];
//   } else {
//     return [array.slice(0,midIndex), array.slice(midIndex+1)];
//
//   }
// }
// console.log(splitHalfArray([1, 2, 3, 4, 5]));
// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));



/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/
//
// function threeUniqueVowels(string) {
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// var count= 0;
//   for (var i = 0; i< vowels.length; i++){
//     var vowel= vowels[i];
//     if(string.indexOf(vowel)> -1){
//       count++;
//     }
//
//
//   }
//   return (count >= 3);
// }
// console.log(threeUniqueVowels('delicious'));
// console.log(threeUniqueVowels('bootcamp prep')); // => true
// console.log(threeUniqueVowels('bootcamp')); // => false
// console.log(threeUniqueVowels('dog')); // => false
// console.log(threeUniqueVowels('go home')); // => false


/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

// function vowelShift(sentence) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var newSent="";
//     for (var i =0; i < sentence.length; i++){
//       var char = sentence[i];
//       var vowelIndex=  vowels.indexOf(char);
//       if (vowelIndex > -1){
//         var nextVowelIndex = (vowelIndex+1) % 5;
//         newSent += vowels[nextVowelIndex];
//       }else {
//         newSent += char;
//       }
//     }
//     return newSent;
// }
//
//
// console.log(vowelShift('bootcamp')); // => 'buutcemp'
// console.log(vowelShift('hello world')); // => 'hillu wurld'
// console.log(vowelShift('on the hunt')); // => 'un thi hant'



/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
***********************************************************************/

// function moreDotLessDash(str) {
//   var dotCount= 0;
//   var dashCount= 0;
// for (var i =0; i < str.length; i++){
//   var char= str[i];
//   if(char === "."){
//     dotCount++;
//   }
//   if (char === "-"){
//     dashCount++;
//   }
// }
// if (dotCount > dashCount){
//   return true;
// }
// return false;
// }
// console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
// console.log(moreDotLessDash('.-.-.')); // => true
// console.log(moreDotLessDash('.-')); // => false
// console.log(moreDotLessDash('..--')); // => false



/***********************************************************************
Write a function `isSorted(array)` that takes in an array of numbers and
returns true if the elements of the array are in increasing sorted order
and returns false if the elements are not in increasing order.

Examples:

isSorted([3, 5, 11, 9, 15, 16]); // => false
isSorted([3, 5, 11, 13, 15, 16]); // => true
isSorted([9, 4, 1, 5, 6, 2]); // => false
isSorted([1, 2, 4, 5, 6, 9]); // => true
***********************************************************************/

// function isSorted(array) {
// for (var i =0; i < array.length; i++){
//   var current = array[i];
//   var next= array[i+1];
//   if (current > next){
//     return false;
//   }
//
// }
// return true;
// }
// console.log(isSorted([3, 5, 11, 9, 15, 16])); // => false
// console.log(isSorted([3, 5, 11, 13, 15, 16])); // => true
// console.log(isSorted([9, 4, 1, 5, 6, 2])); // => false
// console.log(isSorted([1, 2, 4, 5, 6, 9])); // => true



/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/

// function toFeet(distances) {
//   var newArr=[];
//
//   for (var i = 0; i < distances.length; i++){
//     var distance= distances[i];
//     var parts= distance. split(" ");
//     var num= parts[0];
//     var measure= parts[1];
//     if (parts[i]=== "yards"){
//       var res= (num * 3)+"feet" ;
//       newArr.push(res);
//
//     }else {
//       newArr.push(distance);
//     }
//   }
//   return newArr;
// }
// var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
// console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
//
// var arr2 = ['2 yards', '3 feet', '10 yards'];
// console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]



/***********************************************************************
Write a function `smallestPrime(array)` that takes in an array of
numbers and returns the smallest prime number in the array.

HINTS:
- start by creating an `isPrime` helper function
- the smallest prime number is 2

Examples:

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
smallestPrime(arr1); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
smallestPrime(arr2); // => 7

var arr3 = [];
smallestPrime(arr3); // => null

var arr4 = [4, 6, 8, 10];
// smallestPrime(arr4); // => null
// ***********************************************************************/
// function isPrime(num){
//   if (num < 2){
//     return false;
//   }
//   for (var i =2; i < num; i++){
//     if (num % i === 0){
//       return false;
//     }
//   }
//   return true;
// }
//
// function smallestPrime(array) {
//   smallest=null;
//  for (var i =0; i < array.length ;i++ ){
//    var ele= array[i];
//    if (isPrime(ele) && (ele < smallest || smallest === null)){
//      smallest = ele;
//    }
//  }
//  return smallest;
// }
// var arr1 = [ 6, 7, 12, 11, 5, 4 ];
// console.log(smallestPrime(arr1)); // => 5
//
// var arr2 = [11, -7, 7, 8, 6, 10];
// console.log(smallestPrime(arr2)); // => 7
//
// var arr3 = [];
// console.log(smallestPrime(arr3)); // => null
//
// var arr4 = [4, 6, 8, 10];
// console.log(smallestPrime(arr4)); // => null




// ***********************************************************************
// Galvanize question standard 2 Project Euler

// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,
// theSumSuare function(n)
// 12^2 + 22^2 + ... + 102^2 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


// function sumSquare (n){
//   var sum=0;
//   for (var i=1; i <= n; i++){
//     var square= Math.pow(i,2);
//     sum+= square;
//   }
//   return sum;
// }
// console.log(sumSquare(10));
// //  this function will return the sum of all suared numbers no mtter if the number is 10 or 100
// // by itarating through the numbers from 1 to n we will get the number.
// // squared the number by Math.pow method
// function squareSum(n){
//   var sum=0;
//   for (var i=1; i <=n;i++){
//     sum+=i;
//
//   }
//   var result= Math.pow(sum,2);
//   return result;
// }
// console.log(squareSum(10));
// indicating sum to be able to add it to it as we know sum is the adding all
// the volume together.
//  iterating through the numbers strting from 1 to N
// after that we add the i to the sum to get the result of the sum of the values.
// get the power of the sum to 2




//

// Write a function safeSpeedChange(speeds) that takes in an array of speed
// numbers. The function should return true if consecutive speeds in the
// array differ by no more than 5, false otherwise.
//
// Examples:
//
// safeSpeedChange([3, 3, 2, 6, 8, 7]); //=> true
// safeSpeedChange([3, 3, 2, 6, 12, 10]); // => false
// safeSpeedChange([8, 10, 4, 3, 2]); // => false
// ***********************************************************************/

// function safeSpeedChange(speeds) {
//
//   for (var i =0; i < speeds.length; i++){
//     var currentS= speeds[i];
//     var secondS= speeds[i+1];
//     var result =(secondS - currentS);
//     if (Math.abs(result) > 5){
//       return false;
//     }
//
//   }
//   return true;
// }
// console.log(safeSpeedChange([3, 3, 2, 6, 8, 7]));
// console.log(safeSpeedChange([3, 3, 2, 6, 12, 10]));
// console.log(safeSpeedChange([8, 10, 4, 3, 2]));


/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
***********************************************************************/

// function isUniqueAnagram(word1, word2) {
//
//   if (word1.length !== word2.length){
//     return false;
//   }
//   for(var i =0; i < word1.length; i++){
//     var char1= word1[i];
//     if(word2.indexOf(char1) === -1){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isUniqueAnagram('iceman', 'cinema')); // => true)
// console.log(isUniqueAnagram('abcd', 'adcb')); // => tru)e
// console.log(isUniqueAnagram('abcd', 'adxb')); // => fal)se
// console.log(isUniqueAnagram('abcd', 'abcdx')); // => fals)e



/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
// ***********************************************************************/
// function indexOfLastVowels(word){
//     var vowels= ["a","e","o","i","u"];
//   for (var i = word.length-1; i >=0; i--){
//     if (vowels.indexOf(word[i]) > -1){
//       return i;
//     }
//   }
// }
// console.log(indexOfLastVowels("proper"));
//
// function reveHipWord(word){
//   var vowels= ["a","e","o","i","u"];
//   var lastVowelIdx= indexOfLastVowels(word);
//   newWord="";
//     for(var i =0; i < word.length; i++){
//       var char = word[i];
//
//       if (vowels.indexOf(char) === -1 || i === lastVowelIdx){
//         newWord+= char;
//       }
//     }
//   return newWord;
// }
//
// function reverseHipsterfy(sentence) {
//   var newWord=[];
//   var words= sentence. split(" ");
//
//   for ( var i =0; i < words.length; i++){
//     var word= words[i];
//     var hipWord=  reveHipWord(word);
//     newWord.push(hipWord);
//
//   }
//   return newWord.join(" ");
// }
// console.log(reverseHipsterfy("towel flicker banana"));


/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/
// function handScore(string){
//
//   var objValue={
//     "J" : 1,
//     "Q": 2,
//     "K" : 3
//   };
//   var points=0;
//
//     for (var i = 0; i < string.length; i++){
//       var card= string[i];
//       points += objValue[card];
//     }
//     return points;
// }
// function winningHand(hand1, hand2) {
// var score1= handScore(hand1);
// var score2 = handScore(hand2);
//
//   if (score1 > score2){
//     return hand1;
//   } else if (score2 > score1){
//     return hand2;
//   } else {
//   return  "Draw";
//   }
// }
// console.log(winningHand('JQKJ', 'QQJJ'));

/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/

// function shiftChars(word, num) {
//   var alphabet = [
//     'a','b','c','d','e','f','g','h','i','j','k','l','m',
//     'n','o','p','q','r','s','t','u','v','w','x','y','z'
//   ];
//   var newWord="";
//
//   for (var i =0; i < word.length; i++){
//     var char= word[i];
//     var index= alphabet.indexOf(char);
//     var newIndex= (index+ num) % 26;
//     newWord += alphabet[newIndex];
//   }
//   return newWord;
// }
// console.log(shiftChars('able', 1)); // => 'bcmf'
// console.log(shiftChars('apple', 2)); //=> 'crrng'
// console.log(shiftChars('bootcamp', 3)); //=> 'errwfdps'
// console.log(shiftChars('zebra', 5)); //=> 'ejgwf'


/***********************************************************************
Write a function `uncompressString(str)` that takes in a "compressed"
string and returns the "uncompressed" version of the string. In the
input `str`, every letter is followed by a single digit number that
specifies how many times that character is repeated.

HINT: Use the built-in `Number` function to turn the string
representation of a number into a number
Number('42'); // => 42;

Examples:

uncompressString('a2b4c1'); // => 'aabbbbc'
uncompressString('b1o2t1'); // => 'boot'
uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
***********************************************************************/

// function uncompressString(str) {
// var newStr="";
//
//   for (var i =0; i < str.length;i++){
//       var char = str[i];
//       var num= Number(str[i+1]);
//
//       for(var j = 0; j < num; j++){
//         newStr += char;
//       }
//   }
//   return newStr;
// }
//
// console.log(uncompressString('a2b4c1')) // => 'aabbbbc'
// console.log(uncompressString('b1o2t1')) // => 'boot'
// console.log(uncompressString('x3y1x2z4')); // => 'xxxyxxzzzz'


/***********************************************************************
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Solve this without recursion.
If you don't know what recursion is, we'll see it tomorrow!

Examples:

fibonacci(0); // => []
fibonacci(1); // => [ 1 ]
fibonacci(2); // => [ 1, 1 ]
fibonacci(3); // => [ 1, 1, 2 ]
fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
***********************************************************************/

// function fibonacci(n) {
//
//   if( n === 0){
//     return [];
//   } else if (n === 1){
//     return[1];
//   }
//   var seq= [1,1];
//
//    for (var i = 0; i < n; i++){
//      var last = seq[seq.length-1];
//      var secondLast= seq[seq.length-2];
//      var next = last + secondLast;
//      seq.push(next);
//    }
//  return seq;
// }


/***********************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the
greatest common factor between num1 and num2. This means that the
function should return the largest number that divides both num1 and
num2.

Examples:

greatestCommonFactor(6, 10); // => 2
greatestCommonFactor(10, 15); // => 5
greatestCommonFactor(4, 7); // => 1
greatestCommonFactor(4, 8); // => 4
greatestCommonFactor(45, 30); // => 15
***********************************************************************/
//
// function greatestCommonFactor(num1, num2) {
//   var max;
//   if (num1 < num2){
//     max=num1;
//   }
//     for (var i = max; i >= 1; i--){
//       if (num1 % i === 0 && num2 % i ===0){
//         return i;
//       }
//     }
// }
// console.log(greatestCommonFactor(6, 10)); // => 2
// console.log(greatestCommonFactor(10, 15)); // => 5
// console.log(greatestCommonFactor(4, 7)); // => 1
// console.log(greatestCommonFactor(4, 8)); // => 4
// console.log(greatestCommonFactor(45, 30)); // => 15



/***********************************************************************
Write a function removeNthLetter(word, n) that takes in a string and an
index `n`. The function should return that word with the character at
index `n` removed.

Examples:

removeNthLetter('bootcamp', 0); // => 'ootcamp'
removeNthLetter('bootcamp', 6); // => 'bootcap'
removeNthLetter('bootcamp', 4); // => 'bootamp'
removeNthLetter('computer', 3); // => 'comuter'
***********************************************************************/

// function removeNthLetter(word, n) {
// return word.slice(0,n)+ word.slice(n+1);
// }
//
//
// console.log(removeNthLetter('bootcamp', 0)); // => 'ootcamp'
// console.log(removeNthLetter('bootcamp', 6)); // => 'bootcap'
// console.log(removeNthLetter('bootcamp', 4)); // => 'bootamp'
// console.log(removeNthLetter('computer', 3)); // => 'comuter'


/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/
//
// function alternateCase(str) {
//   var newStr="";
// for (var i = 0; i < str.length; i+=2){
//   if (i % 2 === 0){
//     newStr += str[i].toUpperCase();
//   } else {
//     newStr += str[i].toLowerCase();
//   }
// }
// return newStr;
// }
// console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
// console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
// console.log(alternateCase('hello')); // => 'HeLlO'
// function canDrive(age){
//   if (age >= 16){
//     return true;
//   } else {
//     return false;
//   }
// }
// var canIdrive = canDrive(15);
// console.log(canIdrive);
//
// function wordsToSentence(words) {
// var string="";
// for (var i =0; i < words.length; i++){
// string += words[i]+" ";
// }
// return string;
// }
// console.log(wordsToSentence(["hello","world"]));


// function largestNumber(numbers) {
//   // numbers is an array of integers
//   // return the largest integer
//   var largest=null;
//   for (var i =0; i < numbers.length; i++){
//     var ele= numbers[i];
//     if (ele > largest || largest === null){
//       largest = ele;
//     }
//   }
//   return largest;
//
// }
// console.log(largestNumber([1,2,3,4,5]));


/***********************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the
greatest common factor between num1 and num2. This means that the
function should return the largest number that divides both num1 and
num2.

Examples:

greatestCommonFactor(6, 10); // => 2
greatestCommonFactor(10, 15); // => 5
greatestCommonFactor(4, 7); // => 1
greatestCommonFactor(4, 8); // => 4
greatestCommonFactor(45, 30); // => 15
***********************************************************************/

// function greatestCommonFactor(num1, num2) {
//   var max;
// if(num1 < num2){
//   max = num1;
// }
// if(num2 < num1){
//   max= num2;
// }
// for (var i = max; i >=1; i--){
//   if (num1 % i === 0 && num2 % i === 0){
//     return i;
//   }
// }
// }
// console.log(greatestCommonFactor(6, 10)); // => 2
// console.log(greatestCommonFactor(10, 15)); // => 5
// console.log(greatestCommonFactor(4, 7)); // => 1
// console.log(greatestCommonFactor(4, 8)); // => 4
// console.log(greatestCommonFactor(45, 30)); // => 15


/***********************************************************************
Write a function removeNthLetter(word, n) that takes in a string and an
index `n`. The function should return that word with the character at
index `n` removed.

Examples:

removeNthLetter('bootcamp', 0); // => 'ootcamp'
removeNthLetter('bootcamp', 6); // => 'bootcap'
removeNthLetter('bootcamp', 4); // => 'bootamp'
removeNthLetter('computer', 3); // => 'comuter'
***********************************************************************/

// function removeNthLetter(word, n) {
// return word.slice(0,n)+ word.slice(n+1);
//
// }


/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.

Examples:

alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
alternateCase('hello'); // => 'HeLlO'
***********************************************************************/

// function alternateCase(str) {
// var newStr="";
// for (var i =0; i < str.length;i++){
//   if (i % 2 === 0){
//     newStr+= str[i].toUpperCase();
//   }else {
//     newStr+= str[i].toLowerCase();
//   }
// }
// return newStr;
// }
// console.log(alternateCase('BOOTCAMPPREP'));



/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
// ***********************************************************************/
// function vowelCount(word){
//   var vowels = ["a","e","i","o","u"];
//   var count = 0;
//   for (var i = 0; i < word.length; i++){
//     if(vowels.indexOf(word[i]) > -1){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowelCount("manuel"));
// function nickname(name) {
// var str;
//  for (var i =0; i < name.length;i++){
//    var char = name[i];
//    if (vowelCount(char) === 2){
//      break;
//
//    }
//  }
//  str = name.slice(0, i+1).toUpperCase();
//  return str+"-"+str;
//  // return str;
// }


// console.log(nickname('manuel')); // => 'MANU-MANU'



/***********************************************************************
Write a function tallyCount(array) that takes in an array of strings.
The function should return an object containing a tally count of the
strings in the array.

Examples:

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }

var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }
// ***********************************************************************/
//
// function tallyCount(arr) {
//
// }




/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
// oddOnesOut(arr2); // => [ 'fish' ]
// ***********************************************************************/
// function elementCount(array){
//   var newObj={};
//
//   for (var i =0; i < array.length; i++){
//     var ele= array[i];
//     if (newObj[ele] === undefined){
//       newObj[ele] = 1;
//     } else {
//       newObj[ele]++;
//     }
//   }
//   return newObj;
//
// }
// function oddOnesOut(array) {
//    var newArr=[];
//    var count = elementCount(array);
//    for (var ele in count){
//      if (count[ele] % 2 === 0){
//        newArr.push(ele);
//      }
//    }
//    return newArr;
// }
// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog'];
// console.log(oddOnesOut(arr2)); // => [ 'fish' ]

//
// function LetterChanges(str){
//   var vowels=["a", "e", "i", "o", "u"];
//   var newStr="";
//   for (var i =0; i < str.length;i++){
//     index= str.charCodeAt(i);
//     var char;
//     if (index === 122 || index === 90){
//       char = "A";
//     }else if ((index >= 65 && index < 90)|| (index >=97 && index < 122)){
//       index++;
//       char = String.fromCharCode(index);
//     }else {
//       char = String.fromCharCode(index);
//     }
//     if (vowels.indexOf(char.toLowerCase()) !== -1) {
//         newStr += char.toUpperCase();
//     } else {
//       newStr += char;
//       }
//   }
//   return newStr;
// }
//
//
// function LetterChanges(str){
// var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// var newStr="";
//
// for (var i =0; i < str.length; i++){
//   var char =str[i];
//   console.log(char);
//   var index = alphabet.indexOf(char);
//   console.log(index);
//   var nextIdx= (index+1) % 26;
//   newStr+= alphabet[nextIdx];
// }
//
// return newStr;
// }
// console.log(LetterChanges("hello"));



// function power(base,exp){
//   var product=1;
//   if(base === 1){
//     return 1;
//   }
//   for (var i = 0; i < exp; i++){
//     product *= base;
//   }
//   return product;
// }
// console.log(power(2,5));

// function power(base,exp){
//   if(exp === 0){
//     return 1;
//   }
//   return base * power(base,exp-1);
//
// }
// console.log(power(2,5));


// function fib(n){
//   if (n ===1 || n === 2){
//     return 1;
//   } else {
//   return fib(n-1) + fib(n-2);
// }
// }
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// function countEle(array){
//   var count={};
//
//     for (var i =0; i < array.length; i++){
//       var ele= array[i];
//       if (count[ele] === undefined){
//         count[ele] = 1;
//       } else {
//         count[ele]++;
//       }
//     }
//     return count;
// }
//
//
// function elementCount(array){
//   var count= countEle(array);
//   var newArr=[];
//   for (var key in count){
//     if (count[key] % 2 === 0){
//       newArr.push(key);
//     }
//   }
//   return newArr;
// }
// var arr1= ["fish","fish","cat","dog","cat","cat","dog","fish","fish"];
// console.log(elementCount(arr1));


//
// function countUp(num){
//   if (num >= 10){
//     return "done";
//   }
//   else {
//     console.log(num);
//     countUp(num +1);
//   }
// }
// console.log(countUp(20 ));
// function longestBigram(sentence) {
//   var longest="";
//   var words= sentence.split(" ");
//   for (var i =0; i < words.length;i++){
//     var word1= words[i];
//     var word2= words[i+1];
//     var bigram = word1 + " "+word2;
//     if (bigram.length > longest.length){
//       longest = bigram;
//     }
//   }
//   return longest;
// }



/***********************************************************************
Write a function `opposingSums(array)` that takes in an array of numbers
and returns a new array containing half the number of elements. Assume
the `array` contains an even number of elements.

The first element of the new array should be the sum between the 1st and
last element of the original `array`. The second element of the new array
should be the sum between the 2nd and 2nd to last element. The third
element of the new array should be the sum between the 3rd and 3rd to
last element... etc.

Examples:

var arr1 = [3, 2, 11, 4, 7, 9];
opposingSums(arr1); // => [ 12, 9, 15 ]

var arr2 = [1, 2, 3, 4]
opposingSums(arr2); // => [ 5, 5 ]
// ***********************************************************************/
//
// function opposingSums(array) {
// var newArr=[];
// var half= array.length / 2;
// for (var i = 0; i < half; i++ ){
//   var num1 = array[i];
//   var num2 = array[array.length -1 -i];
//   console.log(num1);
//   newArr.push(num1+num2);
// }
// return newArr;
// }
// // var arr1 = [3, 2, 11, 4, 7, 9];
// // console.log(opposingSums(arr1));
// function additionSequence(array, sequence) {
//  var newArr=[];
//  var arrayNum;
//  var seqNum;
//    for (var i =0; i < array.length; i++){
//      arrayNum= array[i];
//
//        seqNum= sequence[i % sequence.length];
//        var sum = (arrayNum+seqNum);
//        newArr.push(sum);
//
//
//    }
//
//    return newArr;
//  }
//
//    var arr2 = [1, 2, 3, 4, 5, 6, 7];
//    var seq2 = [1, 2];
// console.log(additionSequence(arr2,seq2));



// function reverseString(str){
//   var newStr="";
// for (var i = str .length-1; i >= 0; i--){
//   var char= str[i];
//   newStr+= char;
// }
// return newStr;
// }
// console.log(reverseString("hi"));


/***********************************************************************
A 1-dimensional array is also known as a flat array.
Write a function `flatten(data)` that accepts a single parameter. The
function should take in an array of any dimension and return the 1-dimensional
version of that array. Solve this recursively.

HINTS:
 - if the parameter is not an array, then we have reached the base case
 - we can use `Array.isArray(data)` to check if data is an array:
      Array.isArray([1,2,3]); //=> true
      Array.isArray(42); //=> false

EXAMPLES:
var array1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
flatten(array1); // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

var array2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
flatten(array2); // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

flatten('base case'); // => [ 'base case' ]

ANOTHER HINT:
From the last example, you may be confused. We said that the function takes
in an array as a parameter, but we passed it a string?!?
If data is not an array, then we can consider it as a 0-dimensional array.

    0-dimensional array: 42
    1-dimensional array: [42]
    2-dimensional array: [[42]]
    3-dimensional array: [[[42]]]

This line of thinking will help you frame the recursion
in your brain. (programmer.mind === 'blown')
***********************************************************************/

// function flatten(data) {
// if (!Array.isArray(data)){
//   return [data];
// }
// var flattened=[];
//   for (var i =0; i < data.length; i++){
//     var ele= data[i];
//     var flat= flatten(ele);
//     flattened = flattened.concat(flat);
//   }
//   return flattened;
// }
// var array1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]];
// console.log(flatten(array1));


//
// function isUniqueAnagram(word1, word2) {
//
// 	for (var i =0; i < word1.length; i++){
//     var char1= word1[i];
//     if (word2.indexOf(char1) === -1){
//       return false;
//     }
//   }
//   return true;
// }


/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.

Examples:

var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

// function divisibleByThreePairSum(array) {
//   var pairs=[];
//   for (var i =0; i < array.length; i++){
//     var ele1= array[i];
//     for (var j =i+1; j < array.length; j++){
//       var ele2= array[j];
//       var sum = ele1+ele2;
//       if (sum % 3 === 0){
//         pairs.push([i,j]);
//       }
//     }
//   }
// return pairs;
// }
// console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));


/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/

// function shiftChars(word, num) {
//   var alphabet = [
//     'a','b','c','d','e','f','g','h','i','j','k','l','m',
//     'n','o','p','q','r','s','t','u','v','w','x','y','z'
//   ];
//
//   var newStr="";
//   for(var i = 0; i < word.length; i++){
//     var char = word[i];
//     var oldIndex= alphabet.indexOf(char);
//     var newIdx= (oldIndex+ num) % 26;
//     newStr += alphabet[newIdx];
//   }
//   return newStr;
// }
// function myNumber(string){
//   var value= parseFloat(string);
//   return value;
// }
// console.log(myNumber("12.3"));



/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/
// function handScore(string){
//   var value={
//     J : 1,
//     Q : 2,
//     K : 3
//   };
//   var score = 0;
//   for (var i = 0; i < string.length; i++){
//     var card = string[i];
//     score += value[card];
//
//   }
//   return score;
// }
// function winningHand(hand1, hand2) {
//   var score1= handScore(hand1);
//   var score2= handScore(hand2);
//   if (score1 > score2){
//     return hand1;
//   } else if (score2 > score1){
//     return hand2;
//   } else {
//     return "DRAW";
//   }
// }
// console.log(winningHand('JQKJ', 'QQJJ'));



/***********************************************************************
Write a function `mySome(arr, cb)` that takes in an array and a callback.
The function should call the callback for every element of the array.
The function should return true if the callback returns true when passed
in any element of the array. The function should return false otherwise.

Example:

function isNegative(num) {
  return num < 0;
}

mySome([10, -10, 11, 4], isNegative); // => true
mySome([-10, -10, -11, -4], isNegative); // => true
mySome([2, 4, 6, 8], isNegative); // => false
***********************************************************************/
// function isNegative(num) {
//   return num < 0;
// }
// function mySome(arr, cb) {
// for (var i =0; i < arr.length; i++){
//   if(cb(arr[i]) !== -1){
//     return true;
//   } else {
//     return false;
//   }
// }
// }
// console.log(mySome([10, -10, 11, 4], isNegative)); // => true);



/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.'); // => true
moreDotLessDash('.-.-.'); // => true
moreDotLessDash('.-'); // => false
moreDotLessDash('..--'); // => false
// ***********************************************************************/
//
// function moreDotLessDash(str) {
//   var countDash=0;
//   var countDot=0;
//
//     for (var i = 0; i < str.length; i++){
//       var char = str[i];
//       if(char === "."){
//         countDot++;
//       } else if (char === "-"){
//         countDash++;
//       }
//     }
//     if(countDot > countDash){
//       return true;
//     } else {
//       return false;
//     }
//
// }
// console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true));



// /***********************************************************************
// Write a function `moreDotLessDash(str)` that takes in a string and
// returns the true if the string contains more dots ('.') than dashes
// ('-'), false otherwise.
//
// Examples:
//
// moreDotLessDash('2-D arrays are fun. I think.'); // => true
// moreDotLessDash('.-.-.'); // => true
// moreDotLessDash('.-'); // => false
// moreDotLessDash('..--'); // => false
// *********

//
// function moreDotLessDash(str){
//   var dotCount=0;
//   var dashCount=0;
//   for(var i =0; i < str.length; i++){
//     var char = str[i];
//     if (char === "-"){
//       dashCount++;
//     } else if(char === "." ){
//       dotCount++;
//     }
// //   }
// //   if (dotCount > dashCount){
// //     return true;
// //   }
// //   return false;
// // }
// // console.log(moreDotLessDash('.-.-.'));
//
//
// /***********************************************************************
// Write a function favoriteWord(favoriteLetter, sentence) that takes in a
// single letter and a sentence string. The function should return the word
// in the sentence that contains `favoriteLetter` the most. If there are
// ties, return the word that appears first in the sentence.
//
// Examples
//
// favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
// favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
// favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
// favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
// ***********************************************************************/
// // function favoriteWordFinder(letter, word) {
// //   var count= 0;
// //
// //   for (var i = 0; i < word.length; i++){
// //     var char = word[i];
// //
// //     if (char === letter){
// //       count++;
// //     }
// //   }
// // return count;
// // }
// // function favoriteWord(favoriteLetter, sentence) {
// // var fave="";
// // var words = sentence. split(" ");
// //   for (var i =0; i < words.length; i++){
// //     var word = words[i];
// //
// //     if (favoriteWordFinder(favoriteLetter,word)> favoriteWordFinder(favoriteLetter,fave)){
// //       fave = word;
// //     }
// //
// //   }
// //   return fave;
// // }
// // console.log(favoriteWord('p', 'sinful caesar sipped his snifter'));
//
//
//
// /***********************************************************************
// Write a function `abbreviate(sentence)` that takes in a sentence string
// and returns a new sentence where words longer than 4 characters have
// their vowels removed. Assume the sentence has all lowercase characters.
// Feel free to use the array below in your solution:
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'
// ***********************************************************************/
//
// // function abbreviate(sentence) {
// //
// // }
//
//
// /***********************************************************************
// Write a function `peakFinder(array)` that takes in an array of numbers.
// It should return an array containing the indices of all the peaks. A
// peak is an element that is greater than both of its neighbors. If it is
// the first or last element, it is a peak if it is greater than its one
// neighbor. Assume the array has a length of at least 2.
//
// Hint: this can be solved using a single loop
//
// Examples:
//
// peakFinder([1, 2, 3, 2, 1]); //=> [2]
// peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
// // peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
// // ***********************************************************************/
// //
// // function peakFinder(array) {
// // var newArr=[];
// //
// //   for (var i = 0; i < array.length; i++){
// //     var currentEl= array[i];
// //     var nextEl= array[i+1];
// //     var before= array[i-1];
// //
// //       if ((i === 0) && (currentEl > nextEl) ){
// //         newArr.push(i);
// //       } else if (currentEl > nextEl && currentEl > before){
// //         newArr.push(i);
// //       } else if ((i === array.length-1) && currentEl > before) {
// //         newArr.push(i);
// //       }
// //
// //   }
// // return newArr;
// // }
// // console.log(peakFinder([1, 2, 3, 2, 1]));
// //  function xx(word){
// //    return word.slice(1);
// //  }
// // // console.log(xx("hello0"))\
// //
// // function cilly(str){
// //   var alphaBet= ["a","b","c","d","e","f","g","h","i","j","k","l",
// //     "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// //
// //     for (var i =0; i < str.length; i++){
// //       var char = str[i];
// //     }
// // // }
// // function anagrams(string, array) {
// //   return array.filter(function(word) {
// //     return word.split("").sort().join("") === string.split("").sort().join("");
// //   });
// // }
// // console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// // ------------------------------------------------------------------------------
// // //
// // // function primeFactors(n){
// // //   for (var i=2, res="", f; i <= n; i++) {
// // //     f=0;
// // //     while (n%i == 0) { f++; n/=i }
// // //     res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
// // //   }
// // //   return res || "("+n+")"
// // }
// // var jane ={
// //   name :"Jane",
// //   friends : ["Tarzan","Cheeta"],
// //   logHiToFriends :function(){
// //     "use strict";
// //     var that= this;
// //     that.friends.forEach(function(friend){
// //       console.log(that.name+" sayhs hi to "+friend);
// //     });
// //   }
// // };
// // console.log(jane.logHiToFriends());
//
//
// // function Person(name) {
// //     this.name = name;
// // }
// //
// // Person.prototype.getName = function() {
// //     return "mr jones";
// // };
// //
// // var reader = new Person('John Smith');
// // console.log((reader.getName()));
//
//
// //
// // function charAt(str,idx){
// //   var newStr="";
// //   for (var i = 0; i < str.length; i++){
// //     var char = str[i];
// //     if (idx === i){
// //       return newStr += char;
// //     }
// //   }
// //   return newStr;
// // }
//
// //
// // function calculateTaxRate(salary, status){
// //     if (status !== "single"|| status !== "joint"){
// //       console.log(status);
// //         return 'Better call an accountant';
// //
// //     }else if ( salary > 74900){
// //         return 'Better call an accountant';
// //
// //     }else if (status == "single" && salary > 1 && salary <=
// //     $13350){
// //         return "10%";
// //     } else if (status == "single" && salary >$13350 &&
// //     salary <= $50800){
// //         return "15%";
// //     }else if (status == "joint" && salary< 18650){
// //         return "10%";
// //     }else if (status == "joint" && salary >18650){
// //         return "15%";
// //     }
// // }console.log(calculateTaxRate(74900,singlels
// // ));
//
//
// //
// // function camelize(str){
// //     var punc=["‘","’", "“","”","'",".",",",":",";","!","?"];
// //     var word= str.split(" ").toLowerCase();
// //     var firstWord= str[0];
// //     if (typeOf (str) !== "string"){
// //       return "Please enter a valid string.";
// //     } else {
// //       for (var i = 0; i < word.length; i++){
// //         var char = word[i];
// //         var firstChar= word[0].toUpperCase();
// //
// //       }
// //
// //     }
// //
// // }
//
// // function strrrr(str){
// //   return str[0];
// // }
// // console.log(strrrr("Hello how are you!"));
// // function sum(arr){
// //   var summ = 0;
// //   if (arr === []){
// //     return 0;
// //   } else {
// //     for (var i =0; i < arr.length; i++){
// //       summ += arr[i];
// //     }
// //
// //   }
// //   return summ;
// // }
// function product(arr){
//   var product=1;
//   if (arr === []){
//     return 1;
//   }
//   for (var i =0; i < arr.length; i++){
//     product*= arr[i];
//   }
//   return product;
// }
// function filterPassingGrades(grades){
//   var newG= [];
//   for (var i =0; i < grades.length;i++){
//     var garde = grades[i];
//     if (grade < 70){
//       newG.push(grade);
//     }
//   }
//   return newG;
// }
// function replace(arr,from,to){
//   var newArr=[];
//   for (var i =0; i < arr.length; i++){
//     var ele = arr[i];
//     if (ele === from){
//       newArr.push(to);
//     } else {
//       newArr.push(ele);
//     }
//   }
//   return newArr;
// }
// console.log(replace([1, 3, 2, 1, 3], 1, 4));
//
// function max(arr){
//   var maxx;
//   for (var i =0; i < arr.length; i++){
//     if(arr[i] > max){
//       maxx = arr[i];
//     }
//   }
//   return maxx;
// }
// console.log(max([1,2,3,4]));
//
//
// function min(arr){
//   var min;
//   for (var i=0; i < arr.length; i++){
//     if (arr[i]< min){
//       min =arr[i];
//     }
//   }
//   return min;
// }
// console.log(min([1,2,3,]));
//
//
// function mean(arr){
//   var sum = 0;
//   var avg;
//   if(arr === []){
//     return null;
//   }
//   for (var i =0; i < arr.length; i++){
//     var ele=arr[i];
//     sum += ele;
//     avg = sum / arr.length;
//   }
//   return avg;
// }
// console.log(mean(1,2,3));
//
// function median(arr){
//
// }
// function meadian(arr){
//   var order=arr.sort();
//   if (order[order.length] % 2 !== 0){
//     var midleIndex= order[order.length / 2];
//     return midleIndex;
//   } else {
//     var floor= int(Math.floor(order[order.length / 2]));
//     var ceil= int(Math.ceil(order[order.length/2]));
//     return order[floor+ceil / 2];
//   }
// }
// console.log(meadian(1,2,3,4));


// var student={
//   id :"hi",
//   pass:"lo"
// };
// function shortie(arr){
//
// var shortest=arr[0];
//   for (var i = 0; i < arr.length; i++){
//   var word= arr[i];
//   if (word.length < shortest.length){
//   shortest = word;
//
//
//   }
//
//
//
// }
// return  shortest.length;
//
// }
//
//
// console.log(shortie(["ab","cde","fgh"]));

// function cutIt(arr){
//   var newArr=[];
//   for (var i =0; i < arr.length; i++){
//     var ele= arr[i];
//     var short= shortie(ele);
//     console.log(short)
//     var newWord= ele.slice(short);
//     newArr.push(newWord)
//
//   }
//   return newArr;
// }
//
// console.log(cutIt(["ab","cde","fgh"]))

//
//
// function highestSum(arr){
//   var sum=0;
//   for (var i = 0; i < arr.length; i++){
//   var card= arr[i];
//   var spl= card.split("-");
//   console.log(spl);
//     for (var j = 0; j < spl.length; j++){
//       var num = parseInt(spl[j]);
//      console.log(num);
//
//     }
//
//
//
//   }
//  return sum;
// }
// //
// console.log(highestSum(['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']))

// var gunners = {gunner1:"aye", gunner2:"nay", gunner3:"aye"};
//
// function cannonsReady (obj)  {
//
// for (var key in obj){
//    if (obj[key] === "aye"){
//      return "Fire!";
//    }
//
//     }
//     return"Shiver me timbers!";
// }
//
// console.log(cannonsReady(gunners));
function correct(string){
var newStr="";
  var char= string.split("");
  for (var i =0; i < char.length; i++){

  if (char === 5){
    char.replace(5,S);
console.log("I am char"+char);
  }else if (char === 0){
    char.replace(o);
  }else if (char === 1){
    char.replace(i);
  }
  newStr+= char;
}
return newStr;
}
console.log(correct("L0ND0N"));
