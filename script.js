(function () {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    const equal = document.querySelector('.equal');
    const clear = document.querySelector('.clear');
    const del = document.querySelector('.delete');
    let equal_pressed = 0;
    window.onload = () => {
        screen.value = "";
    }
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (equal_pressed === 1) {
                screen.value = "";
                equal_pressed = 0;
            }
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
    equal.addEventListener('click', () => {
        equal_pressed = 1;
        try {
            let solution = eval(screen.value);
            if (solution === "") {
                solution = "";
            }
            if (Number.isInteger(solution)) {
                screen.value = solution;
            } else {
                screen.value = solution.toFixed(2);
            }
        } catch (e) {
            alert("Invalid Input!")
        }
    })

    clear.addEventListener('click', () => {
        screen.value = " ";
    })
    del.addEventListener('click', () => {
        screen.value = screen.value.substring(0, screen.value.length - 1);
    })
})();