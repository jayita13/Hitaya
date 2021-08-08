import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {

  siteKey: string;
  status: number;
  errMsg: string;
  msg: string;

  userName: string;
  userRole: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;
  adminLayout: boolean = false;


  constructor(private reCaptchaV2Service: ReCaptchaV3Service, private router: Router) {
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
    if (this.userName != null) {
      this.userLayout = true;
    }
    else {
      this.commonLayout = true;
    }

    this.siteKey = '6LeLcagaAAAAAMOw3ZyRkM53mvL7_93LHzSVIo6U';
    //this.reCaptchaV2Service.execute(this.siteKey, 'signup', (token) => {
    //  console.log('This is your token: ', token);
    //}, {
    //  useGlobalDomain: true // optional
    //});
  
  }

  ngOnInit(): void {
  }


  SignUp(form: NgForm) {

    console.log("hello");
    alert("works");

    
  }


}
