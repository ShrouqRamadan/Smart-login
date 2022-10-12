/* resister Page  */
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var btnSign = document.getElementById("btnSign");
var success = document.getElementById("success");
var emailvalid = document.getElementById("emailvalid");
var inputRequired = document.getElementById("inputRequired");
var incorrect = document.getElementById("incorrect");
var nameUser = document.getElementById("nameUser");
var regexEmail = document.getElementById("regexEmail");
var character = document.getElementById("character");

var userData = [];

if(localStorage.getItem("userdata")!=null){
    userData=JSON.parse(localStorage.getItem("userdata"));
}

if(JSON.parse(localStorage.getItem("myValue")!=null))
{
    var myValue=JSON.parse(localStorage.getItem("myValue"));
    nameUser.innerHTML+=  myValue;
}



function register() {
    if (userName.value == "" || userEmail.value == "" || userPassword.value == "") {
        inputRequired.classList.remove("d-none");
        success.classList.add("d-none");
        emailvalid.classList.add("d-none");
        character.classList.add("d-none");
        regexEmail.classList.add("d-none")


        clear();

    }
     else if (userName.value.length <= 2)
     {
        character.classList.remove("d-none");
        inputRequired.classList.add("d-none");
        success.classList.add("d-none");
        emailvalid.classList.add("d-none");
        regexEmail.classList.add("d-none")

        clear();

    } else if (validation() == true)
     {
        validation();
        clear();

    }
     else if ( regex() == true)
     {
        var dataReg = {
            nameus: userName.value,
            emailus: userEmail.value,
            passwordus: userPassword.value,
        }
        userData.push(dataReg);
        localStorage.setItem("userdata", JSON.stringify(userData));
        success.classList.remove("d-none");
        inputRequired.classList.add("d-none");
        emailvalid.classList.add("d-none");
        character.classList.add("d-none");
        regexEmail.classList.add("d-none")

        clear();
    }
    else {
regexEmail.classList.remove("d-none");
inputRequired.classList.add("d-none");
success.classList.add("d-none");
emailvalid.classList.add("d-none");
character.classList.add("d-none");

        clear();
    }


}

function clear() {
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
}

function validation() {
    for (var i = 0; i < userData.length; i++) {
        if (userEmail.value.toUpperCase() == userData[i].emailus.toUpperCase()) {
            emailvalid.classList.remove("d-none");
            inputRequired.classList.add("d-none");
            success.classList.add("d-none");
            character.classList.add("d-none");
            regexEmail.classList.add("d-none")
            return true;
        }
    }
}

function regex(){
    var regular = /@(gmail|yahoo)\.com$/
   if(regular.test(userEmail.value) == true)
   {
    return true;
   }
   else
   {
    return false;
   }


}

/* login Page  */

function login() {
    if (userEmail.value == "" || userPassword.value == "") {
        inputRequired.classList.remove("d-none");
        success.classList.add("d-none");
        emailvalid.classList.add("d-none");


    }
    else (validationlogin() == true)
     {

        inputRequired.classList.add("d-none");
        validationlogin();

    }


}

function validationlogin() {
    for(var i=0 ; i< userData.length; i++) {
        if (userEmail.value.toUpperCase() == userData[i].emailus.toUpperCase()&& userPassword.value.toUpperCase() == userData[i].passwordus.toUpperCase())  {
           localStorage.setItem("myValue",JSON.stringify(userEmail.value));
           window.location.href = "home.html";
           return true;
           }
           else{
            incorrect.classList.remove("d-none")
            // clearlogin()
          }


    }

}

function clearlogin() {

    userEmail.value = "";
    userPassword.value = "";
}

