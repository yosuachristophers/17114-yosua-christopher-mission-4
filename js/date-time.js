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


// Month Picker Default to Current Month
    const monthPicker = document.getElementById("monthPicker");
    const dateList = document.getElementById("date-list");

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function generateDates(year, month) {
        dateList.innerHTML = ""; // reset isi

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayName = dayNames[date.getDay()];
            const fullDate = date.toISOString().split("T")[0];

            const button = document.createElement("button");
            button.className =
                "date-item flex flex-col items-center p-3 border rounded-xl text-gray-600 min-w-[64px]";
            button.dataset.date = fullDate;

            button.innerHTML = `
                <span class="font-bold">${dayName}</span>
                <span>${String(day).padStart(2, "0")}</span>
            `;

            dateList.appendChild(button);
        }
    }

    // 🔹 Set default ke bulan sekarang
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    monthPicker.value = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`;
    generateDates(currentYear, currentMonth);

    // 🔹 Event saat bulan diganti
    monthPicker.addEventListener("change", () => {
        const [year, month] = monthPicker.value.split("-");
        generateDates(parseInt(year), parseInt(month) - 1);
    });
