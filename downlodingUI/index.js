let count = 0
let progressbar= document.querySelector(".progress-bar")
 let percent = document.querySelector(".percent")
let h2 = document.querySelector("h2")
 let intv = setInterval(()=>{
 if(count <= 99){
    count++
    progressbar.style.width= `${count}%`;
    percent.textContent=`${count}%`
 }
 else{
   h2.textContent=" finish download"
   clearInterval(intv)
 }
 }, 10000/ 100)