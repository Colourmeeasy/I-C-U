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


var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "http://domain.tld/gallery/image-001.jpg",
    "http://domain.tld/gallery/image-002.jpg",
    "http://domain.tld/gallery/image-003.jpg"
)
