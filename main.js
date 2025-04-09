function displayQuiz(){
    // let age = document.getElementById("age").value;
    let jsondata = new XMLHttpRequest;
    jsondata.open("GET", "Questions.json")

    jsondata.onload = function () {
        let questions = JSON.parse(jsondata.response)  // string -> object 
                console.log(questions);



    }
    jsondata.send()
}


