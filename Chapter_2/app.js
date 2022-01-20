
// ***** [do loop] *****
// let yourName;
// do {
//   yourName = prompt("Who are you?")
// } while (!yourName);
// console.log(yourName);


// ***** [while Loop] *****
// let number = 0;
// while(number <=12){
//   console.log(number);
//   number = number +2
// }

// ***** [while loop] *****
// let result = 1;
// let counter = 0;
// while (counter < 10){
//   result = result * 2;
//   console.log(`result: ${result}`)
//   counter = counter + 1;
//   console.log(`counter: ${counter}`);
//   console.log('--------------')
// }
// console.log("Final " + result);



// ***********************************************************************
// ***** [Exercise #1 - Looping a Triangle] *****
// [ Looping a Triangle Description: 
// Write a loop that makes seven calls to console.log 
// to output the following triangle: It may be useful to know 
// that you can find the length of a string by writing .length after it. ]
// ***********************************************************************
// 1. Start Exercise with a basic for loop that counts from 1 to 7
// console.log('Step 1:')
// for(let number = 0; number <= 7; number++){
//   console.log(number);
// }

// 2. Assign '#' to a value and add it into the console.log
// console.log('Step 2:')
// let hash1 = '#';
// for(let numb = 0; numb <=7; numb++){
//   console.log(numb + hash1);
// }

// 3. Add an if statement inside the for loop that looks at the length of hash ("#")
//    and as long as it's less than or equal to 7 hash's then increase by one hash.
//    You will console.log the hash first and then increase the hash by 1. If not you'll start
//    off with 2 hashes. And that's the original problem you ran into.
// console.log('Step 3:')
// let hash = '#';
// for(let num = 0; num <=7; num++){
//   if(hash.length <=7){
//     console.log(hash);
//     // Here to check the number of hash's there are on each line and log them.
//     //console.log(`${hash + '-' + hash.length}`)
//     hash += '#';
//   }
// }


// *********************************************
// ***** [Exercise #2 - FizzBuzz] *****
// [ FizzBuzz Description: 
// Write a program that uses console.log to print all the numbers
// from 1 to 100, with two exceptions. For numbers divisible by 3, 
// print "Fizz" instead of the number, and for numbers divisible by 5
// (and not 3), print "Buzz" instead. When you have that working, 
// modify your program to print "FizzBuzz" for numbers that are divisible 
// by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers 
// divisible by only one of those). ] 
// *********************************************
// 1. Start Exercise with a basic for loop that counts from 1 to 100.
// for(let num = 1; num <= 100; num++){
//   console.log(num);
// }

// 2. Exception 1a - Add an if statement that takes any number that is divisible
// by 3 and replaces it with the word "Fizz", instead of printing the number. And 
// print the rest of the numbers. Make sure no numbers are duplicated by putting 
// console.log in an else. Template literal involved because I wanted to include
// notes on where we were at in the count.
// console.log("START")
// for(let num = 1; num <= 100; num++){
//   if(num % 3 == 0) {
//     console.log(`${num + "-Fizz"}`);
//   } else {
//     console.log(num);
//   }
// }

// 3. Exception 1b - Add an else if statement that accounts for and numbers that are
// divisible by 5. It is here were we are introduced to our first challenge. Both 3 & 5
// go into the number 15 but because the for loop reads 3 as the first if statement, then
// it will print 3 for #15 instead of 5. It's in Exception 2 that we solve that challenge.
// Template literal involved because I wanted to include notes on where we were at in the count. 
// console.log("START")
// for(let num = 1; num <= 100; num++){
//   if(num % 3 == 0) {
//     console.log(`${num + "-Fizz (3)"}`);
//   } else if(num % 5 == 0){
//     console.log(`${num + "-Fizz (5)"}`);
//   } else {
//     console.log(num);
//   }
// }

// 4. Exception 2 - Add an if statement that checks against 3's & 5's and if both numbers
// are divisible, then print "FizzBuzz" instead of the number. This will be the first if statement
// within the for loop. The others will be else if statements. Template literal involved because 
// I wanted to include notes on where we were at in the count. 
// console.log("START")
// for(let num = 1; num <= 100; num++){
//   if(num % 3 == 0 && num % 5 == 0){
//     console.log(`${num + '-FizzBuzz (3 & 5)'}`);
//   } else if(num % 3 == 0) {
//     console.log(`${num + "-Fizz (3)"}`);
//   } else if(num % 5 == 0){
//     console.log(`${num + "-Fizz (5)"}`);
//   } else {
//     console.log(num);
//   }
// }

// 5. Final solutions without any checks involved.
// for (let num = 1; num <= 100; num++) {
//   if(num % 3 == 0 && num % 5 == 0){
//     console.log('FizzBuzz');
//   } else if(num % 3 == 0) {
//     console.log('Fizz');
//   } else if(num % 5 == 0){
//     console.log('Fizz');
//   } else {
//     console.log(num);
//   }
// }





















