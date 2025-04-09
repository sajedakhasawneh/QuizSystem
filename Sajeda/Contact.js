function storeform(event){
    event.preventDefault();

    console.log("sajeda");

    let fname = document.getElementById("fname").value;
    sessionStorage.setItem("fname", fname);

    let lname = document.getElementById("lname").value;
    sessionStorage.setItem("lname", lname);
    

    let email = document.getElementById("email").value;
    localStorage.setItem("email", email);

    let phone = document.getElementById("email").value;
    sessionStorage.setItem("phone", phone);

    let message = document.getElementById("message").value;
    sessionStorage.setItem("message", message);

  
    let submit = document.getElementById("submit").value;
    sessionStorage.setItem("submit", submit);
    
    window.alert("Thank you for your feedback");

    // confirmation();
}

// function confirmation(){
//        let confirm = document.getElementById("")  ;  
// }


const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        accordion.classList.toggle('active');
        let accordionBtn = accordion.querySelector('button');
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-';
        } else {
            accordionBtn.textContent = '+';
        }
    })
});



// Function to handle login toggle
window.onload = function () {
    const logginuser = sessionStorage.getItem('isLoggedIn');
    debugger
  
    if (logginuser == "true") {
  
      document.getElementById("login-button").className = "nav_none";
      document.getElementById("logout-button").className = "nav_block";
      document.getElementById("profile-icon").className = "nav_block";
  
    }
    else {
      document.getElementById("login-button").className = "nav_block";
      document.getElementById("logout-button").className = "nav_none";
      document.getElementById("profile-icon").className = "nav_none";
    }
  
  
  
  }
  
  
  // window.onload = updateLoginStatus();
  
  
  function logoutBTN() {
    debugger
    sessionStorage.isLoggedIn = "false";
  
    document.getElementById("login-button").className = "nav_block";
    document.getElementById("logout-button").className = "nav_none";
    document.getElementById("profile-icon").className = "nav_none";
  }


  
const section = document.getElementById('services');
function toSerices(){
window.scrollTo({ top: section.offsetTop, behavior: 'smooth'});
}


// Function to handle login toggle
window.onload = function () {
  const logginuser = sessionStorage.getItem('isLoggedIn');
  debugger

  if (logginuser == "true") {

    document.getElementById("login-button").className = "nav_none";
    document.getElementById("logout-button").className = "nav_block";
    document.getElementById("profile-icon").className = "nav_block";

  }
  else {
    document.getElementById("login-button").className = "nav_block";
    document.getElementById("logout-button").className = "nav_none";
    document.getElementById("profile-icon").className = "nav_none";
  }



}


// window.onload = updateLoginStatus();


function logoutBTN() {
  debugger
  sessionStorage.isLoggedIn = "false";

  document.getElementById("login-button").className = "nav_block";
  document.getElementById("logout-button").className = "nav_none";
  document.getElementById("profile-icon").className = "nav_none";
}