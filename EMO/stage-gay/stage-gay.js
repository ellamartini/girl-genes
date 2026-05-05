const trinitySpan = document.getElementById('trinitySpan');
const trinityNav = document.getElementById('trinityNav');

trinitySpan.addEventListener('mouseover', () => {
  trinityNav.style.visibility = 'visible';
})

trinitySpan.addEventListener('mouseout', () => {
  trinityNav.style.visibility = 'hidden';
})

const styleSpan = document.getElementById('styleSpan');
const styleNav = document.getElementById('styleNav');

styleSpan.addEventListener('mouseover', () => {
  styleNav.style.visibility = 'visible';
})

styleSpan.addEventListener('mouseout', () => {
  styleNav.style.visibility = 'hidden';
})

const politicalStatementSpan = document.getElementById('politicalStatementSpan');
const popup = document.getElementById('popup');

politicalStatementSpan.addEventListener('mouseover', () => {
  popup.style.visibility = 'visible';
})

politicalStatementSpan.addEventListener('mouseout', () => {
  popup.style.visibility = 'hidden';
})



const masculinitySpan = document.getElementById('masculinitySpan');
const bertGerardImg = document.getElementById('bertGerardImg');
const masculinityImg = document.getElementById('masculinityImg');
const girlBandImg = document.getElementById('girlBandImg');

masculinitySpan.addEventListener('mouseover', () => {
  bertGerardImg.style.visibility = 'visible';
  masculinityImg.style.visibility = 'visible';
  girlBandImg.style.visibility = 'visible';
})

masculinitySpan.addEventListener('mouseout', () => {
  bertGerardImg.style.visibility = 'hidden';
  masculinityImg.style.visibility = 'hidden';
  girlBandImg.style.visibility = 'hidden';
})