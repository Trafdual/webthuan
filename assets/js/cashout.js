function handleProceed (event) {
  event.preventDefault()

  const form = document.querySelector('form')
  if (form.reportValidity()) {
    form.submit()
    window.location.href = '../../deposit/rutdposit.html'
  }
}
