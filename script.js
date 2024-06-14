const emailInput = document.getElementById("email-input")
const invalidInput = document.getElementById("invalid-email")
const form = document.getElementById("form")
const buttons = document.querySelectorAll("button")

let isSuccess = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

function checkEmail(){
    let input = emailInput.value.trim().split("");
    let chars = {}
    input.slice(input.indexOf("@")).forEach((value, index, array) => {
        if(value == "@" || value == "."){
            chars[value] = chars[value] ? chars[value] + 1 : 1;
        }
    })
    
    if(input.length <= 0 || !input.includes("@") || !input.includes(".") || !input[input.length - 1] == '.' || chars["@"] > 1 || chars["."] > 1){
        emailInput.classList.add("invalid-input")
        invalidInput.classList.add("invalid-input")
    } else{
        const form = document.getElementsByClassName("form-container")
        const success = document.getElementsByClassName("success-message")
        const info = document.getElementsByClassName("info")

        console.log(buttons)

        emailInput.classList.remove("invalid-input")
        invalidInput.classList.remove("invalid-input")

        form[0].style.display = "none"
        success[0].style.display = "flex"
        
        if(isSuccess === false){
            const confirmation = document.createElement('p') 
            confirmation.classList.add("confirmation-text")
            confirmation.innerHTML = `A confirmation email has been sent to <span style="font-weight: 700">${emailInput.value}</span>. Please open it and 
                                        click the button inside to confirm your subscription.`
            info[0].appendChild(confirmation)
        } else{
            const confirmation = document.getElementsByClassName("confirmation-text")
            confirmation[0].innerHTML = `A confirmation email has been sent to <span style="font-weight: 700">${emailInput.value}</span>. Please open it and 
                                        click the button inside to confirm your subscription.`
        }
        
        buttons[1].addEventListener("click", () => {
            success[0].style.display = "none"
            form[0].style.display = "flex"
        })
        isSuccess = true;
    }
}

const btnBackground = document.querySelectorAll(".button-background")

buttons.forEach((el, idx, arr) => {
    el.addEventListener("mouseover", () => {
        btnBackground[idx].style.opacity = '1'
        el.firstElementChild.style.filter = "drop-shadow(0px 5px 10px hsla(13, 97%, 63%, 0.7))"
    })
    
    el.addEventListener("mouseout", () => {
        btnBackground[idx].style.opacity = '0'
        el.firstElementChild.style.filter = "none"
    })
})

function removeInvalid(){
    if([...emailInput.classList].includes("invalid-input")){
        emailInput.classList.remove("invalid-input")
        invalidInput.classList.remove("invalid-input")
    }
}

const imageDesktop = document.getElementById("image-desktop")
const imageMobile = document.getElementById("image-mobile")

console.log(window.innerWidth)
if(window.innerWidth <= 700){
    console.log("mobile")
    mobileImage("on")
}

window.addEventListener('resize', () => {
    if(window.innerWidth <= 700){
        mobileImage("on")
    } else{
        mobileImage("off")
    }
})

function mobileImage(arg){
    if(arg == "on"){
        imageDesktop.style.display = "none"
        imageMobile.style.display = "block"
    } else{
        imageMobile.style.display = "none"
        imageDesktop.style.display = "block"
    }
}