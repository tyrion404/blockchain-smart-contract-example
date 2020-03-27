pragma solidity >=0.4.0 <0.7.0;

contract Inbox {
    string message;
    constructor(string memory initialMsg) public {
        message = initialMsg;
    }
    function setMessage(string memory newMsg) public {
        message = newMsg;
    }
    function getMessage() public view returns (string memory) {
        return message;
    }
}