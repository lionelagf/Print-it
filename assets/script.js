const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const bannerImg = document.querySelector('.banner-img')

let position = 0

arrowLeft.addEventListener('click', function () {
  if (position == 0) {
    position = slides.length - 1
  } else {
    position--
  }
  updateDots()
  elementCarrousel()
})

arrowRight.addEventListener('click', function () {
  if (position == slides.length - 1) {
    position = 0
  } else {
    position++
  }
  updateDots()
  elementCarrousel()
})

function createDots() {
  const dots = document.querySelector('.dots')
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div')
    dot.setAttribute('class', 'dot')
    dots.appendChild(dot)
  }
  updateDots()
}
function updateDots() {
  const dots = document.querySelectorAll('.dot')
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    if (i == position) {
      dot.classList.add('dot_selected')
    }
    else {
      dot.classList.remove('dot_selected')
    }
  }
}

function elementCarrousel() {
const element = slides[position]
const img = document.querySelector('.banner-img')
img.setAttribute('src', './assets/images/slideshow/' + element.image )

const textBanner = document.querySelector('.text_banner')
textBanner.innerHTML = element.tagLine

}

createDots()
