## 1. About the project

**This project is part of the Blokkat Bootcamp**
It's a simple reward program, that mints an NFT token once the user buys a certain number of tickets. These NFTS can then be used to get Discounts, access to exclusive content, Events... 

## 2. Directory structure

1. The `src` folder contains the main contract LOFToken.sol.
2. The `test` folder contains the test file LOFToken.t.sol to be used to test the contract.
3. The `lof` folder contains the Front-end part of the app.

## 3. Design patterns

1. Line #4: Importing the oppenzeppelin ERC721URIStorage contract.
2. Line #16: Using mapping instead of lists to track user activity, for gas optimization.

## 4. Security measures

1. Line #2 : Using a Specific Compiler Pragma
2. Line #45 : Proper Use of Require to check the user eligibility to mint an NFT

## 5. Links & addresses
 Contract Address: 0x10d4bB94FeB10C970E3ec356622dc4351924820d

 Webapp link: 

## 6. How to run tests

 To test the contract just run : `forge test`

## 7. How to run the program

1. **This program is meant to run locally using anvil or on a testnet like scroll sepolia** :

        Clone the repo, create a .env file and put in it : Your wallets's `$Private_key` , the `$RPC_URL` and the Wagmi `$Project_ID`.
        Run `source .env`
        Run `forge create --rpc_url $RPC_URL --private-key $Your_Private_Key `
        Change the `contract address` and `abi` in app/page.tsx with yours.
        Run `npm run dev` from `lof` folder ad you should be able to interact with the program locally.
        You can also proceed and host the app publicly using Github Pages,Vercel, Fleek ...
        
2.  ***Please note that using a `.env` file is not the safest way to secure your private keys, if you choose to use it ,you must add it to `.gitignore` file before pushing your project, and you must never share or expose your private keys in GH or any other website.***

## 8. Demo

    "To do"
