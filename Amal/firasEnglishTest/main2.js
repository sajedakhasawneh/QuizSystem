let questions = [];
let card = document.getElementById("cardDivID");
let questionElement = document.getElementById("question");
let options = document.getElementById("options");
let nextBtn = document.getElementById("next-button");
let counter = 0;
let scourEng = 0;
let currentQuestion;
let reviewDiv = document.getElementById("reviewDiv");

let selected;
let answer = [];

async function readTestData() {
  let response = await fetch("english.json");
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
    currentQuestion.correct ==
    document.querySelector('input[name="option"]:checked').value
  ) {
    scourEng++;
  }

  console.log(
    "Your awnser: " +
      document.querySelector('input[name="option"]:checked').value
  );

  console.log("The correct: " + currentQuestion.correct);
  console.log("Your scour: " + scourEng);ABUMALLOH

  if (counter > questions.length - 1) {
    localStorage.setItem("answers3", JSON.stringify(answer));

    alert("Your finish You Exam.. ." + scourEng);
    if (scourEng < 5) {
      card.style.backgroundColor = "rgb(255, 39, 39)";
      card.classList = "fail";
      card.innerHTML = "";
      card.innerHTML = `
                    <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Better Luck next time!</h1><br<br><br>
            <h3>Your answered ${scourEng} questions currect.</h3>

                    <button onclick="reviewBtn()" id="reviewBtn" class="reviewBtn">Review Your Exam</button>

        `;
    } else {
      card.style.backgroundColor = "rgb(43, 171, 0)";
      card.classList = "pass";
      card.innerHTML = "";

      card.innerHTML = `
              <button class="close-button" id="closeButton" onclick='closeBtn()'>×</button>

            <h1>Gongratulations!</h1><br<br><br>
            <h3>Your answered ${scourEng} questions currectly.</h3>

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
}

function reviewBtn() {
  let answerss = JSON.parse(localStorage.getItem("answers3"));

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


  <p> <b style="color:green">${questions[i].correct} (correct).</b><br>
  
`;
  }

  function getColor(option, index) {
    console.log(selected);
    const currentQuestion22 = questions[index];

    if (selected == option && option == currentQuestion22.correct)
      return "green";
    else if (selected == option && selected != currentQuestion22.correct)
      return "red";
    else if (option == currentQuestion22.correct) return "green";
    else return "black";
  }

  reviewDiv.style.display = "block";
}

function closeButtonReviewDiv() {
  reviewDiv.style.display = "none";
}
