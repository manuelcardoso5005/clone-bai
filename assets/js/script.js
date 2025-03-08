document.querySelectorAll(".nav-options").forEach(item => {
    item.addEventListener("mouseover", (e) => {
        e.preventDefault();

        // Fecha todos os submenus antes de abrir um novo
        document.querySelectorAll(".nav-submenu").forEach(submenu => {
            submenu.classList.remove("show");
        });

        let submenu = item.nextElementSibling;
        if (submenu && submenu.classList.contains("nav-submenu")) {
            submenu.classList.add("show");
        }
    });
});

// Fecha os submenus ao clicar fora do menu
document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-menu")) {
        document.querySelectorAll(".nav-submenu").forEach(submenu => {
            submenu.classList.remove("show");
        });
    }
});
