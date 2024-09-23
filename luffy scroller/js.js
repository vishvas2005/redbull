window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}


const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
const loader = document.getElementById("loader");
const body = document.querySelector(".body");
const video = document.querySelector("#loader video")
document.querySelector("#loader video").playbackRate = 2;
const h1 = document.querySelector(".body h1");


function startloader (){
  const counter = document.querySelector(".counter");
  let current = 0;

  function uptodate (){
    if(current===100){
      return;
    }
   
    current += Math.floor(Math.random()*10)+1;
    if(current>100){
      current = 100;
    }

    counter.textContent = current;

    let delay = Math.floor(Math.random()*1200)+300;
    setTimeout(uptodate , delay);
  }
  uptodate();
}

startloader();



const time = () =>{
  setTimeout(() => {
    const loaderr =() =>{
      loader.style.display = "none";
      body.style.height = "1700vh";
  }
  loaderr();
  }, 19000);
}

const frameCount = 925;
const currentFrame = index => (
 `./vishvas/frame_${index.toString().padStart(4, "0")}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
}

const img = new Image()
img.src = currentFrame(1);
canvas.width=img.width;
canvas.height=img.height;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages();

time();
