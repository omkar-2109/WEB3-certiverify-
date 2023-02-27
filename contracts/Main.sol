//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certification {
    address private creator;
    constructor() {
        creator = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == creator, "Only Issuer can call this function.");
        _;
    }
    struct Certificate {
        string candidate_name;
        string org_name;
        string course_name;
        uint256 expiration_year;
    }

    mapping(bytes32 => Certificate)  certificates;

    event certificateGenerated(bytes32 _certificateId);

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
        assembly {
                result := mload(add(source, 32))
        }
    }

    function generateCertificate(
        string memory _id,
        string memory _candidate_name,
        string memory _org_name, 
        string memory _course_name,
        uint256 _expiration_year) public onlyOwner{
        bytes32 byte_id = stringToBytes32(_id);
        require(certificates[byte_id].expiration_year == 0, "Certificate with given id already exists");
        require (_expiration_year >= 2023,"The expiry year should be 2023 onwards ");
        certificates[byte_id] = Certificate(_candidate_name, _org_name, _course_name, _expiration_year);
        emit certificateGenerated(byte_id);
    }

    function getData(string memory _id) public view returns(string memory, string memory, string memory, uint256) {
        bytes32 byte_id = stringToBytes32(_id);
        Certificate memory temp = certificates[byte_id];
        require(temp.expiration_year != 0, "No data exists");
        return (temp.candidate_name, temp.org_name, temp.course_name, temp.expiration_year);
    }
}