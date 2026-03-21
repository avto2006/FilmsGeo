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
const comedy_films = document.querySelector('.comedy_films')
const drama_films = document.querySelector('.drama_films')
const fantasy_films = document.querySelector('.fantasy_films')
const horror_films = document.querySelector('.horror_films')
const mystery_films = document.querySelector('.mystery_films')
const romance_films = document.querySelector('.romance_films')

action.addEventListener('click', () => {
      action.style.backgroundColor = 'blue';
      comedy.style.backgroundColor = 'black';
      actn_films.style.display = 'flex';
      comedy_films.style.display = 'none';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'none';
      romance_films.style.display = 'none';
})

comedy.addEventListener('click', () => {
      action.style.backgroundColor = 'black';
      comedy.style.backgroundColor = 'blue';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'flex';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'none';
      romance_films.style.display = 'none';
})