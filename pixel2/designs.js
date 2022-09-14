const canvas = document.getElementById("pixelCanvas");
const color = document.getElementById("colorSelector");
const size = document.getElementById("sizeSelector");

// allows the Grid/Canvas to have height and width element
const height = document.getElementById("gridHeight").value;
const width = document.getElementById("gridWidth").value;
makeGrid(height, width);

//Allows you to select Canvas size and clears tiles when submit is pressed. 
sizeSelector.addEventListener("click", function(event) {
    event.preventDefault();

    // removes previous canvas if canvas is already created
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    const height = document.getElementById("gridHeight").value;
    const width = document.getElementById("gridWidth").value;
    makeGrid(height, width);
});

// builds canvas and allows you to select a color for coloring tile
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
