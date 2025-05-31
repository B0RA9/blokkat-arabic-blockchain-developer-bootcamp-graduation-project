// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "forge-std/Test.sol";
import "../src/LOFToken.sol";

contract LOFTokenTest is Test {
    LOFToken public lofToken;
    address public user = address(0xBEEF);

    function setUp() public {
        lofToken = new LOFToken();
        vm.prank(user); // Simulate user
        lofToken.buyTicket(0); // Ensure the user exists in mapping
    }

    function testDeploymentNameAndSymbol() public {
        assertEq(lofToken.name(), "LOFTOKEN");
        assertEq(lofToken.symbol(), "LOF");
    }

    function testBuyTickets() public {
        vm.prank(user);
        lofToken.buyTicket(3);
        uint256 tickets = lofToken.ticketsBought(user);
        assertEq(tickets, 3);
    }
    
    function test_RevertWhen_MintWithoutEnoughTickets() public {
        vm.prank(user);
        vm.expectRevert(bytes("Sorry you are not elegible to mint an NFT"));
        lofToken.getAnNft();
    }

    function testMintWithEnoughTickets() public {
        vm.prank(user);
        lofToken.buyTicket(2);
        vm.prank(user);
        lofToken.getAnNft();
        uint256 balance = lofToken.balanceOf(user);
        assertEq(balance, 1);
    }

    function testTicketsResetAfterMint() public {
        vm.prank(user);
        lofToken.buyTicket(2);
        vm.prank(user);
        lofToken.getAnNft();
        uint256 tickets = lofToken.ticketsBought(user);
        assertEq(tickets, 0);
    }
}
