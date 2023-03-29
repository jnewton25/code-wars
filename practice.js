//Code Wars practice

/* Even or Odd
Create a function that takes an integer as an argument and returns"Even" for even
numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
*/

/* Opposites Attract
Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. If one of the flowers 
has an even number of petals and the other has an odd number of petals 
it means they are in love.

Write a function that will take the number of petals of each flower and 
return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
*/

/* Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values 
as if all were numbers.

Return your answer as a number.

function sumMix(x){
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    count += Number(x[i]);
  }
  return count;
}
*/

/* Will You Make It?
You were camping with your friends far away from home, but when it's time to go back, 
you realize that your fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft >= distanceToPump ? true : false);
};
*/

/* Is he gonna survive? 
A hero is on his way to the castle to complete his mission. However, he's been told that 
the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets 
to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets and move forward to fight 
another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

function hero(bullets, dragons){
  return (bullets >= dragons * 2 ? true : false);
}
*/

/* String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends 
with the 2nd argument (also a string).

function solution(str, ending){
  return (str.endsWith(ending) ? true : false);
}
*/

/* Create phone number
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  return (`(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`);
}
*/

/* Cat years, Dog years
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears >= 1 && humanYears < 2) {
    return [1, 15, 15];
  } else if (humanYears > 1 && humanYears < 3) {
    return [2, 24, 24];
  } else {
    return [humanYears, 24 + (4 * ((humanYears) - 2)), 24 + (5 * ((humanYears) - 2))];
  }
}
*/

/* Sum of positive 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
*/

/* Return Negative
In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative?

function makeNegative(num) {
  return -Math.abs(num);
}
*/

/* Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          count++;
          break;
        default:
          break;
    }
  }
  return count;
}
*/

/* Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels 
from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new 
string with all vowels removed.

For example, the string "This website is for losers LOL!" would become 
"Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/ig, "");
}
*/

/* Square Every Digit
 Welcome. In this kata, you are asked to square every digit of a number and 
 concatenate them.

For example, if we run 9119 through the function, 811181 will come out, 
because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let arr = ("" + num).split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  let int = Number(arr.join(''));
  return int;
}
 */

/* Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

function solution(str){
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }
  return word;
}
*/

/* Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a 
"Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return (bool === true ? "Yes" : "No");
}
*/

/* Opposite number

Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return number * -1;
}
*/

/* Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

function numberToString(num) {
  return num.toString();
}
*/

/* Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes 
the first and last characters of a string. You're given one parameter, the 
original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  let x = "";
  for (let i = 1; i < str.length - 1; i++) {
    x += str[i];
  }
  return x;
};
*/

/* Highest and Lowest

In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

function highAndLow(numbers){
  let arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
*/

/* String repeat

Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  let word = "";
  for (let i = 0; i < n; i++) {
    word += s;
  }
  return word;
}
*/

/* Square(n) Sum

Complete the square sum function so that it squares each number passed into 
it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += (numbers[i] * numbers[i]);
  }
  return sum;
}
*/

/* Grasshopper - Summation

Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

var summation = function (num) {
  let ans = 0;
  for (let i = 1; i < num + 1; i++) {
    ans += i;
  }
  return ans;
}
*/

/* Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(" ").join("");
}
*/

/* Descending Order

Your task is to make a function that can take any non-negative integer as an 
argument and return it with its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.

function descendingOrder(n){
  let arr = n.toString(10).replace(/\D/g, '0').split('').map(Number).sort().reverse();
  const int = Number(arr.join(''));
  return int;
}
*/

/* Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var lowest = args[0];
    for (let i = 0; i < args.length; i++) {
      if (lowest > args[i]) {
        lowest = args[i];
      } else {
        continue;
      }
    }
    return lowest;
  }
}

OR

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
*/

/* Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count += 1;
    } else {
      continue;
    }
  }
  return count;
}
*/

/* Century From Year

The first century spans from the year 1 up to and including the year 100, 
the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
  return Math.ceil(year / 100);
}
*/

/* Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), 
value2(number).
The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}
*/

/* Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two 
words with one space in between them.

The output should be two capital letters with a dot separating them.

function abbrevName(name){
  return name.match(/\b(\w)/g).join('.').toUpperCase();
}
*/

