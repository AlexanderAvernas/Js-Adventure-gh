// Description-menu
// 1. Hamburgermenu
// 2. Form with PUT

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  })

  document.querySelectorAll('.nav-link').forEach(n => n.
  addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active')

  }))

// 2. Form with PUT

fetch('http://avancera.app/cities/',)
.then(res => {
  return res.json();
})
.then(data => {
  data.forEach(user => {
    const airportId = `<option>${user.id}</option>`;
    const airportName = `<option>${user.name}</option>`;

    document.querySelector('select').insertAdjacentHTML('beforeend', airportName);
    document.querySelector('select').insertAdjacentHTML('beforeend', airportId);


  })

})

let form = document.querySelector('#form')


form.addEventListener('submit', (e) => {
e.preventDefault();

let getMyValue = document.querySelector('#myValue select').value;
  console.log(getMyValue);
let destination = document.querySelector('#destination').value;
let travelers = document.querySelector('#travelers').value;
let correctDestination = document.querySelector('#correctDestination')
let errorDestination = document.querySelector('#errorDestination')


fetch("https://avancera.app/cities/" + getMyValue,{
body: JSON.stringify({
  "id": getMyValue,
  "name": destination,
  "population": Number(travelers),
}),
headers: {
  "Content-Type": "application/json",
},
method: "PUT"
}).then(response => {
console.log(response)
})

.then(data => {

errorDestination.innerHTML = '';

if(destination === '' || (isNaN(travelers)) || travelers === '') {
  return errorDestination.innerHTML = ('Something went wrong, try again!')
} else {
  return errorDestination.innerHTML = (`Thanks, you have booked a flight to ${destination} for ${travelers} people. `)
}

})
})
