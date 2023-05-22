const dimensionSlider = document.querySelector('#dimension');
const dimensionLabel = document.querySelector('#dimension-label');
const board = document.querySelector('#board');
const clearButton = document.querySelector('#clear');

dimensionSlider.addEventListener('input', ()=>{
    let dimension = dimensionSlider.value;
    dimensionLabel.textContent = `${dimension}x${dimension}`
});

dimensionSlider.addEventListener('mouseup', ()=>{
    board.innerHTML = '';
    let dimension = dimensionSlider.value;
    let pixelDimension = 100/dimension;
    for (let i = 1; i<=dimension**2; i++){
        let pixel = document.createElement('div');
        pixel.style.width = pixel.style.height = `${pixelDimension}%`;
        board.append(pixel);
    }
});

clearButton.addEventListener('click', ()=>{
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel of pixels){
        pixel.style.backgroundColor = 'white';
    }
})