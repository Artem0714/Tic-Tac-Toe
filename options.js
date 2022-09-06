const countRows = 3;
const count = countRows*countRows;
const countWinnerComb = 2*countRows+2;
let winnerComb = [];

for (let i = 0; i < 2*countRows+2; i++ ) {
    winnerComb.push([]);
    if (i < countRows) {
        for (let k = 0; k < countRows; k++) {
            winnerComb[i].push(k+countRows*i);
        };
    } else if (i < 2*countRows) {
        for (let k = 0; k < countRows; k++) {
            winnerComb[i].push(countRows*k+i-countRows);
        };
    } else if (i < 2*countRows+1) {
        for (let k = 0; k < countRows; k++) {
            winnerComb[i].push(k+countRows*k);
        };
    } else {
        for (let k = 0; k < countRows; k++) {
            winnerComb[i].push((countRows-1)*(k+1));
        };
    };    
};

for (let i = 0; i < count; i++) {
    const element = document.createElement('input');
    element.id = "elem";
    element.type = "button";
    document.querySelector('div').append(element);    
};

const buttons = document.querySelectorAll('input')
const orderMove = {
    motion: 0
};

buttons.forEach(elem => {
    elem.addEventListener('click', function getValue() {
        orderMove.motion += 1;
        if (orderMove.motion > count) {
            alert('Игра закончена!')
        } else if (orderMove.motion % 2 === 0) {
            elem.value = '○';
        } else {
            elem.value = '×';
        };
        checkWinner()
    });
});

function checkWinner() {
    winnerComb.forEach((winCount) => {
        let isWinX = true;
        let isWinO = true;

        winCount.forEach((winCountItem) => {
            isWinX = isWinX && buttons[winCountItem].value === "×";
            isWinO = isWinO && buttons[winCountItem].value === "○";
        });
  
        if (isWinX) {
            winCount.forEach((winCountItem) => { buttons[winCountItem].style.color ='green' });
        } else if (isWinO) {
            winCount.forEach((winCountItem) => { buttons[winCountItem].style.color ='green' });
        };
    });
};