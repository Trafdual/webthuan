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
loadNavbar()
