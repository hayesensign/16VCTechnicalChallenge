function Item(name, description, dayPrice, availability)
{
    this.name = name;
    this.description = description;
    this.dayPrice = dayPrice;
    this.availability = availability;
}

const fs = require('fs');
const filePath = 'items.json';
var data = fs.readFileSync('items.json');
var myObject= JSON.parse(data);

while (0 < 1)
{
    var task = prompt("\nWhich task would you like to complete?\n1. List an Item for rent\n2. Search for Item\n3. Rent an Item\n4. Return an item\n\nEnter number of task or q to quit: ");
    if (task == 1)
    {
        var name = prompt("\nName of item (items can't be named 'q'): ").toLowerCase();
        var description = prompt("Item description: ");
        var dayPrice = prompt("Daily rental cost of item (enter a number with no more than two decimal values): ");
        var availability = "available";
        
        const newItem = new Item(name, description, parseFloat(dayPrice), availability);
        const data = JSON.stringify(newItem);
        
        if (fs.existsSync(filePath))
        {
            try
            {
                const jsonData = fs.readFileSync(filePath);
                const user = JSON.parse(jsonData);
                data['${newItem.name}'] = `${newItem.description} ${newItem.dayPrice} ${newItem.availability}`;
                fs.writeFileSync("items.json", user);
            } 
            catch (error)
            {
                console.error(error);
                throw error;
            }
        }
        else
        {
            try
            {
                data['${newItem.name}'] = `${newItem.description} ${newItem.dayPrice} ${newItem.availability}`;
                fs.writeFileSync("items.json", user);
            }
            catch (error)
            {
                console.error(error);
                throw error;
            }
        }
    }
    else if (task == 2)
    {
        if (fs.existsSync(filePath))
        {
            const filteredItems = [];
            while (0 < 1)
            {
                var filterCriteria = prompt("\nFilter items by \n1. Name\n2. Price Range\n\nEnter number of filter criteria, or enter q to quit task: ");
                if (filterCriteria == 1)
                {
                    var nameSearch = prompt("Enter the name of the item ").toLowerCase();
                    for (let i = 0; i < myObject.data.length; i++)
                    {
                        if (myObject.data[i].name == nameSearch && myObject.data[i].availability == "available")
                        {
                            filteredItems.push(data[i].name);
                        }
                    }
                    console.log("\nThe following items match your search criteria: \n")
                    for (let j = 0; j < filteredItems.length; j++)
                    {
                        console.log(filteredItems[j]);
                    }
                }
                else if (filterCriteria == 2)
                {
                    var minPrice = prompt("Minimum Price of Rental Item (Enter a number with no more than two decimal values): ");
                    var maxPrice = prompt("Maximum Price of Rental Item (Enter a number with no more than two decimal values): ");
                    for (let i = 0; i < myObject.data.length; i++)
                    {
                        if (parseFloat(myObject.data[i].price) <= parseFloat(maxPrice) && parseFloat(myObject.data[i].price) >= parseFloat(minPrice) && myObject.data[i].availability == "available")
                        {
                            filteredItems.push(data[i].name);
                        }
                    }
                    console.log("\nThe following items match your search criteria: \n")
                    for (let j = 0; j < filteredItems.length; j++)
                    {
                        console.log(filteredItems[j]);
                    }
                } 
                else if (filterCriteria == 'q')
                {
                    break;
                }
                else
                {
                    var filterRespone = ("\nInvalid response. Enter 1 to filter by name, 2 to filter by price range, or q to exit this task: ")
                }
            }
        }
        else
        {
            console.log("\nThere are currently no items listed.");
        }
    }
    else if (task == 3)
    {
        if (fs.existsSync(filePath))
        {
            const filteredItems = [];
            while (0 < 1)
            {
                var itemName = prompt("\nEnter name of item you wish to rent or q to quit task: ").toLowerCase();
                if (itemName == 'q')
                {
                    break;
                }
                for (let i = 0; i < myObject.data.length; i++
                {
                    if (myObject.data[i].name == itemName)
                    {
                        filteredItems.push(data[i].name);
                    }
                }
                for (let j = 0; j < myObject.data.length; j++)
                {
                    if (myObject.data[j].name == itemName)
                    {
                        myObject.data[j].availability = "unavailable";
                    }
                }
                console.log('${filteredItems[0]} is rented. ");
            }
        }
        else
        {
            console.log("\nThere are currently no items listed.");
        }
    }
    else if (task == 4)
    {
        if (fs.existsSync(filePath))
        {
            while (0 < 1)
            {
                var itemName = prompt("\nEnter name of item you wish to return or q to quit task: ").toLowerCase();
                if (itemName == 'q')
                {
                    break;
                }
                for (let i = 0; i < myObject.data.length; i++
                {
                    if (myObject.data[i].name == itemName)
                    {
                        myObject.data[i].availability = "available";
                    }
                }
                console.log("\n${myObject.data[i].name} has been returned. ");
            }
        }
        else
        {
            console.log("\nThere are currently no items listed.");
        }
    }
    else if (task == "q")
    {
        break;
    }
    else
    {
        console.log("\nInvalid response. Enter the number of one of the 4 options or q to quit program.");
    }
}
