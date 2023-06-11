const h1 = document.querySelector("h1");

const colorsArray = [
  "red",
  "orange",
  "gray",
  "hotpink",
  "yellow",
  "blue",

  "brown",
];
h1.addEventListener("mouseover", function () {
  const randomNumber = Math.floor(Math.random() * colorsArray.length);
  console.log(randomNumber);
  h1.style.color = colorsArray[randomNumber];
});
