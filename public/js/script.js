let myVar
function checkuser() {
    myVar = setTimeout(showPage, 1000)

    auth.onAuthStateChanged(user => {
        if (!user) {
            window.location.replace('index')
        }
    })
}
const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) => {
    e.preventDefault()
    auth.signOut().then(() => {
        window.location.replace('index')
    })
})
function showPage() {
    document.getElementById("loader").style.display = "none"
    document.getElementById("body").style.display = "block"
}