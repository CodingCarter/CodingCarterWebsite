---
layout: post
title: Embed YouTube Videos into Your Website
author: Carter Snook
---

In this tutorial I will be teaching you guys how to embed a YouTube video into your website!  Before starting this tutorial, make sure that you have found your YouTube video that you would like to embed into your website!  Now, let's get started!

1. Copy the Video's Embed Code

Go to the YouTube video and hit the share button underneath the video.  You should then see a popup with different options of sharing.  We need to hit the "embed" icon and copy the code.  You may edit some of the settings that they allow you to change, such as the place where the video starts, toggle player controls, and privacy-enhanced mode.  You can see the video code here:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bj88pcN5xuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

2. Paste the Code

Now all we have to do is paste the code into your HTML or PHP file.  I advise you to place the code within the \<body\> tags, though.  I will include what it will look like below!

<div class='video-container'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bj88pcN5xuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>
    .video-container { position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; } .video-container iframe, .video-container object, .video-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>