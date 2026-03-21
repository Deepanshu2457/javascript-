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

// let arr = [10,20,30]
//  let newArr= arr.reduce((acc,val)=>{
//     return acc + val 
// })
// console.log(newArr);

// let find=[12,17,4,3,1,7,16]

// let newFind= find.find((val)=>{
//     return val < 10
// })
// console.log(newFind);

// let fullName = ["deepanshu", "sharma"]

// let [firstName,lastName] = fullName


// console.log(firstName);
// console.log(lastName);

// let a = [1,2,3]
// let b = [4,5,6]

// let c = [...a , ...b]

// console.log(c);

// let countries = ["UK","USA"]
// countries = ["india", ...countries]
// console.log(countries);

// clone array with out any refernce

// let arrr = [1,2,3]
// let arr2 = [...arrr]
// console.log(arr2);


//-------next day -----------


// loop--practice ------


// for(let i=1 ; i<=50; i++){
//     if(i %3 ===0){
//         console.log(i);
//     }
// }

// for(let i =1 ; i<=10; i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }

// let n=5
// let result = 1
// for(let i = 1 ; i<=5;i++){
//     result = result * i
   
// }
//  console.log(result);


// let count = 0
// for(let i = 1; i<=100; i++ ){
//     if(i % 2 ===0){
//         count++
//     } 
// }
//  console.log(count);


// let checkPrimeNum = 11

// let isPrime = true

// for(let i= 2; i<checkPrimeNum ; i++){
//     if(checkPrimeNum % i ===0){
//         isPrime = false;
//         break;
//     }


// }
//     if(isPrime && n > 1){
//         console.log("prime number");
//     }else{
//         console.log("not prime");
//     }

// ---- function practice--------



// function factorial(n){
//     let result = 1
//     for(let i = 1; i<=n; i++){
//         result = result * i
//     }
//     return result
// }
// console.log(factorial(5)); 


// function checkNumber(n){
//     let isPrime = true
//     for(let i=2 ; i<n; i++){
//         if(n %i ===0){
//             isPrime = false;
//             break ;
//         }
//     }

//     if(isPrime && n > 1){
//         console.log("Prime Number");
//     }else{
//         console.log("not prime");
//     }
// }
// console.log(checkNumber(11));

// function arraySum(arr){
//     let sum = 0
//     for(let i = 0 ; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(arraySum([1,2,3,4,5]));

// function reverseNumber(n){
//     let rev= 0
//     while(n>0){
//         let digit = n % 10
//         rev = rev*10+digit 

//         n= Math.floor(n/10)
//     }
//     return rev
// }
// console.log(reverseNumber(4321)); 


// function reverseString(str){
//     let rev = "";
//     for(let i = str.length -1 ; i>=0; i--){
//         rev = rev + str[i]
//     }
//     return rev 
// }
// console.log(reverseString("hello"));


//-----array practice --------------


// function evenNum(arr){
//     let even = []
//     for(let i = 0; i<arr.length ; i++){
//         if(arr[i] % 2 ===0){
//             even.push(arr[i])
//         }
//     }
//     return even
// }
// console.log(evenNum([1,2,3,4,5,6,7,8]));


// function oddNum(arr){
//     let odd = []
//     for(let i =0 ; i <arr.length; i++){
//         if(arr[i] % 2 ===1 ){
//             odd.push(arr[i])
//         }
//     }
//    return odd 
// }

// console.log(oddNum([1,2,3,4,5,6,7,8,9,13,33]));


// function bigNum(arr){
//     let big = []
//     for(let i = 0 ; i<arr.length; i++){
//         if(arr[i] > 10){
//             big++
//         }
//     }
//     return big
// }
// console.log(bigNum([12,3,8,16]));

// function duplicate(arr){
//     let copy = []
//     for(let i=0; i <arr.length ; i++){
//         if(!copy.includes(arr[i])){
//             copy.push(arr[i])
//         }
//     }
//     return copy
// }

// console.log(duplicate([1,2,3,4,3,2,1,4]));

// function assenOdr(arr){
//     for(let i =0 ; i<arr.length; i++){
//         for(let j=0; j<arr.length -1 ; j++){

//             if(arr[j] > arr[j+1]){

//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }

//         }
//     }
//     return arr
// }
// console.log(assenOdr([5,3,1,8,2]));




// -----------objects practice ----------------



// let student = {
//     name : " deepanshu",
//     age: 23,
//     marks : 57
// }
// if(student.marks >= 40){
//     console.log(student.name + " is pass");
// }else{
//     console.log(student.name + " is fail");
// }


