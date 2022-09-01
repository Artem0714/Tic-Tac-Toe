for (let i = 0; i < 9; i++) {
    document.body.insertAdjacentHTML('beforeend', '<input id = "elem" type = "button">  </input>');
}

const buttons = document.querySelectorAll('input')
const orderMove = {
    motion: 0
};
const bumButton = document.querySelectorAll('#num')


buttons.forEach(elem => {
    elem.addEventListener('click', function getValue() {
        orderMove.motion += 1;
        if (orderMove.motion > 9) {
            alert('Игра закончена!')
        } else if (orderMove.motion % 2 === 0) {
            elem.value = '○';
        } else {
            elem.value = '×';
        };
        console.log(bumButton)
        // if (orderMove.motion > 6) {
        //     if ()
        // }
        // document.querySelector('#elem').style.color = 'black';
    });
});