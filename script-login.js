
const users = [
    {user: 'Fernando', password: 'Ferna123'},
    {user: 'Lorena', password: 'Lore123'}
]

const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");
const button = document.querySelector(".button")
const warningUser = document.querySelector('.warning-user')
const warningPassword = document.querySelector('.warning-password')

button.addEventListener("click", e => {
    e.preventDefault()
    warningUser.textContent = ""
    warningPassword.textContent = "" 
    const userName = users.find(user => user.user === nameInput.value)
    const userPassword = users.find(user => user.password === passwordInput.value)
    if(userName && userPassword){
        window.location.href = './index.html'
    }
    else{
        if(!userName)
            warningUser.textContent = "Usuario incorrecto"
        if(!userPassword)
            warningPassword.textContent = "Contraseña incorrecta"
    }
})