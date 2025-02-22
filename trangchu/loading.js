function loadLoadingComponent () {
  fetch('loading.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('loadingContainer').innerHTML = html
    })
}

function showLoading () {
  const loadingOverlay = document.getElementById('loadingOverlay')
  if (loadingOverlay) {
    loadingOverlay.classList.add('active')
    setTimeout(() => {
      loadingOverlay.classList.remove('active')
      
    }, 5000)
  }
}

document.addEventListener('DOMContentLoaded', loadLoadingComponent)
