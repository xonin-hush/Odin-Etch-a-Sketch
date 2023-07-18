const container = document.querySelector('#container');
container.classList.add('grid-container')
const sizeButton = document.querySelector('#change-size')
let itemNum = getResolution()
let CURRENT_COLOR_MODE = 'default';
createGrid(itemNum)

function createGrid(itemNum) {
    container.style.gridTemplateColumns = `repeat(${itemNum},1fr)`;
    container.style.gridTemplateRows = `repeat(${itemNum},1fr)`;
    const cellSize = 40 / itemNum + "rem"
    for (let i = 0; i < (itemNum * itemNum); i++) {
        const gridItem = document.createElement('div')
        gridItem.setAttribute("id", "grid-item")
        gridItem.classList.add('color-dark-blue')
        gridItem.style.width = cellSize
        gridItem.style.height = cellSize
        container.appendChild(gridItem)
        colorMode(gridItem)

    }
}
function doStuff() {
    console.log("hello!");
}
setInterval(doStuff, 5000);

function getResolution() {
    size = prompt("Please enter number of squares on each side", 16)
    if ((size <= 100) && (size > 0))
        return size;
    else {
        alert("enter a number between 1 and 100")
        history.go()
    }
}

function resetColor() {
    gridItems = document.querySelectorAll('#grid-item')
    gridItems.forEach((gridItem) => {gridItem.style.removeProperty('background-color')
        gridItem.classList.add('color-dark-blue')})
}

function colorMode(gridItem) {

    if (CURRENT_COLOR_MODE == 'default') {
        gridItem.addEventListener('mouseover', () => {
            if (CURRENT_COLOR_MODE == 'random') {
                gridItem.classList.remove('color-dark-blue')
                gridItem.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
                gridItem.style.border = `thin solid rgb(65, 21, 21)`
                gridItem.style.boxSizing = `border-box`
            }
            else {
                gridItem.style.removeProperty('background-color');
                gridItem.classList.remove('color-dark-blue')
                gridItem.classList.add('color-sky-blue');
            }
        });
    }
}


function changeColor(color) {
    click = color;
    CURRENT_COLOR_MODE = click

}

