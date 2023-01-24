To execute this wordle clon follow these steps:

1. Clone the repository.
2. Go to the command line where you clone the repository.
3. Execute the command yarn install.
4. Execute the command yarn build.
5. Run the command yarn start.
6. Go to localhost:3000 in any browser you have.

This project was made based on this youtube tutorial: https://www.youtube.com/watch?v=WDTNwmXUz2c; however there were 2 major changes I made to the code, so that this application worked more in a better way. These changes were:

1. I noticed there was a problem in the code provided in this tutorial, because if for example the correct word is ABYSS, and you enter the word SASSY, it would show the first 2 Ss letters as being in the word but not in the right position, and the last S as being in the correct position. However, there are only 2 Ss in the word ABYSS so it doesn't make sense that the application it's telling you that there are 3 Ss, that's why it should show the first S as being almost in the same position and the last S in the correct position. The changes were made in the Letter.js component which is in the components folder.

2. This is a minor change, if you guessed the word in one attempt, it shows the message "You guessed the word in 1 attempt" instead of "You guessed the word in 1 attempts". The change was made in the GameOver.js component. 