let body = document.body;
let aicon = document.getElementById('aicon');
let connectBtn = document.getElementById('connectBtn');
let wallet = document.getElementById('wallet-pop-up');
let closeModal = document.getElementsByClassName('close')[0];

aicon.addEventListener('click', goHome);
connectBtn.addEventListener('click', openWallet);
closeModal.addEventListener('click', closeWallet);

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

function openWallet() {
    wallet.hidden = false;
    body.style.overflow = 'hidden';
}

function closeWallet() {
    wallet.hidden = true;
    body.style.overflow = 'scroll';
}