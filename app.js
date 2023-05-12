//Funciones

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}


let card = document.getElementById("card");
let cardContainer = document.getElementById("card-container")
let body = document.body
console.log(cardContainer)


const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const pintas = ["♦", "♥", "♠", "♣"];


// Estilos

card.style.padding = "30px";
card.style.borderRadius = "20px";
card.style.border = "1px solid black";
card.style.height = "400px";
card.style.width = "300px"; // View Width
card.style.backgroundColor = "white";

cardContainer.style.display = "flex";
cardContainer.style.justifyContent = "center";
cardContainer.style.alignItems = "center";
cardContainer.style.height = "100vh";

// cardContainer.style.backgroundColor = "green";

body.style.backgroundColor = "green";

// Fin de Estilos

let color = "black"
let randomValue = randomElement(cardValues)
let randomPinta = randomElement(pintas)
if (randomPinta === "♦" || randomPinta === "♥") {color = "red" }



// Pinta de arriba
let cardTitleUp = document.createElement("h1");
cardTitleUp.innerHTML = randomPinta;
cardTitleUp.style.color = color

//Number
let cardNumber = document.createElement("h1")
cardNumber.innerHTML = randomValue;
cardNumber.style.display = "flex";
cardNumber.style.justifyContent = "center";
cardNumber.style.alignItems = "center";
cardNumber.style.height = "200px";
cardNumber.style.fontSize = "90px";

// Pinta de abajo
let cardTitleDown = document.createElement("h1");
cardTitleDown.innerHTML = randomPinta;
cardTitleDown.style.transform = "rotate(180deg)";
cardTitleDown.style.color = color



// Icono superior
card.appendChild(cardTitleUp);

// Numero

card.appendChild(cardNumber)

// Icono inferior
card.appendChild(cardTitleDown);
