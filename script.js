const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonArea = document.getElementById("buttonArea");
const hoverSound = document.getElementById("hoverSound");
const yesSound = document.getElementById("yesSound");

function moveNoButton() {
  hoverSound.currentTime = 0;
  hoverSound.play();

  const areaWidth = buttonArea.clientWidth;
  const areaHeight = buttonArea.clientHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = areaWidth - btnWidth;
  const maxY = areaHeight - btnHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";

  // Grow Yes button slightly
  let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 1) + "px";
}

noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseenter", moveNoButton);

yesBtn.addEventListener("click", () => {
  yesSound.play();

  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 }
  });

  if (navigator.vibrate) navigator.vibrate(120);

  setTimeout(() => {
    alert("YAY 💕 I can’t wait for Valentine’s Day with you!");
  }, 400);
});
