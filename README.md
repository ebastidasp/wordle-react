To execute this wordle clon follow these steps:

1. Clone the repository.
2. Go to the command line where you clone the repository.
3. Execute the command yarn install.
4. Run the command yarn start.
5. Go to localhost:3000 in any browser you have.

This project was made based on this youtube tutorial: https://www.youtube.com/watch?v=WDTNwmXUz2c; however there were 3 major changes I made to the code, so that this application and its code worked and looked better. These changes were:

1. I noticed there was a problem in the code provided in this tutorial, because if for example the correct word is ABYSS, and you enter the word SASSY, it would show the first 2 Ss letters as being in the word but not in the right position, and the last S as being in the correct position. However, there are only 2 Ss in the word ABYSS so it doesn't make sense that the application it's telling you that there are 3 Ss, that's why it should show the first S as being almost in the same position and the last S in the correct position. The changes were made in the Letter.js component which is in the components folder. These changes consist on 2 loops. The first loop checks all the times the current letter is in its right position, except for the current position. The second loop checks the times the same letter is in an earlier position than the current one. Then, if the number of times that letter is in the word is greater than the number of times that letter is in its right position plus the number of times the letter is in an earlier position, it shows the letter in that position as being almost in the word. Otherwise, it shows the letter in that position as not being in the word.

2. This is a minor change, if you guessed the word in one attempt, it shows the message "You guessed the word in 1 attempt" instead of "You guessed the word in 1 attempts". The change was made in the GameOver.js component. 

3. Install eslint and add rules so that the code had a standard format in every file. One example of these could be that before adding eslint, some import statements had double quotes and others had single quotes. Because of this, I added the eslint rule that forces all quotes to be single. Other rules I added were: The semi-rule (so that every instruction ended with a semicolon), single jsx quotes, no unused vars (to force every file to not import unused vars) and indent of 2 spaces.