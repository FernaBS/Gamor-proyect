
// Cambio modo dark-ligth
const switchMode = document.querySelector(".switch-mode")

switchMode.addEventListener("click", e => {
    switchMode.classList.toggle("active")
    document.body.classList.toggle("active")
})

/*
* Implementacion para evento boton suma
*/

const nameGame = document.getElementById('filterName')
const games = [
    {name: 'COD Warzone', games: [
        {party: 'Dr Team', img: './assets/images/userLogo.jpeg'},
        {party: 'Mia Plays', img: './assets/images/userLogo2.jpeg'},
        {party: 'Keoxer', img: './assets/images/userLogo3.jpeg'}
    ]},
    {name: 'Minecraft', games: [
        {party: 'Dr Dog', img: './assets/images/userLogo.jpeg'},
        {party: 'Dexter', img: './assets/images/userLogo2.jpeg'},
        {party: 'Mewtwo', img: './assets/images/userLogo3.jpeg'},
        {party: 'Vextroyer', img: './assets/images/userLogo.jpeg'},
        {party: 'Talion', img: './assets/images/userLogo2.jpeg'},
        {party: 'Keoxer', img: './assets/images/userLogo3.jpeg'},
        {party: 'Vextroyer', img: './assets/images/userLogo.jpeg'},
        {party: 'Talion', img: './assets/images/userLogo2.jpeg'},
        {party: 'Keoxer', img: './assets/images/userLogo3.jpeg'}
    ]},
    {name: 'FIFA 21', games: [
        {party: 'Dr Team', img: './assets/images/userLogo.jpeg'},
        {party: 'Mia Plays', img: './assets/images/userLogo2.jpeg'},
        {party: 'Keoxer', img: './assets/images/userLogo3.jpeg'}
    ]}
]
const searchButton = document.querySelector(".search-button")
const orderList = document.querySelector('ol')
searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    const game = games.find( e => e.name.toLowerCase() === nameGame.value.toLowerCase())
    orderList.innerHTML = ''
    for (let i = 0; i < game.games.length; i++) {
        const party = game.games[i].party;
        const user = document.createElement('li')
        user.classList.toggle('active-filter')
        const numberList = document.createElement('span')
        numberList.textContent = i+1
        user.textContent = party
        user.insertAdjacentElement('afterbegin', numberList)
        const addButton = document.createElement('button')
        addButton.textContent = '+'
        addButton.addEventListener('click', () => createRandomDiv(game.games[i].img))
        const img = document.createElement('img')
        img.src = game.games[i].img
        user.appendChild(img)
        user.appendChild(addButton)
        orderList.appendChild(user)
    }
})

const section = document.querySelector('.img-background');

/** 
 * Metodo que coge las medidas del seccion de la imagen y devuelve latitud y longitud dentro de dicho contenedor
 */
function getRandomPosition() {
  const sectionWidth = section.offsetWidth;
  const sectionHeight = section.offsetHeight;
  const divSize = 30;
  const maxLeft = sectionWidth - divSize;
  const maxTop = sectionHeight - divSize;
  
  const left = Math.floor(Math.random() * maxLeft);
  const top = Math.floor(Math.random() * maxTop);
  
  return { left, top };
}

/**
 * Metodo que crea un div con imagen de fondo y lo ubica dentro de la seccion img-background
 * @param i posicion de la img dentro de games del array juegos
 */

function createRandomDiv(i) {
  const div = document.createElement('div');
  const { left, top } = getRandomPosition();
  div.style.backgroundImage = `url(${i})`
  div.style.left = `${left}px`;
  div.style.top = `${top}px`;
  section.appendChild(div);
}