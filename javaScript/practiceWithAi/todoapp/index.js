

let inp = document.querySelector(".inp")
let addBtn = document.querySelector(".addbtn")
let task = document.querySelector(".tasklist")


addBtn.addEventListener("click", ()=>{
    let value = inp.value 
    if(value === "") return 

    let li = document.createElement("li")
    li.classList.add("task")
     li.innerText = value

     let strike= document.createElement("span")
     strike.innerText = value
       
    strike.addEventListener("click", ()=>{
        strike.classList.toggle("done")
    })

     let dltBtn = document.createElement("button")
     dltBtn.classList.add("deletebtn")
     dltBtn.innerText = "delete"
  
     dltBtn.addEventListener("click", ()=>{
        li.remove()
     })
      li.appendChild(strike)
     li.appendChild(dltBtn)
    task.appendChild(li)

    inp.value = ""
})