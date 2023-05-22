const dimensionSlider = document.querySelector('#dimension');
const dimensionLabel = document.querySelector('#dimension-label');
const board = document.querySelector('#board');
const clearButton = document.querySelector('#clear');
const colorInput = document.querySelector('#color');

function resetBoard(dimension, color) {
    board.innerHTML = '';
    let pixelDimension = 100 / dimension;
    for (let i = 1; i <= dimension ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = pixel.style.height = `${pixelDimension}%`;
        board.append(pixel);
    }
    changeColor(color);
}
function changeColor(color){
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = color;
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

colorInput.addEventListener('change', ()=>{
    changeColor(colorInput.value);
})

clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
        pixel.style.backgroundColor = 'white';
    }
})