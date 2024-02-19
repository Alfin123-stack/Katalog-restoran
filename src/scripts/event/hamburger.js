const hamburger = () => {
  const menu = document.querySelector('#hamburgerMenu')
  const ulToggle = document.querySelector('.ulToggle')
  const body = document.querySelector('body')
  const hero = document.querySelector('.hero')
  const main = document.querySelector('#utama')

  menu.addEventListener('click', (e) => {
    ulToggle.classList.toggle('open')
    hero.classList.toggle('body')
    main.classList.toggle('body')
    e.stopPropagation()
  })

  body.addEventListener('click', () => {
    ulToggle.classList.remove('open')
    hero.classList.remove('body')
    main.classList.remove('body')
  })
}

export default hamburger
