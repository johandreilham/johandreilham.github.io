
//submit email form
(function () {
    emailjs.init("jzk2PsYjU5Z6n173a"); // Ganti dengan User ID dari EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();


    emailjs.sendForm('service_f8s6o1s', 'template_4p2v48k', this)
        .then(function (response) {

            // Tampilkan alert jika pengiriman berhasil
            alert('Your message has been sent successfully!');

            // Kosongkan formulir setelah berhasil dikirim
            document.getElementById('contact-form').reset();
        }, function (error) {

            // Tampilkan alert jika terjadi kesalahan
            alert('Failed to send the message. Please try again.');
        });
});

//reload page
document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded'); // Menampilkan pesan saat  halaman dimuat
    if (window.location.hash === '') {
        console.log('Hash is empty, setting to #home');
        window.location.hash = '#home';
    }

    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('click', function (event) {
            console.log('Logo clicked');
            event.preventDefault();
            window.location.hash = '#home';
        });
    }
});

document.documentElement.scrollTop = 0;

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

