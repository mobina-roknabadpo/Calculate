(function () {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    const equal = document.querySelector('.equal');
    const clear = document.querySelector('.clear');
    let equal_pressed = 0;
    window.onload = () =>{
        screen.value = '';
    }
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
    equal.addEventListener('click', () => {
        if (screen.value === " ") {
            screen.value = " ";
        } else {
            screen.value = eval(screen.value);
        }
    })

    clear.addEventListener('click', () => {
        screen.value = " ";
    })
})();