const emailInput = document.getElementById("email-input")
const invalidInput = document.getElementById("invalid-email")

function checkEmail(){
    let input = emailInput.value.trim().split("");
    let chars = {}
    input.slice(input.indexOf("@")).forEach((value, index, array) => {
        if(value == "@" || value == "."){
            chars[value] = chars[value] ? chars[value] + 1 : 1;
        }
    })

    if(input.length <= 0 || !input.includes("@") || !input.includes(".") || chars["@"] > 1 || chars["."] > 1){
        emailInput.classList.add("invalid-input")
        invalidInput.classList.add("invalid-input")
    } else{
        const form = document.getElementsByClassName("form-container")
        const success = document.getElementsByClassName("success-message")
        const buttons = document.querySelectorAll("button")

        emailInput.classList.remove("invalid-input")
        invalidInput.classList.remove("invalid-input")
        window.alert("Everything is correct")

        form[0].style.display = "none"
        success[0].style.display = "block"
        
        const confirmation = document.createElement('p') 
        confirmation.textContent = `A confirmation email has been sent to ${emailInput.value}. Please open it and 
                                    click the button inside to confirm your subscription`
        success[0].insertBefore(confirmation, buttons[1])

        buttons[1].addEventListener("click", () => {
            success[0].style.display = "none"
            form[0].style.display = "flex"
        })
    }
}

function removeInvalid(){
    if([...emailInput.classList].includes("invalid-input")){
        emailInput.classList.remove("invalid-input")
        invalidInput.classList.remove("invalid-input")
    }
}