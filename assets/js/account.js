function handleLoginStatus () {
  const isLoggedIn = localStorage.getItem('dangnhap')
  const accountinfoDiv = document.getElementById('account-info')
  const accountdkdnDiv = document.getElementById('account-dkdn')
  if (accountinfoDiv && accountdkdnDiv) {
    if (isLoggedIn) {
      accountinfoDiv.style.display = 'block'
      accountdkdnDiv.style.display = 'none'
    } else {
      accountinfoDiv.style.display = 'none'
      accountdkdnDiv.style.display = 'block'
    }
  } else {
    console.error(
      "Không tìm thấy 'account - info' hoặc 'account - dkdn' trong DOM."
    )
  }
}

function dangxuat(){
  localStorage.removeItem('dangnhap')
  window.location.href = '../../trangchu/trangchu.html'
}

handleLoginStatus()
