import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-retirement-savings',
  templateUrl: './retirement-savings.component.html',
  styleUrls: ['./retirement-savings.component.css']
})
export class RetirementSavingsComponent implements OnInit {


  age = 40;
  salary = 50000;
  investment = 5;
  retirementage = 60;
  salary_increse = 3;
  savings_rate = 20;
  life_span = 80;
  retirement_spending = 40000;
  current_savings = 20000;

  salarySaved: number;
  accumulatedSavings: number;
  retiredamont: number;

  graphsavingdata = [];
  graphagedata = [];
  mychart: any;
  tag = true;

  // for display purpose
  display_retiredAmount: any;
  display_accumulatedSavings: any;
  myChart: any;


  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;


  constructor() {
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

    this.myChart = new Chart("analysis-chart-line-display", {
      type: 'line',
      data: {
        labels: this.graphagedata,
        datasets: [{
          label: 'Age Money Graph',
          data: this.graphsavingdata,
          fill: true,
          borderColor: '#0073d8',
          borderWidth: 2,
          backgroundColor: '#66abe840'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });

  }

  getage(age: number) {

    this.age = age;
    let max: number;

    // To fix the exceeding age than retirement
    if (this.age >= this.retirementage && this.age >= 50 && this.age <= 100) {
      this.retirementage = this.age;
    }

    // To fix the exceeding age than Life Expectancy
    if (this.age >= this.life_span) {
      this.life_span = this.age;
    }

    this.updateAnalysis();
  }

  getsalary(salary: number) {
    this.salary = salary;
    this.updateAnalysis();
  }

  getinvestment(investment: number) {
    this.investment = investment;
    this.updateAnalysis();
  }

  getretirementage(retirementage: number) {

    this.retirementage = retirementage;

    // To Fix Retirement Age shouldn't be less than age. 
    if (this.retirementage <= this.age) {
      this.age = this.retirementage;
    }

    this.updateAnalysis();
  }

  getsalary_increse(salary_increse: number) {
    this.salary_increse = salary_increse;
    this.updateAnalysis();
  }


  getsavings_rate(savings_rate: number) {
    this.savings_rate = savings_rate;
    this.updateAnalysis();
  }

  getlife_span(life_span: number) {
    this.life_span = life_span;

    /*
    if(this.life_span <= this.age) {
      this.life_span = this.age;
    }
    */

    if (this.life_span <= this.age) {
      this.age = this.life_span;
    }

    this.updateAnalysis();
  }

  getretirement_spending(retirement_spending: number) {
    this.retirement_spending = retirement_spending;
    this.updateAnalysis();
  }


  getcurrent_savings(current_savings: number) {
    this.current_savings = current_savings;
    this.updateAnalysis();
  }


  computeData() {

    /*console.log(this.graphdata);*/
    this.graphsavingdata = [];
    this.graphagedata = [];

    let yearsToRetirement = this.retirementage - this.age;
    const totalYears = this.life_span - this.age;
    this.salarySaved = Math.floor((this.salary / 100) * this.savings_rate);
    let currentAge = this.age;
    this.accumulatedSavings = this.current_savings;
    let isRetired = yearsToRetirement > 0 ? false : true;

    for (let currentYear = 0; currentYear <= totalYears; currentYear++) {
      this.graphagedata.push(currentAge);
      this.graphsavingdata.push(this.accumulatedSavings);
      //this.graphdata.push({
      //  savings: accumulatedSavings,
      //  age: currentAge
      //});

      this.accumulatedSavings += Math.floor(
        (this.accumulatedSavings / 100) * this.investment
      );
      if (currentYear === yearsToRetirement) {
        this.retiredamont = this.accumulatedSavings;
        this.display_retiredAmount = this.retiredamont.toLocaleString();
      }
      if (isRetired) {
        this.accumulatedSavings -= this.retirement_spending;
      } else {
        this.salarySaved += Math.floor((this.salarySaved / 100) * this.salary_increse);
        this.accumulatedSavings += this.salarySaved;
        this.display_accumulatedSavings = this.accumulatedSavings.toLocaleString();
      }

      currentAge++;
    }
    //this.props.setFinalSavings(accumulatedSavings);
    //this.props.setGraphData(graphData);
    /*this.getchart();*/


    //console.log(this.graphsavingdata);
    //console.log(this.graphagedata);

  }


  getchartUpdate() {
    this.myChart.data.datasets[0].data = this.graphsavingdata;
    this.myChart.data.labels = this.graphagedata;
    this.myChart.update();
  }

  // for Updating both the data and the graph at once. 
  updateAnalysis() {
    this.computeData();
    this.getchartUpdate();
  }

}
