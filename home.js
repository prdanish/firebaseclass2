firebase.auth().onAuthStateChanged((user) => {
 if(user){
    console.log("login true",user)
 }else{
    window.location.assign("index.html")
 }
  });