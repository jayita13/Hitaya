// SPDX-License-Identifier: MIT

pragma solidity ^0.8.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract HAT_TOKEN is ERC20 {
    
    struct User{
        string name;
        address user_crypto_id;
        string password;
    }
    
    struct Transaction{
        address sender;
        address reciver;
        uint256 amount;
    }
    
    struct Contact{
        address owner;
        address contact_name;
        string name;
    }
    
    User[] public Users;
    Contact[] public Contacts;
    Transaction[] public Transactions;

    
    address public admin;
    
    constructor() ERC20('Hitaya Token', 'HAT'){
        _mint(msg.sender, 1000000000 * 10 ** 18);
    }
    
    
    function mint(address to, uint amount) external {
        require(msg.sender==admin, 'only admin');
        _mint(to, amount);
    }
    
    
    function burn(uint amounnt) external {
        _burn(msg.sender, amounnt);
    }
    
    
    function login(string memory _password) public view returns (bool){
        for (uint i=0;i<Users.length;i++){
            if (Users[i].user_crypto_id==msg.sender && keccak256(abi.encodePacked(Users[i].password))==keccak256(abi.encodePacked(_password))){
                return true;
            }
        }
        return false;
    }

    
    function _create_New_User(string memory _name, address _user_crypto_id, string memory _password) public {
        Users.push(User( _name, _user_crypto_id, _password));
       
    }
    
    
    function _create_New_Contact(address _contact_name, string memory _name) public {
        for (uint i=0;i<Users.length;i++){
            if(Users[i].user_crypto_id==msg.sender){
                Contacts.push(Contact( msg.sender, _contact_name, _name));
            }
        }
    }
    
    
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        bool key = false;
        for (uint i=0;i<Users.length;i++){
            if(Users[i].user_crypto_id==msg.sender){
                for (uint j=0;i<Users.length;i++){
                    if(Users[j].user_crypto_id==recipient){
                        key = true;
                        _transfer(_msgSender(), recipient, amount);
                        Transactions.push(Transaction( msg.sender, recipient, amount));
                        return true;
                    }
                }
            }
        }
        return false;
    }
        
    
    // function get_transaction_details() public view returns (Transactions[] memory){
    //     Transactions[] memory Transactions_Detail= new Transactions[](Transactions.length);
    //     uint count=0;
    //     for (uint i=0;i<Transactions.length;i++){
    //         if (Transactions[i].sender==msg.sender){
    //             Transactions_Detail[count].push([Transactions[i].sender,Transaction[i].recipient,Transactions[i].amount]);
    //             count++;
    //         }
    //     }
    //     return Transactions_Detail;
    // }
    
}
