const container = document.querySelector('#container');
container.classList.add('grid-container')
console.log(container)
let itemNum = 16
const cellWidth=40/itemNum +"rem"
const cellHight=40/itemNum +"rem"
console.log(cellHight)
console.log(cellWidth)
container.style.gridTemplateColumns = `repeat(${itemNum},1fr)`;
container.style.gridTemplateRows = `repeat(${itemNum},1fr)`;
for (let i = 0; i < (itemNum * itemNum); i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.style.width=cellWidth
    gridItem.style.height=cellHight
    container.appendChild(gridItem)
    gridItem.addEventListener('mouseover', () => {
        gridItem.classList.remove('grid-item')
        gridItem.classList.add('color');
        console.log(gridItem)
    });
}