/* Keep Hydrated!

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water 
per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan 
will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * .5);
}
*/

/* Is n divisible by x and y?

Create a function that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0 ? true : false);
}
*/

/* Convert a String to a Number!

We need a function that can transform a string into a number. 
What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly 
valid representation of an integral number.

const stringToNumber = function(str){
  return eval(str);
}
*/

/* A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return `found the needle at position ${i}`;
    } else {
      continue;
    }
  }
}
*/

/* Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within 
an array in reverse order.

function digitize(n) {
  let myFunc = num => Number(num); 
  var intArr = Array.from(String(n), myFunc);
  return intArr.reverse();
}
*/

/* Returning Strings

Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?".

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
*/

/* Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

function maps(x){
  let y = [...x];
  for (let i = 0; i < y.length; i++) {
    y[i] *= 2;
  }
  return y;
}
*/

/* Function 1 - hello world

Make a simple function called greet that returns the most-famous "hello world!".

function greet() {
  return `hello world!`;
}
*/

/* Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  return ((h * 3600000) + (m * 60000) + (s * 1000));
}
*/

/* Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only 
know once they pick a flower each. If one of the flowers has an even number of 
petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return 
true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
*/

/* Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and 
the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(var i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
      } else {
            array[0] += 1;
      }
    }
    return array;
}
*/

/* Invert values

Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= -1;
  }
  return arr;
}
*/

/* Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return (b === true ? 'true' : 'false');
}
*/

/* Beginner Series #1 School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 
'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}
*/

/* You only need one - Beginner

You will be given an array a and a value x. All you need to do is check whether the 
provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    } else {
      continue;
    }
  } return false;
}
*/

/* Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

function areYouPlayingBanjo(name) {
  if (name.charAt(0) === "r" || name.charAt(0) === "R") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}
*/

/* Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

function findAverage(array) {
  let total = 0;
  if (array.length >= 1) {
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }}
    else {
      return 0;
    }
  return total /= array.length;
}
*/

/* Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and 
any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

function fakeBin(x){
  let y = '';
  for(let i = 0; i < x.length; i++) {
    if(x[i] >= 5) {
      y += '1';
    } else {
      y += '0';
    }
  }
  return y;
}
 */

/* How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the 
average student in your class.

You receive an array with your peers' test scores. Now calculate the average and 
compare your score!

Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for(let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
  }
  if((total / classPoints.length) < yourPoints) {
    return true;
  } else {
    return false;
  }
}
*/

/* Sum Arrays

Write a function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. If the array does not contain any 
numbers then you should return 0.

function sum (numbers) {
  var total = 0;
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
  } else {
    return 0;
  }
  return total;
};
*/

/* Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values 
together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  let total = 1;
  for (let i = 0; i < x.length; i++) {
    total *= x[i];
  }
  return total;
}
*/

/* Get the Middle Character

You are going to be given a word. Your job is to return the middle character 
of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  let half = ((s.length) / 2) - 1;
  if (s.length % 2 === 0) {
    return s.slice(half, half + 2);
  } else {
    return s.charAt(s.length/2);
  }
}
*/

/* Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str){
  const arr = str.split(" ");
  arr.reverse();
  return arr.join(" ");
}
*/

/* Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
*/

/* Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

function bmi(weight, height) {
  if ((weight / (height * height)) <= 18.5) {
    return "Underweight";
  } else if ((weight / (height * height)) <= 25.0) {
    return "Normal";
  } else if ((weight / (height * height)) <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
*/

/* Simple multiplication

This kata is about multiplying a given number by eight if it is 
an even number and by nine otherwise.

function simpleMultiplication(number) {
    return (number % 2 === 0 ? number * 8 : number * 9);
}
*/

/* MakeUpperCase

Write a function which converts the input string to uppercase.

const makeUpperCase = (str) => str.toUpperCase();
*/

/* Will you make it?

You were camping with your friends far away from home, but when it's 
time to go back, you realize that your fuel is running out and the 
nearest pump is 50 miles away! You know that on average, your car 
runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it 
is possible to get to the pump or not.

Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return ((fuelLeft * mpg) >= distanceToPump ? true : false);
};
*/

