function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');
    notification.classList.add('show');
  
    setTimeout(() => {
      notification.classList.remove('show');
      notification.classList.add('hidden');
    }, 3000); 
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
  