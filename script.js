let buttons = document.getElementsByTagName('td');
let preCal = document.getElementById('pre-cal');
let curCal = document.getElementById('cur-cal');

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    let val = element.innerText
    if (val === 'C') {
        element.addEventListener('click', () => {
            preCal.innerText = "";
            curCal.innerText = "";
        })
    }
    else if (val === '=') {
        element.addEventListener('click', () => {
            preCal.innerText = curCal.innerText;
            curCal.innerText = eval(curCal.innerText);
        })
    }
    else {
        element.addEventListener('click', (e) => {
            curCal.innerText += e.target.innerText;
        })
    }
}

let delFunc = () => {
    curCal.innerText = curCal.innerText.substring(0 , curCal.innerText.length - 1)
}