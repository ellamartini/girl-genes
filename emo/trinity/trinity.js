const stuntmanSpan = document.getElementById('stuntmanSpan');
const frankImg = document.getElementById('frankImg');

stuntmanSpan.addEventListener('mouseover', () => {
  frankImg.style.visibility = 'visible';
})

stuntmanSpan.addEventListener('mouseout', () => {
  frankImg.style.visibility = 'hidden';
})



const mcrSectionSpan = document.getElementById('mcrSectionSpan');
const gerardNav = document.getElementById('gerardNav');

mcrSectionSpan.addEventListener('mouseover', () => {
  gerardNav.style.visibility = 'visible';
})

mcrSectionSpan.addEventListener('mouseout', () => {
  gerardNav.style.visibility = 'hidden';
})