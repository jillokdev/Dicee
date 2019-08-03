var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageDir1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imageDir1);
console.log(imageDir1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageDir2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imageDir2);

if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
     document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
     document.querySelector("h1").innerHTML = "✌🏻It's Draw✌🏻";
}