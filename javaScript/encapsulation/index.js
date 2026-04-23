function click(){
    let click =0
    return function (){
        click++
        if(click < 5){
                 console.log(`click ${click}  times`);
        }
        else{
          console.error("LIMIT EXCEEDED TRY AFTER SOME TIMES ")
        }
    }
}
let fnc = click()
fnc()
fnc()

fnc()

let fnc2 = click()
fnc2()
fnc2()
fnc2()
fnc2()
fnc2()
fnc2()
fnc2()
