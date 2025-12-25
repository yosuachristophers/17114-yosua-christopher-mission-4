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


// Date Time
document.addEventListener("DOMContentLoaded", () => {
    const monthPicker = document.getElementById("monthPicker");
    const now = new Date();
    monthPicker.value = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2, "0")}`;
});


// Beda Lagi
    const dateList = document.getElementById("date-list");

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 - 11

    // jumlah hari dalam bulan ini
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // nama hari
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayName = dayNames[date.getDay()];
        const fullDate = date.toISOString().split("T")[0]; // yyyy-mm-dd

        const button = document.createElement("button");
        button.className = "date-item flex flex-col items-center p-3 border rounded-xl text-gray-600";
        button.dataset.date = fullDate;

        button.innerHTML = `
            <span class="font-bold">${dayName}</span>
            <span>${String(day).padStart(2, "0")}</span>
        `;

        dateList.appendChild(button);
    }
