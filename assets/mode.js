if (typeof (Storage) !== 'undefined') {
    themeMode();
}

function themeMode() {
    let html = document.documentElement;
    let themeMode = localStorage.getItem('themeMode') || html.getAttribute('data-theme');

    themeMode = themeMode === 'light' ? 'light' : 'dark';
    html.setAttribute('data-theme', themeMode);
    localStorage.setItem('themeMode', themeMode);

    document.addEventListener('DOMContentLoaded', function () {
        let switcher = document.getElementsByClassName('theme-mode-toggle')[0];

        if (themeMode === 'light') {
            switcher.classList.remove('theme-mode-toggle-checked');
        } else {
            switcher.classList.add('theme-mode-toggle-checked');
        }

        switcher.addEventListener('click', function () {
            this.classList.toggle('theme-mode-toggle-checked');
            if (this.classList.contains('theme-mode-toggle-checked')) {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('themeMode', 'dark');
            } else {
                html.setAttribute('data-theme', 'light');
                localStorage.setItem('themeMode', 'light');
            }
        });
    });
}
