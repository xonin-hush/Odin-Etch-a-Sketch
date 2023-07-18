const container = document.querySelector('#container');
container.classList.add('grid-container')
const sizeButton = document.querySelector('#change-size')
let itemNum = getResolution()
let CURRENT_COLOR_MODE = 'white';
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

        // gridItem.addEventListener('mouseover', () => {
        //     gridItem.classList.remove('color-dark-blue')
        //     gridItem.classList.add('color-sky-blue');
        //     /*if button random is pressed 
        //     add class (random) to the grid items that are hovered over */
        // });
    }
}


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
    gridItems.forEach((gridItem) => gridItem.classList.add('color-dark-blue'))
}

function colorMode(gridItem) {

    if (CURRENT_COLOR_MODE == 'white') {
        gridItem.addEventListener('mouseover', () => {
            if (CURRENT_COLOR_MODE == 'random') {
                gridItem.classList.remove('color-dark-blue')
                gridItem.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
                //gridItem.style.border = solid 1px rgb(65, 21, 21)
            }
            else {
                console.log("gridItem `white` eventlistener called!")
                console.log({ CURRENT_COLOR_MODE });
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

