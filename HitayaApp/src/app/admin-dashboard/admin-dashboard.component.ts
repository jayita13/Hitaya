import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { Router } from '@angular/router';


import { ITransaction } from '../hitaya-interfaces/ITransaction';
import { IAdmin } from '../hitaya-interfaces/IAdmin';
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

  admin_change: IAdmin;
  transaction: ITransaction;

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

    console.log("Sign Up Fuction Started");
    this.admin_change = { cryptoid: form.value.crypto_id };
    console.log(this.admin_change);
    this.hat_token_servie.change_employee_Admin(this.admin_change).
      then(function () { }).catch(function (error) {
        console.log(error);
      });

  }

}
