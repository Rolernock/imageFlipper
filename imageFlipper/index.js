const body = document.querySelector('body');
const leftSide = document.querySelector('.left-side')
const rightSide = document.querySelector('.right-side')
const imgLength = document.querySelectorAll('img').length
const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
let count = 0;

leftSide.style.top = `-${(imgLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const pageHeight = body.clientHeight
    if(direction == 'up') {
        count++
        if(count > imgLength -1 ) {
            count = 0
        }
    } else if(direction == 'down') {
        count--
        if(count < 0 ) {
            count = imgLength - 1
        }
    }
    rightSide.style.transform = `translateY(-${count * pageHeight}px )`
    leftSide.style.transform = `translateY(${count * pageHeight}px )`
}