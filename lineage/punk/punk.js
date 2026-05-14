// REVEAL PARAGRAPHS AS YOU CLICK THROUGH

// buttons to reveal paragraphs
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button10 = document.getElementById('button10');
const button11 = document.getElementById('button11');
const button12 = document.getElementById('button12');
const button13 = document.getElementById('button13');
const button14 = document.getElementById('button14');


// paragraph blocks
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
const t10 = document.getElementById('t10');
const t11 = document.getElementById('t11');
const t12 = document.getElementById('t12');
const t13 = document.getElementById('t13');
const t14 = document.getElementById('t14');
const t15 = document.getElementById('t15');

//popup images
const mclaren = document.getElementById('mclaren');
const foucault = document.getElementById('foucault');
const ramones = document.getElementById('ramones');
const poseur = document.getElementById('poseur');
const blondie = document.getElementById('blondie');
const blondieText = document.getElementById('blondieText');


button1.addEventListener('click', () => {
    button1.style.visibility = 'hidden';
    t2.style.visibility = 'visible';
    button2.style.visibility = 'visible';
    mclaren.style.visibility = 'visible';
})

button2.addEventListener('click', () => {
    button2.style.visibility = 'hidden';
    t3.style.visibility = 'visible';
    button3.style.visibility = 'visible';
})

button3.addEventListener('click', () => {
    button3.style.visibility = 'hidden';
    t4.style.visibility = 'visible';
    button4.style.visibility = 'visible';
    ramones.style.visibility = 'visible';
})

button4.addEventListener('click', () => {
    button4.style.visibility = 'hidden';
    t5.style.visibility = 'visible';
    button5.style.visibility = 'visible';
})

button5.addEventListener('click', () => {
    button5.style.visibility = 'hidden';
    t6.style.visibility = 'visible';
    button6.style.visibility = 'visible';
    foucault.style.visibility = 'visible';
})

button6.addEventListener('click', () => {
    button6.style.visibility = 'hidden';
    t7.style.visibility = 'visible';
    button7.style.visibility = 'visible';
    poseur.style.visibility = 'visible';
})

button7.addEventListener('click', () => {
    button7.style.visibility = 'hidden';
    t8.style.visibility = 'visible';
    button8.style.visibility = 'visible';
})

button8.addEventListener('click', () => {
    button8.style.visibility = 'hidden';
    t9.style.visibility = 'visible';
    button9.style.visibility = 'visible';
})

button9.addEventListener('click', () => {
    button9.style.visibility = 'hidden';
    t10.style.visibility = 'visible';
    button10.style.visibility = 'visible';
})

button10.addEventListener('click', () => {
    button10.style.visibility = 'hidden';
    t11.style.visibility = 'visible';
    button11.style.visibility = 'visible';
})

button11.addEventListener('click', () => {
    button11.style.visibility = 'hidden';
    t12.style.visibility = 'visible';
    button12.style.visibility = 'visible';
})

button12.addEventListener('click', () => {
    button12.style.visibility = 'hidden';
    t13.style.visibility = 'visible';
    button13.style.visibility = 'visible';
    blondie.style.visibility = 'visible';
    blondieText.style.visibility = 'visible';
})

button13.addEventListener('click', () => {
    button13.style.visibility = 'hidden';
    t14.style.visibility = 'visible';
    button14.style.visibility = 'visible';
})

button14.addEventListener('click', () => {
    button14.style.visibility = 'hidden';
    t15.style.visibility = 'visible';
})






const thePrequelTextBox = document.getElementById('thePrequelTextBox');
const thePrequel = document.getElementById('thePrequel');
const closeThePrequelTextBox = document.getElementById('closeThePrequelTextBox');
const death1 = document.getElementById('deathImg1');
const death2 = document.getElementById('deathImg2');
const death3 = document.getElementById('deathImg3');


thePrequel.addEventListener('click', () => {
  thePrequelTextBox.style.visibility = 'visible';
  death1.style.visibility = 'visible';
  death2.style.visibility = 'visible';
  death3.style.visibility = 'visible';
})

closeThePrequelTextBox.addEventListener('click', () => {
  thePrequelTextBox.style.visibility = 'hidden';
  death1.style.visibility = 'hidden';
  death2.style.visibility = 'hidden';
  death3.style.visibility = 'hidden';
})




// SPANS

const authenticityNav = document.getElementById('authenticityNav');
const workingClassSpan = document.getElementById('workingClassSpan');
const punksAuthenticitySpan = document.getElementById('punksAuthenticitySpan');
const glamSpan = document.getElementById('glamSpan');
const glamNav = document.getElementById('glamNav');
const hardcoreSpan = document.getElementById('hardcoreSpan');
const hardcoreNav = document.getElementById('hardcoreNav');

workingClassSpan.addEventListener('mouseover', () => {
  authenticityNav.style.visibility = 'visible';
})

workingClassSpan.addEventListener('mouseout', () => {
  authenticityNav.style.visibility = 'hidden';
})

punksAuthenticitySpan.addEventListener('mouseover', () => {
  authenticityNav.style.visibility = 'visible';
})

punksAuthenticitySpan.addEventListener('mouseout', () => {
  authenticityNav.style.visibility = 'hidden';
})

glamSpan.addEventListener('mouseover', () => {
  glamNav.style.visibility = 'visible';
})

glamSpan.addEventListener('mouseout', () => {
  glamNav.style.visibility = 'hidden';
})

hardcoreSpan.addEventListener('mouseover', () => {
  hardcoreNav.style.visibility = 'visible';
})

hardcoreSpan.addEventListener('mouseout', () => {
  hardcoreNav.style.visibility = 'hidden';
})