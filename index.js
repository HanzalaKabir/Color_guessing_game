const colorValue = document.querySelector(".color_value");
const colorContainer = document.querySelector(".color_container");
const answer = document.querySelector(".answer");
const colorButton = document.getElementsByClassName("colorButton");
const resetButton = document.querySelector(".reset_btn");
let rgbVal;
let x, y, z;
let colorArray = [];
function colorGenerator() {
  x = Math.random() * 255;
  x = Math.round(x);
  y = Math.random() * 255;
  y = Math.round(y);
  z = Math.random() * 255;
  z = Math.round(z);
}
function color_value_generator() {
  answer.innerHTML = "";
  let rgbNumber;
  rgbNumber = Math.random() * (colorButton.length - 1);
  rgbNumber = Math.round(rgbNumber);
  for (let i = 0; i < colorButton.length; i++) {
    colorGenerator();
    if (i === rgbNumber) {
      colorValue.innerHTML = `RGB(${x},${y},${z})`;
      rgbVal = {
        x: x,
        y: y,
        z: z,
      };
    }
    colorArray[i] = { x: x, y: y, z: z };
    colorButton[i].setAttribute("data-key", `${i}`);
    colorButton[i].style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  }
  console.log(colorArray);
}
color_value_generator();
colorContainer.addEventListener("click", (e) => {
  let event = e.target;
  let key = event.dataset.key;
  if (
    rgbVal.x === colorArray[key].x &&
    rgbVal.y === colorArray[key].y &&
    rgbVal.z === colorArray[key].z
  ) {
    answer.innerHTML = "Correct Answer";
  } else {
    colorGenerator();
    answer.innerHTML = "Incorrect Answer, try again";
    answer.style.color = `RGB(${x},${y},${z})`;
  }
});
resetButton.addEventListener("click", () => {
  color_value_generator();
});
