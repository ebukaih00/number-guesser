let number = Math.floor(Math.random() *100) + 1

let responseEl = document.getElementById("response")
let attemptEl = document.getElementById("attempts")
let attempt = 0


function loadguess(){

let guess = Number(document.getElementById("input-el").value)


if (guess === 0 || guess === ""){
    responseEl.innerText = "Please enter a valid input"
    attemptEl.innerText = ""
    return
}

attempt += 1

    if (guess<number){
        responseEl.innerText = "Too low"
        attemptEl.innerText = "Attempt: " + attempt
    }

    else if (guess>number){
        responseEl.innerText = "Too high"
        attemptEl.innerText = "Attempt: " + attempt
    }

    else{
        responseEl.innerText = "Correct!"
        attemptEl.innerText = "Attempt: " + attempt
    }
}