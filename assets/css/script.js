// Get the button that opens the modal
var viewscore = document.getElementById("box-header");
//The actual window for High Score
var modal = document.getElementById("myModal");

//This is inside the myModal, AKA Popout, window.  An "X" symbol
var span = document.getElementsByClassName("close")[0];

//Checkpoint for the questions
var answerNumber = 0; // Track next answers to show

//Cue the sound board
var wrongnoise;
var rightnoise;

//Replacing texts when we switch windows
//title-start-question is the header and quiz-summary is the text
var titlequestionEl = document.getElementById("title-start-question");
//The sentence inside the modal
var quizsummaryEl = document.getElementById('quiz-summary');
//Questions for the Quiz
var questionEl = document.getElementById('questionsforquiz');

//Call on timer
//This is just the area to put in the number for the timer
var timerleft = document.getElementById('TimeLeft');

//Text for the Text Area
var paragraphTextEl = document.getElementById('InitialTextSentence');
//Starts out empty without anything in it
paragraphTextEl = "";

//Text for score.  This is when we are submitting the score
var UserInitialFinal = document.getElementById("initials");
var UsersScoreFinal = document.getElementById("quizscores");

//UserInitialFinal = "";
//UsersScoreFinal = "";

//Text Box Initial
var textBoxEl = document.getElementById("InitialTextBox");

//Answer buttons 1-4 call
var answer1BtnEl = document.getElementById('answer1'); 
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4');

//Submit Score Button
var submitScoreEl = document.getElementById('submitscore');

//Footer note
var footerblock = document.getElementById('footernote');

//footerblock.style.display = 'none';

//Score
var highScore = 0;

//Start Quiz Timer
var BtnStartEl = document.getElementById('StartQuiz');


//Correct/Wrong Answer IDs
var correctAnswerEl = document.getElementById('correctAnswerText');
var wrongAnswerEl = document.getElementById('wrongAnswerText');

correctAnswerEl.style.display = 'none';
wrongAnswerEl.style.display = 'none';

//Global Timer Starter

var timestart = 60;


//Have the start time verified
timerleft.textContent = timestart;


var questioncycle = 0;


//Check if it's negative
var checkmath = Math.sign(timestart);

//Display nothing for the following.  This is due to the settings that we have:

//The buttons are ONLY displayed if and ONLY IF 
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';

//Text Box hidden
textBoxEl.style.display = 'none';

submitscore.style.display = 'none';



//We're going to store the texts for the questions:
var questionsObject = {
    question: {
        0: "Commonly Used Data Types DO NOT Include: ",
        1: "The condition in an if and else statement. ",
        2: "Arrays in Javascript can be stored in ",
        3: "String values must be enclosed within _____ when being assinged to variables. ",
        4: "A very useful tool used during development and debugging for printing content to the debugger is:",
        5: "You successfully completed the quiz!  Please type in an initial to submit it to the highscore!  When you are done and viewing the score and should you want to try again, hit the Start Quiz button again!",
    }
}

//We're going to store the texts that have the answers in it
var answersObject = {
    answers: {
        0 : {
            //All choices for question 1
            0: "Strings",
            1: "Booleans",
            2: "Alerts", //<-This is the right answer
            3: "Numbers",

        },
        1 : {
            //All choices for question 2
            0: "Quotes",
            1: "Curly Brackets", //<-This is the right answer
            2: "Paranthesis",
            3: "Square Brackets",

        },
        2 : {
            //All choices for question 3
            0: "Number of Strings",
            1: "Other Arrays",
            2: "Booleans",
            3: "All of the Above", //<-This is the right answer

        },
        3 : {
            //All choices for question 4
            0: "Commas",
            1: "Curly Brackets",
            2: "Quotes", //<-This is the right answer
            3: "Parenthesis",
        },
        4 : {
            //All choices for question 5
            0: "JavaScript",
            1: "Terminal/Bash",
            2: "For Loops",
            3: "Console Log", //<-This is the right answer
        },

    }
}

// When the user clicks the button, open the modal 
viewscore.onclick = function() {
    modal.style.display = "block";

};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};   

//Submission Score
submitScoreEl.addEventListener("click", function() {

    //We're going to start with the values for the submission score
    var quizLocalStorage = "quiz";
    //This is the string
    var quizUserInfo = "";
    //This is a value
    var value = [];

    UserInitialFinal.style.display = "";
    UsersScoreFinal.style.display = "";

    //Take out the buttons:
    textBoxEl.style.display = 'none';

    submitscore.style.display = 'none';

    modal.style.display = "initial";

    BtnStartEl.style.display = "initial";
    
    UserInitialFinal.textContent = textBoxEl.value;
    UsersScoreFinal.textContent = highScore;
    //Start the timer and countdown again:
    timestart = 60;
    questioncycle = 0;

});

