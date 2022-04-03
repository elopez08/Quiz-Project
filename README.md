# Quiz Show Popup!

## Purpose

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

## The Process
The first thing to note is that in this particular project, we're applying on what we have learned on Javascript and applying it here. The first thing to do with a new code is what are we aiming for?  Here, we have a glimpse on the first page:

We have two things in the top:  "View high scores" and a "Time: 0" where this number changes to the actual time limit when the quiz begins.

Next, we have the following:

"Coding Quiz Challenge"

"Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!"

The last thing is that there's a purrple button with the "Start Quiz".

Here, I can see the layout being applied already.  I am going to assume that this also needs to change in size if we're in a smaller screen, so I'll keep that in mind.

If I have to guess, the top portion, which is going to be defined as "header", is going to have the View and Timer, each with respected corners.  This means that it's going to be separated evenly.

After breaking the line,  we have "h1" to be the Coding Quiz Challenge", followed by the paragraph.

Finally, we have the button.

With all of these functions and text, we're going to indent it to the middle.


A transition then happens for us to answer each question.  Here's the question layout:

It'll ask a question and then we have 4 selections, which are all buttons.  At the bottom, there's a borderline that's a light grey and a text that says "WRONG" or "CORRECT!".  Both of these appear when the question is answered!


Let's go and see each criteria to see what we need:

GIVEN I am taking a code quiz
WHEN I click the start button

This is relatively simple.  If we click the button, it transitions to the next page.  Unlike the last time, though, this isn't a popout.  Rather, it's loading up a new card and we will have the questions in a box with the text left indent.  The buttons are also left indent.

First, we'll do the window:

(show screenshot)

Think what would help out is seeing the different formats on what is included in this.  Using "div" as a guidance, we're going to see what is going on.  So the first is the overall "div".

Next, we have two more "div"s:  a "header" div that has the view high scores and the time while the "section" has the texts and buttons.  This will then change to the other screenshot, but we'll get there one step out of time.

For now, let's put that in this format:



-----Starting Screen!-----

<div>
The overall div for the childs "header" and "section"

<header>
Has the time/view high scores

I'm going to use the same idea I did for the portfolio.  I'm going to make a few extra comments as I rework this to get an idea on how it all fits and how it functions.  Keep an eye out for these funcitons!


<section>
Contains the text, buttons, and selections

For this, I'm going to have two thing:  A p that defines to be a paragraph for the introduction screen:

-A h1 and p that has both in black text and it is aligned in the center


There's a <button> that's waiting to be pressed that'll take into the next state.

-aligned in the center
-purple background on it
-border being rounded (radius)

<footer>

For now, this is going to be invisible.  The reason why I'm still going to define this here is because I wanted to point out that this div DOES exist, but we can't see it just yet.  That'll be only available when the person answers the question correctly or incorrectly.



----Quiz Show Window!-----

Next, let's see the next window:

<div>
Parent for Header and Section

<header>
Contains High Score/Time

<section>
This time, it containts a question with 4 selections

<footer>
There's a hidden "div" known as footer.  It contains the line and it says "correct" or "incorrect"

There's one more thing that happens:  A noise.  There's a little jingle that happens if you got the answer right or wrong.

The button highlights to a different color when HOVERED



--Time is Up/Ran out of Time




## How it all plays out
First, let's take a look at the initial part of the screen:

(Insert Image For InitialScreenshot)

I've made the following:

    -Header that contains "View High Scores" and a "Timer"
    -Box Section with an H1, p, and a button
    -Footer with a border

These are visible.  When you click the view High Score, this shows up:

(Show View-Highscores)

Note that the box behind is now in a grayish color as well as the windows that pops out with the High Scores.  Let's go over this:


            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h1 id="mainp-area-box" class="title-score">High Scores!</h1>
                    <table class="tablesize">
                        <tr class="row">
                            <th>Initial</th>
                            <th>Score</th>
                        </tr>
                        <tr class="row">
                            <th>EL</th>
                            <th>20</th>
                        </tr>
                        <tr class="row">
                            <th id="initials">Dummy</th>
                            <th id="quizscores">Dummy</th>
                        </tr>
                    </table>
                    <!-- <button class="favorite styled" type="button" id = "StartQuiz">Start Quiz</button> -->
                    <p id="question-paragraph"></p>
                    
                </div>
            </div>


