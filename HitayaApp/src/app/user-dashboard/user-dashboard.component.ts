import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HatTokenService } from '../hitaya-services/HAT_TOKEN/hat-token.service';
import { Convert } from 'igniteui-angular-core';

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

  listtransaction = [];
  curr_user_name: any;
  hat_balance: any;

  no_of_transaction: any;

  income: any = 0;
  expences: any = 0;
  Mortgage_Rent: any = 0;
  Food: any = 0;
  Utilities: any = 0;
  Bills: any = 0;
  Shopping: any = 0;
  Transportation: any = 0;
  Insurance: any = 0;
  Healthcare: any = 0;
  Clothing: any = 0;
  Others: any = 0;

  myChart: any;
  myChart2: any;
  myChart3: any;

  expense_data: any;

  constructor(private hat_token_servie: HatTokenService, private router: Router) {
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
    if (this.userName != null) {
      this.userLayout = true;
    }
    else {
      this.commonLayout = true;
    }

    this.getusername();
    this.gettransaction();
    /*this.expense_update();*/

  }

  ngOnInit(): void {

    

    /*var ctx = document.getElementById('expenseDistribution').getContext('2d');*/
    this.myChart = new Chart("expenseDistribution", {
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
    this.myChart2 = new Chart("barAccountBalance", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'],
        datasets: [{
          label: 'Income',
          data: [0, 0, 0, 65, 59, 80, 81, 56, 55, 90, 100, 12 ],
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
    this.myChart3 = new Chart("barIncomeExpense", {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Income',
          data: [2000, 500, 1000, 800, 2400, 1300, 2000, 500, 1000, 800, 2400, 1300],
          backgroundColor: [
            '#00bcd7'
          ],
          borderWidth: 1
        },
        {
          label: 'Expense',
          data: [1200, 420, 800, 700, 2100, 1000, 1200, 420, 800, 700, 2100, 1000],
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




  getusername = () => {
    const that = this;
    this.hat_token_servie.view_Users().
      then(function (employee_data: any) {
        for (var i = 0; i < employee_data.length; i++) {
          console.log(employee_data);
          if (that.userName == employee_data[i][1]) {
            that.curr_user_name = String(employee_data[i][0]);
            that.hat_balance = employee_data[i][3];
          }
        }
      }).catch(function (error) {
        console.log(error);
      });
  }


  gettransaction = () => {
    const that = this;
    this.hat_token_servie.view_Transaction().
      then(function (trans_data: any) {
        for (var i = 0; i < trans_data.length; i++) {
          if (that.userName == trans_data[i][0]) {
            that.listtransaction.push(trans_data[i]);
            //if (trans_data[i][3] == "Air DROP") {
            //  that.income = that.income + Convert.toInt64(trans_data[i][2]);
            //}
            if (trans_data[i][3] == "Mortgage/Rent") {
              that.Mortgage_Rent = that.Mortgage_Rent + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Food") {
              that.Food = that.Food + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Utilities") {
              that.Utilities = that.Utilities + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Bills") {
              that.Bills = that.Bills + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Shopping") {
              that.Shopping = that.Shopping + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Transportation") {
              that.Transportation = (that.Transportation + Convert.toInt64(trans_data[i][2]));
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Insurance") {
              that.Insurance = that.Insurance + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Healthcare") {
              that.Healthcare = that.Healthcare + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Clothing") {
              that.Clothing = that.Clothing + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Others") {
              that.Others = that.Others + Convert.toInt64(trans_data[i][2]);
              that.expences = that.expences + Convert.toInt64(trans_data[i][2]);
            }
          }


          if (that.userName == trans_data[i][1]) {
            that.listtransaction.push(trans_data[i]);
            if (trans_data[i][3] == "Air DROP") {
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Mortgage/Rent") {
              that.Mortgage_Rent = that.Mortgage_Rent + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Food") {
              that.Food = that.Food + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Utilities") {
              that.Utilities = that.Utilities + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Bills") {
              that.Bills = that.Bills + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Shopping") {
              that.Shopping = that.Shopping + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Transportation") {
              that.Transportation = (that.Transportation + Convert.toInt64(trans_data[i][2]));
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Insurance") {
              that.Insurance = that.Insurance + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Healthcare") {
              that.Healthcare = that.Healthcare + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Clothing") {
              that.Clothing = that.Clothing + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
            if (trans_data[i][3] == "Others") {
              that.Others = that.Others + Convert.toInt64(trans_data[i][2]);
              that.income = that.income + Convert.toInt64(trans_data[i][2]);
            }
          }
        }   
        that.no_of_transaction = that.listtransaction.length;
        console.log(that.Transportation);
        that.expense_data = [that.Mortgage_Rent, that.Food, that.Utilities, that.Bills, that.Shopping, that.Transportation, that.Insurance, that.Healthcare, that.Clothing, that.Others];
        that.expense_update();
        console.log("Transaction List Fetched From Blockchain");
      }).catch(function (error) {
        console.log(error);
      });

    
  }





  expense_update() {
    console.log(this.expense_data);
    //this.myChart.data.datasets[0].backgroundColor = [
    //  '#61efcd',
    //  '#cdde1f',
    //  '#fec200',
    //  '#ca765a',
    //  '#2485fa',
    //  '#f57d7d',
    //  '#c152d2',
    //  '#8854d9',
    //  '#3d4eb8',
    //  '#00bcd7'
    //];

    

    
    this.myChart.data.datasets[0].data = this.expense_data;
    this.myChart2.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, this.income];
    this.myChart3.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, this.income];
    this.myChart3.data.datasets[1].data = [0, 0, 0, 0, 0, 0, 0, 0, this.expences];

    this.myChart.update();
    this.myChart2.update();
    this.myChart3.update();

}

}
