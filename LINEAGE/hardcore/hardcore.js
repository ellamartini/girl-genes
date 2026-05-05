const newWaveSpan = document.getElementById('newWaveSpan');
const newWavePopupText = document.getElementById('newWavePopupText');

newWaveSpan.addEventListener('mouseover', () => {
  newWavePopupText.style.visibility = 'visible';
})

newWaveSpan.addEventListener('mouseout', () => {
  newWavePopupText.style.visibility = 'hidden';
})



const radioSpan = document.getElementById('radioSpan');
const americanHardcore1 = document.getElementById('americanHardcore1');

radioSpan.addEventListener('mouseover', () => {
  americanHardcore1.style.visibility = 'visible';
})

radioSpan.addEventListener('mouseout', () => {
  americanHardcore1.style.visibility = 'hidden';
})



const antiFashionSpan = document.getElementById('antiFashionSpan');
const gerardNav = document.getElementById('gerardNav');

antiFashionSpan.addEventListener('mouseover', () => {
  gerardNav.style.visibility = 'visible';
})

antiFashionSpan.addEventListener('mouseout', () => {
  gerardNav.style.visibility = 'hidden';
})