BtnStartEl.onclick = function() {
    //Debugging
    wrongAnswerEl.style.display = `none`;
    correctAnswerEl.style.display = `none`;
    QuizStart();
}

function QuizStart() {
    //Have the Start Button Disappear
    BtnStartEl.style.display = `none`;
    var timeInterval = setInterval(function(){
        timestart -= 1;
        //Working as intended
        wrongAnswerEl.style.display = 'none';
        correctAnswerEl.style.display = 'none';   
        if (questioncycle <= 4)
        {
            //Checking to see if it's positive or negative
            checkmath = Math.sign(timestart);
            console.log("Checkmath is holding this statement: " + checkmath + `
            And also the current question is: ` + (questioncycle+1));
            //start the quiz time
            quizsummaryEl.style.display = 'none';
            titlequestionEl.style.display = 'none';

            timerleft.textContent = timestart;

            questionEl.style.display = "";
            answer1BtnEl.style.display = "";
            answer2BtnEl.style.display = "";
            answer3BtnEl.style.display = "";
            answer4BtnEl.style.display = "";

            if (questioncycle <5)
            {
                //From the list of the questionsObject, we're pulling the first one that is a 0
                questionEl.textContent = questionsObject.question[questioncycle];

                answer1BtnEl.textContent = answersObject.answers[questioncycle][0];
                answer2BtnEl.textContent = answersObject.answers[questioncycle][1];
                answer3BtnEl.textContent = answersObject.answers[questioncycle][2];
                answer4BtnEl.textContent = answersObject.answers[questioncycle][3];
            }
            answer1BtnEl.addEventListener("click",function()
            {
                //Question 1
                if ( (questionEl.textContent === "Commonly Used Data Types DO NOT Include: " && answer1BtnEl.textContent === "Strings") || (questionEl.textContent === "The condition in an if and else statement. " && answer1BtnEl.textContent === "Quotes") || (questionEl.textContent === "Arrays in Javascript can be stored in " && answer1BtnEl.textContent === "Number of Strings" ) || ( questionEl.textContent === "String values must be enclosed within _____ when being assinged to variables. " && answer1BtnEl.textContent === "Commas" ) || ( questionEl.textContent === "A very useful tool used during development and debugging for printing content to the debugger is:" && answer1BtnEl.textContent === "JavaScript" ))
                {
                    switch(answer1BtnEl.textContent)
                    {
                        case "Strings":
                            {
                                timestart -= 10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Quotes":
                            {
                                timestart -= 10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Number of Strings":
                            {
                                timestart -= 10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Commas":
                            {
                                timestart -= 10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "JavaScript":
                            {
                                timestart -= 10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                    }
                    questioncycle++;
                }
            });
            //Button 2
            //ONLY 2nd question is right
            answer2BtnEl.addEventListener("click",function()
            {
                //Question 1
                if ( (questionEl.textContent === "Commonly Used Data Types DO NOT Include: " && answer2BtnEl.textContent === "Booleans") || ( questionEl.textContent === "Arrays in Javascript can be stored in " && answer2BtnEl.textContent === "Other Arrays" ) || ( questionEl.textContent === "String values must be enclosed within _____ when being assinged to variables. " && answer2BtnEl.textContent === "Curly Brackets") || ( questionEl.textContent === "A very useful tool used during development and debugging for printing content to the debugger is:" && answer2BtnEl.textContent === "Terminal/Bash") )
                {
                    questionEl.textContent = "";
                    //WRONG ASNWER
                    switch(answer2BtnEl.textContent)
                    {
                        case "Booleans":
                            {
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Other Arrays":
                            {
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Curly Brackets":
                            {
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Ternminal/Bash":
                            {
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }

                    }
                    questioncycle++;

                }

                //Question 2 and this is the only one that's right
                else if ( (questionEl.textContent === "The condition in an if and else statement. " && answer2BtnEl.textContent === "Curly Brackets" ) )
                {
                    questionEl.textContent = "";
                    //RIGHT ANSWER
                    switch(answer2BtnEl.textContent)
                    {
                        case "Curly Brackets":
                            {
                                questionEl.textContent = "";
                                correctAnswerEl.style.display = 'initial';
                                break;
                            }
                    }
                    questioncycle++;
                }

            });
            //Button 3
            //Question 1 and 4 is right
            answer3BtnEl.addEventListener("click",function()
            {
                if ( ( questionEl.textContent === "The condition in an if and else statement. " && answer3BtnEl.textContent === "Paranthesis" ) || ( questionEl.textContent === "Arrays in Javascript can be stored in " && answer3BtnEl.textContent === "Booleans" ) || ( questionEl.textContent === "A very useful tool used during development and debugging for printing content to the debugger is:" && answer3BtnEl.textContent === "For Loops") )
                {
                    //WRONG ANSWER
                    switch(answer3BtnEl.textContent)
                    {
                        case "Paranthesis":
                            {
                                timestart -= 10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Booleans":
                            {
                                timestart -=10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "For Loops":
                            {
                                timestart -= 10;
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }

                    }
                    questioncycle++;
                }

                else if ( ( questionEl.textContent === "Commonly Used Data Types DO NOT Include: " && answer3BtnEl.textContent === "Alerts") || ( questionEl.textContent === "String values must be enclosed within _____ when being assinged to variables. " && answer3BtnEl.textContent === "Quotes" ) )
                {
                    questionEl.textContent = "";
                    //RIGHT ANSWER
                    switch(answer3BtnEl.textContent)
                    {
                        case "Alerts":
                            {
                                questionEl.textContent = "";
                                correctAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Quotes":
                            {
                                questionEl.textContent = "";
                                correctAnswerEl.style.display = 'initial';
                                break;

                            }
                    }
                    questioncycle++;
                }
            });

            //Button 4
            //Question 3 and 5 are right
            answer4BtnEl.addEventListener("click",function()
            {
                if ( ( questionEl.textContent === "Commonly Used Data Types DO NOT Include: " && answer4BtnEl.textContent === "Numbers" ) || ( questionEl.textContent === "The condition in an if and else statement. " && answer4BtnEl.textContent === "Square Brackets" ) || ( questionEl.textContent === "String values must be enclosed within _____ when being assinged to variables. " && answer4BtnEl.textContent === "Parenthesis" ) )
                {
                    questionEl.textContent = "";
                    //WRONG ANSWER
                    switch(answer4BtnEl.textContent)
                    {
                        case "Numbers":
                            {
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Square Brackets":
                            {
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Parenthesis":
                            {
                                questionEl.textContent = "";
                                wrongAnswerEl.style.display = 'initial';
                                break;
                            }
                    }
                    questioncycle++;
                }

                else if ( ( questionEl.textContent === "Arrays in Javascript can be stored in " && answer4BtnEl.textContent === "All of the Above" ) || ( questionEl.textContent === "A very useful tool used during development and debugging for printing content to the debugger is:" && answer4BtnEl.textContent === "Console Log" ) )
                {
                    questionEl.textContent = "";
                    //RIGHT ANSWER
                    switch(answer2BtnEl.textContent)
                    {
                        case "Strings":
                            {
                                questionEl.textContent = "";
                                correctAnswerEl.style.display = 'initial';
                                break;
                            }
                        case "Console Log":
                            {
                                questionEl.textContent = "";
                                correctAnswerEl.style.display = 'initial';
                                break;
                            }

                    }
                    questioncycle++;
                }
            });

            //If we take too long and we haven't answered the final question, this is what happens:
            if (checkmath == 0)
            {
                questionEl.textContent = "Time is up!  No score can be saved!  Try again."
                answer1BtnEl.style.display = 'none';
                answer2BtnEl.style.display = 'none';
                answer3BtnEl.style.display = 'none';
                answer4BtnEl.style.display = 'none';
                //Button configuration ends

                //Reset timer to 60
                timestart = 60;

                //Put the button that initiates back here again
                BtnStartEl.style.display = "initial";
                clearInterval(timeInterval);
            }
            //If we lose too many points and we didn't even finish the quiz, we might reach a negative value:
            else if (checkmath == -1)
            {
                answer1BtnEl.style.display = 'none';
                answer2BtnEl.style.display = 'none';
                answer3BtnEl.style.display = 'none';
                answer4BtnEl.style.display = 'none';
                //Button configuration ends

                //Reset timer to 60
                questionEl.textContent = "You lost too many points!  Try again!";
                timestart = 60;

                //Start button reappear again
                BtnStartEl.style.display = "initial";
                clearInterval(timeInterval);
            }            

        }
        else if (timestart == 0 || questioncycle == 5)
        {
            highScore = timestart;
            answer1BtnEl.style.display = 'none';
            answer2BtnEl.style.display = 'none';
            answer3BtnEl.style.display = 'none';
            answer4BtnEl.style.display = 'none';
            //Button configuration ends

            //h1 will then activate
            questionEl.textContent = questionsObject.question[questioncycle];

            //Bring back the "p" again

            paragraphTextEl.textContent = "Submit Score!";
            //Text Box Reappear
            textBoxEl.style.display = "initial";
            //Activate the text box
            //submitscore is the id
            submitScoreEl.style.display = "initial";
            //We're going to see what is being added to the text
            console.log("The player's score and its values is the following: ")
            console.log("Initials: " + textBoxEl.value);
            console.log("High Score: " + highScore);

            //We need the question still, but this time, it's going to be the result sentence.
            clearInterval(timeInterval);
        }

    },1000)
}