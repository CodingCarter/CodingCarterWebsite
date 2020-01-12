---
layout: post
title: Align Elements Vertically and Horizontally in a Div
author: Carter Snook
---

In this tutorial I will be showing you guys how to align elements vertically and horizontally inside of a div!  I will be using two different methods to achieve this.

1. CSS Flexbox

In CSS Flexbox, all you have to do to center an element inside of a div is to set the align-items and justify-content attributes to center!  Thankfully, you do not have to even edit the styling of the child element in this method.

```css

.parent-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

```

2. Absolute Stylings

You are also able to center an element inside of a div by giving the parent div a position of relative and styling the child div with a position of absolute and a transform property!  The transform property should have a translate function with the x and y parameters being -50%.

```css

.parent-div {
  position: relative;
}

.child-div {
  position: absolute;
  transform: translate(-50%, -50%);
}

```

<br>

After learning the different ways to center an element inside of a div, which one will you choose.  I, personally, prefer to use the flex one because it allows me to use the flex-direction property to use it on multiple elements.