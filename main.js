const leftArrow = document.querySelector('.arrow.left')
const rightArrow = document.querySelector('.arrow.right')
const filmsContainer = document.querySelector(".films")

rightArrow.addEventListener('click', () => {
    filmsContainer.scrollLeft += 300;
})

leftArrow.addEventListener('click', () => {
    filmsContainer.scrollLeft -= 300;
})