/* Is he gonna survive?

A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of 
powerful dragons! each dragon takes 2 bullets to be defeated, our hero 
has no idea how many bullets he should carry.. Assuming he's gonna 
grab a specific given number of bullets and move forward to fight another 
specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

function hero(bullets, dragons){
  return (bullets >= dragons * 2 ? true : false);
}
*/

/* DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule 
in biological systems. It is composed of four nucleic acid bases Guanine 
('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA 
differs slightly from DNA its chemical structure and contains no Thymine. 
In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
  let RNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna.charAt(i) === "T") {
      RNA += "U";
    } else {
      RNA += dna.charAt(i);
    }
  }
  return RNA;
}
*/

/* Find Maximum and Minimum Values of a List

Your task is to make two functions ( max and min, or maximum and minimum, 
etc., depending on the language ) that receive a list of integers 
as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}
*/

/* Jenny's secret message

Jenny has written a function that returns a greeting for a user. 
However, she's in love with Johnny, and would like to greet him slightly 
different. She added a special case to her function, but she made a mistake.

Can you help her?

function greet(name) {
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
  return ("Hello, " + name + "!");
}}
*/

/* Count by X

Create a function with two arguments that will return an array of the first 
n multiples of x.

Assume both the given number and the number of times to count will be positive 
numbers greater than 0.

Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  for (let i = x; i <= x * n; i += x) {
    z.push(i);
  }
  return z;
}
*/

/* Sentence Smash

Write a function that takes an array of words and smashes them together into a 
sentence and returns the sentence. You can ignore any need to sanitize words or 
add punctuation, but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
   return words.join(" ");
};
*/

/* If you can't sleep, just count sheep!!

Given a non-negative integer, 3 for example, return a string with a 
murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, 
i.e. no negative integers.

var countSheep = function (num){
  let sent = "";
  if (num > 0)
    {for (let i = 1; i <= num; i++) {
      sent += `${i} sheep...`;
    }
    return sent;
  } else {
    return "";
  }
}
*/

/* Get the mean of an array

It's the academic year's end, fateful moment of your school report. 
The averages must be calculated. All the students come to you and entreat 
you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

function getAverage(marks){
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return Math.floor(total / marks.length);
}
*/

/* Array plus array

I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2], sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
*/

/* Convert a string to an array

Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  return string.split(" ");
}
*/

/* Rock Paper Scissors!

Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1 === "rock" && p2 === "scissors" || 
      p1 === "scissors" && p2 === "paper" ||
      p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p2 === "rock" && p1 === "scissors" || 
      p2 === "scissors" && p1 === "paper" ||
      p2 === "paper" && p1 === "rock") {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
};
*/

/* You Can't Code Under Pressure #1

Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  return i * 2;
}
*/

/* Total amount of points

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented 
by a string in the format "x:y", where x is our team's score and y is our opponents score.

function points(games) {
 let sum=0;
  for (let i=0; i < games.length; ++i) {
    if (games[i][0] > games[i][2])
      sum += 3;
    if (games[i][0] == games[i][2])
      sum += 1;
  }
  return sum;
}
*/

/* Sum without highest and lowest number

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element 
( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there 
are more than one with the same value.

Mind the input validation.

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
*/

/* Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number 
there (n), but your son is too young to just appreciate the full number, 
he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array 
with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
*/

/* Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

function sumMix(x){
  let y = 0;
  for (let i = 0; i < x.length; i++) {
    y += parseInt(x[i]);
  }
  return y;
}
*/

/* Do I get a bonus?

t's bonus time in the big city! The fatcats are rubbing their paws in anticipation... 
but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an 
integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat 
did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
  return (bonus === true ? `\u00A3` + salary * 10 : `\u00A3` + salary);
}
*/

/* Grasshopper - Grade book

Complete the function so that it finds the average of the three scores passed to it and 
returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  if (((s1 + s2 + s3) / 3) >= 90 && ((s1 + s2 + s3) / 3) <= 100) {
      return 'A';
  } else if (((s1 + s2 + s3) / 3) >= 80 && ((s1 + s2 + s3) / 3) < 90) {
      return 'B';
  } else if (((s1 + s2 + s3) / 3) >= 70 && ((s1 + s2 + s3) / 3) < 80) {
      return 'C';
  } else if (((s1 + s2 + s3) / 3) >= 60 && ((s1 + s2 + s3) / 3) < 70) {
      return 'D';
  } else {
    return 'F';
  }
}
*/

