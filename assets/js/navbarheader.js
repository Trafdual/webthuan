async function loadHeader () {
  try {
    const response = await fetch('../../header/header.html')
    if (response.ok) {
      const headerContent = await response.text()
      document.querySelector('.header').innerHTML = headerContent
      handleLoginStatus()
    } else {
      console.error('Không thể tải header.html:', response.status)
    }
  } catch (error) {
    console.error('Lỗi khi tải header:', error)
  }
}

async function loadNavbar () {
  try {
    const response = await fetch('../../navbar/navbar.html')
    if (response.ok) {
      const navbarContent = await response.text()
      document.querySelector('.navbar').innerHTML = navbarContent
    } else {
      console.error('Không thể tải navbar.html:', response.status)
    }
  } catch (error) {
    console.error('Lỗi khi tải navbar:', error)
  }
}
function handleLoginStatus () {
  const isLoggedIn = sessionStorage.getItem('danqlthenganhanggnhap')
  const btndkdnDiv = document.getElementById('btndkdn')
  const headerDnDiv = document.getElementById('headerdn')
  console.log(btndkdnDiv)
  if (btndkdnDiv && headerDnDiv) {
    if (isLoggedIn) {
      btndkdnDiv.style.display = 'none'
      headerDnDiv.style.display = 'flex'
    } else {
      btndkdnDiv.style.display = 'flex'
      headerDnDiv.style.display = 'none'
    }
  } else {
    console.error("Không tìm thấy '.btndkdn' hoặc '.headerdn' trong DOM.")
  }
}

loadNavbar()
loadHeader()

