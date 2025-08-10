document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
});