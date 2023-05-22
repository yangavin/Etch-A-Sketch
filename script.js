const dimensionSlider = document.querySelector('#dimension');
const dimensionLabel = document.querySelector('#dimension-label');
const board = document.querySelector('#board');
const clearButton = document.querySelector('#clear');

function fillBoard(dimension) {
    board.innerHTML = '';
    let pixelDimension = 100 / dimension;
    for (let i = 1; i <= dimension ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        })
        pixel.style.width = pixel.style.height = `${pixelDimension}%`;
        board.append(pixel);
    }
}

//Fill the board initially with 55x55
fillBoard(55);


dimensionSlider.addEventListener('input', () => {
    let dimension = dimensionSlider.value;
    dimensionLabel.textContent = `${dimension}x${dimension}`
});

dimensionSlider.addEventListener('mouseup', () => {
    fillBoard(dimensionSlider.value);
});

clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels) {
        pixel.style.backgroundColor = 'white';
    }
})