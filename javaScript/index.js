// function oddEven(n){
//     if(n <= 0) return "not positive";
//     if(n % 2 === 0) return "positive even"

// return "postive odd"
// }
// console.log(oddEven(4))

function grade(score){
    if(score >= 90 && score <= 100) return "A"
    if(score >= 75 && score <= 89 ) return "B"
    if(score >= 55 && score <= 74 ) return "C"
    if(score >= 33 && score <= 54 ) return "D"
    if(score >= 32)return "fail"
    return "invalid operation"
}

console.log(grade(66));