// var currentNumberWrapper = document.getElementById('currentNumber');
// var currentNumber = 0;

// function increment() {
//     currentNumber = currentNumber + 1;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement() {
//     currentNumber = currentNumber - 1;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const currentNumber = document.getElementById("currentNumber");
let contador = currentNumber.innerHTML = 0;

btnIncrementar.addEventListener("click", () => {
    currentNumber.innerHTML = ++contador;
    if (contador >= 0) {
        document.getElementById("currentNumber").style.color = "initial"
    }
})

btnDecrementar.addEventListener("click", () => {
    currentNumber.innerHTML = --contador;
    if (contador < 0) {
        document.getElementById("currentNumber").style.color = "red"
    } 
})