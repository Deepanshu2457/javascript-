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

// day 5  function => Function is reusable block of code used to perform a task and reduce repetition.
// Q1
// function add(a,b){
//     return a + b
// }
// let result = add(4,5)
// console.log(result);
// // Q2
// function evenNum(num){
//     if(num % 2===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(evenNum(6));
// Q3
// function factorial(num){
//     let fact = 1
//     for(let i=1; i<=num; i++){
//         fact = fact * i
//     }
//     return fact
// }
// console.log(factorial(5));

// // Q4

// function isPrime(num){
//    if(num <= 1) return false

//    for(let i=2; i<num;i++){
//     if(num % i ===0){
//         return false
//     }
//    }
//   return true
// }
// console.log(isPrime(10));

// function reverseNum(num){
//     let rev =0
//     while(num>0){
//         let digit = num % 10
//         rev = rev * 10 + digit
//         num = Math.floor(num/10)
//     }
//     return rev
// }
// console.log(reverseNum(1234));

// day 5 Array
// Q1
// let arr = [10,20,30,40,50]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// Q2
// let arr = [ 5,10,15,20]
// let sum = 0
// for(let i=0;i<arr.length; i++){
//    sum = sum + arr[i]
// }
// console.log(sum);

// Q3
// let arr = [ 12, 45, 7,89, 23]

// let largest = arr[0]
// for(let i =0; i<arr.length ; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
// }
// console.log(largest);

// Q4

//  let arr = [ 12, 45, 7,89, 23]

//  let small = arr[0]

//  for(let i = 0 ; i<arr.length; i++){
//     if(arr[i] < small){
//         small = arr[i]
//     }
//  }
// console.log(small);

// Q5

// let arr = [2, 5, 8, 11, 14, 17];

// let count = 0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 ===0){
//         count++
//     }
// }
// console.log(count);

// Q6

// let arr=[1,2,3,4,5]
// let left =0
// let right = arr.length -1


// while(left < right){
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp

//     left++
//     right--
// }
// console.log(arr);

// day 7 Strings
// Q1

// let str = "hello"
// let rev =" "

// for(let i = str.length -1 ; i>=0; i--){
//     rev = rev + str[i]
// }
// console.log(rev);

// Q2
// let str = "madam"

// function isPalindrome(str){
//     let check = ""
//   for(let i= str.length -1 ; i>=0; i--){
//    check = check + str[i]
//   }
//   if(str === check){
//     return true
//   } else{ 
//     return false
//   }
// }
// console.log(isPalindrome("madam"));


// function palindrome(str){
//     let left = 0
//     let right = str.length -1

//     while(left < right){
//         if(str[left] !== str[right]){
//                return false
//         }
//         left++
//         right--
//     }
//     return true

// }

// console.log(palindrome("madam"));
// console.log(palindrome("deepa"));


// Q3

// let str = "javascript"
// let count = 0

// for(let i=0; i<str.length; i++){
//     if("aeiou".includes(str[i])){
//         count++
// }
// }
// console.log(count);

// for(let i=0; i<str.length; i++){
//     if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//      count++
// }
// }
// console.log(count);

// Q4
//   note : str ki value ku change nhhi hui .. dusre varible mai store ku karna pada .. dusre variable value change ho gyi ( asa ku )
// let str = "hello world"
//   let upper = str.toUpperCase()
// console.log(upper);
// console.log(str); 



// Q5

// let str = "HELLO WORLD"
// let lower = str.toLowerCase()
// console.log(lower);

// Q6

// let str = " j a v a s c r i p t ";
// let result = ""
// for(let i=0; i<str.length; i++){
//     if(str[i] !== " ")
//    result = result + str[i]
// }
// console.log(result);

// day 8 Array methods

// Q1

// let arr = [1,2,3]
// arr.push(4)
// console.log(arr);

// Q2

// let arr = [10,20,30,40]
// arr.pop()
// console.log(arr);

// Q3

// let arr = [1,2,1,3,2,1]

// let freq = {}

// for(let i = 0; i<arr.length; i++){
//     if(freq[arr[i]]){
//         freq[arr[i]]++
//     }else{
//         freq[arr[i]] = 1
//     }
// }
// console.log(freq);

// Q4

// let arr = [1,2,3,2,4,1,5];
// let result = {}
// for(let i=0 ; i<arr.length; i++){
//     if(result[arr[i]]){
//         result[arr[i]]++
//     }else{
//         result[arr[i]] = 1
//     }
    
// }
// for(let key in result){
//     if(result[key] !== 1){
//         console.log(key);
//     }
// }

// Q5

// let arr = [1,2,2,3,4,4,5];
// let uniqe = []
// for(let i = 0; i<arr.length; i++){
//     if(!uniqe.includes(arr[i])){
//         uniqe.push(arr[i])
//     }
// }
// console.log(uniqe);

// Q 6

// let arr = [10,20,30,40];
// let found = false
// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i] === 30){
//       found = true
//        break;
//     }
// }
// if(found){
//     console.log("exist");
// }else{
//     console.log("not Exist");
// }



// interview Question


// let arr = [10,45,23,89,67];

// let large = -Infinity
// let sL = -Infinity

