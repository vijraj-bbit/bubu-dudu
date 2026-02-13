
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");
const hoverSound = document.getElementById("hoverSound");
const yesSound = document.getElementById("yesSound");
const typeText = document.getElementById("typeText");

const message = "Aditi, will you be my Valentine? 💕";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    typeText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

function moveNoButton() {
  hoverSound.currentTime = 0;
  hoverSound.play();

  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 10;
  const maxY = cardRect.height - btnRect.height - 10;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = currentSize + 2 + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  yesSound.play();

  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 }
  });

  if (navigator.vibrate) navigator.vibrate(100);

  document.body.style.background =
    "linear-gradient(135deg, #ff4d6d, #ff758f)";

  setTimeout(() => {
    alert("YAY 💕 I can’t wait for Valentine’s Day with you!");
  }, 500);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);
