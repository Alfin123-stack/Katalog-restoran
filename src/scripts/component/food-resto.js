import data from '../../public/data/FOOD.json'

const foodResto = () => {
  const wrapAllfood = document.querySelector('.allFood')

  data.d.forEach(menu => {
    wrapAllfood.innerHTML += `
    <div class="food-card">
        <div class="head-food-card"
        style="background-image: url(${menu.Image})">
        </div>
        <div class="body-food-card">
            <h3>${menu.Title}</h3>
        </div>
    </div>
    `
  })
}

export default foodResto
