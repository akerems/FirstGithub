// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity >=0.7.0 < 0.9.0;

contract Example {
    uint a = 15;
    function increase(uint x) public {
        a += x;
    }
    
    function getA() public view returns(uint) {
        return a;
    }
}