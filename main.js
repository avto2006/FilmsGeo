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
      actn_films.style.display = 'flex';
      comedy_films.style.display = 'none';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'none';
      romance.style.backgroundColor = 'rgb(101, 101, 181)';
})



comedy.addEventListener('click', () => {
      action.style.backgroundColor = 'rgb(101, 101, 181)';
      comedy.style.backgroundColor = 'blue';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'flex';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'none';
      romance_films.style.display = 'none';
    
})

drama.addEventListener('click', () => {
      action.style.backgroundColor = 'rgb(101, 101, 181)';
      drama.style.backgroundColor = 'blue';
      comedy.style.backgroundColor = 'rgb(101, 101, 181)';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'none';
      drama_films.style.display = 'flex';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'none';
      romance_films.style.display = 'none';
      
})

fantasy.addEventListener('click', () => {
      action.style.backgroundColor = 'rgb(101, 101, 181)';
      drama.style.backgroundColor = 'rgb(101, 101, 181)';
      comedy.style.backgroundColor = 'rgb(101, 101, 181)';
      fantasy.style.backgroundColor = 'blue';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'none';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'flex';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'none';
      romance_films.style.display = 'none';
      
})

horror.addEventListener('click', () => {
      action.style.backgroundColor = 'rgb(101, 101, 181)';
      drama.style.backgroundColor = 'rgb(101, 101, 181)';
      comedy.style.backgroundColor = 'rgb(101, 101, 181)';
      fantasy.style.backgroundColor = 'rgb(101, 101, 181)';
      horror.style.backgroundColor = 'blue';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'none';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'flex';
      mystery_films.style.display = 'none';
      romance_films.style.display = 'none';
      
})


mystery.addEventListener('click', () => {
      action.style.backgroundColor = 'rgb(101, 101, 181)';
      drama.style.backgroundColor = 'rgb(101, 101, 181)';
      comedy.style.backgroundColor = 'rgb(101, 101, 181)';
      fantasy.style.backgroundColor = 'rgb(101, 101, 181)';
      horror.style.backgroundColor = 'rgb(101, 101, 181)';
      mystery.style.backgroundColor = 'blue';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'none';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'flex';
      romance_films.style.display = 'none';
      
})

romance.addEventListener('click', () => {
      action.style.backgroundColor = 'rgb(101, 101, 181)';
      drama.style.backgroundColor = 'rgb(101, 101, 181)';
      comedy.style.backgroundColor = 'rgb(101, 101, 181)';
      fantasy.style.backgroundColor = 'rgb(101, 101, 181)';
      mystery.style.backgroundColor = 'rgb(101, 101, 181)';
      romance.style.backgroundColor = 'blue';
      actn_films.style.display = 'none';
      comedy_films.style.display = 'none';
      drama_films.style.display = 'none';
      fantasy_films.style.display = 'none';
      horror_films.style.display = 'none';
      mystery_films.style.display = 'none';
      romance_films.style.display = 'flex';
})



function go1() {
      window.location.href = 'https://www.youtube.com/watch?v=VFkjBy2b50Q'
}