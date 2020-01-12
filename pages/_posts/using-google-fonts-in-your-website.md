---
layout: post
title: Using Google Fonts in Your Website
author: Carter Snook
---

In this article I will be teaching you guys how to use a google font inside of your website!  I will show you guys step-by-step instructions on how to achieve this.

1. Pick Your Font

Go to fonts.google.com and pick your font!  You should hit the plus (+) icon next to that font that appears when you hover over it.  Feel free to hit the text box to preview what the font looks like!

2. Copy the Import Code

To get your import code, you can either a. use a standard \<link> tag, or b. use the @import command in your css file.  I prefer to use the @import command to load in my fonts because I can see all of my fonts in my css files easily.

3. Paste the Code into the Designated Place

If you were using a link tag to import the font, you must place that inside of the html file(s) that you would like to be able to access the font from.  If you were using the @import command in your css file, you only have to put it in that one file.

```html
<link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
```

or

```css
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
```

4. Use the Font

This is the easy part!  All you have to do is add a font-family property to the elements that you would like to utilize your font in with the value of your font.  Remember to have backup fonts in case the font doesn't load on that person's device, though.

```css
nav, .wrapper, article, footer {
    font-family: "Your Font's Name", serif, sans-serif, monospace; /* main font, backup fonts */
}
```

or you could also globally assign that font in the \<html> or \<body> tags

```css
html {
    font-family: "Your Font's Name", serif, sans-serif, monospace; /* main font, backup fonts */
}
```

In this case, all of the text will have a font of whatever you specify.