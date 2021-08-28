import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { Router } from '@angular/router';


import { ITransaction } from '../hitaya-interfaces/ITransaction';
import { IAdmin } from '../hitaya-interfaces/IAdmin';
import { IMint } from '../hitaya-interfaces/IMint';
import { IUserDetails } from '../hitaya-interfaces/IUserDetails';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HatTokenService } from '../hitaya-services/HAT_TOKEN/hat-token.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  sideBarNContentActive = ''; // SideBar Controlling

  // Charts
  chart_1: any;
  miniChart_1: any;
  miniChart_2: any;
  miniChart_3: any;
  miniChart_4: any;

  userdata: any[];
  errMsg: string;


  userName: string;
  userRole: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;
  adminLayout: boolean = true;

  admin_crypto_id: any;
  employee_admin_id: any;


  decimals: any;
  totalsupply: any;
  token_name: any;
  token_symbol: any;

  balance: any;

  admin_change: IAdmin;
  listtransaction: ITransaction;
  airdrop: ITransaction;
  listuser: IUserDetails;

  constructor(private router: Router, private hat_token_servie: HatTokenService) {
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
    if (this.userName != null) {
      this.userLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }

  ngOnInit(): void {

    
    this.getadmin();
    this.get_employee_admin();
    this.get_token_name();
    this.get_token_symbol();
    this.get_total_supply();
    this.get_decimal();
    this.get_balance();

    this.miniChart_1 = new Chart("mini-chart-1", {
      type: 'line',
      data: {
        labels: ['MC', 'BC', 'KC', 'TC', 'KLC', 'DC', 'BBC'],
        datasets: [{
          label: 'Age Money Graph',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: '#0073d8',
          borderWidth: 1,
          backgroundColor: '#66abe840'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: { display: false }
          },
          x: {
            grid: {
              display: false
            },
            ticks: { display: false }
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });

    this.miniChart_2 = new Chart("mini-chart-2", {
      type: 'line',
      data: {
        labels: ['MC', 'BC', 'KC', 'TC', 'KLC', 'DC', 'BBC'],
        datasets: [{
          label: 'Age Money Graph',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: '#0073d8',
          borderWidth: 1,
          backgroundColor: '#66abe840'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: { display: false }
          },
          x: {
            grid: {
              display: false
            },
            ticks: { display: false }
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });

    this.miniChart_3 = new Chart("mini-chart-3", {
      type: 'line',
      data: {
        labels: ['MC', 'BC', 'KC', 'TC', 'KLC', 'DC', 'BBC'],
        datasets: [{
          label: 'Age Money Graph',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: '#0073d8',
          borderWidth: 1,
          backgroundColor: '#66abe840'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: { display: false }
          },
          x: {
            grid: {
              display: false
            },
            ticks: { display: false }
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });

    this.miniChart_4 = new Chart("mini-chart-4", {
      type: 'line',
      data: {
        labels: ['MC', 'BC', 'KC', 'TC', 'KLC', 'DC', 'BBC'],
        datasets: [{
          label: 'Age Money Graph',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: '#0073d8',
          borderWidth: 1,
          backgroundColor: '#66abe840'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: { display: false }
          },
          x: {
            grid: {
              display: false
            },
            ticks: { display: false }
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });
  }


  classToggle() {
    if (this.sideBarNContentActive == '')
      this.sideBarNContentActive = 'active';
    else
      this.sideBarNContentActive = '';
  }


  getUserData() {
    alert("Worked");
  }


  ChangeEmployeeAdminAdminForm(form: NgForm) {

    console.log("Employee Admin Change Fuction Started");
    this.admin_change = { cryptoid: form.value.crypto_id };
    console.log(this.admin_change);
    this.hat_token_servie.change_employee_Admin(this.admin_change).
      then(function () { }).catch(function (error) {
        console.log(error);
      });

  }


  submitairdropForm(form: NgForm) {
    console.log('transfer.components :: submitForm :: this.userForm.value');
    this.airdrop = { sender: this.admin_crypto_id, reciver: form.value.crypto, amount: form.value.amount };
    // TODO: service call
    this.hat_token_servie.transfer(this.airdrop).
      then(function () { }).catch(function (error) {
        console.log(error);
      });
  }


  mintForm(form: NgForm) {
    console.log('transfer.components :: submitForm :: this.userForm.value');
    this.airdrop = { sender: this.admin_crypto_id, reciver: form.value.minter, amount: form.value.amtx };
    // TODO: service call
    this.hat_token_servie.mint(this.airdrop).
      then(function () { }).catch(function (error) {
        console.log(error);
      });
  }


  burn(form: NgForm) {
    console.log('transfer.components :: submitForm :: this.userForm.value');
    // TODO: service call
    this.hat_token_servie.burn(form.value.amt, this.admin_crypto_id).
      then(function () { }).catch(function (error) {
        console.log(error);
      });
  }


  ChangeDappEmployeeAdminAdminForm(form: NgForm) {

    console.log("Admin Change Fuction Started");
    this.admin_change = { cryptoid: form.value.admin_id };
    console.log(this.admin_change);
    this.hat_token_servie.change_dapp_Admin(this.admin_change).
      then(function () { }).catch(function (error) {
        console.log(error);
      });

  }


  getadmin = () => {
    const that = this;
    this.hat_token_servie.view_dapp_admin().
      then(function (admin: any) {
        that.admin_crypto_id = admin;
        console.log(that.admin_crypto_id);
        console.log("GET DAPP ADMIN WORKED!");
      }).catch(function (error) {
        console.log(error);
      });
  }


  get_employee_admin = () => {
    const that = this;
    this.hat_token_servie.view_employee_admin().
      then(function (admin: any) {
        that.employee_admin_id = admin;
        console.log(that.employee_admin_id);
        console.log("GET EMPLOYEE ADMIN WORKED!");
      }).catch(function (error) {
        console.log(error);
      });
  }

  get_token_name = () => {
    const that = this;
    this.hat_token_servie.view_name().
      then(function (name: any) {
        that.token_name = name;
        console.log(that.token_name);
        console.log("GET TOKEN NAME WORKED!");
      }).catch(function (error) {
        console.log(error);
      });
  }


  get_token_symbol = () => {
    const that = this;
    this.hat_token_servie.view_symbol().
      then(function (symbol: any) {
        that.token_symbol = symbol;
        console.log(that.token_symbol);
        console.log("GET TOKEN SYMBOL WORKED!");
      }).catch(function (error) {
        console.log(error);
      });
  }


  get_decimal = () => {
    const that = this;
    this.hat_token_servie.view_decimals().
      then(function (decimals: any) {
        that.decimals = decimals;
        console.log(that.decimals);
        console.log("GET TOKEN DECIMALS WORKED!");
      }).catch(function (error) {
        console.log(error);
      });
  }


  get_total_supply = () => {
    const that = this;
    this.hat_token_servie.view_total_supply().
      then(function (supply: any) {
        that.totalsupply = supply;
        console.log(that.totalsupply);
        console.log("GET TOKEN TOTAL SUPPLY WORKED!");
      }).catch(function (error) {
        console.log(error);
      });
  }


  get_balance = () => {
    const that = this;
    this.hat_token_servie.view_HAT_balance(this.admin_crypto_id).
      then(function (balance: any) {
        that.balance = balance;
        console.log(that.balance);
        console.log("GET TOKEN BALANCE WORKED!");
      }).catch(function (error) {
        console.log(error);
      });
  }

}
