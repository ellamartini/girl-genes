function button() {
    const hiddenContent = document.getElementById('hiddenContent');
    const revealButton = document.getElementById('revealButton');

    hiddenContent.style.visibility = 'visible';
    revealButton.style.visibility = 'hidden';
}

const mikeySpan = document.getElementById('mikeySpan');
const raySpan = document.getElementById('raySpan');
const frankSpan = document.getElementById('frankSpan');
const mikeyImg = document.getElementById('mikeyImg');
const rayImg = document.getElementById('rayImg');
const frankImg1 = document.getElementById('frankImg1');
const frankImg2 = document.getElementById('frankImg2');

mikeySpan.addEventListener('mouseover', () => {
  mikeyImg.style.visibility = 'visible';
})

mikeySpan.addEventListener('mouseout', () => {
  mikeyImg.style.visibility = 'hidden';
})

raySpan.addEventListener('mouseover', () => {
  rayImg.style.visibility = 'visible';
})

raySpan.addEventListener('mouseout', () => {
  rayImg.style.visibility = 'hidden';
})

frankSpan.addEventListener('mouseover', () => {
  frankImg1.style.visibility = 'visible';
  frankImg2.style.visibility = 'visible';
})

frankSpan.addEventListener('mouseout', () => {
  frankImg1.style.visibility = 'hidden';
  frankImg2.style.visibility = 'hidden';
})



const mcrBiosSpan = document.getElementById('mcrBiosSpan');
const mcrBioImg1 = document.getElementById('mcrBioImg1');
const mcrBioImg2 = document.getElementById('mcrBioImg2');


mcrBiosSpan.addEventListener('mouseover', () => {
  mcrBioImg1.style.visibility = 'visible';
  mcrBioImg2.style.visibility = 'visible';
})

mcrBiosSpan.addEventListener('mouseout', () => {
  mcrBioImg1.style.visibility = 'hidden';
  mcrBioImg2.style.visibility = 'hidden';
})




const gerardTweetSpan = document.getElementById('gerardTweetSpan');
const gerardTweet = document.getElementById('gerardTweet');

gerardTweetSpan.addEventListener('mouseover', () => {
  gerardTweet.style.visibility = 'visible';
})

gerardTweetSpan.addEventListener('mouseout', () => {
  gerardTweet.style.visibility = 'hidden';
})



const emojournalismSpan = document.getElementById('emoJournalismSpan');
const journalismNav = document.getElementById('journalismNav');

emojournalismSpan.addEventListener('mouseover', () => {
  journalismNav.style.visibility = 'visible';
})

emojournalismSpan.addEventListener('mouseout', () => {
  journalismNav.style.visibility = 'hidden';
})




const stageGaySpan = document.getElementById('stageGaySpan');
const stageGayNav = document.getElementById('stageGayNav');

stageGaySpan.addEventListener('mouseover', () => {
  stageGayNav.style.visibility = 'visible';
})

stageGaySpan.addEventListener('mouseout', () => {
  stageGayNav.style.visibility = 'hidden';
})



const fangirlsRuledSpan = document.getElementById('fangirlsRuledSpan');
const cheer = document.getElementById('cheer');

fangirlsRuledSpan.addEventListener('mouseover', () => {
  cheer.style.visibility = 'visible';
})

fangirlsRuledSpan.addEventListener('mouseout', () => {
  cheer.style.visibility = 'hidden';
})