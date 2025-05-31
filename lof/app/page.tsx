"use client";

import Image from "next/image";
import React, { useEffect,useState } from "react";
import { useReadContract , useWriteContract , useAccount  } from "wagmi";

export default function Home() {
  
  const [numberOfTickets, setNumberOfTickets] = useState<number>(0);

  

  const wagmiContractConfig ={
    address: "0x10d4bB94FeB10C970E3ec356622dc4351924820d",
    abi:  [
      {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "approve",
        "inputs": [
          {
            "name": "to",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "buyTicket",
        "inputs": [
          {
            "name": "_amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "getAnNft",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "getApproved",
        "inputs": [
          {
            "name": "tokenId",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "isApprovedForAll",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "operator",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bool",
            "internalType": "bool"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "string",
            "internalType": "string"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "numOfTicketsBought",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "ownerOf",
        "inputs": [
          {
            "name": "tokenId",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "data",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "setApprovalForAll",
        "inputs": [
          {
            "name": "operator",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "approved",
            "type": "bool",
            "internalType": "bool"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
          {
            "name": "interfaceId",
            "type": "bytes4",
            "internalType": "bytes4"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bool",
            "internalType": "bool"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "string",
            "internalType": "string"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "ticketsBought",
        "inputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "tokenIdCounter",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "tokenURI",
        "inputs": [
          {
            "name": "tokenId",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "string",
            "internalType": "string"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
          {
            "name": "newOwner",
            "type": "address",
            "internalType": "address"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "Approval",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "approved",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256",
            "indexed": true,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "ApprovalForAll",
        "inputs": [
          {
            "name": "owner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "operator",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "approved",
            "type": "bool",
            "indexed": false,
            "internalType": "bool"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "LoyaltyNFTMinted",
        "inputs": [
          {
            "name": "user",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
          {
            "name": "previousOwner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "newOwner",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "TicketPurchased",
        "inputs": [
          {
            "name": "user",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "newTotal",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "Transfer",
        "inputs": [
          {
            "name": "from",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "to",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256",
            "indexed": true,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      }
    ]
  }

  const { address, isConnected } = useAccount();

  const  { writeContract } = useWriteContract();
  
  useEffect(() => {
  console.log("Started");

 },[isConnected])

 const { data: ticketsCounter, refetch } = useReadContract({
  ...wagmiContractConfig,
  functionName: "ticketsBought",
  args: [address], 
  query: {
    enabled: !!address, 
  }
});

 const getNumOfTicketsBought = async () => {
  const result = await refetch();
  try {
    if (result.data) {
      setNumberOfTickets(Number(result.data));
      alert(`You have ${Number(result.data)} tickets`);
    } else {
      alert("Could not fetch number of tickets.");
    }
  } catch (error) {
    console.error(`An error has occurred: ${error}`);
  }
};


const buyTicket =  async() => {
    writeContract({
      
    ...wagmiContractConfig,
    functionName: "buyTicket",
    args: [1]
    });  
}


    const mintNFT = async () => {
      try {
        if (numberOfTickets >= 2) {
          await writeContract({
            ...wagmiContractConfig,
            functionName: "getAnNft",
          });
          alert("NFT minted!");
        } else {
          alert(
            `You need at least 2 tickets to mint an NFT. You currently have ${numberOfTickets}.`
          );
        }
      } catch (error) {
        console.error("Error during minting:", error);
        alert("Something went wrong while minting the NFT.");
      }
    };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/136957202_10363456.jpg"
          alt="Logo"
          width={180}
          height={38}
          priority
        />
        <div className="p-4 m-4 ">
          <w3m-button/>
          <w3m-network-button/>
        </div>
        <div className="p-4 m-4 font-semibold rounded-lg bg-black-500">
              {isConnected ? `Your connected address is:  ${address}` : "You are not connected"  }
        </div>
        <div>
        <button className="p-4 m-4 cursor-pointer font-semibold rounded-lg bg-blue-500"
        onClick={buyTicket}> Buy a Ticket</button>

        </div>
        <div>
        <button className="p-4 m-4 cursor-pointer font-semibold rounded-lg bg-red-500"
        onClick={mintNFT}> Mint Me An NFT</button>

        </div>

        <div>
        <button className="p-4 m-4 cursor-pointer font-semibold rounded-lg bg-green-500"
        onClick={getNumOfTicketsBought}>Check My Tickets</button>

        </div>
    
      </main>
      
    </div>
  );
}
