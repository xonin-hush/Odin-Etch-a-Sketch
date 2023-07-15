const container = document.querySelector('#container');
const cellSize = 40 / itemNum + "rem"
container.classList.add('grid-container')
let itemNum = 50
container.style.gridTemplateColumns = `repeat(${itemNum},1fr)`;
container.style.gridTemplateRows = `repeat(${itemNum},1fr)`;
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

