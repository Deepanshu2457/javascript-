let email = document.querySelector("#email");
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    document.querySelector("#emailError").textContent=""
        document.querySelector("#passwordError").textContent=""
    const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let passwordAns=  passwordRegex.test(password.value)
   let emailAns =  emailRegex.test(email.value)

     passwordAns.textContent="";
     emailAns.textContent="";

   if(!emailAns){
    email.style.borderColor = "red"
   emailError.textContent = "email is incorrect"

   }
     if(!passwordAns){
        password.style.borderColor = "red"
    passwordError.textContent ="password is incorrect"
   }

      if (emailAns && passwordAns) {
        alert("Login Successful");
        form.reset()
    }
})