// let user = {
//       name : "deepanshu",
//     interduce : function(){
//         console.log(`hello , my name is ${this.name}`);
//     }
// }
// user.interduce()


// let profile = {
//     name : "deepanshu",
//     age : 25,
//     address : {
//         city:"delhi",
//         pincode : 110094
//     }
// }
// console.log(profile.address.city);
// console.log(profile.address.pincode);

// let profile2 = {
//     name : "deepanshu",
//     age : 25,
//     address : {
//         city:"delhi",
//         pincode : 110094
//     }
// }
// for(let key in profile2){
//     console.log(key);
// }


// let profile3 = {
//     name : "deepanshu",
//     age : 25,
//     address : {
//         city:"delhi",
//         pincode : 110094
//     }
// }
// for(let key in profile3){
//     console.log(profile3[key]);
// }

// // bouns

// let user2 = {
//     skills : ["js","html","css"]
// }
// for(let i = 0; i<user2.skills.length; i++){
//     console.log(user2.skills[i]);
// }



// next day


//  loop practice 

// for(let i = 1 ; i<=100; i++){
//     if(i % 3 ===0 && i % 5 ===0){
//         console.log(i);
//     }
// }

// for(let i = 1 ; i<=5; i++){
//     let pattern = "";
//     for(let j=1 ; j<=i; j++){
//         pattern = pattern + "*"
//     }
//     console.log(pattern);
// }

// for(let i=1; i<=5; i++){
//     let num = "";
//     for(let j=1 ; j<=i ; j++){
//         num = num +  j
//     }
//     console.log(num);
// }

// let n=10
//   let sum = 0
//   let result = ""
// for( let i=1; i<=n ; i++){
  
//    if(i%2 !== 0){
//     sum += i

//        if( result !== ""){
//     result += "+"
//    }
//    result += i
//    }
//    }
//  console.log(result + "=" + sum )


// let no = 12
//  let count = 0 ;
 
//  for(let i =1; i<=no; i++){
//     if(no % i  ===0 ){
//         count++
//     }
//  }
// console.log(count);


// functions practice --------------


// let n = 121;
// let original = n
// let rev = 0 


// while(n > 0){
//     let digit = n % 10
//     rev = rev *10 + digit 
//     n=Math.floor(n / 10)

// }
// if(original === rev ){
//     console.log("palindrome");

// }
// else{
//     console.log("not palindrome");
// }


// function checkNum(a,b,c){
//   if(a >= b && a >=c){
//    console.log(a);
//   } 
//   if(b >= a && b>=c){
//     console.log(b);
//   }else{
//     console.log(c);
//   }
    
// }

// checkNum(13,24,5)


// function evenNum(arr){
//         let count = 0
//     for(let i = 0 ; i<arr.length; i++){
   
//         if(arr[i] %2===0){
//             count++

//         }

//     }
//     return count

// }
// console.log(evenNum([1,2,3,4,56,6,7,8,9,9]));


// function vowel(arr){
// let count = 0
//     for(let i=0; i<arr.length; i++){
//         let str = arr[i]
//         if( str === "a" || str === "e" || str === "o" || str ===" i" || str === "u" ){
//             count++
//         }
//     }
// return count
// }
// console.log(vowel("hello"));


// function sum(arr){
//     let total = 0 
//     while( arr > 0){
//         let digit = arr %10
//          total += digit
//         arr = Math.floor(arr /10)
//     }
// return total
// }
// console.log(sum(123));


// array practice question 

// function largetNum(a,b,c){
//     let max = a
 
//     if( b>=max ){
//        max = b 
//     }if( c >= max){
//         max = c
//     }
//     return max

// }
// console.log(largetNum(8,2,5));

// let arr = [1,2,3,4,5,6,7,8]
// let newArr = []
// for(let i = arr.length -1 ; i>0 ;i--){
//    newArr.push(arr[i])
// }
// console.log(newArr);

//  let arr2 = [ 1,1,2,2,3,3,4,4,8,8]
// let uniqe = []
//  for(let i=0 ; i<arr2.length; i++){

//     if(!uniqe.includes(arr2[i])){
//         uniqe.push(arr2[i])
     
//     }
//  }

//  console.log(uniqe);


 // merge 
//  let arr3=[1,2,3]
//  let arr4=[4,5,6]
//  let arr5=[...arr3,...arr4]
//  console.log(arr5);


// -------object ---

