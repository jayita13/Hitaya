import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})

export class WalletComponent implements OnInit {



  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;

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

  }

}
