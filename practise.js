// 1) Even or Odd
// const check = (num) => {
//     if (num % 2 === 0) {
//         return "Even";
//     }    else {
//         return "Odd";
//     }
// }

// let ans = check(4);
// console.log(ans);

// 2) Result Evaluator — Pass or Fail
// function evaluateResult(marks) {
//     if (marks >=50 && marks <= 100) {
//         return "Pass";
//     } else if (marks < 0 || marks > 100) {
//         return "Invalid Marks";
//     } else {
//         return "Fail";
//     }
// }

// let result = evaluateResult(49);
// console.log(result);

// 3) Maximum Finder — Largest of Three Numbers
// const findMax = (a, b, c) => {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {        
//         return c;
//     }
// }

// let maximum = findMax(10, 25, 15);
// console.log(maximum);

// 4) Accumulator — Sum from 1 to N

// function sumToN(n){
//   let digit = 0;
//   for(let i=1;i<=n;i++)
//   {
//     digit = digit + i;
//   }
//   return digit;
// }

// let value = sumToN(5);
// console.log(value);

// 5) Multiplication Table Generator
// function printTable(num){
//     for(i=1;i<=10;i++)
//     {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }

// printTable(3);

// 6) Digit Counter — Number Length Finder
// function countDigits(num)
// { digit=0;
//     while(num > 0)
//     {
//         digit++;
//         num = Math.floor(num/10);
//     }
//     return digit;
// }

// value = countDigits(50);
// console.log(value);

// 7) Number Reverser

// function reverseNumber(num)
// {
//     let reverse = 0;
//     while(num > 0){
//         digit = num % 10;
//         reverse = reverse * 10 + digit;
//         num = Math.floor(num/10);
//     }
//     return reverse;
// }

// let value = reverseNumber(1234)
// console.log(value);

// 8) Factorial Engine
// function factorial(num)
// {   digit = 1;
//     for(i=num;i>0;i--){
//        digit = digit * i   
//     }
//     return digit;
// }

// let value = factorial(5);
// console.log(value);

// 9) Prime Validator
// function isPrime(num){

//     if(num <= 1){
//         return false;
//     }

//     for(i = 2; i < num; i++){

//         if(num % i === 0){
//             return false;
//         }

//     }

//     return true;
// }
// console.log(isPrime(7));
// console.log(isPrime(10));

// 10) Pattern Builder — Star Triangle

// function printPattern(num)
// {   let star=" ";
//     for(i=1;i<=num;i++)
//     {
//         for(j=i;j<=i;j++)
//         {
//             star += "*";
//         }
//         console.log(star);
//     }
// }
// printPattern(3);
