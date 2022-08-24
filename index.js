const newGame = document.querySelector('.game-title');
const wrapper = document.querySelector('.wrapper');
const eldersWrapper = document.querySelector('.elders-wrapper');
const elderOne = document.querySelector('.elder-first');
const elderTwo = document.querySelector('.elder-second');
const elderThree = document.querySelector('.elder-third');
const elderFour = document.querySelector('.elder-fourth');

const yourElder = document.querySelector('.your-elder');
const mainGame = document.querySelector('.main-game');

const veryLow = document.querySelector('.very-low');
const low = document.querySelector('.low');
const middle = document.querySelector('.middle');
const hard  = document.querySelector('.hard ');
const veryHard  = document.querySelector('.very-hard');

const yourDifficulty = document.querySelector('.your-difficulty');
const difficultyWrapper = document.querySelector('.difficulty-wrapper');

const makeDeck = document.querySelector('.make-deck');
const deck = document.querySelector('.deck');

const stagesWrapper = document.querySelector('.stages-wrapper');
const myCard = document.querySelector('.my-card');


newGame.addEventListener('click', () => {
    wrapper.classList.add('visibility');
    eldersWrapper.classList.add('displayon');
})

elderOne.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('/assets/png/Azathoth.png')`
    mainGame.classList.remove('visibilityM');
})

elderTwo.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('/assets/png/Cthulthu.png')`
    mainGame.classList.remove('visibilityM');
})

elderThree.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('/assets/png/IogSothoth.png')`
    mainGame.classList.remove('visibilityM');
})

elderFour.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('/assets/png/ShubNiggurath.png')`
    mainGame.classList.remove('visibilityM');
})

veryLow.addEventListener('click', () => {
    yourDifficulty.textContent = 'Very Low';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');
});

low.addEventListener('click', () => {
    yourDifficulty.textContent = 'Low';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');
});

middle.addEventListener('click', () => {
    yourDifficulty.textContent = 'Middle';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');
});

hard.addEventListener('click', () => {
    yourDifficulty.textContent = 'Hard';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');
});

veryHard.addEventListener('click', () => {
    yourDifficulty.textContent = 'Very Hard';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');
});

makeDeck.addEventListener('click', () => {
    makeDeck.classList.add('visibilityM');
    deck.classList.remove('visibilityM');
    stagesWrapper.classList.remove('visibilityM');
    myCard.classList.remove('visibilityM');
});

console.log(elders);