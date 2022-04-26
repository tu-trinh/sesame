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

function buyTicket(API_URL, PRIVATE_KEY, PUBLIC_KEY, CONTRACT_ADDRESS, USER_ADDRESS) {
    const { ethers } = require("ethers");
    const contract = require("../token/contracts/Ticket.sol");
    const provider = new ethers.providers.JsonRpcProvider(API_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    const gasPrice = await provider.getGasPrice();
    const nftContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contract.abi,
        wallet
    );

    const gasLimit = await nftContract.estimateGas["safeTransferFrom(address,address,uint256)"](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasPrice });
    const transaction = await nftContract["safeTransferFrom(address,address,uint256)"](PUBLIC_KEY, USER_ADDRESS, tokenId, { gasLimit });
    await transaction.wait();
    // console.log("Transaction Hash: ", transaction.hash);
}

// Arkane.createArkaneProviderEngine({clientId: 'Arketype'}).then(provider => {
//     web3 = new Web3(provider);
// });