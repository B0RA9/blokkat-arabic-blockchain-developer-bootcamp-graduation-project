// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

/// @title Blokkat Bootcamp Project: A simple Loyality Program
/// @author No0ne
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//import "lib/chainlink-brownie-contracts/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
//import "lib/chainlink-brownie-contracts/contracts/src/v0.8/vrf/interfaces/VRFCoordinatorV2Interface.sol";

contract LOFToken is ERC721URIStorage, Ownable {
    uint256 public tokenIdCounter;
    //uint256 public ticketsCounter;
    //uint256 public totalEligible;
    //address public lastWinner;

    mapping(address => uint256) public ticketsBought;
    //mapping(address => bool) public hasNFT;
    //mapping(uint256 => address) public indexedHolders;
   

    // Chainlink VRF
    //VRFCoordinatorV2Interface COORDINATOR;
    //bytes32 keyHash;
    //uint64 subscriptionId;
    //uint32 callbackGasLimit = 100000;
    //uint16 requestConfirmations = 3;
    //uint32 numWords = 1;

    // Events
    event TicketPurchased(address indexed user, uint256 newTotal);
    event LoyaltyNFTMinted(address indexed user, uint256 tokenId);
    //event RandomWinnerRequested();
    //event WinnerSelected(address winner);

     constructor() ERC721("LOFTOKEN", "LOF") Ownable() {
        //address initialOwner,
        //address vrfCoordinator,
        //bytes32 _keyHash,
        //uint64 _subscriptionId  
     }
       

    
    modifier onlyEligibleForMint(address user) {
        require(ticketsBought[user] >= 2, "Sorry Not enough tickets");
        //require(!hasNFT[user], "Already has NFT");
        _;
    }

    //
    /* modifier onlyWhenEligibleUsersExist() {
        require(totalEligible > 0, "Not enough NFT holders");
        _;
    }
 */
/// @return Return the number of tickets bought of the connected user
    function numOfTicketsBought() public view returns(uint256){
       return ticketsBought[msg.sender];
    }
    
    //Buy a ticket, and increment the amount of total tickets bought. 
    function buyTicket(uint256 _amount) public {
        ticketsBought[msg.sender] += _amount;
        emit TicketPurchased(msg.sender, ticketsBought[msg.sender]);
    }

    /// @notice Mint an NFT if the user reached 10 (2 for testing) tickets
    function getAnNft() public {
        require(ticketsBought[msg.sender] >= 2 , "Sorry you are not elegible to mint an NFT");
        _mintLoyaltyNFT(msg.sender);
        ticketsBought[msg.sender] = 0;
    }

    /// @notice Mint the NFT to the elegible user address
    function _mintLoyaltyNFT(address to) internal onlyEligibleForMint(to) {
        uint256 newTokenId = tokenIdCounter++;
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, "https://amaranth-ready-quokka-854.mypinata.cloud/ipfs/bafkreiglnplc6ephygyuqucpu7sqx4vq5qrdy3qs7cmogaaosighschtsa"); 

        //hasNFT[to] = true;
       // indexedHolders[totalEligible++] = to;

        emit LoyaltyNFTMinted(to, newTokenId);
    }

/* 
    function getRandomWinner() private onlyOwner onlyWhenEligibleUsersExist {
        COORDINATOR.requestRandomWords(
            keyHash,
            subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        emit RandomWinnerRequested();
    }
 */
   /*  function fulfillRandomWords(uint256, uint256[] memory randomWords) internal override {
        uint256 winnerIndex = randomWords[0] % totalEligible;
        address winner = indexedHolders[winnerIndex];
        lastWinner = winner;

        emit WinnerSelected(winner);
    } */


    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
