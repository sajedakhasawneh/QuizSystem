let questions = [];
const card = document.getElementById("qCard");
const nextBtn = document.getElementById("next");

const questionElement = document.getElementById("question");
let options = document.getElementById("options");
let reviewDiv = document.getElementById("reviewDiv");

let selected;
let answer = [];
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
      
        <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option1}" />
      <label class="option">${currentQuestion.option1}</label> <br /><br />

      <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option2}" />
      <label class="option" for="second">${currentQuestion.option2}</label><br /><br />

      <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option3}" />
      <label class="option" for="third">${currentQuestion.option3}</label><br /><br />

      <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option4}" />
      <label class="option" for="forth">${currentQuestion.option4}</label><br /><br />
    `;
}

function handleChange1() {
  nextBtn.style.display = "block";
}

function nextQ() {
  answer.push(document.querySelector('input[name="options"]:checked').value);

  console.log("The answer is from array  : " + answer);

  counter++;

  if (
    currentQuestion.currect ==
    document.querySelector('input[name="options"]:checked').value
  ) {
    scour++;
  }

  console.log("the currect: " + currentQuestion.currect);
  console.log(
    "your answer: " +
      document.querySelector('input[name="options"]:checked').value
  );
  console.log(scour);

  if (counter >= questions.length) {
    localStorage.setItem("answers1", JSON.stringify(answer));

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
      
      <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option1}" />
      <label class="option">${currentQuestion.option1}</label> <br /><br />

      <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option2}" />
      <label class="option" for="second">${currentQuestion.option2}</label><br /><br />

      <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option3}" />
      <label class="option" for="third">${currentQuestion.option3}</label><br /><br />

      <input class="option" onchange='handleChange1()' type="radio" id="options" name="options" value="${currentQuestion.option4}" />
      <label class="option" for="forth">${currentQuestion.option4}</label><br /><br />
    `;

  nextBtn.style.display = "none";
}
function closeBtn() {
  card.style.display = "none";
}
function reviewBtn() {
  let answerss = JSON.parse(localStorage.getItem("answers1"));

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


  <p> <b style="color:green">${questions[i].currect} (correct).</b><br>
  
`;
  }

  function getColor(option, index) {
    if (selected == option && option == questions[index].currect)
      return "green";
    else if (selected == option && selected != questions[index].currect)
      return "red";
    else if (option == questions[index].currect) return "green";
    else return "black";
  }

  reviewDiv.style.display = "block";
}

function closeButtonReviewDiv() {
  reviewDiv.style.display = "none";
}
