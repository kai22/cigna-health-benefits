import { CountUp } from '../libs/countUp.min.js';

const average = 148;

const countUp = new CountUp('totalText', 0, {
    duration: 1,
    useGrouping: true,
    separator: ',',
    prefix: '$'
});

if (!countUp.error) {
    countUp.start();
} else {
    console.error(countUp.error);
}

let button = document.querySelector(".savings-button");
let input = document.querySelector(".employee-input")


function textToNumber(t) {
    if (t == '')
        return 0

    return parseInt(t)
}

function calculateTotal(emp) {
    return emp * average
}

button.onclick = () => {
    var employees = textToNumber(input.value)
    var total = calculateTotal(employees)
    
    countUp.update(total);
};
