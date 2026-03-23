import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["♦", "♥", "♠", "♣"];
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomValue = Math.floor(Math.random() * values.length);

  let finalSuit = suits[randomSuit];
  let finalValue = values[randomValue];

  document.getElementById("top-suit").innerHTML = finalSuit;
  document.getElementById("Value").innerHTML = finalValue;
  document.getElementById("bottom-suit").innerHTML = finalSuit;

  if (finalSuit === "♥" || finalSuit === "♦") {
  card.style.color = "red";
} else {
  card.style.color = "white";
}

  document.getElementById("getANewCardBttn").addEventListener("click", function() {
    location.reload();
  });
}