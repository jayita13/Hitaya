import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IUser } from '../hitaya-interfaces/IUser';
import { ISignUp } from '../hitaya-interfaces/ISignUp';
import { UserValidationService } from '../hitaya-services/user-validation/user-validation.service';
import { HatTokenService } from '../hitaya-services/HAT_TOKEN/hat-token.service';
import { UserRegistrationService } from '../hitaya-services/user_registration/user-registration.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  status: true;
  errMsg: string;
  msg: string;
  credentials: IUser;
  url: any;
  siteKey: string;

  name: string = "";
  id: string = "";

  user: any;
  username: any;
  file: File = null;

  signup: ISignUp;

  selectedFile: ImageSnippet;


  constructor(private login: UserValidationService, private hat_token_servie: HatTokenService, private router: Router, private fb: FormBuilder, private imageService: UserRegistrationService) {
    this.siteKey = '6Lfma8kbAAAAADgvC6Pgq8g9q5NJ2No80hxtgoLx';
  }

  ngOnInit(): void {

    this.user = { address: '', transferAddress: '', balance: '', amount: '', remarks: '' };
    this.getAccountAndBalance();

    //this.loginForm = this.fb.group({
    //  email: ['', Validators.required],
    //  password: ['', Validators.required],
    //  recaptcha: ['', Validators.required],
    //});

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


  onSelectFile(event) { // called each time file input changes
    this.file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var readerx = new FileReader();

      readerx.readAsDataURL(event.target.files[0]); // read file as data url

      const file: File = event.target.files[0];
      //const reader = new FileReader();

      //readerx.addEventListener('load', (event: any) => {

      //  this.selectedFile = new ImageSnippet(event.target.result, file);

      //  this.selectedFile.pending = true;
      //  this.imageService.uploadImage(form.value.image).subscribe(
      //    (res) => {
      //      console.log(res);
      //    },
      //    (err) => {
      //      console.log(err);
      //    })
      //});

      this.imageService.uploadImage(this.file).subscribe(
        (event: any) => {
          if (typeof (event) === 'object') {

            console.log(event);
            this.name = event[1];
            this.id = event[2];

            console.log(this.name, this.id);

            // Short link via api response
            //this.shortLink = event.link;

            //this.loading = false; // Flag variable 
          }
        }
      );
    
    



      readerx.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  //private onSuccess() {
  //  this.selectedFile.pending = false;
  //  this.selectedFile.status = 'ok';
  //}

  //private onError() {
  //  this.selectedFile.pending = false;
  //  this.selectedFile.status = 'fail';
  //  this.selectedFile.src = '';
  //}

  //processFile(imageInput: any) {
  //  const file: File = imageInput.files[0];
  //  const reader = new FileReader();

  //  reader.addEventListener('load', (event: any) => {

  //    this.selectedFile = new ImageSnippet(event.target.result, file);

  //    this.selectedFile.pending = true;
  //    this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //      (res) => {
  //        this.onSuccess();
  //      },
  //      (err) => {
  //        this.onError();
  //      })
  //  });

  //  reader.readAsDataURL(file);
  //}

  getAccountAndBalance = () => {
    const that = this;
    this.hat_token_servie.getUserBalance().
      then(function (retAccount: any) {
        that.user.address = retAccount.account;
        that.user.balance = retAccount.balance / (10 ** 18);
        console.log('transfer.components :: getAccountAndBalance :: that.user');
        console.log(that.user);
      }).catch(function (error) {
        console.log(error);
      });
  }


  SubmitSignUpForm(form: NgForm) {

    console.log("Sign Up Fuction Started");
    this.signup = { name: form.value.name, password: form.value.password, cryptoid: this.user.address };
    console.log(this.signup);
    this.hat_token_servie.Create_New_User(this.signup).
        then(function () { }).catch(function (error) {
          console.log(error);
        });
    
  }


  submitLoginForm(form: NgForm) {
    const that = this;
    this.credentials = { crypto_id: this.user.address, password: form.value.password };
    console.log(this.credentials);
    console.log("Login Fuction Started");
    this.hat_token_servie.login(this.credentials).
      then(function (status: any) {
        console.log(status);
        if (status.status == true) {
          sessionStorage.setItem('userName', that.user.address);
          that.router.navigate(['/wallet']);
        }
        else {
          that.msg = "Try again with valid credentials.";
          alert("Incorrect User Crypto Id or Password");
          console.log(that.msg);
        }
        }).catch(function (error) {
        console.log(error);
        });
  }



  //submitLoginForm() {
  //  this.credentials = this.loginForm.value;
  //  console.log(this.credentials);
  //  this.login.validateCredentials(this.credentials).subscribe(
  //    responseLoginStatus => {
  //      this.status = responseLoginStatus;
  //      if (this.status == 1) {
  //        sessionStorage.setItem('userName', this.loginForm.value.email);
  //        this.router.navigate(['/wallet']);
  //      }
  //      else {
  //        this.msg = this.status + ". Try again with valid credentials.";
  //        alert("invalid");
  //      }
  //    },
  //    () => console.log("SubmitLoginForm method executed successfully")
  //  );

  //}


}
