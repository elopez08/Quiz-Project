## Header for HTML (originally)


        <header>

            <h1>Edgardo Junior Lopez</h1>

            <!-- Nav has the "About Me", "Work", "Contact Me", and "Resume" -->
            <img src="./assets/images/image-profile.jpg" width="200px" height="200px">

            <nav>
                <!-- Making an unordered list for the top section -->
                <ul>
                    <!--Four Words on the top: "About Me" "Work" "Contact Me" "Resume" -->

                    <!-- About Me Section -->
                    <li>
                        <a href = "#about-me">About Me</a>
                    </li>
                    <!-- Work Section -->
                    <li>
                        <a href = "#work-section">Work</a>
                    </li>
                    <!-- Contact Us Section -->
                    <li>
                        <a href = "#contact-me-section">Contact Me</a>
                    </li>
                    <!-- Resume Section -->
                    <li>
                        <a href = "./assets/files/Edgardo Lopez Resume Software PDF File.pdf">Resume</a>
                    </li>
                </ul>
            </nav>


            <!-- How we're going to define the new structure -->

            <!-- 

            <div>
                <a href = "">View High Scores</a>
            </div>

            <div>
                <p>Time (add a timer here!)
            </div>


             -->

        </header>


## Style for the Header (in CSS Originally)

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /*background-color: rgb(165, 168, 202);*/  /*This property is making ALL that has a background set to this color, including text.  Find a way around this*/
}


/*

    Universal declaration.  Remember that the format is:
    (name of the element) : (the text that defines the element such as color)

*/
:root{

    --main-lightteal-color: #67d6d6; /*use:  var(--main-white-color); */
    --font-family-one: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; /*use: var(--font-family-one); */
    --display-inline: inline-block; /*use: var(--display-inline); */
    --font-color-one: teal;    /*Use: var(--font-color-one); */
    --dark-color: #252525; /*use: var(--dark-color); */

}

/*

    These are the universal declaration for:
        -a (links that are defined in the document)
        -p (PARAGRAPHS) (this is IMPORTANT since we're going to be using p!)
        -h1 (used for the titles of the slides)

*/

a {
    color: teal;     /* Changing the link color to this */
    text-decoration: none;              /* This is to ensure if there's a line or not */
}

p {
    font-family: var(--font-family-one);
}

h1 {
    color: black;
    font-size: 48px;
}


/* =========== End of Universal Declaration =========== */


/* =========== Start of Header =========== */

/*

    Remember this is the one that defines on how the structure looks like.  For each, I'm going to make additional notes on what it is doing and being defined:

*/

/*This is taking the parent 'header' and having the following:

    -having a padding, which is adding spacing on the box
    -font style for the words inside it
    -a background color that defines to be a dark color (which is also linked from the universal declaration)
    -a font color
    -the flex that not only displays it as a flex, having spacing in between it, and also having the childs be lined up one another in a horizantal plane

*/
header {

    padding: 20px 0px 20px 0px;
    font-family: var(--font-family-one);
    background-color: var(--dark-color);
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

/* While inside the header, h1 has these being defined:

    -spacing around it
    -size of the font
    -a background color that's behind the text
    -the height of the box

*/
header h1 {

    padding: 5px 5px 5px 35px;
    /*We're taking out the inline display*/
    /*display: var(--display-inline);*/
    font-size: 48px;
    background-color: teal;
    height: 70px;

}

/*While inside the header, 'nav', the other child, is going to have the following: 

    -background color
    -spacing TOP ONLY
    -a margin on the right
    -indenting to be going to the right
    -the size of the text

*/
header nav {
    background-color: var(--dark-color);
    padding-top: 15px;
    margin-right: 70px;
    float: right;
    font-family: var(--font-family-one);
    font-size: 20px;
    /*Note that there is no inline display*/
}

/*We have a ul and an li list.  Is this COMPLETELY necessary?  Most likely not.  We may need to erase this.  All it's doing is identifying the tyle, making a background color and adding spacing.  However, if there's no list, this isn't needed

*/
header nav ul {
    list-style-type: none;
    background-color: var(--dark-color);
}

header nav ul li {
    background-color: var(--dark-color);
    display: var(--display-inline);
    margin-left: 25px;
}

/* We're in the header, going to nav, that's inside ul, in the li, and any text that has 'a' in it */
header nav ul li a {
    background-color: var(--dark-color);
    border-bottom-style: solid;     /* Adding solid line on the bottome of text */
    padding: 0px 10px 0px 10px;                   /*Adding spacing around the text */
    font-size: 25px;
}

/* =========== End of Header =========== */



## Original Link for "btn"

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    wordsentence++;
  }

## Additional Notes