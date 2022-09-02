for (let i = 0; i < 16; i++) {
    const element = document.createElement('input');
    element.id = "elem";
    element.type = "button";
    document.querySelector('div').append(element);    
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
        let perem = document.getElementsByTagName('input')
        console.log (perem)

        checkWinner ();
        // if (orderMove.motion > 6) {
        //     if ()
        // }
        // document.querySelector('#elem').style.color = 'black';
    });
});

let kol = 16;
let kolnow = Math.sqrt(kol);
let ST = [];


for (let i = 0; i < 2*kolnow+2; i++ ) {
    ST.push([]);
    if (i < kolnow) {
        for (let k = 0; k < kolnow; k++) {
            ST[i].push(k+kolnow*i);
        };
    } else if (i < 2*kolnow) {
        for (let k = 0; k < kolnow; k++) {
            ST[i].push(kolnow*k+i-kolnow);
        };
    } else if (i < 2*kolnow+1) {
        for (let k = 0; k < kolnow; k++) {
            ST[i].push(k+kolnow*k);
        };
    } else {
        for (let k = 0; k < kolnow; k++) {
            ST[i].push((kolnow-1)*(k+1));
        };
    };
    
};

console.log(ST);