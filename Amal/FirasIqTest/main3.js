let questions = [];
let card = document.getElementById("cardDivID");
let questionElement = document.getElementById("question");
let options = document.getElementById("options");
let nextBtn = document.getElementById("next-button");
let counter = 0;
let scourIq = 0;
let currentQuestion;
let reviewDiv = document.getElementById("reviewDiv");
let selected;
let answer = [];

async function readTestData() {
  debugger;
  let response = await fetch("../FirasIqTest/iqtest.json");
  questions = await response.json();

  currentQuestion = questions[counter];

  questionElement.innerHTML = `Q.${counter + 1}/${questions.length}<br> ${
    currentQuestion.question
  }`;
  options.innerHTML = "";
  options.innerHTML = `
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option1}'>
        <label for='option'>${currentQuestion.option1}</label><br><br>
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option2}'>
        <label for='option'>${currentQuestion.option2}</label><br><br>
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option3}'>
        <label for='option'>${currentQuestion.option3}</label><br><br>
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option4}'>
        <label for='option'>${currentQuestion.option4}</label><br><br>
    
    `;
}

function next() {
  document.getElementById("next-button").style.display = "block";
}

function NextBtn() {
  answer.push(document.querySelector('input[name="option"]:checked').value);

  counter++;

  if (
    currentQuestion.answer ==
    document.querySelector('input[name="option"]:checked').value
  ) {
    scourIq++;
  }

  console.log(
    "Your awnser: " +
      document.querySelector('input[name="option"]:checked').value
  );

  console.log("The correct: " + currentQuestion.answer);
  console.log("Your scour: " + scourIq);

  if (counter > questions.length - 1) {
    localStorage.setItem("answers2", JSON.stringify(answer));
    localStorage.setItem("IqQuizTaken", true);

    alert("Your finish You Exam.. ." + scourIq);
    if (scourIq < 5) {
      card.style.backgroundColor = "rgb(255, 39, 39)";
      card.classList = "fail";
      card.innerHTML = "";
      card.innerHTML = `
                    <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Better Luck next time!</h1><br<br><br>
            <h3>Your answered ${scourIq} questions currect.</h3>

                    <button onclick="reviewBtn()" id="reviewBtn" class="reviewBtn">Review Your Exam</button>

        `;
    } else {
      card.style.backgroundColor = "rgb(43, 171, 0)";
      card.classList = "pass";
      card.innerHTML = "";

      card.innerHTML = `
              <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Gongratulations!</h1><br<br><br>
            <h3>Your answered ${scourIq} questions currectly.</h3>

                    <button onclick="reviewBtn()" id="reviewBtn" class="reviewBtn">Review Your Exam</button>

        `;
    }
    return;
  }
  currentQuestion = questions[counter];
  questionElement.innerHTML = `Q.${counter + 1}/${questions.length}<br> ${
    currentQuestion.question
  }`;
  options.innerHTML = "";

  options.innerHTML = `
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option1}'>
        <label for='option'>${currentQuestion.option1}</label><br><br>
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option2}'>
        <label for='option'>${currentQuestion.option2}</label><br><br>
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option3}'>
        <label for='option'>${currentQuestion.option3}</label><br><br>
        <input onchange='next()' type='radio' class='input' name='option' value='${currentQuestion.option4}'>
        <label for='option'>${currentQuestion.option4}</label><br><br>
    
    `;
  nextBtn.style.display = "none";
}

function closeBtn() {
  card.style.display = "none";
  window.location.href = "../sampile/index4.html";
}

function reviewBtn() {
  debugger;
  let answerss = JSON.parse(localStorage.getItem("answers2"));

  for (let i = 0; i < answerss.length; i++) {
    selected = answerss[i];
    reviewDiv.innerHTML += `
  <p>Q${i + 1}.${questions[i].question}</p>

  <p  style="color:${getColor(questions[i].option1, i)}" >A) <b>${
      questions[i].option1
    }.</b>
  
  
  <p  style="color:${getColor(questions[i].option2, i)}" >B) <b>${
      questions[i].option2
    }.</b>


  <p  style="color:${getColor(questions[i].option3, i)}"  >C) <b>${
      questions[i].option3
    }.</b>


  <p  style="color:${getColor(questions[i].option4, i)}"  >D) <b>${
      questions[i].option4
    }.</b>


  <p> <b style="color:green">${questions[i].answer} (correct).</b><br>
  
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
  reviewDiv.style.display = "none";
}
