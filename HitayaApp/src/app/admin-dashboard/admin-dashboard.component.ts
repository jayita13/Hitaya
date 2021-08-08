import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  adminLayout: boolean = false;

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

    var delayed;
    var myChart = new Chart("dashboard-chart", {
      type: 'bar',
      data: {
        labels: ['Year', 'Status', 'Adult Mortality', 'Infant Deaths', 'Alcohol', 'Percentage Expenditure', 'Hepatitis B', 'Measles', 'BMI', 'Five Year Deadths', 'Polio', 'Total Expenditure', 'Diptheria', 'HIV/AIDS', 'GDP', 'Population', 'Thinness (1 - 19 years)', 'Thinness (5 - 9 years)', 'Income Composition of Resources', 'Schooling'],
        datasets: [{
          label: 'Health Data',
          data: [0.170033, 0.482136, -0.696359, -0.196557, 0.404877, 0.381864, 0.256762, -0.157586, 0.567694, -0.222529, 0.465556, 0.218086, 0.479495, -0.556556, 0.461455, -0.021538, -0.477183, -0.471584, 0.724776, 0.751975],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            //if (context.type === 'data' && context.mode === 'default' && !delayed) {
            //  delay = context.dataIndex * 300 + context.datasetIndex * 100;
            //}
            return delay;
          },
        }
      }
    });


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
