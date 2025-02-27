const input = document.getElementById("userInput");

input.addEventListener("input", ()=>{

    let userInput = input.value.length

    const span = document.getElementById("spanArea")

    span.innerHTML = userInput + "/200"

    if(userInput == 200){
        span.classList.add("red-text")
    }

})