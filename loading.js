// setTimeout(() => {
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            console.log(user.emailVerified)
           if(user.emailVerified) {
            // navigate home page
            window.location.assign("https://academy.ihunar.com/")
           }else{
            // navigate email verification page
            window.location.assign("https://portal.ihunar.com/emailVerification")
           }
        }else{
            console.log("login false")
              window.location.assign("https://portal.ihunar.com/")
        }
    });
// }, 5000);