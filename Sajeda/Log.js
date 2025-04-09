const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});


let isLoggedIn = false;
if (localStorage.getItem("isLoggedIn")) {

  isLoggedIn = true;

}
function login(event) {

  event.preventDefault();

  // let user = document.getElementById("username").value;
  // let checkuser = localStorage.getItem("username");


  let userPassword = document.getElementById("password").value;
  let checkPassword = localStorage.getItem("signup_passwordLocalSign");

  console.log(userPassword);

  let email = document.getElementById("email").value;
  let checkemail = localStorage.getItem("signup_emailLocalSign");

  console.log(email);

  let Invalide = document.getElementById("fncheck11");

  if ((email === checkemail) && (userPassword === checkPassword)) {

    isLoggedIn = true;
    // window.location.replace("home.html");
    console.log("if true .....")


    sessionStorage.setItem("isLoggedIn", "true"); // Set login state
    window.location.replace("../Hala/index.html");
  } else {
    Invalide.innerHTML = "Invalid username or password";
    console.log("else .....")
  }
}


function signup(event) {
  event.preventDefault();
  debugger
  let firstname = document.getElementById("firstName").value;
  localStorage.setItem("firstNameLocalSignUp", firstname);

  let Lastname = document.getElementById("lastName").value;
  localStorage.setItem("lastNameLocalSignUp", Lastname);

  let birthDate = document.getElementById("birthDate").value;
  localStorage.setItem("birthDateLocalSign", birthDate);


  let password1 = document.getElementById("signup_password").value;
  localStorage.setItem("signup_passwordLocalSign", password1);

  let email1 = document.getElementById("signup_email").value;
  localStorage.setItem("signup_emailLocalSign", email1);


  let city = document.getElementById("city").value;
  localStorage.setItem("cityLocalSignUp", city);


  let Gender = document.getElementById("Gender").value;
  localStorage.setItem("GenderLocalSignUp", Gender);


  let submit = document.getElementById("signbutton").value;
  localStorage.setItem("signbuttonLocalSignUp", submit);

  window.alert("Thank you for registering with us");

}




function namevalidation() {

  let vname = document.getElementById("firstName").value;
  let nameerror = document.getElementById("fncheck");
  let ragname = /^[a-zA-Z]+$/;
  if (!ragname.test(vname)) {
    // nameerror.innerHTML = "Numbers are not allowed"
    // return false;
    nameerror.innerHTML = "Numbers are not allowed";
  }
  else {
    nameerror.innerHTML = "";

  }
}


function lastnamevalidation() {

  let vlname = document.getElementById("lastName").value;
  let lnameerror = document.getElementById("lncheck");
  let raglname = /^[a-zA-Z]+$/;
  if (!raglname.test(vlname)) {
    // nameerror.innerHTML = "Numbers are not allowed"
    // return false;
    lnameerror.innerHTML = "Numbers are not allowed";
  }
  else {
    lnameerror.innerHTML = "";

  }
}



function emailvalidation() {

  debugger
  let vemail = document.getElementById("signup_email").value;
  let emailerror = document.getElementById("emailcheck");
  const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexemail.test(vemail)) {
    emailerror.innerHTML = "The email is not valid";
  }
  else {
    emailerror.innerHTML = "";

  }
}



function passwordvalidation() {
  debugger
  let vpassword = document.getElementById("signup_password").value;
  let passworderror = document.getElementById("passcheck");

  const regexpassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,}$/
  if (!regexpassword.test(vpassword)) {
    passworderror.innerHTML = "Invalid Password. Must be 8+ characters, 1 number, 1 special char";
  }
  else {
    passworderror.innerHTML = "";
  }
}



function confirmpassword() {
  let fpassword = document.getElementById("signup_password").value;
  let spassword = document.getElementById("cpassword").value;
  let confpass = document.getElementById("cpasscheck");
  confpass.innerHTML = ""
  if (fpassword != spassword)
    confpass.innerHTML = "not the same Password";
}


function bdatevalidation() {
  let vdate = document.getElementById("birthDate").value;
  let dateerror = document.getElementById("dcheck");
  const regexdate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;

  if (!regexdate.test(vdate)) {
    dateerror.innerHTML = "The format should be dd/mm/yyyy";
  }
  else {
    dateerror.innerHTML = "";
  }
}









function isOddEven(num) {
  debugger
  if (num % 2 == 0) {
    for (let i = 20; i <= 30; i++)
      console.log(i);
  }
  else {
    for (let i = 20; i >= 10; i--)
      console.log(i);
  }
}

isOddEven(5);