const colorCode = document.querySelector("#color-code");
const optionContainer = document.querySelector(".option-container");
const result = document.querySelector("#result");
const colorContainer = document.querySelectorAll(".color-container  ");
const colorMatch = document.querySelector("#color-match");
const secondbox = document.querySelector("#secondbox");
const thirdbox = document.querySelector("#thirdbox");
const fourthbox = document.querySelector("#fourthbox");
let red, green, blue;
let color = [];
const RGBColorGenrator = () => {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);

  let RGB = `rgb(${red},${green},${blue})`;

  colorCode.innerHTML = RGB;
  colorMatch.style.backgroundColor = RGB;
  colorMatch.innerHTML = RGB;
  secondbox.style.backgroundColor = `rgb(${red},${blue},${green})`;
  secondbox.innerHTML = `rgb(${red},${blue},${green})`;
  thirdbox.style.backgroundColor = `rgb(${green},${red},${blue})`;
  thirdbox.innerHTML = `rgb(${green},${red},${blue})`;
  fourthbox.style.backgroundColor = `rgb(${blue},${green},${red})`;
  fourthbox.innerHTML = `rgb(${blue},${green},${red})`;
};

// unMatchOrMatch
const unMatchOrMatch = (item) => {
  color.push(item);
  console.log(color);
  if (color.length == 1) {
    if (item === colorMatch) {
      matchColor();
    } else {
      unmatchColor();
    }
  }
};
//matched
const matchColor = () => {
  console.log("i am matched");
  colorMatch.classList.add("matched");
  result.classList.add("active");
  result.innerHTML = ` you won
   <br>click anywhere to play again`;
};

//reload page on click
result.addEventListener("click", () => {
  window.location.reload();
});

//unmatched
const unmatchColor = () => {
  console.log("i am not  matched");
  colorMatch.classList.add("matched");
  result.classList.add("active");
  result.innerHTML = ` you loose
   <br>click anywhere to play again`;
};

//add class
const active = (item) => {
  item.classList.add("active");
};
//card click
colorContainer.forEach((colorBox) => {
  colorBox.addEventListener("click", () => {
    active(colorBox);
    unMatchOrMatch(colorBox);
  });
});
//suffle color box
(function suffle() {
  colorContainer.forEach((item) => {
    let value = Math.floor(Math.random() * 4);
    item.style.order = value;
    RGBColorGenrator();
  });
})();
