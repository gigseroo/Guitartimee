function setTheme(theme) {
    document.body.classList.remove("dark-theme","light-theme","cool-theme");
    document.body.classList.add(theme + "-theme");
    localStorage.setItem("theme", theme);
}

window.onload = function () {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);

    const selector = document.getElementById("themeSelector");
    if (selector) selector.value = saved;
};
