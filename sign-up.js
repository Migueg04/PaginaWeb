const localStorage = window.localStorage


function signUp(e) {









    let newUser = document.getElementById("Username").value
    let newEmail = document.getElementById("email").value
    let newPass = document.getElementById("Password").value
    let newPass2 = document.getElementById("confirmPassword").value

    //Validar que no estén vacíos.
    if (newEmail !== "" && newPass !== "" && newUser !== "" && newPass2 !== "") {

        if (newPass === newPass2) {
            if (!localStorage.getItem(newUser)) {
                const userData = {
                    email: newEmail,
                    password: newPass,
                    user: newUser,
                    favorites: [],
                };
                localStorage.setItem(userData.user, JSON.stringify(userData));
                localStorage.setItem('currentUser', userData.user);

                alert("User registered");
                window.location = "Log-in.html"
            } else {
                alert("User already exists");
            }
        } else {
            alert("Passwords don't match");
        }

    } else {
        alert("Please fill the fields");
    }
}

let form = document.getElementById('signup-form1')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    signUp()
})
