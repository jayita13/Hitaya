import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAdminLogin } from '../../hitaya-interfaces/IUser';
import { UserValidationService } from '../../hitaya-services/user-validation/user-validation.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Admin: IAdminLogin;
    result: number;

  constructor(private userService: UserValidationService) { }

  ngOnInit(): void {
  }

  AdminLogin(form: NgForm) {
    this.Admin = { EmailId: form.value.email, Password: form.value.password };
    this.userService.AdminLoginValidation(this.Admin).subscribe(
      responseFromAdminLogin => {
        this.result = responseFromAdminLogin;
        if (this.result == 1) {
          alert("Welcome")
        }
        else {
          alert("Invalid Credentials")
        }
      },
      responseError => {
        this.result = responseError;
      },
      ()=>console.log("Admin Login Works")
      
    )
  }

}
