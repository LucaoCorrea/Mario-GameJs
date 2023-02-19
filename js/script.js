const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const f5 = document.querySelector(".f5");




const jump = () => {
  mario.classList.add("jump");
  
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    f5.style.display  = "flex";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

function reiniciar(){
    window.location.reload(true);
}


document.addEventListener("keydown", jump);
