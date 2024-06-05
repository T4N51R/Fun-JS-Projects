const evilButtons = document.getElementById('evilButton');
const buttonClick = false;

const moveButton = () => {
    let x = Math.random() * (window.innerWidth - evilButtons.offsetWidth);
    let y = Math.random() * (window.innerHeight - evilButtons.offsetHeight);

    evilButtons.style.position = 'absolute';
    evilButtons.style.left = `${x}px`;
    evilButtons.style.right = `${y}px`;
    evilButtons.style.top = `${y}px`;
}
const test = () => {
    console.log('Func')
    evilButtons.innerText = 'Clicked';
    evilButtons.removeEventListener('mouseenter', moveButton);
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'b' || event.key === 'A') {
        console.log('a');
        evilButtons.click()
        evilButtons.addEventListener('click', test);
        buttonClick = true;
    }
})

evilButtons.addEventListener('mouseenter', moveButton);
if (buttonClick) {
    console.log('check')

}


