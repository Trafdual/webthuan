const leftArrow = document.getElementById('left-arrow');
        const rightArrow = document.getElementById('right-arrow');
        const icons = document.querySelectorAll('.icon-cskh');

        let currentStartIndex = 0;

        function updateVisibility() {
            icons.forEach((icon, index) => {
                icon.style.display = (index >= currentStartIndex && index < currentStartIndex + 4) ? 'flex' : 'none';
            });

            leftArrow.classList.toggle('disabled', currentStartIndex === 0);
            rightArrow.classList.toggle('disabled', currentStartIndex + 4 >= icons.length);
        }

        leftArrow.addEventListener('click', () => {
            if (currentStartIndex > 0) {
                currentStartIndex--;
                updateVisibility();
            }
        });

        rightArrow.addEventListener('click', () => {
            if (currentStartIndex + 4 < icons.length) {
                currentStartIndex++;
                updateVisibility();
            }
        });

        updateVisibility();