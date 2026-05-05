const punkSpan = document.getElementById('punkSpan');
const punkNav = document.getElementById('punkNav');

punkSpan.addEventListener('mouseover', () => {
  punkNav.style.visibility = 'visible';
})

punkSpan.addEventListener('mouseout', () => {
  punkNav.style.visibility = 'hidden';
})

const hardcoreSpan = document.getElementById('hardcoreSpan');
const hardcoreNav = document.getElementById('hardcoreNav');

hardcoreSpan.addEventListener('mouseover', () => {
  hardcoreNav.style.visibility = 'visible';
})

hardcoreSpan.addEventListener('mouseout', () => {
  hardcoreNav.style.visibility = 'hidden';
})

const fangirlsSpan = document.getElementById('fangirlsSpan');
const fangirlsImg = document.getElementById('fangirlsImg');

fangirlsSpan.addEventListener('mouseover', () => {
  fangirlsImg.style.visibility = 'visible';
})

fangirlsSpan.addEventListener('mouseout', () => {
  fangirlsImg.style.visibility = 'hidden';
})