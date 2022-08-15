let myVar;
function checkuser(){
    myVar = setTimeout(showPage, 1000);
auth.onAuthStateChanged(user => {
    if(!user){
        window.location.assign('index');
    }
});
}
const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e)=>{
    e.preventDefault();

    const fullName = signup['fname'].value +' ' +signup['lname'].value;
    const eml = signup['signuserid'].value;
    const pwd = signup['signpwdid'].value;
    const stdClass = signup['class'].value;

    auth.createUserWithEmailAndPassword(eml, pwd).then( cred=> {
        auth.signOut().then(() => {
            window.location.assign('index');
        });
    });
    auth.createUserWithEmailAndPassword(eml, pwd).catch(function(error){
        document.querySelector('#wrong-info').textContent = error.message;
    });
});
function showPage(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("body").style.display = "block";
}