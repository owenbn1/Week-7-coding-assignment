console.log(
  "1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93."
);
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);
console.log();
console.log("a. Programmatically subtract the value of the first element in the array from the value in the last element of the array. -Do not use numbers to reference the last element, find it programmatically.- ages[7] - ages[0] is not allowed!");
/* 1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
     -Do not use numbers to reference the last element, find it programmatically.
     -ages[7] - ages[0] is not allowed!*/

let result = ages[ages.length - 1] - ages[0];
//ages.length -1 is basically referring to the last element of the array
//age[0] is the first of the array
//in return you got the last # - first # giving you the 90
console.log(ages[ages.length - 1] , " - ", ages[0] , " = ", result);

console.log("b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/");
/* b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/

ages.push(12);
//.push puts out a new element to the array
console.log(ages);
let newResult = ages[ages.length - 1] - ages[0];
// same line of code was used
console.log(ages[ages.length - 1] , " - ", ages[0] , " = ", newResult);


console.log("c. Use a loop to iterate through the array and calculate the average age.");
/* c. Use a loop to iterate through the array and calculate the average age.*/
let sumArray = 0;
//assign sum to 0
for (let i = 0; i < ages.length; i++) {
  sumArray += ages[i];
  //for loop that goes through each element and adds them together getting the sum of the array
}

console.log("sum: ", sumArray);


console.log(`2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
`)
// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names)


console.log(`a. Use a loop to iterate through the array and calculate the average number of letters per name.`)
// a. Use a loop to iterate through the array and calculate the average number of letters per name.

let sumLetters = 0;
// created a variable that held to 0 value

for (let i = 0; i < names.length; i++) {
  sumLetters += names[i].length;
}
// this for loop iterate through the array and count each element by the length of the word

let averageLetters = sumLetters / names.length;
// variable that basically get the average by dividing
// the total of the amount of the words in the array to
//how many element there are in the array
console.log("sum-of-words:", sumLetters);
console.log("average-words: ", averageLetters);


console.log(`b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)
// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let jointNames = "";
for (let i = 0; i < names.length; i++) {
  //made a for loop that iterate through the array and separate them at first.
  jointNames = jointNames.concat(names[i] + " ");
  // joinNames has the concat method that allows the next element to be added after it goes through the cycle again.
  console.log(i + ":", jointNames);
}


console.log("3. How do you access the last element of any array?")
// 3. How do you access the last element of any array?

console.log("Last element:", ages[ages.length - 1]);


console.log("4. How do you access the first element of any array?")
// 4. How do you access the first element of any array?

console.log("First element:", ages[0]);


console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array
and add the length of each name to the nameLengths array.`)

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array
        and add the length of each name to the nameLengths array.*/

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  //goes through all the elements of array but the length of the element.
  nameLengths.push(names[i].length);
  //.push pushes out the element length to the the array.
  console.log(nameLengths);
}

/* For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array */


console.log(`6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
charTotal = 0;
for (let i = 0; i < names.length; i++) {
  //goes through all the elements of array but the length of the element
  charTotal += nameLengths[i];
  // this line of code will add the next element length to the previous element together.
  console.log(names[i], charTotal);
}

console.log(`7. Write a function that takes two parameters, word and n,
as arguments and returns the word concatenated to itself n number of times.
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)
// 7. Write a function that takes two parameters, word and n,
// as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWord(word, n) {
  let concat = word.repeat(n);
  console.log(concat);
  //this function allows the word to be repeat by the .repeat method by how many times its been assigned 
}
concatWord("Hello", 3);


console.log(`8. Write a function that takes two parameters, firstName and lastName,
and returns a full name. The full name should be the first and the last name separated by a space.
`)
// 8. Write a function that takes two parameters, firstName and lastName,
// and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
  //this function allows two parameters to be added together by the selected word that were assigned.
}

fullName("Owen", "Benitez");


console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.")
// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];
//made two arrays

function sumArrayNumbers(array) {
  let sumNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    sumNumbers += array[i];
    console.log("total number:", sumNumbers);
    //made a for loop that iterate through the array from one of the selected parameters
    //which adds them together to get the sum of the array
  }
  if (sumNumbers >= 100) {
    console.log("total:",sumNumbers,true);
  } else {
    console.log("total:",sumNumbers, false);
  }
  //made a if statement that allows the sum of the array to go through if its greater or equal to 100
}
sumArrayNumbers(numbers2);


console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.")
// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageNumber(array) {
  let sumNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    sumNumbers += array[i];
  }
  let averageTotalNumber = sumNumbers / array.length;
  console.log("average:",averageTotalNumber);
  //this function has a for loop that adds the elements together and divides them to get the average of the array
}
averageNumber(numbers1);


console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.")
// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];
//created 2 new arrays

function twoAverage(array1, array2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }
  let averageNum1 = sum1 / array1.length;
  console.log("sum of array1:",averageNum1);
  //this for loop allows the first array to be added all together and divided the amount of elements there are in the array

  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }
  let averageNum2 = sum2 / array2.length;
  console.log("sum of array2:",averageNum2);
  //same for loop but with the second array

  if (averageNum1 > averageNum2) {
    console.log(true);
    return true;
  } else if (averageNum1 < averageNum2) {
    console.log(false);
    return false;
  } else {
    console.log("Numbers are equal");
  }
  //this if statement checks if the first array is greater than second array
}

twoAverage(numbers3, numbers4);


console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside,
and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
// 12. Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  let buyDrink = isHotOutside === true && moneyInPocket >= 10.5;
  //this checks the first parameter which is the boolean if its true or false and checks if money is more or equal to $10.50
  //if both of them are true then it will print out false or vise versa
  console.log("Buy a drink?:", buyDrink);
  return buyDrink;
}
willBuyDrink(true, 10.6);
