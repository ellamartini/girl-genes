const queerActsSpan = document.getElementById('queerActsSpan');
const stageGayNav = document.getElementById('stageGayNav');

queerActsSpan.addEventListener('mouseover', () => {
  stageGayNav.style.visibility = 'visible';
})

queerActsSpan.addEventListener('mouseout', () => {
  stageGayNav.style.visibility = 'hidden';
})

const straightIdolSpan = document.getElementById('straightIdolSpan');
const straightIdolText = document.getElementById('straightIdolText');

straightIdolSpan.addEventListener('mouseover', () => {
  straightIdolText.style.visibility = 'visible';
})

straightIdolSpan.addEventListener('mouseout', () => {
  straightIdolText.style.visibility = 'hidden';
})