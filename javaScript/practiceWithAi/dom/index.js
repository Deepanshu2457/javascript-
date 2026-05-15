
// Q1

let h1= document.querySelector("#title").innerText = "welcome"

// Q2

let p = document.querySelector(".para")

p.style.color = "red"

// Q3

let btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    console.log("button click");
    alert("button clicked")
  
})

// Q4

let btn1 = document.querySelector(".btn1")

btn1.addEventListener("click" , function(){
    btn1.style.backgroundColor = "black"
    btn1.style.color = "white"
})

// Q5

let inp = document.querySelector("#inp")
let btnInp = document.querySelector(".show")

btnInp.addEventListener("click", ()=>{
     let value = inp.value
    
      let p = document.createElement("p")
      p.innerText = value

      document.body.appendChild(p)

})





