function updateClock() {
    const now = new Date();
    const jam   = String(now.getHours()).padStart(2, '0');
    const menit = String(now.getMinutes()).padStart(2, '0');
    const detik = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").innerHTML = `${jam}:${menit}:${detik}`;
}

// update setiap 1 detik
setInterval(() => {
    const waktu = new Date().toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta' // ganti kalau mau WITA/WIT
    });
    document.getElementById("clock").textContent = waktu;
}, 1000);

// panggil sekali di awal
updateClock();


function getTanggalFormatInggris() {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

document.getElementById("tanggal").textContent = getTanggalFormatInggris();

