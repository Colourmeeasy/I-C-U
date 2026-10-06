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


start();
