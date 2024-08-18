document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const explorer = document.getElementById('explorer');

    menu.addEventListener('click', function() {
        explorer.classList.toggle('active');
    });

    const button = document.getElementById('closeSupp');
    const support = document.getElementById('support');

    button.addEventListener('click', function() {
        support.style.display = "none";
    });
});