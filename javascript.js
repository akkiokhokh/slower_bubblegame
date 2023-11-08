let time = 60;
let rn;

function makeBubbles() {
  for (let i = 0; i < 119; i++) {
    let rn = Math.floor(Math.random() * 10);
    document.querySelector(
      "#btmpannel"
    ).innerHTML += `<div class="bubbles">${rn}</div>`;
  }
}

function timer() {
  let finish = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timeval").textContent = time;
    } else {
      clearInterval(finish);
    }
  }, 1000);
}

function hitRN() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}
let score = 0;
function increseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document
  .querySelector("#btmpannel")
  .addEventListener("click", function (details) {
    let checknum = Number(details.target.textContent);
    if (rn === checknum) {
      increseScore();
      hitRN();
      makeBubbles();
    } else if (rn != checknum) {
      alert("Wrong ");
    }
  });
makeBubbles();

hitRN();
timer();
