// SPDX-License-Identifier: MIT

pragma solidity ^0.8.5;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract HAT_TOKEN is ERC20 {
    
    
    struct Employee{
        string name;
        string employeeid;
        string employeerank;
        string employeegroup;
    }
    
    
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
        string contact_type;
    }

    //event NewUser( string name, address user_crypto_id, string password);
    
    User[] public Users;
    Contact[] public Contacts;
    Transaction[] public Transactions;
    Employee[] public Employees;
    
    mapping(address => uint256) private _balances;

    
    address public admin;
    address public employeeadmin;
    
    constructor() ERC20('Hitaya Token', 'HAT'){
        _mint(msg.sender, 1000000000 * 10 ** 18);
    }
    
    
    function mint(address to, uint amount) external {
        require(msg.sender==admin, 'only admin');
        _mint(to, amount);
    }
    
    
    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
    
    
    function change_admin(address _address) public{
        admin=_address;
    }
    
    
    function change_employeeadmin(address _address) public{
        employeeadmin=_address;
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
	//emit NewUser(_name, _user_crypto_id, _password);
       
    }
    
    
    function _create_New_Employee(string memory _name, string memory _employeeid, string memory _employeerank, string memory _emplyeegroup) public returns(bool){
        require(employeeadmin==msg.sender);
        Employees.push(Employee( _name, _employeeid, _employeerank, _emplyeegroup));
        return true;
    }
    
    
    function _create_New_Contact(address _owner, address _contact_name, string memory _name, string memory _contact_type) public {
        Contacts.push(Contact( _owner, _contact_name, _name,_contact_type));
    }
    
    
    function _Transaction_details(address _sender, address _reciver, uint32 _amount) public {
        Transactions.push(Transaction( _sender, _reciver, _amount));
    }
    
    
    
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
         
         _transfer(msg.sender, recipient, amount);
        Transactions.push(Transaction( msg.sender, recipient, amount));
        return true;
    }
    
    
    function user_view(uint id) public view returns (string memory ,address , string memory)
    {
        User memory p = Users[id];
        return (p.name,p.user_crypto_id,p.password); // return multiple values like this
    }
    
    
    function employees_view() public view returns (Employee[] memory)
    {

        return (Employees); // return multiple values like this
    }
    
    
    function user_view() public view returns (User[] memory)
    {

        return (Users); // return multiple values like this
    }
    
    
    function transaction_view() public view returns (Transaction[] memory)
    {

        return (Transactions); // return multiple values like this
    }
    
    
    function contacts_view() public view returns (Contact[] memory)
    {

        return (Contacts); // return multiple values like this
    }
    
    

}