/* Grasshopper - Personalized Message

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

function greet (name, owner) {
  return (name === owner ? "Hello boss" : "Hello guest");
}
*/

/* Area or Perimeter

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
  return (l === w ? l * w : l + l + w + w);
};
*/

/* Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
*/

/* Transportation on vacation

After a hard quarter in the office you decide to get some rest on a vacation. So you will 
book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of 
the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 
off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50;
  } else if (d >= 3) {
    return (d * 40) - 20;
  } else {
    return d * 40;
  }
}
*/

/* The Feast of Many Beasts

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: 
the dish must start and end with the same letters as the animal's name. For example, the great 
blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or 
false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
beast and dish may contain hyphens and spaces, but these will not appear at the beginning or 
end of the string. They will not contain numerals.

function feast(beast, dish) {
  return (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false);
}
*/

/* Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if (month / 4 <= .75) {
    return 1;
  } else if (month / 4 <= 1.5 ) {
    return 2;
  } else if (month / 4 <= 2.25) {
    return 3;
  } else {
    return 4;
  }
}
*/

/* Determine offspring sex based on genes XX and XY chromosomes

Determine if the sex of the offspring will be male or female based on the X or Y 
chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; 
If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  return "Congratulations! You're going to have a " + (sperm === 'XY' ? "son." : "daughter.")
}
*/

/* Thinkful - Logic Drills: Traffic light

You're writing code to control your town's traffic lights. You need a function to handle each 
change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the 
light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}
*/

/* L1: Set Alarm

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true 
whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the 
circumstances under which you need to set an alarm). It should return false otherwise.

function setAlarm(employed, vacation){
  return (employed === true && vacation === false ? true : false);
}
*/

/* Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    s += str[i];
    s += str[i];
  }
  return s;
}
*/

/* Find the first non-consecutive number

Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 
is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers 
will also all be unique and in ascending order. The numbers could be positive or 
negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}
*/

/* Removing Elements

Take an array and remove every second element from the array. Always keep the first element 
and start removing with the next element.

function removeEveryOther(arr){
  let arr2 = [];
  for (let i = 0; i < arr.length; i += 2) {
    arr2.push(arr[i]);
  }
  return arr2;
}
*/

/* Beginner Series #4 Cockroach

The cockroach is one of the fastest insects. Write a function which takes its speed in km 
per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  return (Math.floor(s / 0.036));
}
*/

/* Third Angle of a Triangle

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

function otherAngle(a, b) {
  return 180 - (a + b);
}
*/

/* Will there be enough space?

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not 
enough space left on the bus! He wants you to write a simple program telling him if he will be able 
to fit all the passengers.

function enough(cap, on, wait) {
  return (cap - (on + wait) > 0 ? 0 : (on + wait) - cap);
}
*/

/* Keep up the hoop

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him 
an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
   return (n >= 10 ? "Great, now move on to tricks" : "Keep at i
   t until you get it");
}
*/

/* Get Planet Name By ID

The function is not returning the correct values. Can you figure out why?

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  
  return name;
}
*/

/* Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he 
will be twice as old). The answer is always greater or equal to 0, no matter if it was 
in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
*/

/* Grasshopper - Check for factor

This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
  return (base % factor === 0 ? true : false);
}
*/

/* Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be 
edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character 
recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
*/

/* All Star Code Challenge #18

Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){  
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
      count++;
  }
  return count;
}
*/

/* Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  return Math.floor(n/2);
}
*/

/* Volume of a Cuboid

Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and 
height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return (length*width*height);
  }
}
*/

/* Grasshopper - Messi goals function

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

function goals (i, j, k) {
  return i+j+k;
}
*/

/* Jumbo
function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}
*/

/* Function 2 - squaring an argument

Now you have to write a function that takes an argument and returns the square of it.

function square(n) {
  return n * n;
}
*/
