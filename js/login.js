const login = document.querySelector('.login')
const register = document.querySelector('.register')
const swapLoginRegister = document.querySelector('.swapLoginRegister')

swapLoginRegister.addEventListener("click", (e) => {
    e.preventDefault()

    login.classList.toggle("hide")
    register.classList.toggle("hide")
}) 
