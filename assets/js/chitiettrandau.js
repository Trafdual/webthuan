document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal')
  const closeModalButton = document.querySelector('.close-modal')
  const itemNghichElements = document.querySelectorAll('.item-nghich')

  // Hiển thị modal khi bấm vào item-nghich
  itemNghichElements.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.remove('hidden')
    })
  })

  // Đóng modal khi bấm vào nút close
  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden')
  })

  // Đóng modal khi bấm ra ngoài modal-content
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden')
    }
  })
})
