// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

contract Hello {
    string public name = "World";

    event NameChanged(string oldName, string newName);

    function setName(string memory newName) public {
        emit NameChanged(name, newName);

        name = newName;
    }

    function greet() public view returns (string memory) {
        return string(abi.encodePacked("Hello ", name));
    }
}
