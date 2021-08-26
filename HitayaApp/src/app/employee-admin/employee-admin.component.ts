import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  constructor(private router: Router) {
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

}
