
function loadCards(){
    let IqQuizTaken = localStorage.getItem('IqQuizTaken');
    let startIqQuizBtn= document.getElementById("startIqQuiz");
    if(IqQuizTaken)
      {
        startIqQuizBtn.disabled =true;
      }

      else return;
      // startIqQuiz();

  }

function startIqQuiz(){
 
window.location.href="../FirasIqTest/iqTest.html";
}

function reviewIqQuiz(){

reviewBtn();

function reviewBtn() {
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
}

