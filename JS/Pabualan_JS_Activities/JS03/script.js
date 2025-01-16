var submitButton = document.getElementById("submit");
var newPassword = document.getElementById("newpassword");
var currentPassword = document.getElementById("confirmpassword");
var passwordMsg = document.getElementById("passwordmsg");
submitButton.addEventListener('click',()=>{
        if(newPassword.value=="" || currentPassword.value==""){
        console.log('22')
    }
    else if (newPassword.value===currentPassword.value){
        passwordMsg.innerHTML = "Password successfully changed!"
        passwordMsg.style.color = "green";
    } else {
        passwordMsg.innerHTML = "Passwords do not match. Please try again."
        passwordMsg.style.color = "red";
        console.log('1')
    }
});