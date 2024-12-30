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
      if (category === 'tyso') {
        updateProgress()
        btntabscore()
        Search()
      }
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
document.getElementById('thethao').addEventListener('click', function () {
  loadContent('thethao', '../../trangchu/thethao/thethao.html')
})
document.getElementById('daga').addEventListener('click', function () {
  loadContent('daga', '../../trangchu/daga/daga.html')
})


document.addEventListener('DOMContentLoaded', function () {
  const tysoCategory = document.getElementById('tyso')
  tysoCategory.classList.add('active')
  tysoCategory.click()
})
// function toggleSidebar () {
//   var sidebar = document.getElementById('sidebar')
//   var overlay = document.getElementById('overlay')

//   var isLargeScreen = window.matchMedia('(min-width: 450px)').matches

//   if (sidebar.classList.contains('show')) {
//     sidebar.classList.remove('show')
//     overlay.classList.remove('show')

//     if (isLargeScreen) {
//       sidebar.style.opacity = 0
//       sidebar.style.transform = 'translateX(150px)'
//     }
//   } else {
//     sidebar.classList.add('show')
//     overlay.classList.add('show')

//     if (isLargeScreen) {
//       sidebar.style.opacity = 1
//       sidebar.style.transform = 'translateX(450px)'
//     }
//   }
// }

function updateProgress () {
  document.querySelectorAll('.thanh').forEach(thanh => {
    const percentageElem = thanh.querySelector('.percentage')
    const progressElem = thanh.querySelector('.progress')

    if (percentageElem && progressElem) {
      const percentage = percentageElem.textContent

      progressElem.style.width = `${percentage}`
    }
  })
}

function lichthidau () {
  const ketqua = document.getElementById('ketqua')
  const lichthidau = document.getElementById('lichthidau')
  ketqua.style.display = 'none'
  lichthidau.style.display = 'block'
}

function ketqua () {
  const ketqua = document.getElementById('ketqua')
  const lichthidau = document.getElementById('lichthidau')
  ketqua.style.display = 'flex'
  lichthidau.style.display = 'none'
}

function btntabscore () {
  const btnKetQua = document.getElementById('btnketqua')
  const btnLichThiDau = document.getElementById('btnlichthidau')

  function activateTab (activeButton, inactiveButton) {
    activeButton.classList.add('active-tab')
    inactiveButton.classList.remove('active-tab')
  }

  btnKetQua.addEventListener('click', function () {
    ketqua()
    activateTab(btnKetQua, btnLichThiDau)
  })

  btnLichThiDau.addEventListener('click', function () {
    lichthidau()
    activateTab(btnLichThiDau, btnKetQua)
  })
}

function removeVietnameseTones (str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd') 
    .replace(/Đ/g, 'D')
    .toLowerCase()
}

function Search () {
  const inputSearch = document.querySelector('.inputtk input')
  const items = document.querySelectorAll('.divitemtyso')

  inputSearch.addEventListener('input', function () {
    const searchText = removeVietnameseTones(
      inputSearch.value.trim().toLowerCase()
    )

    items.forEach(item => {
      const titleElement = item.querySelector('.tieudescore h4')
      const teamElements = item.querySelectorAll('.doibong p')

      const titleText = titleElement
        ? removeVietnameseTones(titleElement.textContent.toLowerCase())
        : '' 
      const teamTexts = Array.from(teamElements).map(team =>
        removeVietnameseTones(team.textContent.toLowerCase())
      )

      const matchesTitle = titleText.includes(searchText)
      const matchesTeam = teamTexts.some(teamText =>
        teamText.includes(searchText)
      )

      if (matchesTitle || matchesTeam) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  })
}

