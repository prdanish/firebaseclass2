var message = document.getElementById("message")
firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if (user) {
        console.log("login true", user)
        message.innerHTML = "login true";
        message.style.color = "green"
    } else {
        // User is signed out
        console.log("login false")
        message.innerHTML = "login false";
        message.style.color = "red"
    }
});


// sign up
let email = document.getElementById("email");
let password = document.getElementById("password");
const SignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then((res) => {
        console.log("sign up", res);
        // Email verification
        res.user.sendEmailVerification()
    }).catch((err) => {
        console.log(err)
    })
}

// sign in
const SignIn = () => {
    firebase.auth().signInWithEmailAndPassword("abc1@gmail.com", "123456")
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("Signed in", user)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log("errorMessage", errorMessage)
        });
}


// logout
const LogOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.")
    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}


// current user
const CurrentUser = () => {
    const user = firebase.auth().currentUser;
    console.log("current user", user)
}

// update user data
const UpdateUser = () => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: "iHunar Academy",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        // Update successful
        console.log("Update successful")
    }).catch((error) => {
        // An error occurred
        console.log("error", error)
    });
}

// update email
const UpdateUserEmail = () => {
    const user = firebase.auth().currentUser;
    user.updateEmail("user@example.com").then(() => {
        // Update successful
        console.log("Update successful email")
    }).catch((error) => {
        // An error occurred
        // ...
        console.log(error)
    });
}


// resend email
const ResendEmail = () => {
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            // Email verification sent!
            console.log("Email verification sent!")
        });
}


// reset password
const ResetEmail = () => {
    firebase.auth().sendPasswordResetEmail("tawopa1629@anwarb.com")
        .then(() => {
            // Password reset email sent!
            // ..
            console.log("Password reset email sent!")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log("error", error)
        });
}


// delete account
const DeleteAccount = () => {
    const user = firebase.auth().currentUser;

    user.delete().then(() => {
        // User deleted.
        console.log("User deleted.")
    }).catch((error) => {
        // An error ocurred
        // ...
        console.log("error")
    });
}


// logi  with google
const LoginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        });
}



// add data
var addDataInput = document.getElementById("addDataInput");
let addDataMessage = document.getElementById("addDataMessage")
const AddData = () => {
    if (addDataInput.value === "") {
        addDataMessage.innerHTML = "Type something...";
        addDataMessage.style.color = "red"
    } else {
        // firebase.database().ref("todos/" + "user1todo").set({
        //     todoValue: addDataInput.value
        // }, (error) => {
        //     if (error) {
        //         // The write failed...
        //     } else {
        //         addDataMessage.innerHTML = "Data saved successfully!";
        //         addDataMessage.style.color = "green"
        //         addDataInput.value = ""
        //     }
        // })


        firebase.database().ref("todos/").push({
            todoValue: addDataInput.value,
            email: "info@gmail.com"
        }, (error) => {
            if (error) {
                // The write failed...
            } else {
                addDataMessage.innerHTML = "Data saved successfully!";
                addDataMessage.style.color = "green"
                addDataInput.value = ""
            }
        })

    }
}