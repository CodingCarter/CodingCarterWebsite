---
layout: post
title: Quadratic Formula Calculator with Pure JavaScript
author: Carter Snook
---

In this tutorial I will be teaching you guys how to create a quadratic formula calculator in pure javascript!  I have a video tutorial at <a href='https://youtu.be/t5VikONOBns'>this link</a> or you can <a href='#video-container'>scroll down</a> to see it embedded on the bottom of the page!  You will change the variables inside of the javascript file, and when you run the program, it will display the solutions (roots) of that quadratic equation.  Now, let's get started!

1. Create Your HTML File

```html

<!DOCTYPE html>
<html>
    <head>
        <!-- Insert Meta Data if You Would Like -->
        <title>Quadratic Formula Calculator in Pure Javascript</title>
        <script src='main.js'></script>
    </head>

    <body>
        <!-- The document.write() function will print out our data here later -->
    </body>
</html>

```

2. Initiate Your JavaScript File

We will now create our javascript file and add in a couple of variables and the document.write() function!  The document.write() function will just write out whatever the parameter is and put it into the \<body\> tags as plain text!  Remember to name the javascript file whatever you declared it as in your \<script\> tags inside of the HTML file!

```js

var a = 1;
var b = 4;
var c = 3;

var answers = []

document.write(`Your answers are (${answers[0]}, ${answers[1]})`);
// The Grave Accent (Backtich) is a type of string in which we can insert javascript data inside of the ${}s

```

3. Add in the Quadratic Formula

There can be up to two solutions (roots) to a quadratic equation, which is why our answers are an array!  You can view how a quadratic equation and the quadratic formula looks like at <a href='https://mathbitsnotebook.com/Algebra2/Quadratics/quadbutton1.jpg'>this link</a>!  Now we only have to add in the formula into our answers array!

```js

var a = 1;
var b = 4;
var c = 3;

var answers = [
    (-b + Math.sqrt(b**2 - 4*a*c)) / (2 * a),
    (-b - Math.sqrt(b**2 - 4*a*c)) / (2 * a)
]

document.write(`Your answers are (${answers[0]}, ${answers[1]})`);

```

Finally, you may add in some if statements and else if statements to handle when there is only one or there isn't an answer to that quadratic equation.  You could also get the variables from \<input\> tags inside of the \<body\> instead of hardcoding them inside of the JavaScript file!  Check out the <a>CodePen for this tutorial <a href='http://bit.ly/2Fd0XjI'>here</a>!

<div id='video-container'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/t5VikONOBns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>