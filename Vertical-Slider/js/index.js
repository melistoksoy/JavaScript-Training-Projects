const container = document.querySelector('.slider-container')
const leftSide = document.querySelector('.left-side')
const rightSide = document.querySelector('.right-side')
const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
//Number of divs in right slide
const slidesLength = rightSide.querySelectorAll('div').length

let slideIndex = 0
//Left side top position with respect to slides
leftSide.style.top = `-${(slidesLength - 1) * 100}vh`


downButton.addEventListener('click', () => changeSlide('down'))
upButton.addEventListener('click', () => changeSlide('up'))


const changeSlide = (direction) => {
    const sliderHeight = container.clientHeight
   
    if (direction == 'down') {
        slideIndex--
        if (slideIndex < 0) {
            slideIndex = slidesLength - 1
        }
    }
    else if (direction == 'up') {
        slideIndex++
        if (slideIndex > slidesLength - 1) {
            slideIndex = 0
        }
    }
    rightSide.style.transform = `translateY(-${slideIndex * sliderHeight}px)`
    leftSide.style.transform = `translateY(${slideIndex * sliderHeight}px)`
}

