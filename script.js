const video = document.querySelector("#myvideo");
const cardBD = document.querySelector(".card");


video.playbackRate = 2.0;
video.addEventListener('play', function () {
  video.playbackRate = 2.0;
});

let bubbleInterval;

const card = document.querySelector('.card');

card.addEventListener('mouseenter', startBubbles);
card.addEventListener('mouseleave', stopBubbles);

function startBubbles() {
  bubbleInterval = setInterval(() => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    const size = Math.random() * 20 + 10;
    bubble.style.width = bubble.style.height = size + "px";
    bubble.style.background = getRandomColor();

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 4000);
  }, 200);
}

function stopBubbles() {
  clearInterval(bubbleInterval);
}

function getRandomColor() {
  const pastel = `hsl(${Math.floor(Math.random() * 360)}, 100%, 85%)`;
  return pastel;
}
