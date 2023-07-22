# Rock Paper Scissors - JS Project

## Description

In this project we will be creating a Rock Paper Scissors game using JavaScript. Set up for you - we have an index.html that has two "screens" - one for item select and the other to display the result. These "screens" should be hidden and shown as needed using `display: flex;` and `display: none`. We also have a CSS file that has some basic styling for the game.

Each `img` tag in the "item select" screen has a `id` set to the value the image represents. We will use this value in our Javascript logic to know what the user has selected.

## Objectives

### Step 1 - Setup

- Create a new file called `main.js` and link to it inside our `index.html` HTML file.
- Create a variable called `userChoice` that will store the input of the user. (hint: should we use let or const?). Set it equal to `null` for now.
- Create a variable called `computerChoice` that will store the input of the computer. Set it equal to `null` for now.
- Create a variable called `winner` that will store the winner of the game. Set it equal to `null` for now.
- Create a variable called `itemSelectScreen` and set it equal to the `div` with the id of `itemSelectScreen`.
- Create a variable called `resultScreen` and set it equal to the `div` with the id of `resultScreen`.
- Create a function called `gameController`. That will take in an event parameter.
  - "Controller" functions are often used to handle events and then call other functions to do the work.
- In our HTML add an onclick attribute to each `img` that will call the `gameController` function (hint: try logging out the `event` parameter within the `gameController` function. Did you get an event?).
- console log each variable created. Are they working? You may notice some of the screen variables are not working. This is because our JS script is initiated at the top of the page while the HTML is loaded at the bottom.
- To fix this, lets set our screen values to be `null` by default. Then let's make a window.onload function that will set the screen variables to the correct values once the page has loaded.

### Step 2 - Handle User Choice

- Create a function called `getUserChoice` that will take in an event parameter.
- Inside the function, set the `userChoice` variable to the `id` of the selected item (hint: the event parameter has a property we can use to get element that was clicked on, and the element has an `id` attribute).
- Inside of the `gameController` function, call the `getUserChoice` function and pass in the event parameter.
- Log out the `userChoice` variable to make sure it is working.

### Step 3 - Handle Computer Choice

- Create a function called `getComputerChoice`.
- Inside `getComputerChoice`, create an array called `choices` that has the values "rock", "paper", and "scissors".
- Create a variable called `randomNumber` that will store a random number between 0 and 2 (hint: use `Math.floor` and `Math.random`).
- Set the `computerChoice` variable to the value of the `choices` array at the index of the `randomNumber` variable.
- Inside of the `gameController` function, call the `getUserChoice` function and pass in the event parameter.
- Log out the `computerChoice` variable to make sure it is working.

### Step 4 - Determine the Winner

- Create a function called `determineWinner`.
- Inside `determineWinner`, create an if statement that checks if the `userChoice` and `computerChoice` variables are equal. If they are, set the `winner` variable to "tie".
- Use `userChoice` and `computerChoice` to determine the winner of the game. Set the `winner` variable to be `user` or `computer` depending on who won.
- Inside of the `gameController` function, call the `determineWinner` function.
- Log out the `winner` variable to make sure it is working.

### Step 5 - Display the Winner

- Create a function called `displayWinner`.
- Inside `displayWinner` create a variable called `resultText` and set it equal to an `h3` element. element (hint: use `document.createElement`).
- Set the text of `resultText` to be a string that include the users choice, and the computers choice. (hint: use string concatenation and `innerText`).
- Create a variable called `resultImg` and set it equal to a new `img` element (hint: use `document.createElement`).
- Set the `src` attribute of the `resultImg` variable to the image that represents the `winner` variable (hint: try using string concatenation!).
- Append the `resultText` and `resultImg` variables to the `resultScreen` variable.
- Hide the "Item Select" screen and show the "Results" screen (hint: use `style.display` on the `itemSelectScreen` and `resultScreen` variables).
- Inside of the `gameController` function, call the `displayWinner` function.

- Congrats! You have completed the project. Feel free to add more styling or functionality to the game.

### Step 6 - Bonus (Optional) Reset the Game

- Create a function called `resetGame`.
- Inside `resetGame`, set the `userChoice`, `computerChoice`, and `winner` variables to `null`.
- Remove all children from the `resultScreen` variable (hint: use `innerHTML`).
- Show the "Item Select" screen and hide the "Results" screen (hint: use `style.display` on the `itemSelectScreen` and `resultScreen` variables).
- Inside of the `displayWinner` function create a new variable called `RestartButton` and set it equal to a new `button` element (hint: use `document.createElement`).
- Set the `innerHTML` of the `RestartButton` variable to "Restart".
- Add an onclick attribute to the `RestartButton` variable that will call the `resetGame` function.
- Append the `RestartButton` variable to the `resultScreen` variable.
