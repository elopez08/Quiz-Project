## Disclaimer
This is the up to date file for the ReadMe "Quiz Project".  This will have a summary on all the changes that have been made and the challenges that has been tackled when revisiting the project.  

Quiz Questionnaire!
===================

By Edgardo Lopez
----------------

##  Table of Contents

==============================================
*   [The Purpose](#the-purpose)
*   [Criteria](#criteria)
*   [Installation](#installation)
*   [Usage](#usage)
*   [The Process](#the-process)
        a.  The Beginning
        b.  The Score's Location
        c.  During the Quiz
        d.  When the Quiz is Beaten With the Timer
        e.  When You Ran Out of Time or Lost Too Many Points
        f.  High Score
*   [What Was Done Differently](#differently)
*   [Contributing](#contributing)
*   [Project Status](#project-status)
*   [Disclaimer](#disclaimer)
==============================================

#   [The Purpose](#the-purpose)

The purpose of this project is to simulate a quiz like show questionnaire where the player are able to earn points depending on how fast they answer each of the questions correctly.

#   [Criteria](#criteria)

    AS A coding boot camp student
    I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
    SO THAT I can gauge my progress compared to my peers

    Acceptance Criteria
    GIVEN I am taking a code quiz
    WHEN I click the start button
    THEN a timer starts and I am presented with a question
    WHEN I answer a question
    THEN I am presented with another question
    WHEN I answer a question incorrectly
    THEN time is subtracted from the clock
    WHEN all questions are answered or the timer reaches 0
    THEN the game is over
    WHEN the game is over
    THEN I can save my initials and score

# [Installation](#installation)

Head on over to the link:  {{Insert GitHub Link here}}

Then, type in the following after finding a folder destination:

```bash
git clone {link of the project}
```
Afterwards, issue the command:

```bash
cd {folder name}
code ..
```

Remember to use a program such as Powershell and have a program like Visual Studio Code to be able to open and edit the project.

# [Usage](#usage)
{{Show Screenshot}}
Welcome to the basic steps of the Quiz show!  Here, you simply have to have the page running and then click on the button that's corresponded to screenshot to get it started!

## [The Process](#the-process)
One of the few things that needed to be tackled is how exactly does the quiz start and how does it end?  The following have a few screenshots:

The beginning:
The score's location:
During the quiz:
When the quiz is beaten with the timer:
When you ran out of time or lost too many points:
High Score:

Refer to each on how it is looked like and the structures for it.  We'll be using that as our guide for the quiz itself.  With those in mind, let's start.

# The Beginning

One of the things that needs to be said is how does the quiz is being displayed?  With that, I have the structure being defined thanks to the CSS.  Due to the lengthy functions on how it is being verified, I have written down the comments for each of the functions of the code and how it is being displayed.  Follow closely on what it is suppose to do and what IDs are being used.

# Score's Location
I'm going to use a reference:  The source code for the Random Password Generator: (LINK THE GITHUB FROM THE PASSWORD GENERATOR).  To save the time, it is a manipulation to indicate the window being standout in front of the page, giving the illusion of the window, which is what you see here:

(INSERT SCREENSHOT)

# During the Quiz
One of the few things to keep in mind is what it is doing when the quiz is running.  With this, I have a screenshot of how the quiz is being read:

((INSERT SS OF THE QUIZ))

Something to point out are a few details:  We have a question that's being written, 4 buttons, a timer that's counting down, and a bar from below.  To accomplish this, I have a few arrays that is being structured:

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

and

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

Rather than typing it out over and over again on the code, I have it defined as an array.  With that, I can easily call on the array and then have its own cases being defined.

In the quiz, there will be selections.  How would it know which one is correct?  Let's use Question 1 as a sample (keep in mind, NONE of these are correct)

                //Question 1
                if ( (questionEl.textContent === "Commonly Used Data Types DO NOT Include: " && answer1BtnEl.textContent === "Strings") || (questionEl.textContent === "The condition in an if and else statement. " && answer1BtnEl.textContent === "Quotes") || (questionEl.textContent === "Arrays in Javascript can be stored in " && answer1BtnEl.textContent === "Number of Strings" ) || ( questionEl.textContent === "String values must be enclosed within _____ when being assinged to variables. " && answer1BtnEl.textContent === "Commas" ) || ( questionEl.textContent === "A very useful tool used during development and debugging for printing content to the debugger is:" && answer1BtnEl.textContent === "JavaScript" ))

What I did here was make an if statement.  I defined that the textContent has a given question, AKA, the array that we're on and using questionsObject.  This is thanks to the previous code:

        //From the list of the questionsObject, we're pulling the first one that is a 0
        questionEl.textContent = questionsObject.question[questioncycle];

What this is doing is using "questioncycle" as its counter, it'll then be used to define the question.  For example, we start at "0", thus, making questionsObject.question[0].  When we look at the array, the case then responds as:

        0: "Commonly Used Data Types DO NOT Include: ",

This is now being written as a question.  Now with the same "questioncycle" being defined, we have the btns behaving the same way.  So now, here's what we have as the following:

    answers: {
        0 : {
            0: "Strings",
            1: "Booleans",
            2: "Alerts", //<-This is the right answer
            3: "Numbers",
        }

With all of this, it'll issue a text on the buttons.  This is what is being indicated when we look at the question:

((SHOW THE SCREENSHOT AGAIN))

Now with this in mind, let's go back to how does it know the question being incorrect.  This is because of this:

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

What this is doing is that using the Btn #1 as a source, we go to each case that corresponds to it.  Here, we have 5 different cases, each with their corresponding questions.  Recall back to how the question was defined:  We're in question "0", which means that the first button will contain "Strings" as its text.  With that in mind, when we click it, the case is met, thus, causing the incorrect answer to appear.

When the answer is incorrect, you have this:

        timestart -= 10;

This is how it was deducted on the score.  The score is based around the timer.  Regardless whether the answer is right or wrong, it'll up the "questioncycle", which means it'll proceed to the next question.

There are only a few things that are different when the answer is correct.  This is how it looks like

(JUST IN CASE, SHOW THE 2ND QUESTION)

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

Now in this one, we have another statement.  "else if" defines when the statement from before isn't met and a new condition is.  When that is defined, we then do the same as the first button, EXCEPT this time, we DON'T display "INCORRECT" and we see "CORRECT" this time AND there isn't a timer deduction.  With that in mind, that's how the quiz is proceed.

# Quiz is Beaten with Time Remaining!

If you managed to beat the quiz with the timer still up, congrats!  You did it!  You'll be taken to a different screen:

((SHOW SCREENSHOT))

Now how was this done, though?  I'll explain on what happens if you didn't beat it.  For now, let's focus on when the quiz is beaten.  


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

This is the function that allows the screenshot to happen.  Notice that the timer is now gone.  The statement says if we are on "questioncycle" 5.  Recall that there are five questions and it goes from 0-4.  When we answered the last question, that results it to go to "questioncycle" 5.  This will then cause the timer to HALT (or in other words, it stops counting down).  We then have a new window, which is to submit the score.  See in order for this to be met, we need either the timer to go to 0 (technically doing nothing beats it, but you'll get a 0 score) or if the final question is answered.

# How Do You Lose the Quiz?

To lose, your time needs to be up OR if you lost too many points.  This is where the "checkmath" function comes into play.  First, here's the screenshot:

((SHOW SCREENSHOT))

Why "checkmath", though?  That is because of this function:

    var checkmath = Math.sign(timestart);

This function is rather straight forward:  There are three possible conditions being met:  0, 1, or -1.  And this all depends on what the "timestart" is.  When the number is positive (or 1-60), it'll be a 1, or in this case, not the number 1, but 1 as in true.  When the timer is 0, that means the checkmath is now 0.  If we lose too many points and happen to go to the negative number, then the statement will be "-1".  This is another way of indicating whether or not the number is a positive, 0, or negative number.  Knowing this, we can use that as a case statement , thus, the following:

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

AKA, this is how it'll see if we have a timer going or not.

# [What Was Done Differently](#differently)

So in this one... I realized a few things:  One... the name.  The reason why button 3 and 4 didn't work was because the name was SLIGHTLY different.  An example:  Md and MD.  They are technically the same, but in coding, d and D are different.  Due to this, the format wasn't following, thus, causing the button not to work.  The other thing was... the placement.  The questioncycle++ was located OUTSIDE of the "else if" statement when button 3 and 4 was implemented.  So when we clicked on it, if we waited for 2 seconds, it skipped 2 questions.  Theoretically, you can skip the ENTIRE quiz like that.  The structure needed to be formatted again, thus, causing the quiz to function as intended.

# [Contributing](#contributing)

As with all the other projects unless specified, this one you are free to implement the code and break the quiz.  If you encountered any bugs, feel free to contact me at:  edgardoca2007@hotmail.com

# [Project Status](#project-status)
This project is ongoing and has been redfined on July 14, 2022