// let student = {
//     name :  " deepanshu",
//     age:24,
//     marks:75
// }
// if( student.marks >=90){
//     console.log(student.name , " Grade A+");
// } if(student.marks >=80){
//     console.log(student.name , "grade A");
// }if(student.marks >= 60){
//     console.log(student.name , "grade B");
// }
// if(student.marks >= 50){
//     console.log(student.name , "grade c");
// }else{
//     console.log("D ");
// }
// // Object me method → full details print karo
// let studentes = {
//     name :  " deepanshu",
//     age:24,
//     marks:73,
//     printDetails : function(){
//       console.log(`name : ${this.name}, age : ${this.age}, marks : ${this.marks}`);
//     }
    
// }
// studentes.printDetails()

// //Object me method → full details print karo
// let student1 = {
//     name :  " deepanshu",
//     age:24,
//     marks:75
// }
// student1.occupation="learning"
// console.log(student1);

// //Object me se ek key delete karo

// delete student1.age
// console.log(student1);


// let students = [
//     { name: "A", marks: 50 },
//     { name: "B", marks: 60 },
//     { name: "C", marks: 70 }
// ];
// let total = 0
// for(let i = 0; i<students.length; i++){
//     total += students[i].marks 
// }
// console.log(total);


// revision 


//que -1 

// function largeNum(a,b,c){
//     let maxx= a
//     if(b >=maxx){
//         return maxx = b 
//     }else if(c >=maxx){
//     return maxx = c
//     }
//     return maxx
// }
// console.log(largeNum(23,92,87));


// //que -2
// function evenNum(arr){
//     let count=0
//    for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2===0){
//         count++
//     }
//    }
//    return count
// }

// console.log(evenNum([1,2,3,4,5,6,7,8]));

// // que -3
// function vowel(arr){
//   let count = 0
//     for(let i =0; i<arr.length; i++){
//           let str = arr[i]

//         if( str === "a"  || str === "i" || str === "o" || str === "u" || str ==="e"){
//             count++
//         }
//     }
//     return count
// }
// console.log(vowel("hello"));

// // que 4
// function sum(arr){
//     let arrSum=0
//     for(let i =0; i<arr.length;i++){
//         arrSum += arr[i]
//     }
//     return arrSum

// }
// console.log(sum(1,2,3));

// // que -5
// function element(num){

// let total = 0
// while(num > 0 ){
//     let digit = num % 10
//     total += digit
//     num = Math.floor(num/10)
// }
// return total
// }
// console.log(element(123));

// //que 6

// let arr = [1,2,3,4,4,3,2,1]

// let newArr = []
// for( let i=0; i<arr.length; i++){
//     if(  !newArr.includes(arr[i])){
     
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// //  que 7 
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let newArr1=[ ...arr1, ...arr2]

// console.log(newArr1);

// // que 9

// let student = {
//     name : "deepanshu",
//     age : 23,
//     marks : 75
// }
// if(student.marks >= 90){
//     console.log("A");
// }else if(student.marks >= 70){
//     console.log("B");
// }else if( student .marks >= 50){
//     console.log("C");
// }else {
//     console.log("fail");
// }

// // q 10
// let obj = {
//     name : "deepanshu",
//     age: 23,
//     isMarks : 23,
//     fullDetails : function(){
//         console.log(`name : ${this.name}, age: ${this.age} , isMarks : ${this.isMarks}`);
//     }
// }
// obj.fullDetails();

// // q 11
// let students= [
//  {name:"A", marks:50},
//  {name:"B", marks:60}
// ]

// let total = 0 
// for(let i =0; i<students.length; i++){
//     total += students[i].marks
// }
// console.log(total);


// //q 1
// for(let i = 0 ; i <= 50; i++){
//     if(i %2 === 0){
//             console.log(i);
//     }
// }
// // q 2
// let n = 5
//  let sum = 0
// for(let i = 1 ; i<=n; i++){
// sum += i
// }
//   console.log(sum);
// // q 3
// let num = 7;
// let isPrime = true

// for(let i=2 ; i<num; i++){
//     if(num % i === 0){
//         isPrime =  false
//         break ;
//     }

// }
// if( isPrime && num > 1){
//         console.log("prime");
//     }else{
//         console.log("not prime ");
//     }
// console.log(isPrime);



// function level 2 
// q 1
// function square(n){
//  return n*n
// }
// console.log(square(2));

function sum(arr){
    let total = 0
    for(let i = 0 ; i<arr.length; i++){
         total = total +arr[i]
    }
    return total
}
console.log(sum([1,2,3,4]));

function isPalindrome(str){
  
    let rev = ""
    for(let i = str.length-1 ; i>=0; i--){
        rev = rev + str[i]
    }
    if(str === rev ){
        return "palindrome"
    }else{
        return "not palindrome"
    }
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));


