
let CurrentQuestionIndex = 0;   //3shan ashof each object in array
let UserChoices = []; 
let quizData = {}; 
let NumberOFCorrectAns = 0; 

fetch("JSON3.JSON")
  .then(response => response.json())
  .then(data => {
    quizData = data;                   //these data store in qd
    loadQ();                          //*****function 1******** */
});

function loadQ() {

  const BlockOfJSON = quizData[CurrentQuestionIndex];    //to understandthr structure of array
  
  const Q = document.getElementById("the-qwestion");
  Q.textContent = BlockOfJSON.question;              // Display the question Access each question

  const CHOI = document.getElementById("choices");
  CHOI.innerHTML = ""; // Clear the previous choices
  BlockOfJSON.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choicebutton");
    button.onclick = () => {
      button.style.backgroundColor=" rgba(152, 143, 143, 0.586)"
      UserChoices[CurrentQuestionIndex] = choice; // Store the user's choice
      

      
      if (choice === BlockOfJSON.correct_answer) {             // Check if the answer is correct
        NumberOFCorrectAns++; // Increase correct answer count
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
  
    document.getElementById("result").style.display="block"                            //   FinalResult.style.display = "block";
//    alert("show result")
//    btn.onclick(ViewMore())                             //   btn.addEventListener("click", ViewMore);           // Call the ViewMore function when the "Review" button is clicked
btn.onclick = ViewMore;  //befor in line 76 we call the funcion immeditly when the page load and we dont womt that but in 77 we assin the function as eveny handler when user click

}


function ViewMore() {
    const show = document.getElementById("detais");
    show.innerHTML = ""; 
  
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



    
  
 

