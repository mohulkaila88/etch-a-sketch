const container = document.querySelector('.container');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let c=0;c<(rows * cols);c++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(16,16);

let cells = Array.from(document.querySelectorAll('.grid-item'));

cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "green";
    });
});

let button = document.querySelector('.selections button.clear');
button.addEventListener("click", () => {
    let grid = parseFloat(prompt("How many squares per side to make the new grid?"));
    if (isNaN(grid)) {
        let cells = Array.from(document.querySelectorAll('.grid-item'));
        cells.forEach((cell) => {
            cell.style.backgroundColor = "transparent";
        });
    } else {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        makeRows(grid, grid);
    }

    let cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "green";
        });
    });
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let random = document.querySelector('.selections button.random');
random.addEventListener("click", () => {
    let cells = Array.from(document.querySelectorAll('.grid-item'));
        cells.forEach((cell) => {
            cell.style.backgroundColor = "transparent";
        });
        cells.forEach((cell) => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = getRandomColor();
        });
    }); 
    
});

// change grid color to user picked color when user hover over it
let pick = document.querySelector('input');

pick.addEventListener("change", (e) => {
    let cells = Array.from(document.querySelectorAll('.grid-item'));
    cells.forEach((cell) => {
        cell.style.backgroundColor = "transparent";
    });
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = e.target.value;
        });
    });
}); 