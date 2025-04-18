//  navbar toggle

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// toggle navbar & overlay when click any navbar-link

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// header & go-top-btn active when window scroll down to 100px

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
const logo = document.querySelector(".logo img");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// remove .hero-banner when screen width is less than 768
const heroBanner = document.querySelector(".hero-banner");
const heroBannerImg = document.querySelector(".hero-banner img");

window.addEventListener("resize", () => {
  if (window.innerWidth < 992) {
    heroBannerImg.classList.add("hide-image");
  } else {
    heroBannerImg.classList.remove("hide-image");
  }
}
);





// Function to handle login toggle
window.onload = function () {
  const logginuser = sessionStorage.getItem('isLoggedIn');
  debugger

  if (logginuser == "true") {

    document.getElementById("login-button").className = "nav_none";
    document.getElementById("logout-button").className = "nav_block";
    document.getElementById("profile-icon").className = "nav_block";
    document.getElementById("apply_quizzes").className="nav_block";

  }
  else {
    document.getElementById("login-button").className = "nav_block";
    document.getElementById("logout-button").className = "nav_none";
    document.getElementById("profile-icon").className = "nav_none";
    document.getElementById("quizzes-button").className="nav_none";
    document.getElementById("apply_quizzes").disabled;
  }



}


// window.onload = updateLoginStatus();


function logoutBTN() {
  debugger
  sessionStorage.isLoggedIn = "false";

  document.getElementById("login-button").className = "nav_block";
  document.getElementById("logout-button").className = "nav_none";
  document.getElementById("profile-icon").className = "nav_none";
  document.getElementById("apply_quizzes").className="nav_block";
}



const section = document.getElementById('services');
function toSerices(){
window.scrollTo({ top: section.offsetTop, behavior: 'smooth'});
}