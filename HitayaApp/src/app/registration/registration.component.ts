import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IUser } from '../hitaya-interfaces/IUser';



import { UserValidationService } from '../hitaya-services/user-validation/user-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  status: number;
  errMsg: string;
  msg: string;
  credentials: IUser;


  constructor(private login: UserValidationService, private router: Router) { }

  ngOnInit(): void {


    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }


    submitLoginForm(form: NgForm) {

      console.log("hello");

      this.credentials = { FIRSTNAME: null, LASTNAME: null, EMAILID: form.value.email, PASSWORD: form.value.password };

      console.log(this.credentials);

      this.login.validateCredentials(this.credentials).subscribe(
        responseLoginStatus => {
          this.status = responseLoginStatus;
          if (this.status == 1) {
            sessionStorage.setItem('userName', form.value.email);
            sessionStorage.setItem('userRole', 'User');


            this.FinanceService.GetUserFinance(form.value.email).subscribe(
              responseProductData => {

                this.FinaceData = responseProductData[0];

                console.log(this.FinaceData);
                sessionStorage.setItem('RecommendedSavings', String(this.FinaceData["yearlySavingsRequired"]));
                console.log("OK");


              },
              responseProductError => {
                this.errMsg = responseProductError;
                sessionStorage.setItem('RecommendedSavings', String(0));
                console.log(this.errMsg);
              }
            );

            this.router.navigate(['/']);
          }
          else {
            this.msg = this.status + ". Try again with valid credentials.";
            alert("invalid");
          }
        },
        () => console.log("SubmitLoginForm method executed successfully")
      );

  }
}
