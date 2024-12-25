async function loadHeader () {
  try {
    const response = await fetch('../../header/header.html')
    if (response.ok) {
      const headerContent = await response.text()
      document.querySelector('.header').innerHTML = headerContent
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
loadNavbar()
loadHeader()
