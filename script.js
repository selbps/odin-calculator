const buttons = document.querySelector('#buttons');
const screen = document.querySelector('#screen');

buttons.addEventListener(('onclick') => {
    const buttonText = event.target.textContent;
    screen.textContent = buttonText;
})