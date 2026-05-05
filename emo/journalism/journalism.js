const shameSpan = document.getElementById('shameSpan');
const shameNav = document.getElementById('shameNav');

shameSpan.addEventListener('mouseover', () => {
  shameNav.style.visibility = 'visible';
})

shameSpan.addEventListener('mouseout', () => {
  shameNav.style.visibility = 'hidden';
})



function button1() {
    const button1 = document.getElementById('button1');
    const hiddenText1 = document.getElementById('hiddenText1');

    hiddenText1.style.visibility = 'visible';
    button1.style.visibility = 'hidden';
}

function button2() {
    const button2 = document.getElementById('button2');
    const hiddenText2 = document.getElementById('hiddenText2');

    hiddenText2.style.visibility = 'visible';
    button2.style.visibility = 'hidden';
}

function button3() {
    const button3 = document.getElementById('button3');
    const hiddenText3 = document.getElementById('hiddenText3');

    hiddenText3.style.visibility = 'visible';
    button3.style.visibility = 'hidden';
}




function selloutExpand() {
    const sellout1BigDiv = document.getElementById('sellout1BigDiv');

    sellout1BigDiv.style.visibility = 'visible';
}

function selloutClose() {
    const sellout1BigDiv = document.getElementById('sellout1BigDiv');

    sellout1BigDiv.style.visibility = 'hidden';
}

