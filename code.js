

let number = Math.floor(Math.random() * 100) + 1
let responseEl = document.getElementById("response")
let attemptsEl = document.getElementById("attempts")

let attempts = 0

function loadguess(){
    let rawInput = document.getElementById("input-el").value
let guess =  Number(rawInput)


if(rawInput === ""){
        responseEl.innerText = "Please enter a number!"
        responseEl.style.color = "red"
        return  
    }

    if(guess === 0){
        responseEl.innerText = "Please enter a valid number!"
        responseEl.style.color = "red"
        return  
    }

    if(!Number.isInteger(guess)){
//  ^
//  ! means "is NOT an integer"
    responseEl.innerText = "Please enter a whole number!"
    responseEl.style.color = "red"
    return
}
    

    

  attempts += 1
    attemptsEl.innerText = "Attempts: " + attempts

if (guess > number){
responseEl.innerText = "Too high!"
}

else if (guess < number){
    responseEl.innerText = "Too Low"
}

else {
    responseEl.innerText = "Correct! You got it in " + attempts + " attempts!"
    document.getElementById("button").disabled = true;
    document.getElementById("input-el").disabled = true;
}
}

