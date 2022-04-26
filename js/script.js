let aicon = document.getElementById('aicon');

aicon.addEventListener('click', goHome);

function goHome() {
    window.location.href = "index.html";
}

function search() {
    // pass
}

function openQRCode() {
    var qrcode = document.getElementById("qrCode")
    if (qrcode.style.display === "none") {
        qrcode.style.display = "block";
    } else {
        qrcode.style.display = "none";
    }
    var qrCodeCard = document.getElementById("qrCodeCard")
    qrCodeCard.style.height = "30rem";
}