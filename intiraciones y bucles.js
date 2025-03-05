/* array normal y bucle for */

let enumeracion = [];

for (let i = 0; i < 10; i++) {
    enumeracion[i] = i + 1;

}

console.log(enumeracion)

/* array normal y bucle for of */

let fruit = ["banana", "platano", "maiz"];

for (let elem of fruit) {
    console.log(elem);
}

for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] == "banana") {
        console.log(fruit[i]);
        break;
    }
}

/* set y bucle for */

let fruitz = new Set(["kaka", "vaca", "saca"]);

for (let elem of fruitz) {
    console.log(elem);
}

/* objeto y bucle for in */

let fruits = { a: "orange", b: "lemon", c: "grape" };

for (let elem in fruits) {
    console.log(elem);
}

for (let elem in fruits) {
    console.log(fruits[elem]);
}

/* array normal, set comparativa con bucle for in */

let tipo = ["kaka", "vaca", "traca"];
let myTipo = new Set (["maka", "saca", "kaka"]);

for (let ele of tipo) {
    if (myTipo.has(ele)) {
        console.log(ele);
        break;
    } else {
        continue;
    }
}