const gridPanel = document.querySelector('.right-panel');

// range input
const rangeInput = document.querySelector('.rangeInput');
const rangeInputText = document.querySelector('.rangeInputContainer>p');

// clear input
const clearBtn = document.querySelector('.clearBtn');

// INITAL
createTiles();
let isMouseDown = false;
document.body.onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;


// EVENTS
rangeInput.addEventListener('change', () => {
    deleteTiles();
    createTiles(rangeInput.value);
    updateText(rangeInputText, `${rangeInput.value} x ${rangeInput.value}`)
});

clearBtn.addEventListener('click', clearTiles);



function createTiles(tileNumber = 2) {
    gridPanel.style.gridTemplateColumns = `repeat(${tileNumber}, auto)`;
    gridPanel.style.gridTemplateRows = `repeat(${tileNumber}, auto)`;
    for (let i = 0; i < tileNumber ** 2; i++) {
        let tile = document.createElement('div');
        let tileSize = 500 / tileNumber;
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        tile.style.transform = `translate(${tileSize})`;
        tile.classList.add('gridtile');
        tile.addEventListener('mouseover', changeTileColor);
        tile.addEventListener('mousedown', changeTileColor);
        gridPanel.appendChild(tile);
    }


}

function deleteTiles() {
    gridPanel.innerHTML = '';
}

function updateText(element, text) {
    element.textContent = text;
}

function changeTileColor(e) {
    if (e.type === 'mouseover' && !isMouseDown) return;
    this.style.backgroundColor = 'black';
}

function clearTiles() {
    let tiles = document.querySelectorAll('.gridtile');
    for (let tile of tiles) {
        tile.style.backgroundColor = 'inherit';
    }
}