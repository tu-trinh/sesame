// import getWeb3 from 'web3.js';

let body = document.body;
let aicon = document.getElementById('aicon');
let connectBtn = document.querySelector('#connectBtn');
let qrcode = document.getElementById('qrCode');
let qrCodeCard = document.getElementById('qrCodeCard');
let availTkts = document.getElementById('availTkts');
let pastTkts = document.getElementById('pastTkts');

aicon.addEventListener('click', goHome);
connectBtn.addEventListener('click', openWallet);

function goHome() {
    window.location.href = "index.html";
}

function search() {
    // pass
}

function openQRCode() {
    qrcode.style.display = qrcode.style.display === "block" ? "none" : "block";
    qrCodeCard.style.height = qrCodeCard.style.height === "30rem" ? "10rem" : "30rem";
}

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

async function openWallet() {
    if (typeof window.ethereum == 'undefined') {
        alert('MetaMask is not available on this browser');
    }

    //Will Start the metamask extension
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    alert('Account: ' +  account);
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
