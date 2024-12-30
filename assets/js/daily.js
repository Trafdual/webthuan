function showNotification (message, duration = 5000) {
  const notification = document.getElementById('notification')
  const noidung = document.querySelector('.ndnotification')
  const progressBar = document.querySelector('.progress-bar')

  noidung.textContent = message

  notification.classList.remove('hidden')
  notification.classList.add('show')

  progressBar.style.width = '0%'

  let startTime = Date.now()
  const interval = setInterval(() => {
    const elapsed = Date.now() - startTime
    const progress = Math.min((elapsed / duration) * 100, 100)
    progressBar.style.width = `${progress}%`

    if (progress >= 100) {
      clearInterval(interval)
      hideNotification()
    }
  }, 50)

  const closeBtn = document.querySelector('.close-notifi')
  closeBtn.addEventListener('click', () => {
    clearInterval(interval)
    hideNotification()
  })

  function hideNotification () {
    notification.classList.remove('show')
    notification.classList.add('hidden')
  }
}

  
  document.querySelectorAll('.icon-copy').forEach(copyButton => {
    copyButton.addEventListener('click', function () {
      const targetId = copyButton.getAttribute('data-target');
      const linkText = document.getElementById(targetId).textContent;
      navigator.clipboard.writeText(linkText)
        .then(() => {
          showNotification('Đã sao chép dữ liệu vào clipboard!');
        })
        .catch(err => {
          console.error('Không thể sao chép liên kết: ', err);
        });
    });
  });
  document.getElementById('save-qr').addEventListener('click', function () {
    const qrImage = document.getElementById('qr-code').src;
    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'qr-code.png'; 
    link.click();
  });
  