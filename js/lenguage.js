// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Función para cambiar el idioma
    function changeFooterLanguage(language) {
        console.log("Selected language:", language); // Imprime el idioma seleccionado en la consola
        if (language === 'en') {
            window.location.href = './index_en.html'; // Redirige a la versión en inglés
        } else if (language === 'es') {
            window.location.href = './index.html'; // Redirige a la versión en español
        }
    }

    // Asigna el evento click a los elementos del dropdown
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const language = this.getAttribute('data-language');
            changeFooterLanguage(language);
        });
    });
});