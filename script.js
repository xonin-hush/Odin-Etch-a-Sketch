const container = document.querySelector('#container');
container.classList.add('grid-container')
console.log(container)
for (i = 0; i <(16*16); i++) {
    
    const gridItem=document.createElement('div')
    gridItem.textContent='hi'
    gridItem.classList.add('grid-item')
    console.log(gridItem)
    container.appendChild(gridItem)
}


