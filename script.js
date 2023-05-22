const dimensionSlider = document.querySelector('#dimension');
const dimensionLabel = document.querySelector('#dimension-label');
dimensionSlider.addEventListener('input', ()=>{
    dimensionLabel.textContent = `${dimensionSlider.value}x${dimensionSlider.value}`
});