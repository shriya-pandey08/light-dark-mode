const toggleButton = document.getElementById('toggle-button');
let isNightMode = false;

toggleButton.addEventListener('click', () => {
    isNightMode = !isNightMode;
    if (isNightMode) {
        document.body.style.backgroundColor = 'var(--background-color-night)';
        document.body.style.color = 'var(--text-color-night)';
        toggleButton.innerHTML = '<i class="fa fa-sun"></i> Switch to Day Mode';
        toggleButton.classList.remove('day-mode');
        toggleButton.classList.add('night-mode');
    } else {
        document.body.style.backgroundColor = 'var(--background-color-day)';
        document.body.style.color = 'var(--text-color-day)';
        toggleButton.innerHTML = '<i class="fa fa-moon"></i> Switch to Night Mode';
        toggleButton.classList.remove('night-mode');
        toggleButton.classList.add('day-mode');
    }
});
