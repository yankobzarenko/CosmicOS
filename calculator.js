let expression = document.querySelector("#expression")
let result = document.querySelector("#result")

function pressNumber(e) {
    if (result.innerHTML === "0") {
        result.innerHTML = e.innerHTML;
    } else {
        result.innerHTML += e.innerHTML
    }
}

function clearAll() {
    expression.innerHTML = ""
    result.innerHTML = "0"
}

function regClear() {
    result.innerHTML = result.innerHTML.slice(0, -1)
}

function pressEqual() {
    let exp = result.innerHTML;
    expression.innerHTML = exp;
    exp = exp.replace(/x/g, "*").replace(/÷/g, "/")
    let res
    try {
        res = eval(exp)
        if (res.toString().indexOf(".") !==-1) {
            res = res.toFixed(4)
        }
    } catch (e) {
        res = "Error"
    }
    result.innerHTML = res
}

function pressOperator(e) {
    let lastOperator = result.innerHTML.slice(-1);
    if (["+", "-", "×", "÷"].includes(lastOperator)) {
        result.innerHTML = result.innerHTML.slice(0, -1) + e.innerHTML
    } else {
        result.innerHTML += e.innerHTML;
    }
}

function pressDecimal() {
    result.innerHTML += "."
}

function pressBracket(e) {
    result.innerHTML += e.innerHTML
}

document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "0":
            pressNumber(document.querySelector('button:nth-child(13)'));
            break;
        case "1":
            pressNumber(document.querySelector('button:nth-child(1)'));
            break;
        case "2":
            pressNumber(document.querySelector('button:nth-child(2)'));
            break;
        case "3":
            pressNumber(document.querySelector('button:nth-child(3)'));
            break;
        case "4":
            pressNumber(document.querySelector('button:nth-child(5)'));
            break;
        case "5":
            pressNumber(document.querySelector('button:nth-child(6)'));
            break;
        case "6":
            pressNumber(document.querySelector('button:nth-child(7)'));
            break;
        case "7":
            pressNumber(document.querySelector('button:nth-child(9)'));
            break;
        case "8":
            pressNumber(document.querySelector('button:nth-child(10)'));
            break;
        case "9":
            pressNumber(document.querySelector('button:nth-child(11)'));
            break;
        case "+":
            pressOperator(document.querySelector('button:nth-child(16)'));
            break;
        case "-":
            pressOperator(document.querySelector('button:nth-child(12)'));
            break;
        case "*":
            pressOperator(document.querySelector('button:nth-child(8)'));
            break;
        case "/":
            pressOperator(document.querySelector('button:nth-child(4)'));
            break;
        case ".":
            pressDecimal();
            break;
        case "(":
            pressBracket(document.querySelector('button:nth-child(14)'));
            break;
        case ")":
            pressNumber(document.querySelector('button:nth-child(15)'));
            break;
        case "Enter":
            e.preventDefault();
            pressEqual()
            break;
        case "Backspace":
            regClear();
            break;
        case "Escape":
            clearAll();
            break;
    }
})