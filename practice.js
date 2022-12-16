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
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft >= distanceToPump ? true : false);
};
*/

/* Is he gonna survive? 
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

function hero(bullets, dragons){
  return (bullets >= dragons * 2 ? true : false);
}
*/
