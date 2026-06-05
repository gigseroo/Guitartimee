function setTheme(theme) {
    document.body.classList.remove("dark", "light", "cool");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme") || "dark";
    document.body.classList.add(saved);

    const selector = document.getElementById("themeSelector");
    if (selector) selector.value = saved;
});
