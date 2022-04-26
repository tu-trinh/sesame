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
// function buyTicket(API_URL, PRIVATE_KEY, PUBLIC_KEY, CONTRACT_ADDRESS, USER_ADDRESS) {
//     const { ethers } = require("ethers");
//     const contract = require("../token/contracts/Ticket.sol");
//     const provider = new ethers.providers.JsonRpcProvider(API_URL);
//     const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

//     const gasPrice = await provider.getGasPrice();
//     const nftContract = new ethers.Contract(
//         CONTRACT_ADDRESS,
//         contract.abi,
//         wallet
//     );

//     const gasLimit = await nftContract.estimateGas["safeTransferFrom(address,address,uint256)"](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasPrice });
//     const transaction = await nftContract["safeTransferFrom(address,address,uint256)"](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasLimit });
//     await transaction.wait();
//     // console.log("Transaction Hash: ", transaction.hash);
// }
