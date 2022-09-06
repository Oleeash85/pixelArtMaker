const canvas = document.getElementById("pixelCanvas");
const color = document.getElementById("colorSelector");
const size = document.getElementById("sizeSelector");


let height = document.getElementById("gridHeight").value;
let width = document.getElementById("gridWidth").value;
makeGrid(height, width);

sizeSelector.addEventListener("click", (event) => {
    event.preventDefault();

    let height = document.getElementById("gridHeight").value;
    let width = document.getElementById("gridWidth").value;
    canvas.firstElementChild.remove();

    makeGrid(height, width);


});

function makeGrid(height, width) {


    for (let i = 0; i < height; i++) {
        const row = document.createElement("tr");
        canvas.appendChild(row);
        for (let j = 0; j < width; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
            cell.addEventListener("mousedown", (event) => {
                cell.style.backgroundColor = color.value;
            })

        }

    }
}