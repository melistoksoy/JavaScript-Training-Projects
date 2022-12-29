const previousOp = document.querySelector('.previous-operand')
const currentOp = document.querySelector('.current-operand')
const numberButton = document.querySelectorAll('[data-num]')
const operationButton = document.querySelectorAll('[data-op]')
const deleteButton = document.querySelector('[data-del]')
const allClearButton = document.querySelector('[data-all-clear]')
const equalButton = document.querySelector('[data-equal]')
let prev, current, operation, b


function appendNumber(number) {
    //You can add only one '.'
    if (number === '.' && currentOp.innerHTML.includes('.')) return
    currentOp.innerHTML = currentOp.innerHTML.toString() + number.toString()

}

function compute(button) {
    current = currentOp.innerHTML
    let result

    if (button == '+') {
        result = parseFloat(prev) + parseFloat(current)
    }

    else if (button == '*') {
        result = parseFloat(prev) * parseFloat(current)
    }
    else if (button == '-') {
        result = parseFloat(prev) - parseFloat(current)
    }
    else if (button == '÷') {

        result = parseFloat(prev) / parseFloat(current)
    }
    currentOp.innerHTML = result
    previousOp.innerHTML = ''

}

function updateDisplay() {
    currentOp.innerHTML = ''
    previousOp.innerHTML = ''
}
function deleteChar() {
    currentOp.innerHTML = currentOp.innerHTML.toString().slice(0, -1)

}

numberButton.forEach(button => {
    button.addEventListener('click', function () {
        appendNumber(button.innerText)

    })
})
operationButton.forEach(button => {
    button.addEventListener('click', function () {

        if (previousOp.innerHTML !== '') {
            compute(operation)
        }
        previousOp.innerHTML = currentOp.innerHTML + button.innerHTML
        prev = previousOp.innerHTML
        currentOp.innerHTML = ''
        operation = button.innerHTML
    })

})
equalButton.addEventListener('click', item => {
    compute(operation)

})
allClearButton.addEventListener('click', function () {
    updateDisplay()
})
deleteButton.addEventListener('click', function () {
    deleteChar()
})



