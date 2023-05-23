const dimensionSlider = document.querySelector('#dimension');
const dimensionLabel = document.querySelector('#dimension-label');
const board = document.querySelector('#board');
const clearButton = document.querySelector('#clear');
const colorInput = document.querySelector('#color');
const penButton = document.querySelector('#pen');
const eraserButton = document.querySelector('#eraser');
const penButtonLabel = document.querySelector('#pen-label');
const eraserButtonLabel = document.querySelector('#eraser-label');

function resetBoard(dimension, color) {
    board.innerHTML = '';
    let pixelDimension = 100 / dimension;
    for (let i = 1; i <= dimension ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
        pixel.style.width = pixel.style.height = `${pixelDimension}%`;
        board.append(pixel);
    }
    setColor(color);
}

let mouseDown = false;

board.addEventListener('mousedown', () => mouseDown = true);
board.addEventListener('mouseup', () => mouseDown = false);

function setColor(color) {
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = color;
        })
        pixel.addEventListener('mouseover', () => {
            if (mouseDown) {
                pixel.style.backgroundColor = color;
            }
        })
    }
}

//Fill the board initially with 55x55 and color black
resetBoard(55, 'black');


dimensionSlider.addEventListener('input', () => {
    let dimension = dimensionSlider.value;
    dimensionLabel.textContent = `${dimension}x${dimension}`
});

dimensionSlider.addEventListener('mouseup', () => {
    resetBoard(dimensionSlider.value, colorInput.value);
});

colorInput.addEventListener('change', () => {
    if(!eraserButton.checked){
        setColor(colorInput.value);
    }
})

clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
        pixel.style.backgroundColor = 'white';
    }
})

penButton.addEventListener('change', () => {
    if (penButton.checked) {
        setColor(colorInput.value);
        penButtonLabel.classList.toggle('on-select');
        eraserButtonLabel.classList.toggle('on-select');
    }
});
eraserButton.addEventListener('change', () => {
    if (eraserButton.checked) {
        setColor('white');
        penButtonLabel.classList.toggle('on-select');
        eraserButtonLabel.classList.toggle('on-select');
    }
})
