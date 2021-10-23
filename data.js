// data.js
// **Todos List*/

// file is holding some temporary test data
//every item has a unique id!!
const todos = [
    {
        id: 1,
        title: "Coding in Javascript",
        description: "Working with functions in JavaScript",
        completed: false,
    },
    {
        id: 2,
        title: "Cooking Supper",
        description: "Preparing rice and chicken",
        completed: false,
    },
    {
        id: 3,
        title: "Taking a walk",
        description: "Easy time at the park",
        completed: false,
    },
    {
        id: 4,
        title: "Watching Netflix",
        description: "Enjoying the new premiered series",
        completed: false,
    },
];
// this makes sure that this file is accesible in other parts of the application
// this makes the internal mosule callable 
module.exports = todos;