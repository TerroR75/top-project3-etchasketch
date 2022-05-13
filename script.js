// general selectors
const gridPanel = document.querySelector('.right-panel');
const changeThemeBtn = document.querySelector('.changeTheme');
const mainHeader = document.querySelector('.header');
const mainFooter = document.querySelector('.footer');
const gameScreen = document.querySelector('.gamescreen');

// range input selectors
const rangeInput = document.querySelector('.rangeInput');
const rangeInputText = document.querySelector('.rangeInputContainer>p');

// color selector
const colorPicker = document.querySelector('.colorPicker');

// button selectors
const clearBtn = document.querySelector('.clearBtn');
const eraserBtn = document.querySelector('.eraserBtn');

// INITAL
createTiles();

let isMouseDown = false;
document.body.onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;

// THEME
let darkTheme = false;
let tileColor = 'black';


// EVENTS
rangeInput.addEventListener('change', () => {
    deleteTiles();
    createTiles(rangeInput.value);
    updateText(rangeInputText, `${rangeInput.value} x ${rangeInput.value}`)
});

clearBtn.addEventListener('click', clearTiles);
eraserBtn.addEventListener('click', eraserTool);
colorPicker.addEventListener('change', changeColor);

changeThemeBtn.addEventListener('click', changeTheme);




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
        tile.addEventListener('mouseover', paintTile);
        tile.addEventListener('mousedown', paintTile);
        gridPanel.appendChild(tile);
    }


}

function deleteTiles() {
    gridPanel.innerHTML = '';
}

function updateText(element, text) {
    element.textContent = text;
}

function paintTile(e) {
    if (e.type === 'mouseover' && !isMouseDown) return;
    this.style.backgroundColor = tileColor;
}

function changeColor() {
    tileColor = colorPicker.value;
}

function eraserTool() {
    tileColor = 'inherit';
}

function clearTiles() {
    let tiles = document.querySelectorAll('.gridtile');
    for (let tile of tiles) {
        tile.style.backgroundColor = 'inherit';
    }
}

function changeTheme() {
    if (!darkTheme) {
        changeExisitngTilesColor('white');
        tileColor = 'white';
        mainHeader.style.backgroundColor = 'var(--DarkTheme-secondary-color)';
        mainHeader.style.color = 'var(--DarkTheme-primary-text-color)';

        gameScreen.style.backgroundColor = 'var(--DarkTheme-primary-color)';
        gameScreen.style.color = 'var(--DarkTheme-primary-text-color)';

        mainFooter.style.backgroundColor = 'var(--DarkTheme-secondary-color)';
        mainFooter.style.color = 'var(--DarkTheme-primary-text-color)';



        darkTheme = true;
        changeThemeIcon(darkTheme);
    } else {
        changeExisitngTilesColor('black');


        tileColor = 'black';
        mainHeader.style.backgroundColor = 'var(--LightTheme-secondary-color)';
        mainHeader.style.color = 'var(--LightTheme-primary-text-color)';

        gameScreen.style.backgroundColor = 'var(--LightTheme-primary-color)';
        gameScreen.style.color = 'var(--LightTheme-primary-text-color)';

        mainFooter.style.backgroundColor = 'var(--LightTheme-secondary-color)';
        mainFooter.style.color = 'var(--LightTheme-primary-text-color)';





        darkTheme = false;
        changeThemeIcon(darkTheme);
    }
}

function changeThemeIcon(isDarkTheme) {
    const themeIcon = document.querySelector('.changeTheme');
    if (isDarkTheme) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    else {
        themeIcon.classList.add('fa-moon');
        themeIcon.classList.remove('fa-sun');
    }

}

function changeExisitngTilesColor(color) {
    let tiles = document.querySelectorAll('.gridtile');
    for (let tile of tiles) {
        if (tile.style.backgroundColor !== '') {
            tile.style.backgroundColor = color;
        }
    }
}