Let's start with the table itself.  There are two things that I made:  class="modal" and id="myModal".  Let's start with the css.  Here's the link for the class:

    .modal, .modal-two {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        width: 100%;
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

This function will allow the modal, itself, to pop out.  There's going to be a background color that has black, but the opacity is 40%, giving the illusion that it is a popout window.  The fix position will allow it to be in the center.

Next, we have the id="myModal".  In this one, we have to go to the JS.  Here's what it is:

    var modal = document.getElementById("myModal");

In the JS, I have the var modal set to that popout window.  Then, I have this function here:

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

It is stating that IF "viewscore" is clicked, then this function will popout to form that window.  viewscore is this:

    var viewscore = document.getElementById("box-header");

...which is linked to this in the HTML:

        <div id="box-header" class = "view-high-score"> // line 24

This also has one more property inside it:

    <p>View High Scores</p>

This text in the format is the trigger.  Should at any time this text be clicked, then it is going to popout the window.

With all those links attached, this will do the following:

    -Call on the function should it be clicked to popout the modal (AKA, High Scores window)
    -Inside the window, displays the content of it
    -If it is clicked on the outside OR if the X is clicked, by these functions, it'll cause the block to disappear:

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

Now there's one more thing:  What is inside the content?  Here, I have this:

            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h1 id="mainp-area-box" class="title-score">High Scores!</h1>
                    <table class="tablesize">
                        <tr class="row">
                            <th>Initial</th>
                            <th>Score</th>
                        </tr>
                        <tr class="row">
                            <th>EL</th>
                            <th>20</th>
                        </tr>
                        <tr class="row">
                            <th id="initials">Dummy</th>
                            <th id="quizscores">Dummy</th>
                        </tr>
                    </table>
                    <!-- <button class="favorite styled" type="button" id = "StartQuiz">Start Quiz</button> -->
                    <p id="question-paragraph"></p>
                    
                </div>
            </div>

The class = "modal-content" has this:

    .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

In addition to this, row has class="row" and th has both "initials" and "quizscores" on the new line.  First, here's the row:

    .row {
        width: 50%;

    }

The table size is this:

    .tablesize {
        width: 100%;
        height: 80%;
    }

With all these properties, it is making the table design.  Now what is the id's "initials" and "quizscores".  From the format of the files, I'll mention this later.



Now going back to the inital page, we have a button on the top middle.  For anyone that wants to, they can listen to the quiz music that'll play in the background.  I have it identified to this:

            <audio controls autoplay class = "audiowin">
                <source src="./assets/sound/Swanky's-Swing.mp3" type="audio/ogg">
                <source src="./assets/sound/Swanky's-Swing.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>

As a child of the header, I have this identity for the spacing:

    .view-high-score, .high-score-content, .audiowin {
        padding: 0 20px 0 20px;
    }

Also, remember, that the header has its own functions to cause the spacing and flex.  This is the function:

header {

    padding: 20px 0px 20px 0px;
    font-family: var(--font-family-one);
    /* background-color: var(--dark-color); */
    color: var(--dark-color);

    /*This is what's needed to have the text move.  Remember the following:
    
    display:flex causes the purple line
    justify-content: space-between adds spacing on the contents
    flex-wrap:wrap: if there is no space, it'll go to another line
    */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}


Now that we have set, next we turn attention to the button: The Start Quiz

## Start Quiz Button

There are numerous of things happening with this button, so we'll start on what is this.  This is the identity:

            <div>
                <button class="favorite styled" type="button" id = "StartQuiz">Start Quiz</button>
            </div>

I made this as a div function.  The style is going to be the class="favorite styled", which is this:

    .btn, .btnscore, .styled {
        width: 300px;
        border: 0;
        line-height: 2.5;
        padding: 0 20px;
        font-size: 1.5rem;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        border-radius: 10px;
        background-color: rgb(131, 42, 123);
        background-image: linear-gradient(to top left,
                                        rgba(0, 0, 0, .2),
                                        rgba(0, 0, 0, .2) 30%,
                                        rgba(0, 0, 0, 0));
        box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                    inset -2px -2px 3px rgba(0, 0, 0, .6);
    }


This will do the following:
The initial will have it as a sollid block purple button.  If it is hovered, it'll change the color to a lighter purple color, whic is this:

    .btn, .btnscore, .styled:hover {
        background-color: rgb(199, 102, 194);
    }

Should the button be pressed, it'll do this:

    .btn, .btnscore, .styled:active {
        box-shadow: inset -2px -2px 3px rgba(61, 61, 61, 0.6),
                    inset 2px 2px 3px rgba(0, 0, 0, .6);
    }

This makes the button darker.

With the style identified, let's go over on the id setion:

## Start Button id = "StartQuiz"

First, let's go to the JS.  Here's the identity of the button:

    var BtnStartEl = document.getElementById('StartQuiz');

Now we have BtnStartEl to be the element for that id, which is the button.  With this in mind, we'll go to the next step.

We need this button to activate a function.  This is the function:

    BtnStartEl.addEventListener("click", function(){

When this button is clicked, line 313 will then be read again.  In short, this is what happens:

So this is what happens initially:

    BtnStartEl.style.display = 'none';


    //debugger;
    wrongAnswerEl.style.display = 'none';
    correctAnswerEl.style.display = 'none';
    //footerblock.style.display = 'none';


        //Setting up the timer
        var timeInterval = setInterval(function(){

In short, we have that same button disappear from the start so it isn't clicked again.  We have wrongAnswerEl and correctAnswerEl still not there (more on that later), and we have a timeInterval function applied.  Because this button is clicked, it'll now start reading the quiz.  We needed to make sure that the button disappeared and we have the paragraph and words changed.  For that, we'll have to look at how it is being read.

## Booleans questionsObject and answersObject

Now that we're on the quiz, we need to identify on the texts itself.  Here, we have the following reading as boolean:

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

questionsObject has only one set of texts changing, which is the paragraph.  Becuse of this, depending on what state we're in, it'll display this text.  Example would be if we're at 0, it'll display 

            0: "Commonly Used Data Types DO NOT Include: ",

Same thing with the answersObject, only this one has two lists:  The first one is dependant on the question.  0 is considered to be question 1, so that means it'll have this container:

            0 : {
                //All choices for question 1
                0: "Strings",
                1: "Booleans",
                2: "Alerts", //<-This is the right answer
                3: "Numbers",

            },

For these, we have 4 different functions.  These are going to be the buttons for the question.  The number value of this will NEVER change, so it is safe to put as 0-3.  As long as it is being called and we're in the right question, it'll read it.

That's what the Boolean does on the function.

## Set Time Interval

Line 326 now has a timer going off.  In this one, we have one more function at line 824 that surrounded the entire thing:  the 1000.  This means that while the timeInterval is active, it'll cycle around every SECOND.  As long as the Time Interval is still being called, then this is going to continue to countdown a second.

We need to do this because we want that timer to start counting down.  For each second, the number will decrease by one as it is shown here:

                timestart -= 1;

Line 360 has this.  This will ONLY happen IF AND ONLY IF questioncycle is less than or equal to 4.  What is this, though?  questioncycle is identified here:

                timestart -= 1;

    var timestart = 60;

Line 79 has this identity.  This is going to be our timer.  Also kep in mind while this is still going off, we have one more:  timerleft.  This is the function:

    var timerleft = document.getElementById('TimeLeft');

This is making var timerleft to connect with the "TimeLeft" that's in the HTML.  This is important.  We'll discribe this while we do the quiz.

Now we need to identify something:  What if the timer expires or what if the questions are no more (we only have 5).  The quiz should end, so that's what we have here on the if and else statements:

            if (questioncycle <= 4)

            else if (timestart == 0 || questioncycle == 5)

Line 330 and line 783 has these just in case.  330 specifically states that while we haven't passed 5 questions, continue this loop.  The next one is if timestart == 0 OR if questioncycle == 5.  5 is what triggers when we hit our "sixth" question, but that doesn't exist.  Therefore, if we go to this function, it'll do the final steps.  timestart, I'll explain this in a bit.

So now what happens while we didn't pass 5 questions.  We have the timer go off.  It is important to note the following:

            wrongAnswerEl.style.display = 'none';
            correctAnswerEl.style.display = 'none';
            BtnStartEl.style.display = 'none';

wrongAnswerEl and correctAnswerEl are there in case the user made the choice and a message pops up.  BtnStartEl is our button that trigger this to happen.  In order for this code to not break, I have this button taken out so when we go to our first question, it is no longer there.


## What if we haven't answered all 5 questions?

Here, we have this function:

            if (questioncycle <= 4)

Going back into this, we have more declaration.  Here are the functions that are important:

                checkmath = Math.sign(timestart);
                console.log("Checkmath is holding this statement: " + checkmath);
                //start the quiz time
                quizsummaryEl.style.display = 'none';
                titlequestionEl.style.display = 'none';

                timerleft.textContent = timestart;

                //titlequestionEl.style.display = "";

                //titlequestionEl.style.display = "";
                questionEl.style.display = "";
                answer1BtnEl.style.display = "";
                answer2BtnEl.style.display = "";
                answer3BtnEl.style.display = "";
                answer4BtnEl.style.display = "";

This is doing the following:  checkmath will use the timestart (WILL EXPLAIN THIS A BIT FURTHER) to see if it's positive, 0, or negative.  Then we have the quizsummaryEl (the title) be none for now.  titlequestionEl is the header of that originally had the Welcome Quiz.  That is also none.
timerleft, being linked to the timer on the HTML, will grab the text contents in timestart, which is a number that started out at 60.  Should it start conting down, like on line 360, then this will change.
Finally, we have the question buttons displaying.  There are four.  What will contain depends on the cycle.

We move on to the contents of the buttons:

## What's in the text on the buttons?

Function line 351:

    if (questioncycle <5)

As long as WE AREN'T IN QUESTION 6, do the following:

                {
                    answer1BtnEl.textContent = answersObject.answers[questioncycle][0];
                    answer2BtnEl.textContent = answersObject.answers[questioncycle][1];
                    answer3BtnEl.textContent = answersObject.answers[questioncycle][2];
                    answer4BtnEl.textContent = answersObject.answers[questioncycle][3];    

                }                

Remember that Boolean function?  Now it is coming back to be applied here.  Slowly, the left side is going to have a button linked and it is extracting the text content.  The right side indicates that we are in the "answersObject" boolean that has "answers" as its cases.  So if it is 0, or first question, it'll be this:

        0 : {
            //All choices for question 1
            0: "Strings",
            1: "Booleans",
            2: "Alerts", //<-This is the right answer
            3: "Numbers",

        },

I have it set to 0-3 correspondingly so that it displays it on the list.

With all that in mind, the timer will start counting down.

## What if the button answer is clicked?

Here's the function on ONE OF THEM (this is going to repeat the same thing for the others, but it'll be slightly alternated with having a wrong and correct statements):

                answer1BtnEl.addEventListener("click",function()
                {
                    //Question 1
                    if ( (questionEl.textContent === "Commonly Used Data Types DO NOT Include: " && answer1BtnEl.textContent === "Strings") || (questionEl.textContent === "The condition in an if and else statement. " && answer1BtnEl.textContent === "Quotes") || (questionEl.textContent === "Arrays in Javascript can be stored in " && answer1BtnEl.textContent === "Number of Strings" ) || ( questionEl.textContent === "String values must be enclosed within _____ when being assinged to variables. " && answer1BtnEl.textContent === "Commas" ) || ( questionEl.textContent === "A very useful tool used during development and debugging for printing content to the debugger is:" && answer1BtnEl.textContent === "JavaScript" ))
                    {

So all of this is saying the following:  It is listening for a click of the button.  In this case, it is the first one.  Then the following text is applied IF THE ANSWER IS WRONG.  SINCE ALL OF THE ANSWERS ON THE FIRST BUTTON IS WRONG, we have 5 statements.  When that happens, this follows:

                        switch(answer1BtnEl.textContent)
                        {
                            case "Strings":
                                {
                                    console.log("I'm in the answer1btnEl text Content: " + answer1BtnEl.textContent);
                                    console.log("WRONG ANSWER!");
                                    timestart -= 10;
                                    //For some reason, if this isn't called, it'll do this 4 times and it'll repeat this loop 4 times
                                    questionEl.textContent = "";
                                    wrongAnswerEl.style.display = 'initial';
                                    //footerblock.style.display = 'initial';
                                    break;
                                }
                            case "Quotes":
                                {
                                    console.log("I'm in the answer1btnEl text Content: " + answer1BtnEl.textContent);
                                    console.log("WRONG ANSWER!");
                                    timestart -= 10;
                                    questionEl.textContent = "";
                                    break;
                                }
                            case "Number of Strings":
                                {
                                    console.log("I'm in the answer1btnEl text Content: " + answer1BtnEl.textContent);
                                    console.log("WRONG ANSWER!");
                                    timestart -= 10;
                                    questionEl.textContent = "";
                                    wrongAnswerEl.style.display = 'initial';
                                    break;
                                }
                            case "Commas":
                                {
                                    console.log("I'm in the answer1btnEl text Content: " + answer1BtnEl.textContent);
                                    console.log("WRONG ANSWER!");
                                    timestart -= 10;
                                    questionEl.textContent = "";
                                    wrongAnswerEl.style.display = 'initial';
                                    //questioncycle++;
                                    break;
                                }
                            case "JavaScript":
                                {
                                    console.log("I'm in the answer1btnEl text Content: " + answer1BtnEl.textContent);
                                    console.log("WRONG ANSWER!");
                                    timestart -= 10;
                                    questionEl.textContent = "";
                                    wrongAnswerEl.style.display = 'initial';
                                    //questioncycle++;
                                    break;
                                }
                            
    
                        }
                        questioncycle++;
                    }

To simplify, let's go one of the cases:

                            case "Strings":
                                {
                                    console.log("I'm in the answer1btnEl text Content: " + answer1BtnEl.textContent);
                                    console.log("WRONG ANSWER!");
                                    timestart -= 10;
                                    //For some reason, if this isn't called, it'll do this 4 times and it'll repeat this loop 4 times
                                    questionEl.textContent = "";
                                    wrongAnswerEl.style.display = 'initial';
                                    //footerblock.style.display = 'initial';
                                    break;
                                }

In this one, it is saying when the case "Strings" is extracted.  Since we are doing time penalty, we have it to -10 at the timestart.  WE MUST INCLUDE THIS:

                                    questionEl.textContent = "";

For some reason, if we don't do this, it'll repeat on the loop.  We need to empty it out.  Finally, we can see this:

                                    wrongAnswerEl.style.display = 'initial';

This is saying have the "WRONG ANSWER" appear.  For the rest of the buttons, there is an else statement.  It'll repeat like the if, but this time, it'll indicate which answers ARE RIGHT on the respected buttons.  THERE WILL BE NO TIME PENALTY and IT'LL SAY CORRECT.

Now how does it know what question it is?

## Question Text

                if ( (questioncycle == 1) && (checkmath == 1) )
                {
    
    
                    questionEl.textContent = questionsObject.question[questioncycle];
    
    
                    answer1BtnEl.textContent = answersObject.answers[questioncycle][0];
                    answer2BtnEl.textContent = answersObject.answers[questioncycle][1];
                    answer3BtnEl.textContent = answersObject.answers[questioncycle][2];
                    answer4BtnEl.textContent = answersObject.answers[questioncycle][3];
                
                    //questioncycle++;
    
                    console.log("We're in the step # " + questioncycle);
    
                }

This is the function that is outside of the loop.  We have this:

    checkmath ==1;

Why?  That is because we have this function:

                checkmath = Math.sign(timestart);

With the property of Math.sign, it'll do the following:

    -If it's a positive number, checkmath is 1
    -If it's a 0, checkmath is 0
    -If it's a negative number, checkmath is -1

We need to do this, because on JS, it can't read negative numbers.  I tried that with the timers <=0 with no luck.  However, with this checkmath, it works!

Back to the text, we can see that if the questioncycle is 1 AND if the checkmath is 1, it'll extract the textContent.  The next set after the questionEl is for the buttons.  Now why the questioncycle ==1?.  This is indicating if we're on the second question.  If we are, then it'll take the boolean again and apply new texts.  We need to make sure that this ONLY HAPPENS if the timer isn't 0.

## Time is Up!

Line 742:

                if (checkmath == 0)
                {
                    console.log("TIME'S UP!  No more time given and you need to try again!");
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

This is indicating if our timer is 0 due to the checkmath being applied to the timer.  This will cause ALL answer buttons to not display.  It'll also show the text that you need to try again.  More importantly are these two functions:

                    BtnStartEl.style.display = "initial";
                    clearInterval(timeInterval);

The first one is the Start Quiz button again.  Clicking it will resume once more.
clearInterval STOPS THE TIME, so it doesn't repeat endlessly.  We need this to happen because if we don't stop that, then the timestart is going to continue to count down and we will never get out of the loop.  Speaking of which, the timestart is set back to 60.

## What if you Answered wrong while less than 10 seconds?

                else if (checkmath == -1)
                {
                    console.log("You have no more time left... You have to try again");
                    answer1BtnEl.style.display = 'none';
                    answer2BtnEl.style.display = 'none';
                    answer3BtnEl.style.display = 'none';
                    answer4BtnEl.style.display = 'none';
                    //Button configuration ends

                    //Reset timer to 60
                    questionEl.textContent = "You lost too many points!  Try again!";
                    timestart = 60;
    
                    highScore = timestart;
                    //Start button reappear again
                    BtnStartEl.style.display = "initial";
                    clearInterval(timeInterval);
                }

Once again, checkmath will initiate and indicate if it is a -1.  Same thing happens like the previous, but this time it is for when the timer is less than 0.

## What if you beat the timer?

            else if (questioncycle == 5)
            {
                //There will be no buttons active
                console.log("Final Score Set up.");
                highScore = timestart;
                answer1BtnEl.style.display = 'none';
                answer2BtnEl.style.display = 'none';
                answer3BtnEl.style.display = 'none';
                answer4BtnEl.style.display = 'none';
                //Button configuration ends

                
                //Dummy score
                var numberscoredummy = 20;

                BtnStartEl.style.display = 'none';

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

Finally if you have answered all the questions in a certain timer, again, all the buttons are gone, BUT THIS TIME, we have the textarea displayed instead as well as the submitScoreEl.  This is the screenshot if you beat it:

((show submitting the Score))

Finally, what happens next is this:

## What if you submit the score?

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

This is listening in on the submitScoreEl.  When it triggers, we then have the modal display (which is the popout window), the BtnStartEl is shown AGAIN to retake the quiz, and we have the values that were extracted from the textBoxEl and the highscore (which is the timer).  This will now be saved to the highscore, which is now this:

(show submit score)

The line below is linked to whatever the textcontent is from this and it'll reflect it on the value.  I have yet to add a new line for this, sadly, but for now, you can save it here

After you submit it, you get this screen again:

(show ss)



Note, do you see that there's the button again to take the exam?
Clicking on it starts the cycle AGAIN.