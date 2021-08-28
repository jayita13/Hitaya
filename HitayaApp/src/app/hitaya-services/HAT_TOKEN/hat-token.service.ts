import { Injectable } from '@angular/core';
const Web3 = require('web3');

declare let require: any;
declare let window: any;
const tokenAbi = require('../../../../../truffle/build/contracts/HAT_TOKEN.json');

@Injectable({
  providedIn: 'root'
})
export class HatTokenService {

  private account: any = null;
  private readonly web3: any;
  private enable: any;

  constructor() {
    if (window.ethereum === undefined) {
      alert('Non-Ethereum browser detected. Install MetaMask');
    } else {
      if (typeof window.web3 !== 'undefined') {
        this.web3 = window.ethereum;
      } else {
        this.web3 = new Web3.providers.HttpProvider('http://localhost:8545');
      }
      console.log('hat_token.service :: constructor :: window.ethereum');
      window.web3 = new Web3(window.ethereum);
      console.log('hat_token.service :: constructor :: this.web3');
      console.log(this.web3);
      this.enable = this.enableMetaMaskAccount();
    }
  }

  private async enableMetaMaskAccount(): Promise<any> {
    let enable = false;
    await new Promise((resolve, reject) => {
      enable = window.eth_requestAccounts;
    });
    return Promise.resolve(enable);
  }

  private async getAccount(): Promise<any> {
    console.log('transfer.service :: getAccount :: start');
    if (this.account == null) {
      this.account = await new Promise((resolve, reject) => {
        console.log('transfer.service :: getAccount :: eth');
        console.log(window.web3.eth);
        window.web3.eth.getAccounts((err, retAccount) => {
          console.log('transfer.service :: getAccount: retAccount');
          console.log(retAccount);
          if (retAccount.length > 0) {
            this.account = retAccount[0];
            resolve(this.account);
          } else {
            alert('transfer.service :: getAccount :: no accounts found.');
            reject('No accounts found.');
          }
          if (err != null) {
            alert('transfer.service :: getAccount :: error retrieving account');
            reject('Error retrieving account');
          }
        });
      }) as Promise<any>;
    }
    return Promise.resolve(this.account);
  }

  public async getUserBalance(): Promise<any> {
    const account = await this.getAccount();
    console.log('transfer.service :: getUserBalance :: account');
    console.log(account);
    return new Promise((resolve, reject) => {
      window.web3.eth.getBalance(account, function (err, balance) {
        console.log('transfer.service :: getUserBalance :: getBalance');
        console.log(balance);
        if (!err) {
          const retVal = {
            account: account,
            balance: balance
          };
          console.log('transfer.service :: getUserBalance :: getBalance :: retVal');
          console.log(retVal);
          resolve(retVal);
        } else {
          reject({ account: 'error', balance: 0 });
        }
      });
    }) as Promise<any>;
  }



