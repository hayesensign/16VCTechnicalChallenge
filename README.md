I chose the first task for this challenge, the peer-to-peer rental platform backend. In order to store the rental information for this api, I use a JSON file. I considered using an array, but decided on using JSON because I wanted the user to be able to exit the program and come back to it without having all the inputed data from the last program execution being reset. Therefore, my program searches for a JSON file with a given name "items.json" in the same folder of the hard drive as the program itself, and if it doesn't find a file with that name, it creates one.

When the program launches, it starts by asking the user to select frome one of 5 options: 1. List an item, 2. Search for item, 3. Rent an item, 4. Return item, or 5. quit. The program quits if q is entered, or it goes to one of the 4 options based on which number is entered. If a character(s) other than 1-4 or "q" is entered, the console logs a message sayin it received invalid input, and asks the user again for input.

If option 1 is selected, then the program asks for the item information: name, description, daily price, and availability. The user is told that items can't be named "q", as that is the kill code for any given task, or the program at large, depending on the stage of execution. With these parameters, the program then constructs a new object of type item item, that was created in the beginning. The program then checks if a file with the name "items.json" has been created. If it has, it adds the json string version of the item object to this file. If "items.json" hasn't been created, it creates a new file with that name and puts the new item in that file.

If option 2 is selected, the program then checks if "items.json" exists in the local folder. If it doesn't, then the console logs a message saying that no items have currently been listed, and it exits the task. If "items.json" does exist, then it searches through the JSON file with the appropriate criteria, and adds the names any matching objects into a new array. Then, the console prints out the content of the array.

If option 3 is selected, the program then checks if "items.json" exists in the local folder. If it doesn't, then the console logs a message saying that no items have currently been listed, and it exits the task. If "items.json" does exist, the program then searches for that item, and then updates the availability status of the JSON object in "items.json" to "unavailable".

If option 4 is selected, the program then checks if "items.json" exists in the local folder. If it doesn't, then the console logs a message saying that no items have currently been listed, and it exits the task. If "items.json" does exist, the program then searches for that item, and then updates the availability status of the JSON object in "items.json" to "unavailable".int

If "q" is entered, the program quits.



In order to test the program, create a javascript file with the code I entered into github and run it. Make sure that no file exists with the name "items.json" in the parent folder of the program.
