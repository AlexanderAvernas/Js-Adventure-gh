// Description-menu
// 1. Hamburgermenu
// 2. Slides
// 3. Diagram
// 4. Weather Station


// 1. Hamburgermenu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  })

  document.querySelectorAll('.nav-link').forEach(n => n.
  addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

  }))

  // 2. SlideShow

  let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// 3. Diagram section

// Destination
fetch('destination.json')
.then(response => response.json())
.then((result) => {

  const popularDestinations = document.getElementById('popularDestinations').getContext('2d')

  const data = [],
  labels = [];

  for (let n = 0; n < result.length; n++) {
    const city = result[n]

    data.push(city.votes)
    labels.push(city.destination)
  }

  console.log('data', data);
  console.log('labels', labels);



const myChart = new Chart(popularDestinations, {
  type: 'pie',
  data: {
      labels: labels,
      datasets: [{
          label: '# of Votes',
          data: data,
          backgroundColor: [
            '#949BF6',
            '#F59AF6',
            '#A3FEE7',
            '#C4C7A3',
          ],
          borderColor: [
            'black',
            'black',
            'black',
            'black',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

})


// Adventures

fetch('add.json')
.then(response => response.json())
.then((result) => {

  const popularAdventures = document.getElementById('popularAdventures').getContext('2d')

  const data = [],
  labels = [];

  for (let n = 0; n < result.length; n++) {
    const activity = result[n]

    data.push(activity.v)
    labels.push(activity.d)
  }

  console.log('data', data);
  console.log('labels', labels);



const my = new Chart(popularAdventures, {
  type: 'pie',
  data: {
      labels: labels,
      datasets: [{
          label: '# of Votes',
          data: data,
          backgroundColor: [
              '#949BF6',
              '#F59AF6',
              '#A3FEE7',
              '#C4C7A3',
          ],
          borderColor: [
              'black',
              'black',
              'black',
              'black',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

})





// 4. weather API

// Väderstation
let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let wind = document.querySelector('.wind');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

// Bilder som passar description

let imgSun = document.createElement('img')
imgSun.src = 'assets/sun.png'
let imgPartlyCloud = document.createElement('img')
imgPartlyCloud.src = 'assets/partly_cloudy.png'
let imgRain = document.createElement('img')
imgRain.src = 'assets/rain.png'
let imgCloud = document.createElement('img')
imgCloud.src = 'assets/cloudy.png'

let src = document.getElementById('descriptionsImg')


// bilder till wind
let imgWind = document.createElement('img')
imgWind.src = 'assets/wind.png'

let srcWind = document.getElementById('windImg')

// bilder till temperetur
let imgTemp = document.createElement('img')
imgTemp.src = 'assets/temp.png'

let srcTemp = document.getElementById('temperatureImg')

// Fetch med API samt funktion som visar väder samt bilder

button.addEventListener('click', function(){
  fetch('https://goweather.herokuapp.com/weather/,' + inputValue.value)
.then (response => response.json())
.then (data => {
  let windValue = data.wind;
  let tempValue = data.temperature;
  let descValue = data.description;

  wind.innerHTML = windValue
  temp.innerHTML = tempValue
  desc.innerHTML = descValue


  document.getElementById('descriptionsImg').innerHTML = '';

  if(descValue === 'Sunny' || descValue === 'Clear') {
    src.appendChild(imgSun);

  } if(descValue === 'Rain' || descValue === 'Light rain shower' || descValue === 'Moderate or heavy rain shower' || descValue === 'Light rain' || descValue === 'Patchy rain possible') {
    src.appendChild(imgRain)

  } if(descValue === 'Partly cloudy') {
  src.appendChild(imgPartlyCloud)

  } if(descValue === 'cloudy') {
    src.appendChild(imgCloud)

  } if(windValue !== '') {
    srcWind.appendChild(imgWind)

  } if(tempValue !== '') {
    srcTemp.appendChild(imgTemp)
  }


})

})
