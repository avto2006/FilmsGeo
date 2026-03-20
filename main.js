const leftArrow = document.querySelector('.arrow.left')
const rightArrow = document.querySelector('.arrow.right')
const filmsContainer = document.querySelector(".films")


rightArrow.addEventListener('click', () => {
    filmsContainer.scrollLeft += 300;
})

leftArrow.addEventListener('click', () => {
    filmsContainer.scrollLeft -= 300;
})

/* კატეგორიების ცვლადები, კატეგორიაზე დაჭერისას მის შესაბამისად
 უნდა გამოდიოდეს 3 ფილმი*/

const action = document.querySelector('.catg.action')
const comedy = document.querySelector('.catg.comedy')
const drama = document.querySelector('.catg.drama')
const fantasy = document.querySelector('.catg.fantasy')
const horror = document.querySelector('.catg.horror')
const mystery = document.querySelector('.catg.mystery')
const romance = document.querySelector('.catg.romance')

const actn_films = document.querySelector('.actn_films')
let comedy_films = document.querySelector('.comedy_films')

comedy.addEventListener('click', () => {
      action.style.backgroundColor = 'black';
      comedy.style.backgroundColor = 'blue';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'flex';
})