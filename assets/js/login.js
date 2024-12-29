function login (event) {
  event.preventDefault()

  sessionStorage.setItem('dangnhap', true)
  window.location.href = '../../trangchu/trangchu.html'
}

