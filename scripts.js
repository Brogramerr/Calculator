// // This function clear all the values
// function clearScreen() {
//     document.getElementById("result").value = "";
// }

// // This function display values
// function display(value) {
//     document.getElementById("result").value += value;
// }

// // This function evaluates the expression and returns result
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }

let display = document.getElementById('display');
let button = Array.from(document.getElementsByClassName('button'))


button.map(button => {
    button.addEventListener('click' , (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})