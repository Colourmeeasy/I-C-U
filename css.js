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
"images/Row3_000.jpg",
"images/Row3_001.jpg",
"images/Row3_002.jpg",
"images/Row3_003.jpg",
"images/Row3_004.jpg",
"images/Row3_005.jpg",
"images/Row3_006.jpg",
"images/Row3_007.jpg",
"images/Row3_008.jpg",
"images/Row3_009.jpg",
"images/Row3_010.jpg",
"images/Row3_011.jpg",
"images/Row3_012.jpg",
"images/Row3_013.jpg",
"images/Row3_014.jpg",
"images/Row3_015.jpg",
"images/Row3_016.jpg",
"images/Row3_017.jpg",
"images/Row3_018.jpg",
"images/Row3_019.jpg",
"images/Row3_020.jpg",
"images/Row3_021.jpg",
"images/Row3_022.jpg",
"images/Row3_023.jpg",
"images/Row3_024.jpg",

 
)
