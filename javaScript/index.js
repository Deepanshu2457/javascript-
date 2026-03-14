// function oddEven(n){
//     if(n <= 0) return "not positive";
//     if(n % 2 === 0) return "positive even"


// return "postive odd"
// }
// console.log(oddEven(3))

//-------------------------------------------------------------
// function grade(score){
//     if(score >= 90 && score <= 100) return "A"
//     if(score >= 75 && score <= 89 ) return "B"
//     if(score >= 55 && score <= 74 ) return "C"
//     if(score >= 33 && score <= 54 ) return "D"
//     if(score >= 32)return "fail"
//     return "invalid operation"
// }

// console.log(grade(66));

//-------switch using day name --------------


// let day = 3

// switch (day){
//     case 1:
//         console.log("monday");
//         break; 
    
//     case 2 : 
//     console.log("tuesday")
//     break;

//     case 3 :
//         console.log("wednesday");
//          break ;
//     case 4 : 
//     console.log("thrusday");
//     break;

//     case 5 : 
//     console.log("friday");
//     break;

//     case 6 : 
//     console.log("saturday");
//     break ;

//     case 7 : 
//     console.log("sunday");
//     break; 

//     default : 
//     console.log("invalid day");
// }


// =------------- isloggin practice 

// function isLoggedIn(usernanme,password){
//     if(!usernanme || !password)return "invalid"
//     return "login sucesss"
// }
//   console.log( isLoggedIn("deep","123456yv"));


//-------cart-discount-----------

// function getFinalAmount(cartvalue){
//     if(cartvalue >= 5000){
//         return cartvalue * 0.8
//     }else if(cartvalue >=1000){
//         return cartvalue * 0.9
//     }else{ return cartvalue}
// }
// console.log(getFinalAmount(7000));


// ----------apply coupen ---------


// function applyCoupen(code ,amount){
//     switch(code){
//         case "SAVE10" :
//             return amount * 0.9
//         case "SAVE20" :
//             return amount * 0.8

//      default : 
//      return "invalid Coupan"
//     }
// }
// console.log(applyCoupen("SAVE20","4000"));


//-----------------------------------------------------------------------------



// let i = 10
// while(i >=0){
// console.log(i)
// i--
// }

// for(let i = 1 ; i <=20; i++){
//     if(i %2 ===0){
// console.log(i);
//     }
    
// }


// for(let i = 1 ; i <=20; i++){
//     if(i %2 ===1){
// console.log(i);
//     }
    
// }

// ----------factorial---------
// function factorial(n){
//     if(n<0)return "invalid number"

//     let count = 1
//     for(let i = 1 ; i<=n ; i++){
//         count = count * i

//     }
//     return count 
// }
// console.log(factorial(7));
// -------table-----------
// for(let i = 1; i <=10; i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }
//      Given number prime hai ya nahi check karo

// function isPrime(n){
//     if(n <= 1) return " not prime"

//     for(let i = 2 ; i <=n; i++){
//         if(n % i ===0){
//             return "not prime"
//         }
      
//     }
//   return "prime"
// }
// console.log(isPrime(9)); 

//   Given number ke digits ka sum nikaalo

// function sumOfDigit(n){
//     let sum=0
//     while(n > 0){
//         let lastDigit = n %10;
//         sum = sum + lastDigit
//         n = Math.floor(n/10)
//     }
//     return sum
// }
// console.log(sumOfDigit(123));

// Given number me kitne digits hain, count karo

// function countNumber(n){
//     if(n === 0)return 'invalid number'

//     let count = 0
//    while(n>0){
//     count++
//     n=Math.floor(n/10)
//    }
//    return count
// }
// console.log(countNumber(1234));

// for( let i=0; i<=5 ; i++ ){
//   console.log(i);
// }
// let num = 5
// while(num >=0){
//     console.log(num);
// num--
// }

// let sum = 0

// for(let i =1; i <=10; i++){
//     sum = sum + i
// }
// console.log(sum);



// for(let i = 0 ; i<=10; i++){
//     console.log(i)
// }

// for(let i=0; i<=20; i++){
//     if(i % 2 ===0){
//         console.log(i);
//     }
// }

// for(let i=0; i<=20; i++){
//     if(i % 2===1){
//         console.log(i);
//     }
// }


// for(let i = 20; i>=0; i--){
//     console.log(i);
// }

// let sum=0
// for(let i = 0; i<=10; i++){
// sum = sum +i
// console.log(sum);
// }


// function qustions practice 

// function abc(a,b){
//     console.log(a+b);
// }
// abc(2,3)

// function abcd(a,b,c){
//     console.log(a+b+c);
// }
// abcd(2,3,4)

// function even(num){
//  if(num % 2===0){
//     console.log("even number");
//  }else{
//     console.log("odd  number");
//  }
// }
// even(9)

// function abc(num){
//     return  num *num
// }
// console.log(abc(10));

// function checkNumber( a,b){
//     if(a>b){
//         console.log( a +" is greater ");
//     } else{
//         console.log(b +" is greter");
//     }
// }

// checkNumber(15,5)


// ---------------array question practice --------------------------------------------



// let fruit = ["apple", "banana","orange"]
// fruit.push("mango")
// fruit.unshift("pineapple")
// fruit.pop()     
// fruit.push("kiwi")
// console.log(fruit); 


// let num = [1,2,3,4,5,6,7]

// let newNum = num.slice(2,5)
// console.log(newNum);



// let names = [ "virat", "abhishek", "pankaj","bulbul"]

// names.sort()
// names.reverse()
// console.log(names);

// let square = [2,3,4,5]

//  let newSqr=square.map( function (val){
//     return val * val
// })
// console.log(newSqr);

// use filter to keep num grater than of 10

// let greaterNum = [ 15,36,58,43,78,7,3,32]

// let newArr= greaterNum.filter((val)=>{
//     return val > 10 
// })
// console.log(newArr);

// use the reduce to find of sum this array

let arr = [10,20,30]
 let newArr= arr.reduce((acc,val)=>{
    return acc + val 
})
console.log(newArr);

let find=[12,17,4,3,1,7,16]

let newFind= find.find((val)=>{
    return val < 10
})
console.log(newFind);

let fullName = ["deepanshu", "sharma"]

let [firstName,lastName] = fullName


console.log(firstName);
console.log(lastName);

let a = [1,2,3]
let b = [4,5,6]

let c = [...a , ...b]

console.log(c);

let countries = ["UK","USA"]
countries = ["india", ...countries]
console.log(countries);

// clone array with out any refernce

let arrr = [1,2,3]
let arr2 = [...arrr]
console.log(arr2);