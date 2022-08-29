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
const end = document.querySelector('.end');
const start = document.querySelector('.start');

const firstStageTitle = document.querySelector('.first-stage-title');
const secondStageTitle = document.querySelector('.second-stage-title');
const thirdStageTitle = document.querySelector('.third-stage-title');

//трекер первой стадии
const firstStageGreen = document.querySelector('.first-stage-green');
const firstStageBrown = document.querySelector('.first-stage-brown');
const firstStageBlue = document.querySelector('.first-stage-blue');

//трекер второй стадии
const secondStageGreen = document.querySelector('.second-stage-green');
const secondStageBrown = document.querySelector('.second-stage-brown');
const secondStageBlue = document.querySelector('.second-stage-blue');

//трекер третьей стадии
const thirdStageGreen = document.querySelector('.third-stage-green');
const thirdStageBrown = document.querySelector('.third-stage-brown');
const thirdStageBlue = document.querySelector('.third-stage-blue');

//массивы карт
const cardsDataBlue = [
    {
      id: 'blue1',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      difficulty: 'normal',
      color:'blue'
    },
  ]
  
  const cardsDataBrown = [
    {
      id: 'brown1',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      difficulty: 'easy',
      color:'brown'
    },
  ]

  const cardsDataGreen = [
    {
      id: 'green1',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      difficulty: 'easy',
      color:'green'
    },
  ]

//начать игру
newGame.addEventListener('click', () => {
    wrapper.classList.add('visibility');
    eldersWrapper.classList.add('displayon');
})

//общий массив карт на сложность
let cardsDataGreenForDifficulty = [];
let cardsDataBrownForDifficulty = [];
let cardsDataBlueForDifficulty = [];

//общее число карт на игру
let blueCardsForGame;
let brownCardsForGame;
let greenCardsForGame;

//число карт на этап
let greenForFirstStage;
let brownForFirstStage;
let blueForFirstStage;

let greenForSecondStage;
let brownForSecondStage;
let blueForSecondStage;

let greenForThirdStage;
let brownForThirdStage;
let blueForThirdStage;

//массив карт одного цвета на игру
const blueDeck = [];
const greenDeck = [];
const brownDeck = [];

//общий массив карт на этап
const firstStageDeck = [];
const secondStageDeck = [];
const thirdStageDeck = [];

//финальные коллоды
const finalFirstStageDeck = [];
const finalSecondStageDeck = [];
const finalThirdStageDeck = [];

//финальная общая коллода

let finalDeck = [];


//выбор Древнего
elderOne.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('assets/png/Azathoth.png')`
    mainGame.classList.remove('visibilityM');
    firstStageGreen.textContent = '1';
    firstStageBlue.textContent = '1';
    firstStageBrown.textContent = '2';
    secondStageGreen.textContent = '2';
    secondStageBlue.textContent = '1';
    secondStageBrown.textContent = '3';
    thirdStageGreen.textContent = '2';
    thirdStageBlue.textContent = '0';
    thirdStageBrown.textContent = '4';

    greenCardsForGame = 5;
    brownCardsForGame = 9;
    blueCardsForGame = 2;

    greenForFirstStage = 1;
    brownForFirstStage = 2;
    blueForFirstStage = 1;
    greenForSecondStage = 2;
    brownForSecondStage = 3;
    blueForSecondStage = 1;
    greenForThirdStage = 2;
    brownForThirdStage = 4;
    blueForThirdStage = 0;
})

elderTwo.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('assets/png/Cthulthu.png')`
    mainGame.classList.remove('visibilityM');
    firstStageGreen.textContent = '0';
    firstStageBlue.textContent = '2';
    firstStageBrown.textContent = '2';
    secondStageGreen.textContent = '1';
    secondStageBlue.textContent = '0';
    secondStageBrown.textContent = '3';
    thirdStageGreen.textContent = '3';
    thirdStageBlue.textContent = '0';
    thirdStageBrown.textContent = '4';
    greenCardsForGame = 4;
    brownCardsForGame = 9;
    blueCardsForGame = 2;

    greenForFirstStage = 0;
    brownForFirstStage = 2;
    blueForFirstStage = 2;
    greenForSecondStage = 1;
    brownForSecondStage = 3;
    blueForSecondStage = 0;
    greenForThirdStage = 3;
    brownForThirdStage = 4;
    blueForThirdStage = 0;

})

