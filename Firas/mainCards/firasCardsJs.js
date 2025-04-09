let IqQuizTaken = localStorage.getItem("IqQuizTaken");
let EngQuizTaken = localStorage.getItem("EngQuizTaken");
let TechQuizTaken = localStorage.getItem("TechQuizTaken");

let questionsIQ = [];
let questionsEng = [];
let questionsTech = [];

let answerIq = JSON.parse(localStorage.getItem("answersIq"));
let answerEng = JSON.parse(localStorage.getItem("answersEng"));
let answerTech = JSON.parse(localStorage.getItem("answersTech"));

let reviewDivIQ = document.getElementById("reviewDivIQ");
let reviewDivEng = document.getElementById("reviewDivEng");
let reviewDivTech = document.getElementById("reviewDivTech");

function loadCards() {
  if (IqQuizTaken) {
    document.getElementById("startIqQuiz").disabled = true;
  }
  if (EngQuizTaken) {
    document.getElementById("startEngQuiz").disabled = true;
  }
  if (TechQuizTaken) {
    document.getElementById("startIqQuiz").disabled = true;
  }
}

function startIqQuiz() {
  if (!IqQuizTaken) {
    window.location.href = "/Firas/iqTest/iqTest.html";
  } else alert("you have already take this quiz");
}
function startEngQuiz() {
  if (!EngQuizTaken) {
    window.location.href = "/Firas/englishTest/englishTest.html";
  } else alert("you have already take this quiz");
}

function startTechQuiz() {
  if (!TechQuizTaken) {
    window.location.href = "/Firas/techTest/tech.html";
  } else alert("you have already take this quiz");
}

async function readIqData() {
  let response = await fetch("/Firas/iqTest/iqtest.json");
  questionsIQ = await response.json();

  reviewBtn(questionsIQ, answerIq, reviewDivIQ);
}

async function readEngData() {
  let response = await fetch("../englishTest/english.json");
  questionsEng = await response.json();

  reviewBtn(questionsEng, answerEng, reviewDivEng);
}

async function readTechData() {
  let response = await fetch("/Firas/techTest/questions.json");
  questionsTech = await response.json();

  reviewBtn(questionsTech, answerTech, reviewDivTech);
}

function reviewBtn(Type, varanswer, div) {
  if (varanswer === null) {
    alert("You havent taken the exam yet");
  } else {
    console.log(varanswer);
    for (let i = 0; i < varanswer.length; i++) {
      selected = varanswer[i];
      div.innerHTML += `
    <br>
    <p>Q${i + 1}.${Type[i].question}</p><br>
  
    <p  style="color:${getColor(Type[i].option1, i)}" >A) <b>${
        Type[i].option1
      }.</b>
    
    
    <p  style="color:${getColor(Type[i].option2, i)}" >B) <b>${
        Type[i].option2
      }.</b>
  
  
    <p  style="color:${getColor(Type[i].option3, i)}"  >C) <b>${
        Type[i].option3
      }.</b>
  
  
    <p  style="color:${getColor(Type[i].option4, i)}"  >D) <b>${
        Type[i].option4
      }.</b>
  
  
    <p> <b style="color:green">${Type[i].answer} (correct).</b><br><br><br>
    
  `;
    }

    function getColor(option, index) {
      if (selected == option && option == Type[index].answer) return "green";
      else if (selected == option && selected != Type[index].answer)
        return "red";
      else if (option == Type[index].answer) return "green";
      else return "black";
    }

    div.style.display = "block";
  }
}

function reviewDivIQClose() {
  reviewDivIQ.style.display = "none";
}

function reviewDivEngClose() {
  reviewDivEng.style.display = "none";
}

function reviewDivTechClose() {
  reviewDivTech.style.display = "none";
}
function quizCard() {
  window.location.href = "/Firas/mainCards/firasCards.html";
}

function logoutBTN() {
  debugger;
  sessionStorage.isLoggedIn = "false";

  document.getElementById("login-button").className = "nav_block";
  document.getElementById("logout-button").className = "nav_none";
  document.getElementById("profile-icon").className = "nav_none";
}

// function ayman(arr) {
//   debugger
//   for (let i = 0; i <= arr.length - 1; i++) {
   
//     arr[i]= (arr[i] <0) ? arr[i]*2: arr[i] * -1;

   
//     if (arr[i] < 0) {


//       arr[i] = arr[i]*2;
//     } else {
//       arr[i] = arr[i] * -1;
//     }
//   }
//   return arr;
// }
// let arr = [1, 2, -5];
// console.log(ayman(arr));
