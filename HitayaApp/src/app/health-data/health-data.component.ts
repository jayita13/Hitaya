import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IUserInformation } from '../hitaya-interfaces/IUserInformation';
import { ILifeExpectancy } from '../hitaya-interfaces/ILifeExpectancy';



@Component({
  selector: 'app-health-data',
  templateUrl: './health-data.component.html',
  styleUrls: ['./health-data.component.css']
})
export class HealthDataComponent implements OnInit {



  credentials: IUserInformation;
  lifexpectancy: ILifeExpectancy;
  countrystatus: number;
  lifedata: number;

  saving_percentage: number;

  status: any[];
  msg: string;

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
  }

  AddUserData(form: NgForm) {


    if (form.value.countryStatus == "Developing") {
      this.countrystatus = 0;
    }
    else {
      this.countrystatus = 1;
    }

    this.lifexpectancy = { Status: this.countrystatus, Alcohol: Number(form.value.alcohol), BMI: Number(form.value.bmi) };

    console.log(this.lifexpectancy);

    //this.addData.LeftExpectancy(this.lifexpectancy).subscribe(
    //  res => {
    //    this.lifedata = res;
    //    console.log(this.lifedata);

    //    if (form.value.smoke == "Yes") {
    //      this.lifedata = this.lifedata - 5;
    //    }
    //    if (form.value.exercise == "Yes") {
    //      this.lifedata = this.lifedata + 2;
    //    }
    //    if (form.value.healthIssue == "Yes") {
    //      this.lifedata = this.lifedata - 7;
    //    }


    //    if (Number(form.value.age) > 40) {
    //      this.saving_percentage = 20;
    //    }
    //    else if (Number(form.value.age) > 30 && (Number(form.value.age) <= 40)) {
    //      this.saving_percentage = 15;
    //    }
    //    else {
    //      this.saving_percentage = 10;
    //    }

    //    if (Number(form.value.dependents) > 2) {
    //      this.saving_percentage = this.saving_percentage + ((Number(form.value.dependents) - 2) * 5);
    //    }



    //    if (form.value.healthInsurance == "No") {
    //      this.saving_percentage = this.saving_percentage + 5;
    //    }


    //    if (this.saving_percentage > 60) {
    //      this.saving_percentage = 60;
    //    }

    //    console.log(this.saving_percentage);

    //    this.credentials = {
    //      emailid: this.userName, gender: form.value.gender, age: Number(form.value.age), disabilities: form.value.disabilities,
    //      dependents: Number(form.value.dependents), country: form.value.country, state: form.value.state, countryStatus: form.value.countryStatus,
    //      pinCode: form.value.pinCode, taxid: form.value.taxid, passportid: form.value.passportid, nominee: form.value.nominee,
    //      relationshipWithNominee: form.value.relationshipWithNominee, currentSalary: Number(form.value.currentSalary),
    //      savings: Number(form.value.savings), healthInsurance: form.value.healthInsurance, otherInsurance: form.value.otherInsurance,
    //      smoke: form.value.smoke, healthIssue: form.value.healthIssue, exercise: form.value.exercise, alcohol: Number(form.value.alcohol),
    //      bmi: Number(form.value.bmi), expectedAgeToLive: Number(this.lifedata), yearlySavingsRequired: Number(form.value.currentSalary) * ((this.saving_percentage) / 100)
    //    };

    //    console.log(this.credentials);
    //    //this.credentials = { : form.value.FirstName, LASTNAME: form.value.LastName, EMAILID: form.value.Email, PASSWORD: form.value.Password };



    //    this.addData.AddInformtion(this.credentials).subscribe(
    //      responseLoginStatus => {
    //        this.status = responseLoginStatus;
    //        if (this.status == 1) {
    //          this.router.navigate(['/dashboard']);
    //        }
    //        else {
    //          this.msg = this.status + ". Unable To Save the Data.";
    //          alert("Invalid Data Entered");
    //        }
    //      },
    //      () => console.log("Data Added Successfully")
    //    );
    //  });

    console.log(this.lifedata);


  }

}
