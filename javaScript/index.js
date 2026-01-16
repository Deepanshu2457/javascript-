// function oddEven(n){
//     if(n <= 0) return "not positive";
//     if(n % 2 === 0) return "positive even"


// return "postive odd"
// }
// console.log(oddEven(4))

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


function sumOfDigit(n){
    let sum=0
    while(n > 0){
        let lastDigit = n %10;
        sum = sum + lastDigit
        n = Math.floor(n/10)
    }
    return sum
}
console.log(sumOfDigit(123));