let count = 0
let progressbar= document.querySelector(".progress-bar")
 let percent = document.querySelector(".percent")

 setInterval(()=>{
 if(count <= 99){
    count++
    progressbar.style.width= `${count}%`;
    percent.textContent=`${count}%`
 }
 }, 10000/ 100)