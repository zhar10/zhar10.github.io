const actionLink = document.querySelectorAll(".Link-Card .link-action");

actionLink.forEach((action) => {

    action.addEventListener("click", (e) => {
        console.log("action : ", action.parentElement);
        const url = action.parentElement.getAttribute("href");
        console.log("url : ", url);
        navigator.clipboard.writeText(url); 
    })

    
});

// Ambil semua ikon sosial media
const icons = document.querySelectorAll('.sosmed a i');

// Tambahkan event listener untuk setiap ikon
icons.forEach(icon => {
    // Simpan warna asli ikon pada atribut data
    icon.dataset.originalColor = getComputedStyle(icon).color;

    icon.addEventListener('mouseenter', () => {
        icon.style.color = 'orange'; // Ubah warna ikon menjadi oranye saat mouse masuk
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.color = 'white'; // Kembalikan warna ikon ke putih saat mouse meninggalkan
    });
});

