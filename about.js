// Description-menu
// 1. Hamburgermenu
// 2. Text section
// 3. Form-newspapper
// 4. LocalStorage

// 1.Hamburger menu

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

  // 2. Text-section
function myFunctionText () {
  let dots = document.querySelector('#dots')
  let moreText = document.querySelector('#moreText')
  let textButton = document.querySelector('#textButton')

  if(dots.style.display === 'none') {
    dots.style.display = 'inline';
    textButton.innerHTML = 'Read more'
    moreText.style.display = 'none'
  }else {
    dots.style.display = 'none';
    textButton.innerHTML = 'Read less ▲'
    moreText.style.display = 'inline'

  }
}

  // 3. Form newspapper

let myForm = document.querySelector('#myForm')
let adressName = document.querySelector('#name')
let postNumber = document.querySelector('#population')
let button = document.querySelector('#send')
let error = document.querySelector('#error')
let correct = document.querySelector('#correct')


myForm.addEventListener('submit', (e) =>  {
  e.preventDefault();
fetch('https://avancera.app/cities/', {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  "name": adressName.value,
  "population": Number(postNumber.value)
})
}).then(response => response.json())
.then(data => {

// 4. LocalStorage på adresser för katalogen.
  localStorage.adressName = adressName.value;
  localStorage.postNumber = Number(postNumber.value)


  error.innerHTML = '';
  correct.innerHTML = '';

  if(adressName.value === '' || (isNaN(postNumber.value)) || postNumber.value === '' ) {
    return error.innerHTML = ('Wrong adress, try again')
  }
  if(adressName.value !== '') {
    return correct.innerHTML = ('Thanks!')
  }

})
})
