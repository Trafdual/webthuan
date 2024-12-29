const buttons = document.querySelectorAll('.options button')
const input = document.getElementById('input-sotien')
input.addEventListener('keydown', e => e.preventDefault())
input.addEventListener('paste', e => e.preventDefault())
input.addEventListener('focus', e => e.preventDefault())

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    input.value = button.textContent

    buttons.forEach(btn => btn.classList.remove('active'))

    button.classList.add('active')
  })
})
