function setTheme(theme) {
    document.body.classList.remove(
        "dark-theme",
        "light-theme",
        "cool-theme"
    );

    document.body.classList.add(theme + "-theme");
    localStorage.setItem("theme", theme);
}

function applySavedTheme() {
    const saved = localStorage.getItem("theme") || "dark";

    document.body.classList.remove(
        "dark-theme",
        "light-theme",
        "cool-theme"
    );

    document.body.classList.add(saved + "-theme");

    const selector = document.getElementById("themeSelector");
    if (selector) selector.value = saved;
}

window.addEventListener("DOMContentLoaded", applySavedTheme);
