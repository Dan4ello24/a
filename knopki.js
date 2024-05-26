const box = document.querySelector('.box');
 
let xPos = 0;
let yPos = 0;
 
function animateBox() {
  xPos += 1;
  yPos += 1;
 
  box.style.transform = `translate(${xPos}px, ${yPos}px)`;
 
  requestAnimationFrame(animateBox);
}
 
animateBox();
