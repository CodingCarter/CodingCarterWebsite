---
layout: post
title: How to Make Your Website Responsive
author: Carter Snook
---

In this article I will be showing you how to make your website responsive via css!  First, we must open up our css file.  We have already loaded in our CSS (Cascading Style Sheet) file into our html file.  In CSS, we can create a media query to assign all of the styles for the certain devices.  Here is an example of a media query for a phone:

```css
@media screen and (max-width: 680px) {
    .element {
        /* Stylings */
    }
}
```

As you can see in the media query, we are targeting devices with a maximum screen height of 680px.  Therefore, a 1920x1080 laptop would not receive the stylings within the media query because its width (1080px) is greater than 680px.  We can also add another media query to handle tablets.

```css

@media screen and (max-width: 680px) {
    .element {
        /* Stylings for Phone */
    }
}

@media screen and (max-width: 1280px) {
    .element {
        /* Stylings for Tablets*/
    }
}

```

In this case, you would have to position your media queries in a largest to smallest order because the stylings for a tablet will overide the stylings of the phone because a phone's width would be less than 1280px if it was less than 680px.  