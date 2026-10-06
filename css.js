let root = document.documentElement;

/*
----------------------------------------
INITIAL MOUSE POSITION
----------------------------------------
Give the CSS variables valid values immediately.
*/

root.style.setProperty("--mouse-x", window.innerWidth / 2 + "px");
root.style.setProperty("--mouse-y", window.innerHeight / 2 + "px");


/*
----------------------------------------
MOUSE TRACKING
----------------------------------------
*/

root.addEventListener("mousemove", function (e) {

    root.style.setProperty("--mouse-x", e.clientX + "px");
    root.style.setProperty("--mouse-y", e.clientY + "px");

});


/*
----------------------------------------
PRELOAD ALL IMAGES
----------------------------------------
Keep references to every image so the browser
doesn't discard them.
*/

const images = [];

for (let row = 3; row <= 6; row++) {

    for (let frame = 0; frame <= 24; frame++) {

        const number = String(frame).padStart(3, "0");

        const img = new Image();

        img.src = `images/Row${row}_${number}.jpg`;

        images.push(img);
    }
}
