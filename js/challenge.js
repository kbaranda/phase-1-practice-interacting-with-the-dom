const counter = document.querySelector("#counter");
const like = document.querySelector(".likes");
const comments = document.querySelector(".comments");

function counters() {
  count = setInterval(() => {
    counter.innerText++;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", counters);

const minus = document.querySelector("#minus");

function decrement() {
  if(counter.innerText > 0) {
    counter.innerText--;
  }
}

minus.addEventListener("click", decrement);

const plus = document.querySelector("#plus");

function increment() {
  counter.innerText++;
}

plus.addEventListener("click", increment);

const heart = document.querySelector("#heart");

function likeAndComment() {
  const likeUl = document.createElement("ul");
  const likeLi = document.createElement("li");
  const currentCount = counter.innerText;
  if(currentCount === counter.innerText) {
    like.append(likeUl);
    likeUl.append(likeLi);
    likeLi.innerHTML = `${currentCount} has been liked`;
  }
}

heart.addEventListener("click", likeAndComment);

const pause = document.querySelector("#pause");

function pauseTime(){
  if (pause.innerText != "resume") {
    clearInterval(count);
    pause.innerText = "resume";
  } else {
    counters();
    pause.innerText = "pause";
  }
}

pause.addEventListener("click", pauseTime);

const restart = document.querySelector("#restart");

function fromTheTop() {
  counter.innerText = 0;
}

restart.addEventListener("click", fromTheTop);

const submit = document.querySelector("#comment-form");

function submits(event) {
  const commentInput = document.querySelector("#comment-input").value;
  const p = document.createElement("p");
  event.preventDefault();
  comments.append(p);
  p.innerText = commentInput;
}

submit.addEventListener("click", submits);