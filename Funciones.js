function printGraet() {
    console.log("Hello world")
}

function printGraetDos() {
    return "hello world"
}

function getCopyrigh (name,year=2023) {
let copyright = name + " - " +  year;
return copyright;
}

let result2= getCopyrigh("OpenWebinar", 2023)

let result = printGraetDos();
console.log(result)
console.log(result2)
printGraet();