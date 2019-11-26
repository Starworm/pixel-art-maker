// Canvas size
let sizeX = 80;
let sizeY = 50;
let maxNumber = sizeX * sizeY;

// Amount of colors
let colorsCount = 16;

let pickedColor;

let cont = document.createElement('div');

let squares = [];   // array of squares for painting
let colors = [];    // array of selected colors
let colorNames = ['red', 'blue', 'aqua','blueviolet',
                  'brown', 'cadetblue', 'darksalmon','chocolate',
                  'crimson', 'darkgoldenrod', 'darkgreen','darkorange',
                  'goldenrod', 'indigo', 'olive','orangered',];

// canvas squares creating
for (let i = 0; i < maxNumber; i++) {
    let sq = document.createElement('div');
    sq.classList.add('sq');
    squares.push(sq);
}
// Creating canvas
squares.forEach((e, index) => {
    e.i = (index % sizeX);        //   : i = (max/value)-1     6:   9/6 = 1-1 = 0
    e.j = ~~(index / sizeX);      //     j = (max%value)            9%6 = 3
    e.style.left = e.i * 10 + "px";
    e.style.top = e.j * 10 + "px";

    e.addEventListener("click", function () {
        e.style.backgroundColor = pickedColor;
    });


    cont.appendChild(e);
});

// Creating palette
let palette = document.createElement('div');
palette.classList.add('palette');

for (let i = 0; i < colorsCount; i++) {
    let col = document.createElement('div');
    col.classList.add('col');
    colors.push(col);
}

colors.forEach((e, index) => {
    e.i = index % (colorsCount/2);
    e.j = ~~(index / (colorsCount/2));
    e.style.left = 10 + e.i * 40 + "px";
    e.style.top = 10 + e.j * 40 + "px";
    e.style.backgroundColor = colorNames[index];

    e.addEventListener('click', function () {
        pickedColor = e.style.backgroundColor;
        console.log(pickedColor);
    })

    palette.appendChild(e);
});

document.body.append(palette);
document.body.append(cont);
