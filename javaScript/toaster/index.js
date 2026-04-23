function createToster(config){

    return function(notification){

        let div = document.createElement("div")
        div.className =`fixed bg-gray-600 text-black px-6 py-3 rounded shadow-lg  pointer-events-none
        ${config.positionX === "right" ? "right-10" : "left-10"}
        ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

        div.textContent=notification
        document.body.appendChild(div);

        setTimeout(()=>{
            div.remove()
        } ,config.duration || 3000)
    }
}

let toster = createToster({
  positionX : "right",
  positionY : "top",
  duration : 3000
})

toster("this is dummy  notification ")