import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ITransaction } from '../hitaya-interfaces/ITransaction';
import { IContact } from '../hitaya-interfaces/IContact';
import { IEmployee } from '../hitaya-interfaces/IEmployee';
import { HatTokenService } from '../hitaya-services/HAT_TOKEN/hat-token.service';

@Component({
  selector: 'app-employee-admin',
  templateUrl: './employee-admin.component.html',
  styleUrls: ['./employee-admin.component.css']
})
export class EmployeeAdminComponent implements OnInit {

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

  add_contacts: boolean = false;

  addemployee: IEmployee;

  adminid: any;
  employees: any;

  user: any;

  transfer: ITransaction;
  contact: IContact;
  contact_list = [];


  

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

    this.getAccountAndBalance();
    this.getEmployee();
    this.getContacts();
    this.getAccountAndBalance();

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


  addcontact() {
    if (this.add_contacts == false) {
      this.add_contacts = true;
    }
    else {
      this.add_contacts = false;
    }

  }



  getUserData() {
    alert("Worked");
  
  }

  getAccountAndBalance = () => {
    const that = this;
    this.hat_token_servie.getUserBalance().
      then(function (retAccount: any) {
        that.adminid = retAccount.account;
        console.log('transfer.components :: getAccountAndBalance :: that.user');
        console.log(that.adminid);
      }).catch(function (error) {
        console.log(error);
      });
  }


  getEmployee = () => {
    const that = this;
    this.hat_token_servie.view_employee().
      then(function (employee_data: any) {
        that.employees = employee_data;
        console.log(that.employees[0]);
        console.log("IT Worked LA LA");
      }).catch(function (error) {
        console.log(error);
      });
  }


  AddEmployeeForm(form: NgForm) {

    console.log("Add Employee Fuction Started");
    this.addemployee = { name: form.value.name, employeeid: form.value.employeeid, employeerank: form.value.employeerank, employeegroup: form.value.employeegroup };
    console.log(this.addemployee);
    this.hat_token_servie.add_employee(this.addemployee,this.adminid).
      then(function () { }).catch(function (error) {
        console.log(error);
      });

  }

 
  

  getContacts = () => {
    const that = this;
    this.hat_token_servie.view_contacts().
      then(function (employee_data: any) {
        for (var i = 0; i < employee_data.length; i++) {
          console.log(employee_data);
          if (that.adminid == employee_data[i][0]) {
            that.contact_list.push(employee_data[i]);
          }
        }

        console.log("IT Worked LA LA");
      }).catch(function (error) {
        console.log(error);
      });
  }

  SubmitAddContact(form: NgForm) {
    console.log("Add Contact Fuction Started");
    this.contact = { owner: this.adminid, contactid: form.value.crypto, name: form.value.name, type: form.value.type };
    console.log(this.contact);
    this.hat_token_servie.add_contact(this.contact).
      then(function () { }).catch(function (error) {
        console.log(error);
      });
  }

}
