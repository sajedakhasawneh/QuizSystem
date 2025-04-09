let FName = document.getElementById("FName");
let LName = document.getElementById("LName");
let Email = document.getElementById("Email_1");
let Password = document.getElementById("Password");
let Birth_Date = document.getElementById("Birth-Date");
let City = document.getElementById("City");
let Male = document.getElementById("Male");
let Female = document.getElementById("Female");

let ErrorFName = document.getElementById("Error-FName");
let ErrorLName = document.getElementById("Error-LName");
let ErrorEmail = document.getElementById("Valid_Email");
let ErrorPassword = document.getElementById("Valid_Password");
let ErrorCity = document.getElementById("Valid_City");

let Overlay = document.getElementById("overlay");

let popupButton = document.getElementById("button12-Form");

let popupMenu = document.getElementById("Form");

let IsValidName;

let Main_Name = document.getElementById("Name");
let Main_Email = document.getElementById("Email");

function IsValid() {
  if (!Edit_FName.value.match(/^[a-zA-Z]+$/)) {
    ErrorFName.innerHTML = "Please enter a valid First Name";
    return false;
  } else {
    ErrorFName.innerHTML = "";
    return true;
  }
}

function IsValid2() {
  if (!Edit_LName.value.match(/^[a-zA-Z]+$/)) {
    ErrorLName.innerHTML = "Please enter a valid Last Name";
    return false;
  } else {
    ErrorLName.innerHTML = "";
    return true;
  }
}

function IsValid3() {
  if (
    !Edit_Email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ) {
    ErrorEmail.innerHTML = "Please enter a valid email";
    return false;
  } else {
    ErrorEmail.innerHTML = "";
    return true;
  }
}

// function IsValid4() {
//   if (
//     !Edit_Password.value.match(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//     )
//   ) {
//     ErrorPassword.innerHTML = "Please enter a valid Password";
//     return false;
//   } else {
//     ErrorPassword.innerHTML = "";
//     return true;
//   }
// }

function IsValid5() {
  if (!Edit_City.value.match(/^[a-zA-Z]+$/)) {
    ErrorCity.innerHTML = "Please enter a valid Last Name";
    return false;
  } else {
    ErrorCity.innerHTML = "";
    return true;
  }
}

let Edit_FName = document.getElementById("Edit-Fname");
let Edit_LName = document.getElementById("Edit-Lname");
let Edit_Email = document.getElementById("Edit-Email");
let Edit_Password = document.getElementById("Edit-Password");
let Edit_CPassword = document.getElementById("Edit-C_Password");
let Edit_City = document.getElementById("Edit-City");
let Edit_Date = document.getElementById("Edit-Date");
let Value1 = document.getElementById("value-1");
let Value2 = document.getElementById("value-2");
let Save_Change = document.getElementById("Save_Change");
let Img_1 = document.getElementById("Img-1");
let ImagePro = document.getElementById("Image-Profile");

let PathImage;

function showImage() {
  const file = document.getElementById("image").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = document.getElementById("Image-Profile");
      img.src = reader.result;
      img.width = 100;
      localStorage.setItem("imageProfileURL", reader.result);
    };
    reader.readAsDataURL(file);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedImage = localStorage.getItem("imageProfileURL");
  const img = document.getElementById("Image-Profile");
  if (savedImage) {
    img.src = savedImage;
    img.style.display = "block";
  }
});

popupButton.addEventListener("click", function () {
  popupMenu.style.display = "flex";
  Overlay.style.display = "block";
});

Overlay.addEventListener("click", function () {
  popupMenu.style.display = "none";
  Overlay.style.display = "none";
});

popupButton.addEventListener("click", function () {
  Value1.checked = true;
  Value2.checked = false;

  Edit_FName.value = FName.value;
  Edit_LName.value = LName.value;
  Edit_Email.value = Email.value;
  Edit_Password.value = Password.value;
  Edit_CPassword.value = Password.value;
  Edit_City.value = City.value;
  Edit_Date.value = Birth_Date.value;

  if (Male.checked) {
    Value1.checked = true;
  } else {
    Value2.checked = true;
  }
});

Save_Change.addEventListener("click", function (event) {
  event.preventDefault();

  FName.value = Edit_FName.value;
  LName.value = Edit_LName.value;
  Email.value = Edit_Email.value;
  Password.value = Edit_Password.value;

  if (Edit_CPassword.value != Password.value) {
    window.alert("You must enter matching password");
    return;
  }

  City.value = Edit_City.value;
  Birth_Date.value = Edit_Date.value;

  if (Value1.checked) {
    Male.checked = true;
    localStorage.setItem("GenderLocalSignUp", "Male");
  } else {
    Female.checked = true;
    localStorage.setItem("GenderLocalSignUp", "Female");
  }

  Male.checked = true;
  localStorage.setItem("GenderLocalSignUp", "Male");

  if (
    IsValid() == false ||
    IsValid2() == false ||
    IsValid3() == false ||
    // IsValid4() == false ||
    IsValid5() == false
  ) {
    window.alert("There is an invalid field");
    return;
  } else {
    window.alert("Data has been saved successfully");

    localStorage.setItem("firstNameLocalSignUp", Edit_FName.value);
    localStorage.setItem("lastNameLocalSignUp", Edit_LName.value);
    localStorage.setItem("signup_emailLocalSign", Edit_Email.value);
    localStorage.setItem("signup_passwordLocalSign", Edit_Password.value);
    localStorage.setItem("cityLocalSignUp", Edit_City.value);
    localStorage.setItem("birthDateLocalSign", Edit_Date.value);

    Main_Name.innerHTML = `${localStorage.getItem(
      "firstNameLocalSignUp"
    )} ${localStorage.getItem("lastNameLocalSignUp")}`;
    Main_Email.innerHTML = `${localStorage.getItem("signup_emailLocalSign")}`;

    popupMenu.style.display = "none";
    Overlay.style.display = "none";
  }
});

window.onload = function () {
  Main_Name.innerHTML = `${localStorage.getItem(
    "firstNameLocalSignUp"
  )} ${localStorage.getItem("lastNameLocalSignUp")}`;
  Main_Email.innerHTML = `${localStorage.getItem("signup_emailLocalSign")}`;

  FName.value = localStorage.getItem("firstNameLocalSignUp");
  LName.value = localStorage.getItem("lastNameLocalSignUp");
  Email.value = localStorage.getItem("signup_emailLocalSign");
  Password.value = localStorage.getItem("signup_passwordLocalSign");
  City.value = localStorage.getItem("cityLocalSignUp");
  Birth_Date.value = localStorage.getItem("birthDateLocalSign");

  if (localStorage.getItem("GenderLocalSignUp") == "Male") {
    Male.checked = true;
  } else {
    Female.checked = true;
  }

  Male.checked = true;
};

let Nav = document.getElementsByClassName("navbar")[0];

let Burger = document.getElementById("Burger_Menu");

console.log(Burger);

Burger.addEventListener("click", function () {
  Nav.classList.toggle("navbarEdit");
});
