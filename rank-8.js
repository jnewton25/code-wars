// Codewars Kata Rank 8

/* ES6 string addition

ES6 has introduced another way of joining strings. Your task is to find out what this is 
and write a function that will add two strings together, there must be a space between 
the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some 
other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.

function joinStrings(string1, string2){
   return `${string1} ${string2}`
}
*/

/* Training JS #2: Basic data types--Number

In the end, click "Submit" to submit your code pass this kata.

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v3, //set number value to a
      b =  v1; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v5, //set number value to a
      b =  v1; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v2, //set number value to a
      b =  v6; //set number value to b
  return a % b;
}
*/

/* Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}
*/

/* Training JS #18: Methods of String object--concat() split() and its good friend join()

Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into 
separate characters and join them back with the specified separator, join all the 
resulting "words" back into a sentence with spaces.

function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}
*/

/* What's the real floor?

Americans are odd people: in their buildings, the first floor is actually the ground 
floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the 
european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, 
the numbers move down to take their place. In case of above 13, they move down by two 
because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n <= 12) {
    return n - 1;
  } else if (n >= 13) {
    return n - 2;
  }
}
*/
