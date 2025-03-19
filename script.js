const correctCode = "007";  // Ubah kode rahasia sesuai keinginan

function checkAccess() {
    let inputCode = document.getElementById("access-code").value;
    let errorMessage = document.getElementById("error-message");

    if (inputCode === correctCode) {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");

        // Efek suara saat berhasil masuk
        document.getElementById("effect-sound").play();

        // Animasi teks
        typeText("Selamat datang, agen. Misi Anda: Hadiri acara ini dengan penyamaran terbaik.", "typing-effect");

        // Generate QR Code setelah akses diberikan
        generateQRCode();
    } else {
        errorMessage.textContent = "Kode salah! Coba lagi.";
    }
}

function typeText(text, elementId) {
    let i = 0;
    let speed = 50;
    let target = document.getElementById(elementId);
    target.textContent = "";

    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function generateQRCode() {
    let qrContainer = document.getElementById("qrcode");
    let qrContent = "https://maps.app.goo.gl/uKc9brVjDmLeHUMXA";  // Ganti dengan link acara

    // Hapus QR Code sebelumnya jika ada
    qrContainer.innerHTML = "";

    // Buat QR Code baru
    new QRCode(qrContainer, {
        text: qrContent,
        width: 128,
        height: 128
    });

    // Mainkan suara dan tambahkan efek animasi setelah sedikit delay
    setTimeout(() => {
        document.getElementById("qr-sound").play();
        qrContainer.classList.add("show");
    }, 500); // Delay 0.5 detik sebelum muncul
}
