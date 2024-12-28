const processingTab = document.getElementById('processing-tab');
        const completedTab = document.getElementById('completed-tab');
        const processingContent = document.getElementById('processing-content');
        const completedContent = document.getElementById('completed-content');

        processingTab.addEventListener('click', () => {
            processingTab.classList.add('active');
            completedTab.classList.remove('active');
            processingContent.style.display = 'block';
            completedContent.style.display = 'none';
        });

        completedTab.addEventListener('click', () => {
            completedTab.classList.add('active');
            processingTab.classList.remove('active');
            completedContent.style.display = 'block';
            processingContent.style.display = 'none';
        });