import data from '../../public/data/DATA.json'

const cardResto = () => {
  const allResto = document.querySelectorAll('.allResto')

  allResto.forEach(element => {
    data.restaurants.forEach(data => {
      element.innerHTML += `
            <div class="card-resto" tabindex="0">
                    <div class="head-card">
                        <h2 tabindex="0">${data.name}</h2>
                    </div>
                    <div class="body-card" style="background-image: url(${data.pictureId}) ;">
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <span tabindex="0">${data.rating}</span>
                        </div>
                        <div class="place">
                            <i class="fa-solid fa-location-dot"></i>
                            <span tabindex="0">${data.city}</span>
                        </div>
                    </div>
            </div>
            `
    })
  })
}

export default cardResto
