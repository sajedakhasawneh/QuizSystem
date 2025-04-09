let questions = [];
const card = document.getElementById("qCard");
const nextBtn = document.getElementById("next");

const questionElement = document.getElementById("question");
let options = document.getElementById("options");
let reviewDiv = document.getElementById("reviewDivTech");

let selected;
let answerTech = [];
let currentQuestion;
let counter = 0;
let scour = 0;

async function readTestQ() {
  //fetch data from json file
  const response = await fetch("questions.json");
  questions = await response.json();

  currentQuestion = questions[counter];

  questionElement.innerHTML =
    counter + 1 + "/15 Q. <br>" + currentQuestion.question;

  options.innerHTML = `
    <div class="input-Div-js"><input id="option1" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option1}'>
    <label class="radio-label" for='option1'>${currentQuestion.option1}</label></div><br>
    <div class="input-Div-js"><input id="option2" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option2}'>
    <label class="radio-label" for='option2'>${currentQuestion.option2}</label></div><br>
    <div class="input-Div-js"><input id="option3" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option3}'>
    <label class="radio-label" for='option3'>${currentQuestion.option3}</label></div><br>
    <div class="input-Div-js"><input id="option4" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option4}'>
    <label class="radio-label" for='option4'>${currentQuestion.option4}</label></div><br>
  
  `;
}

function handleChange1() {
  nextBtn.style.display = "block";
}

function nextQ() {
  answerTech.push(document.querySelector('input[name="option"]:checked').value);

  counter++;
  console.log(currentQuestion.answer);
  console.log(document.querySelector('input[name="option"]:checked').value);
  if (
    currentQuestion.answer ==
    document.querySelector('input[name="option"]:checked').value
  ) {
    scour++;
  }

  console.log("the currect: " + currentQuestion.answer);
  console.log(
    "your answer: " +
      document.querySelector('input[name="option"]:checked').value
  );
  console.log(scour);

  if (counter >= questions.length) {
    localStorage.setItem("answersTech", JSON.stringify(answerTech));
    localStorage.setItem("TechQuizTaken", true);

    alert("Your finish You Exam.. ." + scour);
    if (scour < 8) {
      card.style.backgroundColor = "rgb(255, 39, 39)";
      card.classList = "fail";
      card.innerHTML = "";

      card.innerHTML = `
                      <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Better Luck next time!</h1><br<br><br>
            <h3>Your answered ${scour} questions currect.</h3>
                                <button onclick="reviewBtn()" id="reviewBtn" class="reviewBtn">Review Your Exam</button>

        `;
    } else {
      card.style.backgroundColor = "rgb(43, 171, 0)";
      card.classList = "pass";
      card.innerHTML = "";

      card.innerHTML = `
                <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Gongratulations!</h1><br<br><br>
            <h3>Your answered ${scour} questions currectly.</h3>
                                <button onclick="reviewBtn()" id="reviewBtn" class="reviewBtn">Review Your Exam</button>

        `;
    }
    return;
  }

  currentQuestion = questions[counter];

  questionElement.innerHTML =
    counter + 1 + "/15 Q. <br>" + currentQuestion.question;
  options.innerHTML = `
    <div class="input-Div-js" "><input id="option1" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option1}'>
    <label class="radio-label" for='option1'>${currentQuestion.option1}</label></div><br>
    <div class="input-Div-js"><input id="option2" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option2}'>
    <label class="radio-label" for='option2'>${currentQuestion.option2}</label></div><br>
    <div class="input-Div-js"><input id="option3" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option3}'>
    <label class="radio-label" for='option3'>${currentQuestion.option3}</label></div><br>
    <div class="input-Div-js"><input id="option4" class="input" onchange='handleChange1()' type='radio' class='input' name='option' value='${currentQuestion.option4}'>
    <label class="radio-label" for='option4'>${currentQuestion.option4}</label></div><br>
  
  `;

  nextBtn.style.display = "none";
}
function closeBtn() {
  card.style.display = "none";
}
function reviewBtn() {
  let answerss = JSON.parse(localStorage.getItem("answersTech"));

  for (let i = 0; i < answerss.length; i++) {
    selected = answerss[i];

    reviewDiv.innerHTML += `
  <p><b>Q${i + 1}.${questions[i].question}</b></p>

  <p  style="color:${getColor(questions[i].option1, i)}" >A) ${
      questions[i].option1
    }.
  
  
  <p  style="color:${getColor(questions[i].option2, i)}" >B) ${
      questions[i].option2
    }.


  <p  style="color:${getColor(questions[i].option3, i)}"  >C) ${
      questions[i].option3
    }.


  <p  style="color:${getColor(questions[i].option4, i)}"  >D) ${
      questions[i].option4
    }.


  <p> <b style="color:green">${questions[i].answer} (correct).</b><br><br><br>
  
`;
  }

  function getColor(option, index) {
    if (selected == option && option == questions[index].answer) return "green";
    else if (selected == option && selected != questions[index].answer)
      return "red";
    else if (option == questions[index].answer) return "green";
    else return "black";
  }

  reviewDiv.style.display = "block";
}

function closeButtonReviewDiv() {
  window.location.href = "/Firas/mainCards/firasCards.html";
  reviewDiv.style.display = "none";
}
