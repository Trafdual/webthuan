const buttons = document.querySelectorAll('.deposit-buttons button')
const input = document.getElementById('deposit-amount')
const received = document.querySelector('.deposit-received span')
const result = document.querySelector('.deposit-result')

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()
    input.value = button.textContent
    const buttonValue = parseInt(button.textContent, 10)
    result.textContent = '= ' + (buttonValue * 1000).toLocaleString('vi-VN') + ' VND'
    received.textContent = button.textContent + ' ' + 'VND(k)'
    // buttons.forEach(btn => btn.classList.remove('active'))

    // button.classList.add('active')
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

