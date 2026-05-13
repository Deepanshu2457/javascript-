// Q1
// let name ;
// let age ;
// let isStudent ; 

// console.log(name);
// console.log(age);
// console.log(isStudent);

// Q2
// let x = "100";
// let y = 100;

// console.log(typeof(x));
// console.log(typeof(y));

// Q3
// let a = 5
// let b = 10
// a = a+b
// b = a-b
// a = a-b
// console.log(a);
// console.log(b);

// Q4
// let a ;
// console.log(a);

// Q5


// console.log(typeof(null));
// console.log(typeof(undefined));


// Day 2

// let a =15
// let b =4

// console.log(a + b);
// console.log(a -b);
// console.log(a*b);
// console.log(a / b);
// console.log(a % b);

// let c = 7
// if(c%2 ===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let  a = 25
// let b = 40
// if(a > b){
//     console.log(" A is Greater number");
// }else if(b>a){
//     console.log("B is Greater number");
// }


// Q 4
// console.log(5 == "5");
// console.log(5 === "5");

// answer
// true
// false

// Q5
// let age = 19
// let hasLicence = true
// console.log(age > 18 && true);

// Q6
// let num = 9
// if(num % 3 ===0){
//     console.log("fizz");
// }else{
//     console.log("no");
// }

// Day 2

// Q1
// let num = -5;
// let num1= 0;
// let num2 = 5;
// console.log(num);
// console.log(num1);
// console.log(num2);


// Q2
// let a = 10;
// let b = 25;
// let c = 18;

// if(a > b ){
//     console.log(a);
// }else if( b > c){
//     console.log(b);
// }else{
//     console.log(c);
// }

// Q3

// let marks = 82;

// if(marks >= 90){
//     console.log("A");
// }else if(marks >= 70){
//     console.log("B");
// }else if(marks >= 50){
//    console.log("C");
// }else{
//     console.log("failed");
// }

// Q4

// let a = 10;
// let b = 5;
// let op = "+";

// switch(op){
//     case "+" : 
//     console.log(a + b);
//     break;
    
//     case "-" : 
//     console.log(a-b);
//     break;

//     case "*" : 
//     console.log(a*b);
//     break;

//     case "/" :
//         console.log(a / b);
//         break;
//    default : 
//    console.log("invalid operator");
// }

// Q5

// let age = 20;
// let hasTicket = true;

// if(age> 18){
//     if(hasTicket){
//         console.log("allowed");
//     }
//     else{
//         console.log("not allowed");
//     }
// }

// let year = 1100

// if(year % 4 ===0  && year % 400 ===0 && year % 100=== 0 ){
//     console.log("leap year");
// }
// else{
//     console.log("Not valid year");
// }

// Day 4

// Q1
// for(let i=0; i<=10; i++){
//   console.log(i);
// }

// Q2

// let sum=0
// for(let i=1; i<=5; i++){
//      sum = sum + i

    
// }
// console.log(sum);

// Q3

// for(let i=1; i<=20; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// Q4
// let n = 1234

// let rev = 0

// while(n>0){
//     let digit = n % 10
//     rev = rev * 10 + digit
//      n = Math.floor(n/10)
// }
// console.log(rev);

// Q5

// let n = 5

// for( let i =1 ; i<=10; i++){
//     console.log( n ,"*" , i , "=" , n*i );
// }

// Q6

// let num = 9876
// let count =0

// while(num >0){
 
//         count++

//     num = Math.floor(num/10)
// }
// console.log(count);

// day 5
// Q1
function add(a,b){
    return a + b
}
let result = add(4,5)
console.log(result);
// Q2
function evenNum(num){
    if(num % 2===0){
        return true
    }else{
        return false
    }
}
console.log(evenNum(6));
// Q3
function factorial(num){
    
    return  num * (num * num) 
}
console.log(factorial(5));

// Q4

function isPrime(num){
   if(num <= 1) return false

   for(let i=2; i<num;i++){
    if(num % i ===0){
        return false
    }
   }
  return true
}
console.log(isPrime(10));

function reverseNum(num){
    let rev =0
    while(num>0){
        let digit = num % 10
        rev = rev * 10 + digit
        num = Math.floor(num/10)
    }
    return rev
}
console.log(reverseNum(1234));