let myVar
function checkuser() {
    myVar = setTimeout(showPage, 1000)

    auth.onAuthStateChanged(user => {
        if (user) {
            window.location.replace('account')
        }
    })
}

const login = document.querySelector('#login-form')
const wrongInfo = document.querySelector('#wrong-info')
const submit = document.querySelector('#submit-btn')
let showbtn = document.querySelector('#show')
let pwd = document.querySelector('#passid')
showbtn.addEventListener('click', function () {
    if (pwd.type === "password") {
        pwd.type = "text"
        showbtn.classList.add('bi-eye-slash-fill', true)
        showbtn.classList.remove('bi-eye-fill', true)
    }
    else {
        pwd.type = "password"
        showbtn.classList.add('bi-eye-fill', true)
        showbtn.classList.remove('bi-eye-slash-fill', true)
    }
})
login.addEventListener('submit' || 'enter', (e) => {
    e.preventDefault()
    const email = login['userid'].value + "@gmail.com"
    const pwd = login['passid'].value


    auth.signInWithEmailAndPassword(email, pwd).then(cred => {
        window.location.replace('account')
    })
    auth.signInWithEmailAndPassword(email, pwd).catch(function (error) {
        let errorCode = error.code
        let errorMessage = error.message
        if (errorCode == 'auth/user-not-found') {
            wrongInfo.textContent = "No Such User Found"
        }
        else if (errorCode == 'auth/wrong-password') {
            wrongInfo.textContent = "Incorrect Password"
        }
        else {
            wrongInfo.textContent = errorMessage
        }
    })
})

function showPage() {
    document.getElementById("loader").style.display = "none"
    document.getElementById("body").style.display = "block"
}