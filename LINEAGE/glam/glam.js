//SPANS

const authenticitySpan = document.getElementById('authenticitySpan');
const authenticityNav = document.getElementById('authenticityNav');

authenticitySpan.addEventListener('mouseover', () => {
  authenticityNav.style.visibility = 'visible';
})

authenticitySpan.addEventListener('mouseout', () => {
  authenticityNav.style.visibility = 'hidden';
})

// const punkSpan = document.getElementById('punkSpan');
// const punkNav = document.getElementById('punkNav');

// punkSpan.addEventListener('mouseover', () => {
//   punkNav.style.visibility = 'visible';
// })

// punkSpan.addEventListener('mouseout', () => {
//   punkNav.style.visibility = 'hidden';
// })

const bowieSpan = document.getElementById('bowieSpan');
const topOfThePopsImg = document.getElementById('topOfThePopsImg');

bowieSpan.addEventListener('mouseover', () => {
  topOfThePopsImg.style.visibility = 'visible';
})

bowieSpan.addEventListener('mouseout', () => {
  topOfThePopsImg.style.visibility = 'hidden';
})

const garyFloydSpan = document.getElementById('garyFloydSpan');
const garyFloydImg = document.getElementById('garyFloydImg');
const dicksLiveImg = document.getElementById('dicksLiveImg');
const garyFloydText = document.getElementById('garyFloydText');

garyFloydSpan.addEventListener('mouseover', () => {
  garyFloydImg.style.visibility = 'visible';
  dicksLiveImg.style.visibility = 'visible';
  garyFloydText.style.visibility = 'visible';
})

garyFloydSpan.addEventListener('mouseout', () => {
  garyFloydImg.style.visibility = 'hidden';
  dicksLiveImg.style.visibility = 'hidden';
  garyFloydText.style.visibility = 'hidden';
})