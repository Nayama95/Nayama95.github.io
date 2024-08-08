const icons = document.querySelectorAll('.coverskill');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icons.forEach(i => {
            if (i !== icon) {
                i.style.transform = 'scale(0.8)';
            }
        });
    });

    icon.addEventListener('mouseout', () => {
        icons.forEach(i => {
            i.style.transform = 'scale(1)';
        });
    });
});
