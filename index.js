const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let restaurant = {
  name: "F&J Pine",
  cuisime: "Chicken Parm",
  rating: 4.5
}

// Console log the restaurant's name using the object
console.log(restaurant.name)


// Add a new key called location and add the restaurant's location
restaurant.location = "1913 Bronxdale Ave, Bronx, NY 10462"


// Change the rating of the restaurant to increase it by one
restaurant.rating++


// Add a new key called test and set the value to null
restaurant.test = null


// Delete the test key
delete restaurant.test

// Console log the object to see if the test key is gone
console.log(restaurant)



// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn
for(let key in restaurant){
  console.log(`${key} is ${restaurant[key]}`)
}