  Create_New_User(value) {
    const that = this;
    console.log('User Name : ' +
      value.name + ' User Password : ' + value.password + ' Public Crypto Id : ' + value.cryptoid);
    return new Promise((resolve, reject) => {
      console.log('transfer.service :: transferEther :: tokenAbi');
      console.log(tokenAbi);
      const contract = require('@truffle/contract');
      const HAT_TOKEN = contract(tokenAbi);
      HAT_TOKEN.setProvider(that.web3);
      console.log('transfer.service :: transferEther :: transferContract');
      console.log(HAT_TOKEN);
      HAT_TOKEN.deployed().then(function (instance) {
        return instance._create_New_User(
          value.name,
          value.cryptoid,
          value.password,
          {
            from: value.cryptoid
          }
          );
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);
        return reject('transfer.service error');
      });
    });
  }

  login(value) {
    const that = this;
    console.log(' User Password : ' + value.password + ' Public Crypto Id : ' + value.crypto_id);
    return new Promise((resolve, reject) => {
      console.log('transfer.service :: transferEther :: tokenAbi');
      console.log(tokenAbi);
      const contract = require('@truffle/contract');
      const HAT_TOKEN = contract(tokenAbi);
      HAT_TOKEN.setProvider(that.web3);
      console.log('transfer.service :: transferEther :: transferContract');
      console.log(HAT_TOKEN);
      HAT_TOKEN.deployed().then(function (instance) {
        return instance.login(
          value.password,
          {
            from: value.crypto_id
          }
        );
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
        else {
          return resolve({ status: false });
        }
      }).catch(function (error) {
        console.log(error);
        return reject('transfer.service error');
      });
    });
  }



  add_employee(value,signature) {
    const that = this;
    console.log(value);
    return new Promise((resolve, reject) => {
      console.log(tokenAbi);
      const contract = require('@truffle/contract');
      const HAT_TOKEN = contract(tokenAbi);
      HAT_TOKEN.setProvider(that.web3);
      console.log(HAT_TOKEN);
      HAT_TOKEN.deployed().then(function (instance) {
        return instance._create_New_Employee(
          value.name,
          value.employeeid,
          value.employeerank,
          value.employeegroup,
          {
            from: signature
          }
        );
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);
        return reject('Change_Employee_Admin_Error.service error');
      });
    });
  }




  change_employee_Admin(value) {
    const that = this;
    console.log(' Public Crypto Id : ' + value.cryptoid);
    return new Promise((resolve, reject) => {
      console.log(tokenAbi);
      const contract = require('@truffle/contract');
      const HAT_TOKEN = contract(tokenAbi);
      HAT_TOKEN.setProvider(that.web3);
      console.log(HAT_TOKEN);
      HAT_TOKEN.deployed().then(function (instance) {
        return instance.change_employeeadmin(
          value.cryptoid,
          {
            from: value.cryptoid
          }
        );
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);
        return reject('Change_Employee_Admin_Error.service error');
      });
    });
  }


  view_employee() {
    const that = this;
    return new Promise((resolve, reject) => {
      console.log('transfer.service :: transferEther :: tokenAbi');
      console.log(tokenAbi);
      const contract = require('@truffle/contract');
      const HAT_TOKEN = contract(tokenAbi);
      HAT_TOKEN.setProvider(that.web3);
      console.log('transfer.service :: transferEther :: transferContract');
      console.log(HAT_TOKEN);
      HAT_TOKEN.deployed().then(function (instance) {
        return instance.employees_view(
          //{
          //  from: value.crypto_id
          //}
        );
      }).then(function (status) {
        if (status) {
          return resolve(status);
        }
        else {
          return resolve({ status });
        }
      }).catch(function (error) {
        console.log(error);
        return reject('transfer.service error');
      });
    });
  }

  transfer(value,id) {
    const that = this;
    console.log(value);
    return new Promise((resolve, reject) => {
      console.log(tokenAbi);
      const contract = require('@truffle/contract');
      const HAT_TOKEN = contract(tokenAbi);
      HAT_TOKEN.setProvider(that.web3);
      console.log(HAT_TOKEN);
      HAT_TOKEN.deployed().then(function (instance) {
        return instance.transfer(
          value.reciver,
          value.amount,
          {
            from: id
          }
        );
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);
        return reject('Change_Employee_Admin_Error.service error');
      });
    });
  }



  view_HAT_balance(value) {
    const that = this;
    console.log(value);
    return new Promise((resolve, reject) => {
      console.log(tokenAbi);
      const contract = require('@truffle/contract');
      const HAT_TOKEN = contract(tokenAbi);
      HAT_TOKEN.setProvider(that.web3);
      console.log(HAT_TOKEN);
      HAT_TOKEN.deployed().then(function (instance) {
        return instance.balanceOf(
          value,
          {
            from: value
          }
        );
      }).then(function (status) {
        console.log(status);
        if (status) {
          return resolve(status);
        }
      }).catch(function (error) {
        console.log(error);
        return reject('View Hat Balance Error.service error');
      });
    });
  }


}
