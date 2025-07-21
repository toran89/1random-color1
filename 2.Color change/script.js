const changeColorButton = document.getElementById("changebtn");

changeColorButton.addEventListener("click",function(){
  let colorArr = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "magenta",
    "lime",
    "brown",
    "teal",
    "gold",
    "silver",
    "black",
    "white",
    "gray",
    "indigo",
    "violet",
    "maroon",
  ];

  colorIndex = Math.floor(Math.random() * colorArr.length);
  let randomColor = colorArr[colorIndex]
console.log(randomColor);

  document.body.style.backgroundColor = randomColor;
})