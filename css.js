const content = document.querySelector(".content");

const ROWS = 4;
const COLUMNS = 25;
const FIRST_ROW = 3;

const images = [];

/*
----------------------------------------
PRELOAD ALL 100 IMAGES
----------------------------------------
*/

function preloadImages() {

    const promises = [];

    for (let row = 0; row < ROWS; row++) {

        images[row] = [];

        for (let column = 0; column < COLUMNS; column++) {

            const rowNumber = FIRST_ROW + row;

            const frameNumber = String(column).padStart(3, "0");

            const src =
                `images/Row${rowNumber}_${frameNumber}.jpg`;

            const img = new Image();

            img.src = src;

            images[row][column] = img;


            /*
            Decode the image so it is ready to display
            when the mouse reaches that position.
            */

            const decodePromise = img.decode()
                .catch(() => {
                    // Ignore decode errors so one image
                    // doesn't stop the entire interaction.
                });

            promises.push(decodePromise);
        }
    }

    return Promise.all(promises);
}


/*
----------------------------------------
CURRENT FRAME
----------------------------------------
*/

let currentRow = -1;
let currentColumn = -1;


/*
----------------------------------------
UPDATE IMAGE
----------------------------------------
*/

function updateImage(x, y) {

    /*
    Convert horizontal mouse position
    into one of the 25 frames.
    */

    const column = Math.max(
        0,
        Math.min(
            COLUMNS - 1,
            Math.floor(
                (x / window.innerWidth) * COLUMNS
            )
        )
    );


    /*
    Convert vertical mouse position
    into one of the 4 rows.
    */

    const row = Math.max(
        0,
        Math.min(
            ROWS - 1,
            Math.floor(
                (y / window.innerHeight) * ROWS
            )
        )
    );


    /*
    Don't update the background if
    we're still on the same frame.
    */

    if (
        row === currentRow &&
        column === currentColumn
    ) {
        return;
    }


    currentRow = row;
    currentColumn = column;


    /*
    Grab the already-preloaded image.
    */

    const img = images[row][column];


    if (!img) return;


    /*
    Display it.
    */

    content.style.backgroundImage =
        `url("${img.src}")`;
}


/*
----------------------------------------
START
----------------------------------------
*/

async function start() {

    /*
    Load + decode all frames.
    */

    await preloadImages();


    /*
    Start in the centre of the screen.
    */

    updateImage(
        window.innerWidth / 2,
        window.innerHeight / 2
    );


    /*
    Track mouse movement.
    */

    window.addEventListener(
        "pointermove",
        (event) => {

            updateImage(
                event.clientX,
                event.clientY
            );

        }
    );
}


start();let root = document.documentElement;
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
"images/Row4_000.jpg",
"images/Row4_001.jpg",
"images/Row4_002.jpg",
"images/Row4_003.jpg",
"images/Row4_004.jpg",
"images/Row4_005.jpg",
"images/Row4_006.jpg",
"images/Row4_007.jpg",
"images/Row4_008.jpg",
"images/Row4_009.jpg",
"images/Row4_010.jpg",
"images/Row4_011.jpg",
"images/Row4_012.jpg",
"images/Row4_013.jpg",
"images/Row4_014.jpg",
"images/Row4_015.jpg",
"images/Row4_016.jpg",
"images/Row4_017.jpg",
"images/Row4_018.jpg",
"images/Row4_019.jpg",
"images/Row4_020.jpg",
"images/Row4_021.jpg",
"images/Row4_022.jpg",
"images/Row4_023.jpg",
"images/Row4_024.jpg",
"images/Row5_000.jpg",
"images/Row5_001.jpg",
"images/Row5_002.jpg",
"images/Row5_003.jpg",
"images/Row5_004.jpg",
"images/Row5_005.jpg",
"images/Row5_006.jpg",
"images/Row5_007.jpg",
"images/Row5_008.jpg",
"images/Row5_009.jpg",
"images/Row5_010.jpg",
"images/Row5_011.jpg",
"images/Row5_012.jpg",
"images/Row5_013.jpg",
"images/Row5_014.jpg",
"images/Row5_015.jpg",
"images/Row5_016.jpg",
"images/Row5_017.jpg",
"images/Row5_018.jpg",
"images/Row5_019.jpg",
"images/Row5_020.jpg",
"images/Row5_021.jpg",
"images/Row5_022.jpg",
"images/Row5_023.jpg",
"images/Row5_024.jpg",
"images/Row6_000.jpg",
"images/Row6_001.jpg",
"images/Row6_002.jpg",
"images/Row6_003.jpg",
"images/Row6_004.jpg",
"images/Row6_005.jpg",
"images/Row6_006.jpg",
"images/Row6_007.jpg",
"images/Row6_008.jpg",
"images/Row6_009.jpg",
"images/Row6_010.jpg",
"images/Row6_011.jpg",
"images/Row6_012.jpg",
"images/Row6_013.jpg",
"images/Row6_014.jpg",
"images/Row6_015.jpg",
"images/Row6_016.jpg",
"images/Row6_017.jpg",
"images/Row6_018.jpg",
"images/Row6_019.jpg",
"images/Row6_020.jpg",
"images/Row6_021.jpg",
"images/Row6_022.jpg",
"images/Row6_023.jpg",
"images/Row6_024.jpg",

 
)
