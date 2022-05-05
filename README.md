# Sesame

## Features and Capabilities
Our website is a market place for event organizers/artists to mint and sell NFT tickets, as well as for general users to browse for events and purchase tickets. The current version is an MVP and only supports the most fundamental features.

We currently have three pages, respectively the landing page, the event page, and the ticket wallet page.
- Landing page: contains information about our website and services
- Event page: contains information of upcoming events. 
    - Event organizers or artists can create events and mint NFT tickets for the events.
    - Users can browse for events, check out detail information of the ones they are interested in, and purchase tickets from the event detail page.
- Ticket Wallet page: a all-in-one wallet that contains and organize the tickets for each user.
    - Users can check for both available tickets they had purchased and the archived tickets they've used in the past.
    - Event organizers or artists can check-in the user to the event.

Users can navigate them to different pages through clicking on the navigation bar on top.

Besides the three pages, we have also implemented a "connect" button where, when users click on it, the MetaMask window will pop-up, and users can connect to their crypto wallet through MetaMask. 

We had deployed a smart-contract with QuickNode on Polygon's Mumbai testnet. The deployed contract is can be found [here](https://mumbai.polygonscan.com/tx/0x59a054cd68f9a288ed7dbcf245b67f1480964a745b5c25d5cea4cc135ff0d7f1) on Polygonscan Mumbai.

## Hirarchy of the Application
- Front-end:
    The front-end of the website is developed in HTML, CSS, and JavaScript, using the styling materials from Bootcamp.
    As a multi-pages website, the users can navigate themselves to different pages through clicking on different tabs at the navigation bar on top. Clicking on the top-left logo will direct one back to the landing page.

- Back-end:
    The back-end of the website is developed in python. We used python for deploying the smart contract. The code of the contract is contained in token -> contracts folder, and the deployment code is in token -> scripts -> token.py.

## Instruction to run the application
To run the application, first install all the dependencies by running `npm install`.
Then, open the index.html file with a local live server.
Noted that you should choose a browser that supports MetaMask, and you should have the plug-in pre-installed.