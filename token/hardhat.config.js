module.exports = {
    defaultNetwork: "matic_testnet",
    networks: {
        hardhat: {},
        matic_testnet: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts: "4331ba9f852197e38d06269858ee90bbc89d5438fed748fee031e7785e8a3f34",
            gasPrice: 8000000000
        }
    }
}