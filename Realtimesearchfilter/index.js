const users = [
    {
        name: "Rahul verma",
        bio: "Frontend developer who loves building UI with HTML, CSS, and JavaScript.",
        email: "rahul@gmail.com"
    },
    {
        name: "Priya Verma",
        bio: "Passionate about design and user experience.",
        email: "priya@yahoo.com"
    },
    {
        name: "Amit Singh",
        bio: "Learning full stack development and improving problem solving skills.",
        email: "amit@outlook.com"
    },
    {
        name: "Neha Gupta",
        bio: "Creative thinker and aspiring web developer.",
        email: "neha@gmail.com"
    },
    {
        name: "Arjun Mehta",
        bio: "JavaScript enthusiast and tech blogger.",
        email: "arjun@company.com"
    }
];

let cards =document.querySelector(".card-container")

function showUser(arr){


arr.forEach((users) => {

    const card = document.createElement("div")
    card.classList.add("card")


    const h3 = document.createElement("h3")
    h3.textContent= users.name
    h3.classList.add("h3")

    const bio = document.createElement("p")
    bio.textContent = users.bio
    bio.classList.add("bio")

    const email = document.createElement("p")
    email.textContent = users.email
    email.classList.add("email")

    card.appendChild(h3)
    card.appendChild(bio)
    card.appendChild(email)

    cards.appendChild(card)
});

}
showUser(users)

let inp = document.querySelector(".search")

inp.addEventListener("input",()=>{
    let newUser= users.filter((user)=>{
       return user.name.toLowerCase().includes(inp.value.toLowerCase());
    });
    cards.innerHTML = "";
  showUser(newUser);

})


