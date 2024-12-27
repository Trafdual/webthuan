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
  
  document.getElementById('copy-link').addEventListener('click', function () {
    const linkText = document.getElementById('link-text').textContent;
    navigator.clipboard.writeText(linkText).then(() => {
      showNotification('Đã sao chép dữ liệu vào clipboard!');
    }).catch(err => {
      console.error('Không thể sao chép liên kết: ', err);
    });
  });
  
  document.getElementById('copy-code').addEventListener('click', function () {
    const referralCode = '59085A';
    navigator.clipboard.writeText(referralCode).then(() => {
      showNotification('Đã sao chép mã giới thiệu vào clipboard!');
    }).catch(err => {
      console.error('Không thể sao chép mã giới thiệu: ', err);
    });
  });
  
  document.getElementById('save-qr').addEventListener('click', function () {
    const qrImage = document.getElementById('qr-code').src;
    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'qr-code.png'; 
    link.click();
  });
  