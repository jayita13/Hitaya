import { Component, OnInit } from '@angular/core';
import { HatTokenService } from '../hitaya-services/HAT_TOKEN/hat-token.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  userName: string;

  constructor(private router: Router, private hat_token_servie: HatTokenService) {

   
  }


  ngOnInit(): void {
    this.getAccountAndBalance();
  }

  logOut() {
    sessionStorage.removeItem('userName');
    this.router.navigate(['/register']);

  }


  getAccountAndBalance = () => {
    const that = this;
    this.hat_token_servie.getUserBalance().
      then(function (retAccount: any) {
        that.userName = retAccount.account;
        /*that.user.balance = retAccount.balance / (10 ** 18);*/
        console.log('transfer.components :: getAccountAndBalance :: that.user');
        console.log(that.userName);
      }).catch(function (error) {
        console.log(error);
      });
  }

}
