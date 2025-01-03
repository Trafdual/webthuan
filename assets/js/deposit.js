const buttons = document.querySelectorAll('.deposit-buttons button')
const input = document.getElementById('deposit-amount')
const received = document.querySelector('.deposit-received span')
const result = document.querySelector('.deposit-result')

let currentIndex = 0

function showSlide (index) {
  const slides = document.querySelectorAll('.deposit-carousel-item')
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
    '.deposit-carousel-inner'
  ).style.transform = `translateX(${offset}%)`

  slides.forEach(slide => slide.classList.remove('active'))
  slides[currentIndex].classList.add('active')
}

function nextSlide (e) {
  e.preventDefault()
  showSlide(currentIndex + 1)
}

function prevSlide (e) {
  e.preventDefault()
  showSlide(currentIndex - 1)
}

function next(){
  showSlide(currentIndex + 1)

}

setInterval(() => {
  next()
}, 5000)

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()
    input.value = button.textContent
    const buttonValue = parseInt(button.textContent, 10)
    result.textContent =
      '= ' + (buttonValue * 1000).toLocaleString('vi-VN') + ' VND'
    received.textContent = button.textContent + ' ' + 'VND(k)'
    buttons.forEach(btn => btn.classList.remove('active'))

    button.classList.add('active')
  })
})

input.addEventListener('input', () => {
  const inputValue = parseInt(input.value, 10)
  if (!isNaN(inputValue)) {
    result.textContent =
      '= ' + (inputValue * 1000).toLocaleString('vi-VN') + ' VND'
    received.textContent = input.value + ' ' + 'VND(k)'
  } else {
    result.textContent = '= 0 VND'
    received.textContent = '0.00' + ' ' + 'VND(k)'
  }
})

function handleProceed (event) {
  event.preventDefault()

  const form = document.querySelector('form')
  const selectedMethod = document.querySelector('.deposit-method-item.selected')
  const amountInput = form.querySelector('input[name="amount"]')

  if (!selectedMethod) {
    alert('Vui lòng chọn phương thức nạp tiền.')
    return
  }

  if (form.reportValidity()) {
    const amount = amountInput ? parseInt(amountInput.value, 10) * 1000 : 0

    if (
      selectedMethod.querySelector('.deposit-method-name').innerText ===
        'CỔNG VIP' ||
      selectedMethod.querySelector('.deposit-method-name').innerText ===
        'QUÉT MÃ QR'
    ) {
      window.location.href = `../../qrnaptien/qrnaptien.html?amount=${encodeURIComponent(
        amount
      )}`
    } else if (
      selectedMethod.querySelector('.deposit-method-name').innerText === 'USDT'
    ) {
      window.location.href = `../../qrnaptien/qrusdt.html`
    }
  }
}



document.querySelectorAll('.deposit-method-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.deposit-method-item').forEach(method => {
      method.classList.remove('selected')
    })
    this.classList.add('selected')
  })
})
