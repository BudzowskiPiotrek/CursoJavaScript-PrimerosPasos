/* Switch case */

let myFruit = "watermelon"

switch (myFruit) {
    case "orange":
    case "lemon":
        console.log("citric");
        break;
    case "banana":
        console.log("tropical");
        break;
    case "watermelon":
        console.log("big fruit");
        break;

}
/* ternario en un Set */

let fruit = "grape";
let avalaibleFruits = new Set(["lemon", "banana", "watermelon"]);

let isAvailable = (avalaibleFruits.has(fruit)) ? "available" : "not avaible";

console.log(isAvailable);

/* operario relacionales */

let myFavoriteFruit = "orange";
let myAvalaibleFruits = {lemon: "citrico", watermelon: "big fruit", banana: "tropical"};

console.log(myFavoriteFruit in myAvalaibleFruits );

/* String */

