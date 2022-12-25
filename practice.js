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
