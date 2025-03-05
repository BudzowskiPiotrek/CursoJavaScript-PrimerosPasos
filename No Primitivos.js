/* Array */

let namedColecrion = ["Armadno", "Javi", "Magda", "Toti"];

console.log(namedColecrion);

console.log(namedColecrion[2]);

/* Set */

let enumu = new Set([1, 7, true, "barbara"]);

console.log(enumu)

console.log(enumu.has(7));

enumu.add("Adios")  /*anadir campo nuevo*/

console.log(enumu)

/* Map */

let mapeo = new Map([
    ["1", "Armando"],
    [2, "Alejanro"],
    [3, "Alejanro"]
]);

mapeo.set(1, "OpenWebinar")   /* anadir campo nuevo */
mapeo.set("1", "OpenWebinar") /* sustituye*/

console.log(mapeo)

console.log(mapeo.get(2))

/* objeto */

let objeto = {
    name: "Armando",
    surname: "Torres"
};

console.log(objeto);

console.log(objeto.name);

/* Date */

let currentDate = new Date();

console.log(currentDate);
