Moralis.initialize('2KyXsmFhjJbTncMZNW7TQTCRe7nnVSARF7YQJCoa');
Moralis.serverURL = 'https://d6jrlkytptgi.usemoralis.com:2053/server';
// const CONTRACT_ADDRESS = 'contract_address';
// const contractAbi = {};

init = async () => {
    window.web3 = await Moralis.Web3.enable();
    // window.contract = new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS);
}

login = async () => {
    try {
        const user = await Moralis.Web3.authenticate();
        try {
            const response = await Moralis.Cloud.run('getItems');
        } catch (error) {
            const code = error.code;
            const message = error.message;
        }
    } catch (error) {
        const code = error.code;
        const message = error.message;
    }
}

logout = async () => {
    await Moralis.User.logOut();
}

signUp = async (email, password) => {
    const user = new Moralis.User();
    user.set('username', email);
    user.set('email', email);
    user.set('password', password);
    try {
        await user.signUp();
    } catch (error) {
        const code = error.code;
        const message = error.message;
    }
};

loginWithUsername = async (username, password) => {
    try {
        const user = await Moralis.User.logIn(username, password, { usePost: true });
        
    } catch (error) {
        const code = error.code;
        const message = error.message;
    }
}

init();

Moralis.Cloud.define('getItems', async (request) => {
    const query = new Moralis.Query('Item');
    const results = await query.find();
    return results;
});