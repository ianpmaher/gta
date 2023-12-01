# gta
Grand Theft Autocorrect | A typing test game for the criminally insane.

![gtaLogoCircleGradientNew](https://github.com/ianpmaher/gta/assets/120536234/ff1d47ce-e4fd-49a0-aed5-6c05155ecbfd)


# Functional deployment: 
**[https://grand-theft-autocorrect.netlify.app/](https://grand-theft-autocorrect.netlify.app/)**

# Details: 
* I set out to create more of a game-ified version of classic typing practice websites like [10 Fast Fingers](https://10fastfingers.com/typing-test/english) and (especially) [Type Racer](https://play.typeracer.com/).
* At time of website deployment, you are tasked with typing in a prompt fetched from either the lovely [Quotable API](https://github.com/lukePeavey/quotable) or the equally lovely [Metaphorpsum Random Sentence API](https://metaphorpsum.com/paragraphs/1/3).
* You must quickly enough to beat the police's words per minute level (set in increasing difficulty for all levels) in order to secure the next car you are trying to steal.
* Additionally, you will sustain health loss for accuracy misses (in addition to the expcted loss of words/minute speed for typos). 

# Technologies used:
* I used **HTML**, **CSS**, and **JavaScript** (with the **Fetch API**) to create my site. 
* I used CSS to stylize the website for mobile, tablet, and desktop usage, with *mobile responsiveness* thanks largely to the wonder of **FlexBox**. 
* I used Fetch to refresh (and allow the user to refresh) the dog facts and pictures that greet the user. For this, I used the aforementioned [Quotable API](https://github.com/lukePeavey/quotable) and alternatively the [Metaphorpsum Random Sentence API](https://metaphorpsum.com/paragraphs/1/3).
* I used CSS Animations, but a project revisit will have me utilizing JavaScript in order to assign animations dynamically.
* I utilized only Vanilla JavaScript for functionality.

Room for Improvement: 
* Implement a two-player feature -- I have some of JavaScript set up with this in mind. Basically, Player One would be the criminal, while Player Two would be a new instance of the Player class. The highest words per minute rate in a best of three wins!
* Improve the responsiveness of the website.  
* I *love* the effect on TypeRacer of the car moving in accordance to how far into a prompt you have reached. Basically, the car moves in proportion to how quickly you type. My website does not do that currently, and I would need to figure out a proper way of doing so with fetched quotes. The alternative would be utilizing a fixed array of quotes and thereby assessing the length of each prompt, etc. 
* I would love to have a soft chime or user-customizable sound play when a session is complete.
* More GTA flair!

<img width="1505" alt="image" src="https://github.com/ianpmaher/gta/assets/120536234/673eb284-84fd-416d-96b5-d84da3da786d">

# Installation
* Feel free to clone this repo! The JavaScript and CSS files are linked to the HTML file and can be loaded up like any other website locally.

# Wireframe & Design Process
![grandTheftBetter](https://github.com/ianpmaher/gta/assets/120536234/19757480-80cf-4198-9436-b05730d27650)
![grandTheftFlee](https://github.com/ianpmaher/gta/assets/120536234/df79b2c0-105c-4a3d-bfab-da38836799f3)
![grandTheftlaterchoice](https://github.com/ianpmaher/gta/assets/120536234/714c0dc9-895e-4cdb-be5c-2ecce324d777)
![grandTheftuserchoice](https://github.com/ianpmaher/gta/assets/120536234/c4bd0020-d54a-41d5-b819-c54b1f1ea421)

