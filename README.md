# TextScript.js

### view v1.1 [here](#v2)

Introducing TextScript, a versatile JavaScript library designed to revolutionize the way you incorporate text animations into your web projects. TextScript is crafted with simplicity and functionality in mind, allowing developers of all skill levels to seamlessly create dynamic, engaging typographical effects. Whether you're looking to implement typewriter-style animations, smooth text transitions, or interactive text-based interfaces, TextScript provides a robust set of features to bring your vision to life. With customizable options for typing speed, backspacing, looping, and a variety of animation styles, TextScript offers unparalleled flexibility and control. Elevate your website’s user experience by adding captivating text effects that draw attention, enhance storytelling, and keep users engaged. Easy to integrate and highly adaptable, TextScript is the perfect solution for developers seeking to add a professional and polished touch to their web content. Explore the possibilities with TextScript and transform the way you present text on the web.

# Installation:
You can use any one of the below script tags for using TextScript JS and copy code and just paste it in your head tag of your project's html file. Read [How to Use](https://github.com/amyssnippet/textscript.js/edit/main/README.md#how-to-use)
## Tag 1:
```
<script type="module" src="https://textscript-js.vercel.app/js/textscript.js/"></script>
```
## Tag 2:
```
<script type="module" src="https://cdn-ts-js.vercel.app/js/textscript.js/"></script>
```

# How to Use:

To use simple follow below steps:
## Step 1: 
Add this code in body section in html wherever you want
```
<p
data-textscript-strings="Hello,Welcome to TextScript!,Enjoy the typing animation!"
data-textscript-typespeed="50"
data-textscript-backspeed="50"
data-textscript-loop="true">
</p>
```
not limiting to paragraph tag you can also add heading tags like
```
<h1
data-textscript-strings="Hello,Welcome to TextScript!,Enjoy the typing animation!"
data-textscript-typespeed="50"
data-textscript-backspeed="50"
data-textscript-loop="true">
</h1>
```
and
```
<h6
data-textscript-strings="Hello,Welcome to TextScript!,Enjoy the typing animation!"
data-textscript-typespeed="50"
data-textscript-backspeed="50"
data-textscript-loop="true">
</h6>
```
will also work.
## Step 2: 
Setup accordingly like set type-speed and back-speed of your choice in milliseconds.
## Step 3:
You can set
`data-textscript-loop="false"`
to stop repeating the text, the animation will continue only for one time for all values in the string and will enduo after some it does and no text will be displayed.
## Step 4:
All values in
`data-textscript-string="x,y,z"`
must be seperated by commas.

# And done
Start using it right now

# Query support
email us at amyssnipet@yahoo.com

# v2

## updates

### 1. added blinker effect

### 2. add a attribute named Prefix 
for adding a prefix text for more greater control over typing

`data-textscript-prefix="Your Prefix here"`


### 3. fixed bugs.

### and that's all
