// import getWeb3 from 'web3.js';

let body = document.body;
let aicon = document.getElementById('aicon');
let connectBtn = document.querySelector('#connectBtn');
let buyTicketBtn = documetn.querySelector('#buyTicketBtn');
let qrcode = document.getElementById('qrCode');
let qrCodeCard = document.getElementById('qrCodeCard');
let availTkts = document.getElementById('availTkts');
let pastTkts = document.getElementById('pastTkts');

aicon.addEventListener('click', goHome);
connectBtn.addEventListener('click', openWallet);
buyTicketBtn.addEventListener('click', buyTicket);

/** Redirect users to the home page. **/
function goHome() {
    window.location.href = "index.html";
}

/** Perform a search for events according to user criteria.  **/
function search() {
    // pass
}

/** Open QR code of purchased tickets. **/
function openQRCode() {
    qrcode.style.display = qrcode.style.display === "block" ? "none" : "block";
    qrCodeCard.style.height = qrCodeCard.style.height === "30rem" ? "10rem" : "30rem";
}

/** Disable ticket after customer has already checked in to event. **/
function disabledTkt() {
    const curCard = event.target.parentNode.parentNode.parentNode.parentNode;
    if (curCard.parentNode.id === 'availTkts') {
        let cardQr = event.target.parentNode.parentNode;
        availTkts.removeChild(curCard);

        let card = document.createElement('div');
        card.className = 'card';
        card.classList.add('card-body');
        card.id = 'qrCodeCard';
        card.style.backgroundColor = 'lightgrey';
        card.appendChild(cardQr.children[0]);
        pastTkts.appendChild(card);
    }
}

/** Redirect users to the home page. **/
async function openWallet() {
    if (typeof window.ethereum == 'undefined') {
        alert('MetaMask is not available on this browser');
    }

    //Will Start the metamask extension
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    alert('Account: ' +  account);
}

/** Allow users to purchase a ticket for an event. **/
function buyTicket() {
    const hre = require("hardhat");
    const WALLET_ADDRESS = "0x6272b09bEa2912FA6d0460343Bf0D308FCFb0ff8"
    const CONTRACT_ADDRESS = "0xe7767f1f3d7bafdd98d4a7fc97e53c37e239d747"
    async function main(_URI) {
        const NFT = await hre.ethers.getContractFactory("MyToken");
        const contract = NFT.attach(CONTRACT_ADDRESS);
        await contract._safeMint(WALLET_ADDRESS).then((txn) => {
            // Log Txn
            console.log(txn.hash)
            return(txn)
        });
    }
}