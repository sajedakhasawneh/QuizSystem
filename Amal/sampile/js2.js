
let CurrentQuestionIndex = 0;
let UserChoices = [];
let quizData = []; // quizData is an array, not an object
let NumberOFCorrectAns = 0;

fetch("JSON2.JSON")
  .then(response => response.json()) // Correcting the typo here
  .then(data => {
    quizData = data; // Assigning the data to quizData
    loadQ(); // Load the first question
});

function loadQ() {
  const BlockOfJSON = quizData[CurrentQuestionIndex]; // Access the current question
  const Q = document.getElementById("the-qwestion");
  Q.textContent = BlockOfJSON.question; // Display the question

  const CHOI = document.getElementById("choices");
  CHOI.innerHTML = ""; // Clear the previous choices
  BlockOfJSON.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choicebutton");
    button.onclick = () => {
      button.style.backgroundColor = "rgba(152, 143, 143, 0.586)";
      UserChoices[CurrentQuestionIndex] = choice; // Store the user's choice
      if (choice === BlockOfJSON.correct_answer) { // Check if the answer is correct
        NumberOFCorrectAns++;
      }
      document.getElementById("next-button").disabled = false; // Enable the "Next" button
    };

    CHOI.appendChild(button);
  });
}

function NextQ() {
  if (CurrentQuestionIndex < quizData.length - 1) {
    CurrentQuestionIndex++; // Move to the next question
    loadQ(); // Load the next question
    document.getElementById("next-button").disabled = true; // Disable "Next" button again
  } else {
    document.getElementById("container").style.display = "none"; // Hide the question container
    alert("Quiz Finished");
    ShowResult(); // Show the results
  }
}

function ShowResult() {
  const FinalResult = document.getElementById("result");
  const key = document.getElementById("word");
  const num = document.getElementById("numresulr");
  const btn = document.getElementById("more");

  if (NumberOFCorrectAns >= 5) {
    key.textContent = "Congratulations!";
    num.textContent = `You answered ${NumberOFCorrectAns} questions correctly!`;
    FinalResult.style.backgroundColor = "green";
    FinalResult.style.color = "white";
  } else {
    key.textContent = "Better luck next time!";
    num.textContent = `You answered ${NumberOFCorrectAns} questions correctly.`;
    FinalResult.style.backgroundColor = "red";
    FinalResult.style.color = "white";
  }

  document.getElementById("result").style.display = "block";
  btn.onclick = ViewMore; // Assign ViewMore function to the "Review" button
}

function ViewMore() {
  const show = document.getElementById("detais");
  show.innerHTML = ""; // Clear previous results

  quizData.forEach((question, index) => {
    const userAnswer = UserChoices[index];
    const result = document.createElement("div");
    result.classList.add("st");

    result.innerHTML = `
      <strong>Q${index + 1}: ${question.question}</strong><br>
      Your Answer: ${userAnswer}<br>
      The Correct Answer: ${question.correct_answer}<br><br>
    `;
    show.appendChild(result);
   
  });

  show.style.display = "block"; // Show the 'detais' section
}

document.getElementById("next-button").addEventListener("click", NextQ);
