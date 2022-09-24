//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
        }
    ]
}

console.log(person3.pizza)
console.log(person3.burgers)
console.log(person3.ice_cream)
console.log(person3.shakes)
console.log(person3.shakes.dunkin)
console.log(person3.shakes.culvers)
console.log(person3.shakes.mcdonalds)
console.log(person3.shakes.cupids_candies)
console.log(Object.values(person3))
console.log(Object.keys(person3))



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


//creat own object prototypes -- using ES5 method Syntax
function Person(name,age){
    this.name = name;
    this.age = age;



    this.printInfo = function(){
        console.log(`${this.name} is ${this.age} years old`);

        return 'Returned Value'
    }
}

//instance of a prototype

let person1 = new Person("Bob", 39)
let person4 = new Person("Cathy", 24)

//call the prototype

console.log(person1.printInfo())
console.log(person4.printInfo())


//Question 3 - promised function


const isBigNumber = () => {
    return new Promise((resolve, reject) => {
        if (length.num > 10) {
            resolve(true("Big Word"))
        } else {
            reject(false("Small Number"))


        }
    })
}
console.log(manhattananan.isBigNumber())