elderThree.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('assets/png/IogSothoth.png')`
    mainGame.classList.remove('visibilityM');
    firstStageGreen.textContent = '0';
    firstStageBlue.textContent = '1';
    firstStageBrown.textContent = '2';
    secondStageGreen.textContent = '2';
    secondStageBlue.textContent = '1';
    secondStageBrown.textContent = '3';
    thirdStageGreen.textContent = '3';
    thirdStageBlue.textContent = '0';
    thirdStageBrown.textContent = '4';
    greenCardsForGame = 5;
    brownCardsForGame = 9;
    blueCardsForGame = 2;
    
    greenForFirstStage = 0;
    brownForFirstStage = 2;
    blueForFirstStage = 1;
    greenForSecondStage = 2;
    brownForSecondStage = 3;
    blueForSecondStage = 1;
    greenForThirdStage = 3;
    brownForThirdStage = 4;
    blueForThirdStage = 0;

})

elderFour.addEventListener('click', () => {
    eldersWrapper.classList.remove('displayon');
    yourElder.style.backgroundImage = `url('assets/png/ShubNiggurath.png')`
    mainGame.classList.remove('visibilityM');
    firstStageGreen.textContent = '1';
    firstStageBlue.textContent = '1';
    firstStageBrown.textContent = '2';
    secondStageGreen.textContent = '3';
    secondStageBlue.textContent = '1';
    secondStageBrown.textContent = '2';
    thirdStageGreen.textContent = '2';
    thirdStageBlue.textContent = '0';
    thirdStageBrown.textContent = '4';
    greenCardsForGame =  6;
    brownCardsForGame = 8;
    blueCardsForGame = 2;
    
    greenForFirstStage = 1;
    brownForFirstStage = 2;
    blueForFirstStage = 1;
    greenForSecondStage = 3;
    brownForSecondStage = 2;
    blueForSecondStage = 1;
    greenForThirdStage = 2;
    brownForThirdStage = 4;
    blueForThirdStage = 0;
})

//выбор сложности
veryLow.addEventListener('click', () => {
    yourDifficulty.textContent = 'Very Low';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');


    gettingCardsforVeryLowGreen ()
    gettingCardsforVeryLowBrown ()
    gettingCardsforVeryLowBlue ()

});

low.addEventListener('click', () => {
    yourDifficulty.textContent = 'Low';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');

    gettingCardsforLowGreen()
    gettingCardsforLowBrown()
    gettingCardsforLowBlue()
    
});

middle.addEventListener('click', () => {
    yourDifficulty.textContent = 'Middle';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');

    cardsDataGreenForDifficulty = cardsDataGreen;
    cardsDataBrownForDifficulty = cardsDataBrown;
    cardsDataBlueForDifficulty = cardsDataBlue;

});

hard.addEventListener('click', () => {
    yourDifficulty.textContent = 'Hard';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');

    gettingCardsforHardGreen()
    gettingCardsforHardBrown()
    gettingCardsforHardBlue()

});

veryHard.addEventListener('click', () => {
    yourDifficulty.textContent = 'Very Hard';
    difficultyWrapper.classList.add('visibilityM');
    yourDifficulty.classList.remove('visibilityM');
    makeDeck.classList.remove('visibilityM');

    gettingCardsforVeryHardGreen()
    gettingCardsforVeryHardBrown()
    gettingCardsforVeryHardBlue()

});

//замешать колоду
makeDeck.addEventListener('click', () => {
    makeDeck.classList.add('visibilityM');
    deck.classList.remove('visibilityM');
    stagesWrapper.classList.remove('visibilityM');
    myCard.classList.remove('visibilityM');

    makeCardsDeck(greenDeck, greenCardsForGame, cardsDataGreenForDifficulty);
    makeCardsDeck(brownDeck, brownCardsForGame, cardsDataBrownForDifficulty);
    makeCardsDeck(blueDeck, blueCardsForGame, cardsDataBlueForDifficulty);
    
    makeFirstStageDeck()
    makeSecondStageDeck()
    makeThirdStageDeck()
    makeFinalFirstDeck ()
    makeFinalSecondDeck()
    makeFinalThirdDeck()

    finalDeck = finalThirdStageDeck.concat(finalSecondStageDeck, finalFirstStageDeck);

    console.log(finalDeck);

});

//рандомный индекс карты
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  
  //создание коллод для игры
  function makeCardsDeck(deck, number, array){
  for (let i = 0; i < number; i++ ) {
    let num = getRandomInt(0, array.length - 1);
    if(!deck.includes(array[num])) {
    deck.push(array[num]);
    } else {
        i--
    }
    }
}
  
//создание коллоды на 1 этап
function makeFirstStageDeck () {
for ( let a = 0; a < greenForFirstStage; a++) {
    if (greenDeck.length > 1){
    let numG = getRandomInt(0, greenDeck.length - 1);
    if(!firstStageDeck.includes(greenDeck[numG])){
        firstStageDeck.push(greenDeck[numG]);
        greenDeck.splice(numG, 1);
    }  else {
        a--
    }
} else if (greenDeck.length === 1) {
    firstStageDeck.push(greenDeck[0]);
    greenDeck.splice(0, 1);
}
}
for ( let b = 0; b < brownForFirstStage; b++) {
    if (brownDeck.length > 1){
    let numB = getRandomInt(0, brownDeck.length - 1);
    if(!firstStageDeck.includes(brownDeck[numB])){
        firstStageDeck.push(brownDeck[numB]);
        brownDeck.splice(numB, 1);
    }  else {
        b--
    }
} else if (brownDeck.length === 1) {
    firstStageDeck.push(brownDeck[0]);
    brownDeck.splice(0, 1);
}
}
for ( let c = 0; c < blueForFirstStage; c++) {
    if (blueDeck.length > 1) {
    let numBl = getRandomInt(0, blueDeck.length - 1);
    if(!firstStageDeck.includes(blueDeck[numBl])){
        firstStageDeck.push(blueDeck[numBl]);
        blueDeck.splice(numBl, 1);
    }  else {
        c--
    }
} else if (blueDeck.length === 1) {
    firstStageDeck.push(blueDeck[0]);
    blueDeck.splice(0, 1);
}
}
}

//создание коллоды на 2 этап
function makeSecondStageDeck () {
    for ( let a = 0; a < greenForSecondStage; a++) {
        if (greenDeck.length > 1){
        let numG = getRandomInt(0, greenDeck.length - 1);
        if(!secondStageDeck.includes(greenDeck[numG])){
            secondStageDeck.push(greenDeck[numG]);
            greenDeck.splice(numG, 1);
        }  else {
            a--
        }
    } else if (greenDeck.length === 1) {
        secondStageDeck.push(greenDeck[0]);
        greenDeck.splice(0, 1);
    }
    }
    for ( let b = 0; b < brownForSecondStage; b++) {
        if (brownDeck.length > 1){
        let numB = getRandomInt(0, brownDeck.length - 1);
        if(!secondStageDeck.includes(brownDeck[numB])){
            secondStageDeck.push(brownDeck[numB]);
            brownDeck.splice(numB, 1);
        }  else {
            b--
        }
    } else if (brownDeck.length === 1) {
        secondStageDeck.push(brownDeck[0]);
        brownDeck.splice(0, 1);
    }
}
    for ( let c = 0; c < blueForSecondStage; c++) {
        if (blueDeck.length > 1) {
        let numBl = getRandomInt(0, blueDeck.length - 1);
        if(!secondStageDeck.includes(blueDeck[numBl])){
            secondStageDeck.push(blueDeck[numBl]);
            blueDeck.splice(numBl, 1);
        }  else {
            c--
        }
    } else if (blueDeck.length === 1) {
        secondStageDeck.push(blueDeck[0]);
        blueDeck.splice(0, 1);
    }
    }
    }

//создание коллоды на 3 этап
    function makeThirdStageDeck () {
        for ( let a = 0; a < greenForThirdStage; a++) {
            if (greenDeck.length > 1){
            let numG = getRandomInt(0, greenDeck.length - 1);
            if(!thirdStageDeck.includes(greenDeck[numG])){
                thirdStageDeck.push(greenDeck[numG]);
                greenDeck.splice(numG, 1);
            }  else {
                a--
            }
        } else if (greenDeck.length === 1) {
            thirdStageDeck.push(greenDeck[0]);
            greenDeck.splice(0, 1);
        }
        }
        for ( let b = 0; b < brownForThirdStage; b++) {
            if (brownDeck.length > 1){
            let numB = getRandomInt(0, brownDeck.length - 1);
            if(!thirdStageDeck.includes(brownDeck[numB])){
                thirdStageDeck.push(brownDeck[numB]);
                brownDeck.splice(numB, 1);
            }  else {
                b--
            }
        } else if (brownDeck.length === 1) {
            thirdStageDeck.push(brownDeck[0]);
            brownDeck.splice(0, 1);
        }
    }
        for ( let c = 0; c < blueForThirdStage; c++) {
            if (blueDeck.length > 1) {
            let numBl = getRandomInt(0, blueDeck.length - 1);
            if(!thirdStageDeck.includes(blueDeck[numBl])){
                thirdStageDeck.push(blueDeck[numBl]);
                blueDeck.splice(numBl, 1);
            }  else {
                c--
            }
        } else if (blueDeck.length === 1) {
            thirdStageDeck.push(blueDeck[0]);
            blueDeck.splice(0, 1);
        }
        }
        }

    //перетусовка коллод всех этапов
        function makeFinalFirstDeck (){
            for ( let a = 0; a < firstStageDeck.length; a++) {
                let num = getRandomInt(0, firstStageDeck.length - 1);
                if(!finalFirstStageDeck.includes(firstStageDeck[num])){
                    finalFirstStageDeck.push(firstStageDeck[num]);
                }  else {
                    a--
                }
            }
        }

        function makeFinalSecondDeck (){
            for ( let a = 0; a < secondStageDeck.length; a++) {
                let num = getRandomInt(0, secondStageDeck.length - 1);
                if(!finalSecondStageDeck.includes(secondStageDeck[num])){
                    finalSecondStageDeck.push(secondStageDeck[num]);
                }  else {
                    a--
                }
            }
        }

        function makeFinalThirdDeck (){
            for ( let a = 0; a < thirdStageDeck.length; a++) {
                let num = getRandomInt(0, thirdStageDeck.length - 1);
                if(!finalThirdStageDeck.includes(thirdStageDeck[num])){
                    finalThirdStageDeck.push(thirdStageDeck[num]);
                }  else {
                    a--
                }
            }
        }

//создание коллод для уровней сложности

        //очень низкая
        function gettingCardsforVeryLowGreen () {
            cardsDataGreenForDifficulty = cardsDataGreen.filter(x => x.difficulty == "easy");
            if (cardsDataGreenForDifficulty.length < greenCardsForGame) {
            let normalCards = cardsDataGreen.filter(x => x.difficulty == "normal");
            for (let x = cardsDataGreenForDifficulty.length; x < greenCardsForGame; x++) {
                let num = getRandomInt(0, normalCards.length - 1);
                if(!cardsDataGreenForDifficulty.includes(normalCards[num])){
                    cardsDataGreenForDifficulty.push(normalCards[num]);
                }  else {
                    x--
                }
            }
        }
        }

        function gettingCardsforVeryLowBrown () {
            cardsDataBrownForDifficulty = cardsDataBrown.filter(x => x.difficulty == "easy");
            if (cardsDataBrownForDifficulty.length < brownCardsForGame) {
            let normalCards = cardsDataBrown.filter(x => x.difficulty == "normal");
            for (let x = cardsDataBrownForDifficulty.length; x < brownCardsForGame; x++) {
                let num = getRandomInt(0, normalCards.length - 1);
                if(!cardsDataBrownForDifficulty.includes(normalCards[num])){
                    cardsDataBrownForDifficulty.push(normalCards[num]);
                }  else {
                    x--
                }
            }
        }
        }

        function gettingCardsforVeryLowBlue () {
            cardsDataBlueForDifficulty = cardsDataBlue.filter(x => x.difficulty == "easy");
            if (cardsDataBlueForDifficulty.length < blueCardsForGame) {
            let normalCards = cardsDataBlue.filter(x => x.difficulty == "normal");
            for (let x = cardsDataBlueForDifficulty.length; x < blueCardsForGame; x++) {
                let num = getRandomInt(0, normalCards.length - 1);
                if(!cardsDataBlueForDifficulty.includes(normalCards[num])){
                    cardsDataBlueForDifficulty.push(normalCards[num]);
                }  else {
                    x--
                }
            }
        }
        }

        //очень высокая
        function gettingCardsforVeryHardGreen () {
            cardsDataGreenForDifficulty = cardsDataGreen.filter(x => x.difficulty == "hard");
            if (cardsDataGreenForDifficulty.length < greenCardsForGame) {
            let normalCards = cardsDataGreen.filter(x => x.difficulty == "normal");
            for (let x = cardsDataGreenForDifficulty.length; x < greenCardsForGame; x++) {
                let num = getRandomInt(0, normalCards.length - 1);
                if(!cardsDataGreenForDifficulty.includes(normalCards[num])){
                    cardsDataGreenForDifficulty.push(normalCards[num]);
                }  else {
                    x--
                }
            }
        }
        }

        function gettingCardsforVeryHardBrown () {
            cardsDataBrownForDifficulty = cardsDataBrown.filter(x => x.difficulty == "hard");
            if (cardsDataBrownForDifficulty.length < brownCardsForGame) {
            let normalCards = cardsDataBrown.filter(x => x.difficulty == "normal");
            for (let x = cardsDataBrownForDifficulty.length; x < brownCardsForGame; x++) {
                let num = getRandomInt(0, normalCards.length - 1);
                if(!cardsDataBrownForDifficulty.includes(normalCards[num])){
                    cardsDataBrownForDifficulty.push(normalCards[num]);
                }  else {
                    x--
                }
            }
        }
        }

        function gettingCardsforVeryHardBlue () {
            cardsDataBlueForDifficulty = cardsDataBlue.filter(x => x.difficulty == "hard");
            if (cardsDataBlueForDifficulty.length < blueCardsForGame) {
            let normalCards = cardsDataBlue.filter(x => x.difficulty == "normal");
            for (let x = cardsDataBlueForDifficulty.length; x < blueCardsForGame; x++) {
                let num = getRandomInt(0, normalCards.length - 1);
                if(!cardsDataBlueForDifficulty.includes(normalCards[num])){
                    cardsDataBlueForDifficulty.push(normalCards[num]);
                }  else {
                    x--
                }
            }
        }
        }

        //низкая 
        function gettingCardsforLowGreen () {
            cardsDataGreenForDifficulty = cardsDataGreen.filter(x => x.difficulty != "hard");
        }

        function gettingCardsforLowBrown () {
            cardsDataBrownForDifficulty = cardsDataBrown.filter(x => x.difficulty != "hard");
        }

        function gettingCardsforLowBlue () {
            cardsDataBlueForDifficulty = cardsDataBlue.filter(x => x.difficulty != "hard");
        }

        //высокая
        function gettingCardsforHardGreen () {
            cardsDataGreenForDifficulty = cardsDataGreen.filter(x => x.difficulty != "easy");
        }

        function gettingCardsforHardBrown () {
            cardsDataBrownForDifficulty = cardsDataBrown.filter(x => x.difficulty != "easy");
        }

        function gettingCardsforHardBlue () {
            cardsDataBlueForDifficulty = cardsDataBlue.filter(x => x.difficulty != "easy");
        }

        //взять карту из коллоды

        deck.addEventListener('click', () => {
            myCard.style.backgroundImage = `url('assets/png/${finalDeck[finalDeck.length - 1].id}.png')`
            myCard.classList.add('no-borders');
            myCard.textContent = '';
            if(finalDeck[finalDeck.length - 1].color === 'green' &&  Number(firstStageGreen.textContent) !=0) {
                firstStageGreen.textContent = Number(firstStageGreen.textContent) - 1;
                firstStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'brown' &&  Number(firstStageBrown.textContent) !=0) {
                firstStageBrown.textContent = Number(firstStageBrown.textContent) - 1;
                firstStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'blue' &&  Number(firstStageBlue.textContent) !=0) {
                firstStageBlue.textContent = Number(firstStageBlue.textContent) - 1;
                firstStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'green' &&  Number(secondStageGreen.textContent) !=0) {
                secondStageGreen.textContent = Number(secondStageGreen.textContent) - 1;
                firstStageTitle.classList.remove('active-stage');
                secondStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'brown' &&  Number(secondStageBrown.textContent) !=0) {
                secondStageBrown.textContent = Number(secondStageBrown.textContent) - 1;
                firstStageTitle.classList.remove('active-stage');
                secondStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'blue' &&  Number(secondStageBlue.textContent) !=0) {
                secondStageBlue.textContent = Number(secondStageBlue.textContent) - 1;
                firstStageTitle.classList.remove('active-stage');
                secondStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'green' &&  Number(thirdStageGreen.textContent) !=0) {
                thirdStageGreen.textContent = Number(thirdStageGreen.textContent) - 1;
                secondStageTitle.classList.remove('active-stage');
                thirdStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'brown' &&  Number(thirdStageBrown.textContent) !=0) {
                thirdStageBrown.textContent = Number(thirdStageBrown.textContent) - 1;
                secondStageTitle.classList.remove('active-stage');
                thirdStageTitle.classList.add('active-stage');
            } else if (finalDeck[finalDeck.length - 1].color === 'blue' &&  Number(thirdStageBlue.textContent) !=0) {
                thirdStageBlue.textContent = Number(thirdStageBlue.textContent) - 1;
                secondStageTitle.classList.remove('active-stage');
                thirdStageTitle.classList.add('active-stage');
            }

            if (finalDeck.length > 1) {
            finalDeck.pop();
            } else if (finalDeck.length == 1) {
                finalDeck.pop()
                deck.classList.add('visibilityM');
                thirdStageTitle.classList.remove('active-stage');
                end.classList.remove('visibilityM');
            }
        })
        
        console.log("Самооценка выполненной работы CodeJam:\n1. На выбор предоставляется минимум одна карта древнего (максимум 4)(+20)\n2. На выбор предоставляется несколько уровней сложности (максимум 5) (+25)\n3. Карты замешиваются согласно правилам игры (+40)\n4. Есть трекер текущего состояния колоды (+20)\nИтог: все требования к работе выполнены, поэтому оцениваю её в 105 баллов.")