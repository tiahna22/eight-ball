
        // I define answers
        var answersArray = ["It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes - definitely",
            "Yes", "Signs point to yes",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful",
             "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again"];


 window.onload = function () {
            const eight = document.getElementById("eight");
           const answer = document.getElementById("answer");
            var eightball = document.getElementById("eight-ball");
            var question = document.getElementById("question");

            eightball.addEventListener("click", function () {
                if (question.value.length < 1) {
                    alert('Enter a question!');
                } else {
                    eight.innerText = "";
                    var num = Math.floor(Math.random() * Math.floor(answersArray.length));
                    answer.innerText = answersArray[num];
                }
            });
        };
  