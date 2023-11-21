"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",

    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   

   // Who is the Academy Member whose ID is 187?

   let MemeberId =
   academyMembers.find((arrayValue) => arrayValue.memID === 187);
    console.log(MemeberId.name);

// Who has been in at least 3 films?
   let threeFilms =
    academyMembers.filter((arrayValue) => arrayValue.films.length >= 3);
    console.log(threeFilms);

// Who has a name that starts with "Bob"?
let bobName = academyMembers.filter((arrayValue) => arrayValue.name.startsWith("Bob"));
console.log(bobName);

// HARDER: Which Academy Members have been in a film that starts with "A"

let aFilm = academyMembers.filter((arrayValue) => arrayValue.films.startsWith("A"));
console.log(aFilm);
