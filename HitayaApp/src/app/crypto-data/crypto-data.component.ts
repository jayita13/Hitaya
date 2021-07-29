import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CryptoService } from '../hitaya-services/cryptoData/crypto.service';

@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css']
})
export class CryptoDataComponent implements OnInit {

  public data: Object[];
  public data_refined: Object[];
  public companyData: Object[];

  chosencrypto: string = "ETH";
  status: any[];
  msg: string;

  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;



  constructor(private crypto_data: CryptoService, private router: Router) {
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

    this.getcryptokdata();
  }


  getcryptokdata() {


    this.crypto_data.CryptoData(this.chosencrypto).subscribe(
      responseDataStatus => {
        this.status = responseDataStatus;
        if (this.status != null) {




          this.data = this.status["Time Series Crypto (1min)"];

          this.data_refined = [];

          for (let key in this.data) {
            let value = this.data[key];
            this.data_refined.push({
              time: new Date(key),
              open: Number(value["1. open"]),
              high: Number(value["2. high"]),
              low: Number(value["3. low"]),
              close: Number(value["4. close"]),
              volume: Number(value["5. volume"])
            });


          }
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
          alert("invalid");
        }
      },
      () => console.log("Data Fetched Successfull")
    );

  }

}
