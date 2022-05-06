# Sesame

## Features and Capabilities
Our website is a market place for event organizers/artists to mint and sell NFT tickets, as well as for general users to browse for events and purchase tickets. The current version is an MVP and only supports the most fundamental features: deployment of ticket contract, connecting to blockchain wallet, and a prototype of our final front-end.

We currently have three pages, respectively the landing page, the event page, and the ticket wallet page.
- Landing page: contains information about our website and services
- Event page: contains information of upcoming events. 
    - Event organizers or artists can create events and set aside NFT tickets for minting for the events. The terms of creating the tickets are stored in a smart contract and the tickets are only minted when a customer decides to purchase them to save on costs and resources.
    - Event customers can browse for events, check out detailed information for the ones they are interested in, and purchase tickets from the event detail page.
- Ticket Wallet page: an all-in-one wallet that contains and organizes the tickets for each customer.
    - Customers can access available tickets they have purchased and the archived tickets they've used in the past.
    - Event organizers or artists can check-in customers to the event via scanning the QR code that customers can access by pulling up purchased tickets in their wallet.

Users can navigate them to different pages through clicking on the navigation bar on top.

Besides the three pages, we have also implemented a "connect" button where, when users click on it, the MetaMask window will pop-up, and users can connect to their crypto wallet through MetaMask. 

We had deployed a smart-contract with QuickNode on Polygon's Mumbai testnet. The deployed contract is can be found [here](https://mumbai.polygonscan.com/tx/0x59a054cd68f9a288ed7dbcf245b67f1480964a745b5c25d5cea4cc135ff0d7f1) on Polygonscan Mumbai.

Finally, we chose to use Web3 technologies for this ticketing problem due to them being most optimal for Sesame's capabilities in 1) reducing fraud and 2) increasing customer engagement. Each ticket's minting and ownership transfer being stored on-chain means fraudulent sales and entries to events are greatly barred against. Customers' actions during the event and any additional activities, such as doing exclusive meet-and-greets, contribute to raising the NFT ticket values, holding their memories precious and valuable.

## Hirarchy of the Application
- Front-end:
    The front-end of the website is developed in HTML, CSS, and JavaScript, using the styling materials from Bootstrap.
    As a multi-pages website, the users can navigate themselves to different pages (built in different HTML files) through clicking on different tabs at the navigation bar on top. Clicking on the top-left logo will direct one back to the landing page.

- Back-end:
    The back-end of the website is developed in Python. We used Python for deploying the smart contract. The code of the contract is contained in token -> contracts -> Ticket.sol, and the deployment code is in token -> scripts -> deploy-token.js.
    
- Chain:
    Our platform is built on the Polygon chain. We used Solidity in writing the smart contract terms of our platform. Using a free trial we initialized a chain endpoint using QuickNode. Other libraries used include Hardhat for the development environment and OpenZeppelin for contract creation.

## Instruction to run the application
To run the application, first install all the dependencies by running `npm install`.
Then, open the index.html file with a local live server.
Note that you should choose a browser that supports MetaMask, and you should have the plug-in pre-installed.
Finally, explore the pages as shown above.
