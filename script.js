const gridPanel = document.querySelector('.right-panel');
const rangeInput = document.querySelector('.rangeInput')


// EVENTS
rangeInput.addEventListener('change', () => {
    deleteTiles();
    createTiles(rangeInput.value);
});


createTiles();

function createTiles(tileNumber = 16) {
    for (let i = 0; i < tileNumber ** 2; i++) {
        let tile = document.createElement('div');
        let tileSize = 500 / tileNumber;
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        tile.style.transform = `translate(${tileSize})`;
        tile.classList.add('gridtile');
        gridPanel.appendChild(tile);
    }

    // gridPanel.style.gridTemplateColumns = `repeat(${tileNumber}, auto)`;
    // gridPanel.style.gridTemplateRows = `repeat(${tileNumber}, auto)`;

}

function deleteTiles() {
    let tiles = document.querySelectorAll('.gridtile');
    for (let tile of tiles) {
        gridPanel.removeChild(tile);
    }
}