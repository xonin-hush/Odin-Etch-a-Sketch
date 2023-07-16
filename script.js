const container = document.querySelector('#container');
container.classList.add('grid-container')
const sizeButton = document.querySelector('#change-size')

let itemNum=getResolution()
container.style.gridTemplateColumns = `repeat(${itemNum},1fr)`;
container.style.gridTemplateRows = `repeat(${itemNum},1fr)`;
const cellSize = 40 / itemNum + "rem"
for (let i = 0; i < (itemNum * itemNum); i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.style.width = cellSize
    gridItem.style.height = cellSize
    container.appendChild(gridItem)
    gridItem.addEventListener('mouseover', () => {
        gridItem.classList.remove('grid-item')
        gridItem.classList.add('color');
    });
}
function getResolution() {
    size = prompt("Please enter number of squares on each side", 16)
    return size;
}
function reset(){
    history.go()
}
