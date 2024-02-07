// SPDX-License-Identifier: MIT
pragma solidity >0.8.9;

library WithdrawPattern {
    function withdraw(mapping(address => uint) storage _address, uint amount) external returns(bool){
        require(msg.value >= _address[msg.sender], "Saldo insuficiente");

        _address[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        return true;
    }
}

contract Challenge {
    struct HighBidder {
        address addressHigh;
        uint amountHigh;
    }

    mapping(address => uint) bidders;

    uint public maxTime;
    event eventHigher(address, uint);
    event auctionEnding(address winner, uint value);
    address public owner; 

    constructor() {
        maxTime = block.timestamp + 2 minutes;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);

        _;
    }

    modifier restart() {
        require(block.timestamp > maxTime, "Esperando finalizar o leilao");

        _;
    }

    HighBidder public hb;

    // function Withdraw() external payable returns(bool) {
    //     return WithdrawPattern.withdraw(bidders, msg.value);
    // }

    function Bid() public payable {
        if(block.timestamp < maxTime) {
            bidders[msg.sender] += msg.value;
            if(hb.amountHigh < msg.value) {
                payable(hb.addressHigh).transfer(hb.amountHigh);
                hb.addressHigh = msg.sender;
                hb.amountHigh = msg.value;
                emit eventHigher(msg.sender, msg.value);
            } else {
                revert("Valor abaixo do lance atual");
            }
        } else {
            revert("O Leilao foi finalizado");
        }
    }

    function Tranferfunds() external payable onlyOwner{
        if(block.timestamp > maxTime) {
            payable(hb.addressHigh).transfer(address(this).balance);
            emit auctionEnding(hb.addressHigh, hb.amountHigh);
        } else if(address(this).balance == 0) {
            revert("Sem saldo do contrato");
        } else {
            revert("O Leilao nao finalizou");
        }
    }

    function restartBid() public onlyOwner restart {
        require(address(this).balance == 0);
        delete hb;
        maxTime = block.timestamp + 2 minutes;
    }

}