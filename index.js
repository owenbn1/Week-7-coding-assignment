// 1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
  //  a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    // -Do not use numbers to reference the last element, find it programmatically.
    // -ages[7] - ages[0] is not allowed!
let ages =[3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages)

let result = ages[ages.length - 1] - ages[0];
//ages.length -1 is basically referring to the last element of the array
// age[0] is the first of the array
//in return you got the last # - first # giving you the 90
console.log(result);
    
  // b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(12);
console.log(ages);
let newResult =ages[ages.length - 1] - ages[0];
console.log(newResult);

  // c. Use a loop to iterate through the array and calculate the average age.
  let sumArray = 0;
  //assign sum to 0
for(let i= 0; i < ages.length; i++){
    sumArray += ages[i];
//for loop that goes through each value and adds them together getting the sum of the array
}

console.log(sumArray);



// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// a. Use a loop to iterate through the array and calculate the average number of letters per name.

let sumLetters = 0;

for(let i = 0; i <names.length; i++){
    sumLetters += names[i].length;
}

let averageLetters = sumLetters / names.length
console.log(averageLetters);

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let jointNames = '';
for(let i = 0; i <names.length; i++){
 jointNames = jointNames.concat(names[i] + ' ');
 console.log( jointNames);
}


// 3. How do you access the last element of any array?

console.log(ages[ages.length-1])

// 4. How do you access the first element of any array?

console.log(ages[0])

/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array
        and add the length of each name to the nameLengths array.*/

let nameLengths = []
for(let i = 0; i <names.length; i++){
    nameLengths.push(names[i].length);
    console.log (nameLengths);
}

/* For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array */

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
charTotal = 0;
for(let i = 0; i <names.length; i++){
charTotal += nameLengths[i];
console.log(charTotal);
}

// 7. Write a function that takes two parameters, word and n,
// as arguments and returns the word concatenated to itself n number of times.
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatWord (word, n){
    let concat =word.repeat(n);
    console.log(concat);
}
concatWord('Hello',3);

// 8. Write a function that takes two parameters, firstName and lastName,
// and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName,lastName){
    console.log(firstName + ' ' +lastName);
}

fullName('Owen','Benitez');

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumArrayNumbers(array){
    let sumNumbers = 0;
    for(let i= 0; i < array.length; i++){
        sumNumbers += array[i];
    }
    if (sumNumbers >= 100){
        console.log("true");
    }else{
        console.log("false");
    }

}
sumArrayNumbers(numbers2);
// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageNumber(array){
    let sumNumbers = 0;
    for(let i= 0; i < array.length; i++){
        sumNumbers += array[i];    
    }
    let averageTotalNumber = sumNumbers / array.length;
    console.log(averageTotalNumber)
}
averageNumber(numbers1);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [100,100,100]
let numbers4 = [100,100,99]

function twoAverage(array1,array2){
    let sum1 = 0;
    let sum2 = 0;
    for(let i= 0; i < array1.length; i++){
        sum1 += array1[i];    
    }
    let averageNum1 = sum1 / array1.length;
    console.log(averageNum1)

    for(let i= 0; i < array2.length; i++){
        sum2 += array2[i];    
    }
    let averageNum2 = sum2 / array2.length;
    console.log(averageNum2)

    if (averageNum1 > averageNum2){
        console.log(true);
        return true;
    }else if (averageNum1 < averageNum2){
        console.log(false)
        return false;
    }else {
        console.log("Numbers are equal")
    }

}

twoAverage(numbers3,numbers4)
// 12. Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside,moneyInPocket){
    let buyDrink = isHotOutside === true && moneyInPocket >= 10.50;
    console.log("Buy a drink?:",buyDrink)
    return buyDrink;
    
}
willBuyDrink(true, 10.10)