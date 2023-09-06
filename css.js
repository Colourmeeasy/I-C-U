let root = document.documentElement;
 let contentwin = document.querySelector('.mover');
  let posnumb = getComputedStyle(contentwin).getPropertyValue('left');
  console.log(posnumb)
let tester = getComputedStyle(document.querySelector('.mover')).getPropertyValue('var(--mouse-x)')
console.log(tester)
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
 
}); 

