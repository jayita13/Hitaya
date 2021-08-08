import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

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
    /*var ctx = document.getElementById('expenseDistribution').getContext('2d');*/
    var myChart = new Chart("expenseDistribution", {
      type: 'doughnut',
      data: {
        labels: ['Mortgage/Rent', 'Food', 'Utilities', 'Bills', 'Shopping', 'Transportation', 'Insurance', 'Healthcare', 'Clothing', 'Others'],
        datasets: [{
          label: '# of Votes',
          data: [15.76, 12.79, 10.93, 10.40, 8.87, 8.49, 7.59, 6.52, 5.92, 12.73],
          backgroundColor: [
            '#61efcd',
            '#cdde1f',
            '#fec200',
            '#ca765a',
            '#2485fa',
            '#f57d7d',
            '#c152d2',
            '#8854d9',
            '#3d4eb8',
            '#00bcd7'
          ],
          hoverOffset: 14
        }],
      }
    });

    /*var ctx = document.getElementById('barAccountBalance').getContext('2d');*/
    var myChart2 = new Chart("barAccountBalance", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Income',
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    /*var ctx = document.getElementById('barIncomeExpense').getContext('2d');*/
    var myChart3 = new Chart("barIncomeExpense", {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Income',
          data: [2000, 500, 1000, 800, 2400, 1300],
          backgroundColor: [
            '#00bcd7'
          ],
          borderWidth: 1
        },
        {
          label: 'Expense',
          data: [1200, 420, 800, 700, 2100, 1000],
          backgroundColor: [
            '#fec200'
          ],
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

}
