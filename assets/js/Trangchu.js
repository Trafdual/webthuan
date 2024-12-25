let currentIndex = 0

function showSlide (index) {
  const slides = document.querySelectorAll('.carousel-item')
  const totalSlides = slides.length

  if (index >= totalSlides) {
    currentIndex = 0
  } else if (index < 0) {
    currentIndex = totalSlides - 1
  } else {
    currentIndex = index
  }

  const offset = -currentIndex * 100
  document.querySelector(
    '.carousel-inner'
  ).style.transform = `translateX(${offset}%)`

  slides.forEach(slide => slide.classList.remove('active'))
  slides[currentIndex].classList.add('active')
}

function nextSlide () {
  showSlide(currentIndex + 1)
}

function prevSlide () {
  showSlide(currentIndex - 1)
}

setInterval(() => {
  nextSlide()
}, 5000)

const categories = document.querySelectorAll('.category')

categories.forEach(category => {
  category.addEventListener('click', function () {
    categories.forEach(cat => cat.classList.remove('active'))
    this.classList.add('active')
  })
})

let currentCategory = ''

function loadContent (category, filePath) {
  const content = document.querySelector('.content')
  if (currentCategory === category) return

  currentCategory = category

  content.innerHTML = ''

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Không thể tải trang ${category}`)
      }
      return response.text()
    })
    .then(html => {
      content.innerHTML = html
    })
    .catch(error => {
      console.error(error)
      content.innerHTML = `<p>Không thể tải trang ${category}.</p>`
    })
}

document.getElementById('tyso').addEventListener('click', function () {
  loadContent('tyso', '../../trangchu/score/score.html')
})

document.getElementById('casino').addEventListener('click', function () {
  loadContent('casino', '../../trangchu/casino/casino.html')
})

document.getElementById('nohu').addEventListener('click', function () {
  loadContent('nohu', '../../trangchu/nohu/nohu.html')
})

document.getElementById('xocdia').addEventListener('click', function () {
  loadContent('xocdia', '../../trangchu/xocdia/xocdia.html')
})

document.getElementById('xoso').addEventListener('click', function () {
  loadContent('xoso', '../../trangchu/xoso/xoso.html')
})

document.addEventListener('DOMContentLoaded', function () {
  const tysoCategory = document.getElementById('tyso')
  tysoCategory.classList.add('active') // Thêm class active vào phần "Tỷ số"
  tysoCategory.click() // Tự động kích hoạt sự kiện click của "Tỷ số"
})
function toggleSidebar () {
  var sidebar = document.getElementById('sidebar')
  var overlay = document.getElementById('overlay')

  // Kiểm tra xem sidebar có đang mở không
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show') // Đóng sidebar
    overlay.classList.remove('show') // Ẩn overlay
  } else {
    sidebar.classList.add('show') // Mở sidebar
    overlay.classList.add('show') // Hiển thị overlay
  }
}

const percentageElements = document.getElementsByClassName('percentage')

const progressElements = document.getElementsByClassName('progress')

for (let i = 0; i < percentageElements.length; i++) {
  percentageElements[i].addEventListener('input', function () {
    var percentageText = this.textContent.trim()
    var percentageValue = parseFloat(percentageText) 

    if (
      !isNaN(percentageValue) &&
      percentageValue >= 0 &&
      percentageValue <= 100
    ) {
      progressElements[i].style.width = percentageValue + '%'
    } else {
      console.log('Invalid percentage value')
    }
  })
}


