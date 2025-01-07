document.addEventListener("DOMContentLoaded", function() {
    
    function changeFooterLanguage(language) {
        console.log("Selected language:", language);
        if (language === 'en') {
            window.location.href = './index_en.html'; 
        } else if (language === 'es') {
            window.location.href = './index.html';
        }
    }

    
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const language = this.getAttribute('data-language');
            changeFooterLanguage(language);
        });
    });
});