// for(let i =0 ; i<arr.length; i++){
//     if(arr[i] > large){
//         sL = large
//         large = arr[i]
//     }
//     if( arr[i] > sL && arr[i] !== large){
//         sL = arr[i]
//     }
    
// }
// console.log(sL);

// day 9 objects

// Q1
// let student = {
//     name: "Aman",
//     age: 22,
//     marks: 88
// };
// console.log(student.name);
// console.log(student["age"]);
// console.log(student.marks);

// Q2

// let student = {
//     name: "Aman",
//     age: 22,
//     marks: 88
// };
// student.marks = 95

// console.log(student.marks);

// Q3

// let students = [
//     {name: "A", marks: 50},
//     {name: "B", marks: 80},
//     {name: "C", marks: 70}
// ];

// let topper = students[0].marks

// for(let i=0; i<students.length; i++){
//     if(students[i].marks > topper){
//         topper = students[i].marks
//     }
// }
// console.log(topper);

// // Q4

// for(let i =0; i<students.length; i++){
//     console.log(students[i].name);
// }

// Q5

// let totalMarks = 0
// for(let i=0; i<students.length; i++){
//     totalMarks = totalMarks + students[i].marks
// }
// console.log(totalMarks);


// // interview question 
// let lowestMarks = students[0].marks
// let lowStudentName = students[0].name

// for(let i=0; i<students.length; i++){
//     if(students[i].marks <= lowestMarks){
//         lowestMarks = students[i].marks
//         lowStudentName = students[i].name
//     }
// }
// console.log(lowestMarks);
// console.log(lowStudentName);

// day 10  array and objects 
// Q1

// let students = [
//     {name: "A", marks: 80},
//     {name: "B", marks: 45},
//     {name: "C", marks: 90},
//     {name: "D", marks: 30}
// ];

// let passedStudent = []

// for(let i = 0 ; i<students.length; i++){
//     if(students[i].marks >= 50){
//          passedStudent.push(students[i])
//     }
// }
// console.log(passedStudent);

// // Q2

// let failedStudent = []
// for(let i=0; i<students.length; i++){
//     if(students[i].marks < 50){
//       failedStudent.push(students[i])
//     }
// }
// console.log(failedStudent);

// // Q3
 
// let totalMarks = 0 
//  for(let i=0; i<students.length; i++){
//     totalMarks = totalMarks + students[i].marks
//  }
//   let average =  totalMarks / students.length
//   console.log(average);

// //   Q4

// let topperName = students[0].name
// let topper = students[0].marks

// for(let i =0 ; i<students.length; i++){
//     if(students[i].marks >= topper ){
//        topper = students[i].marks
//        topperName = students[i].name

//     }
    
// }
// console.log(topperName);

// // Q5

// let arr = [1,2,3,4,5,6];

// let result = {
//     even : [],
//     odd : []
// }
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 ===0){
//         result.even.push(arr[i])
//     } 
//     if(arr[i] % 2 !== 0 ){
//         result.odd.push(arr[i])
//     }
// }
// console.log(result)

// // Q6

// let str = "javascript";

// let freq = {}

// for(let i=0; i<str.length; i++){
//     if(freq[str[i]]){
//         freq[str[i]]++
//     }else{
//         freq[str[i]]=1
//     }
// }
// console.log(freq);

// // Q7

// let students = [
//     {name: "A", marks: 50},
//     {name: "B", marks: 80},
//     {name: "C", marks: 70},
//     {name: "D", marks: 90}
// ];

// let top = students[0].marks
// let sTop = students[0].marks

// let max1 = -Infinity
// let max2 = -Infinity

// let firstTop= null
// let secondTop = null

// for(let i=0;i<students.length ; i++){
//     let marks = students[i].marks
//     if(marks > max1){

//         max2 = max1
//         secondTop = firstTop
//         max1 = marks
//         firstTop = students[i]
//     }
//     else if(marks > max2 && marks !== max1){
//         max2 = marks
//         secondTop = students[i]
//     }
// }
// console.log(secondTop);

// console.log(firstTop);



// day 11 array advance 

// Q1 
// let arr = [ 1,2,3,4]

// let ans = arr.map((num)=>{
//     return  num * 2
// })
// console.log(ans);

// Q2

// let arr = [1,2,3,4,5,6]

// let ans = arr.filter((num)=>{
//     return num % 2 ===0
// })
// console.log(ans);

// Q3

// let arr = [10,20,30]

// let ans = arr.reduce((acc , curr)=>{
//     return acc + curr

// },0)
// console.log(ans);

// Q 4

// let students = [
//    {name:"A", marks:50},
//    {name:"B", marks:90},
//    {name:"C", marks:70}
// ];


// let ans = students.find((num)=>{
//     return num.marks > 80;
// })
// console.log(ans);

// Q5

// let arr = [5,10,-2,8];

// let ans  = arr.some((num)=>{
//     return num < 0 
// })
// console.log(ans);

// // Q6

// let arr = [2,4,6,8];

// let ans = arr.every((num)=>{
//     return num % 2 === 0
// })
// console.log(ans);


// Q6

// let students = [
//    {name:"A", marks:50},
//    {name:"B", marks:90},
//    {name:"C", marks:70}
// ];
// let ans = students.reduce((acc , curr)=>{
//       return acc + curr.marks
// },0)

// console.log(ans);






//           Dom Javascript   day 12























