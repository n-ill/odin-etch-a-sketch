const gridContainer = document.querySelector('.grid-container');

// Checks for existing grid; if it exists then deletes it. Then creates new grid and applies the
// hover event listener to all squares in grid
function createGrid(gridSize) {
    if (gridContainer.hasChildNodes()) {
        document.querySelectorAll('.item').forEach(item => item.remove());
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${800/gridSize}px)`;

    for (let i = 0; i < gridSize**2; i++) {
        const currItem = document.createElement('div');
        currItem.className = 'item';
        currItem.style.height = `${800/gridSize}px`;
        currItem.style.width = `${800/gridSize}px`;
        gridContainer.appendChild(currItem);
    }

    const gridItems = document.querySelectorAll('.item');
    gridItems.forEach(item => {item.addEventListener('mouseover', () => {item.style.backgroundColor = '#e5e5e5'})});
}

createGrid(16);

const buttonClear = document.querySelector('.button-clear');
buttonClear.addEventListener('click', () => {createGrid(prompt("Enter grid size"))});
