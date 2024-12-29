const params = new URLSearchParams(window.location.search)
const amount = params.get('amount')

if (amount) {
  document.getElementById('amountdisplay').textContent = `${parseFloat(amount).toLocaleString()}`
}

let countdownTime = 300

const countdownElement = document.querySelector('.demnguoc')

function updateCountdown () {
  const hours = Math.floor(countdownTime / 3600)
  const minutes = Math.floor((countdownTime % 3600) / 60)
  const seconds = countdownTime % 60

  countdownElement.textContent =
    String(hours).padStart(2, '0') +
    ':' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0')

  if (countdownTime > 0) {
    countdownTime--
  } else {
    clearInterval(countdownInterval)
    alert('Hết hạn thanh toán')
    window.location.href = '/deposit/deposit.html'

  }
}

const countdownInterval = setInterval(updateCountdown, 1000)

updateCountdown()
