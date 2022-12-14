//SPDX-License-Identifier: MIT
// SPDX 라이센스는 0.68 이후 부터, 솔리디티 프로그램 맨위에 명시를 요구
pragma solidity ^0.8.1;

contract TestStorage{
    struct UserInfo {
        string serial;
        string name;
        uint32 age;
        string phone_number;
    }

    mapping (string => UserInfo) private userInfoList;

    event RegUserInfo(UserInfo userinfo);

    function pingpong() public pure returns (string memory){
        return "Hello World";
    }

    function getUserInfo(string memory _serial) public view returns (UserInfo memory){
        UserInfo memory userInfo = userInfoList[_serial];
        
        return userInfo;
    }

    function setUserInfo(string memory _serial, string memory _name, uint32 _age, string memory _phone_number) public{
        UserInfo memory userinfo = UserInfo(_serial, _name, _age, _phone_number);
        userInfoList[_serial] = userinfo;

        emit RegUserInfo(userinfo);
    }
}