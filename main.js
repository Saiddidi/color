let box = document.querySelector("div");
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(() => {
  if (box.style.borderRadius === "") {
    console.log("h");
    box.style.borderRadius = "50%";
  } else {
    box.style.borderRadius = "";
    console.log("n");
  }
  box.style.backgroundColor = getRandomColor();
  document.body.style.backgroundColor = getRandomColor();
}, 2000);
