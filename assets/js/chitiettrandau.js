document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal')
  const closeModalButton = document.querySelector('.close-modal')
  const itemNghichElements = document.querySelectorAll('.item-nghich')
  itemNghichElements.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.remove('hidden')
    })
  })
  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden')
  })
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden')
    }
  })
})


function dinhDangThoiGian (giay) {
  const gio = Math.floor(giay / 3600)
  const phut = Math.floor((giay % 3600) / 60)
  const giayConLai = giay % 60

  return `${String(gio).padStart(2, '0')}:${String(phut).padStart(
    2,
    '0'
  )}:${String(giayConLai).padStart(2, '0')}`
}

function batDauDemNguoc (thoiLuong) {
  const phanTuDemNguoc = document.getElementById('dem-nguoc-thoi-gian')
  let thoiGianConLai = thoiLuong

  const interval = setInterval(() => {
    if (thoiGianConLai <= 0) {
      clearInterval(interval)
      phanTuDemNguoc.textContent = 'Hết giờ!'
    } else {
      phanTuDemNguoc.textContent = dinhDangThoiGian(thoiGianConLai)
      thoiGianConLai--
    }
  }, 1000)
}

function kiemTraVaXuLy () {
  const phanTuNgayMucTieu = document.getElementById('ngay-muc-tieu')
  const phanTuDemNguoc = document.getElementById('dem-nguoc-thoi-gian')

  const ngayMucTieuText = phanTuNgayMucTieu.textContent.trim()
  const [thoiGian, ngayThang] = ngayMucTieuText.split(' ')
  const [gio, phut] = thoiGian.split(':').map(Number)
  const [ngay, thang] = ngayThang.split('/').map(Number)

  const hienTai = new Date()
  const ngayMucTieu = new Date(
    hienTai.getFullYear(),
    thang - 1,
    ngay,
    gio,
    phut
  )

  const thoiGianDemNguocText = phanTuDemNguoc.textContent.trim()
  const [gioDemNguoc, phutDemNguoc, giayDemNguoc] = thoiGianDemNguocText
    .split(':')
    .map(Number)
  const thoiLuongDemNguoc =
    gioDemNguoc * 3600 + phutDemNguoc * 60 + giayDemNguoc

  const hieuThoiGian = Math.floor((hienTai - ngayMucTieu) / 1000)

  if (hieuThoiGian >= thoiLuongDemNguoc) {
    phanTuDemNguoc.textContent = 'Hết giờ!'
  } else if (hieuThoiGian > 0) {
    const thoiGianConLai = thoiLuongDemNguoc - hieuThoiGian
    batDauDemNguoc(thoiGianConLai)
  } else {
    phanTuDemNguoc.textContent = 'Chuẩn bị diễn ra'
    setTimeout(kiemTraVaXuLy, 1000)
  }
}

kiemTraVaXuLy()
