import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QrScannerComponent } from 'angular2-qrscanner';

import { ContractService } from '../hitaya-services/blockchain-service/contract.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
  providers: [ContractService],
})

export class WalletComponent implements OnInit {

  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;

  recive: boolean = false;
  send: boolean = false;
  buy: boolean = false;
  swap: boolean = false;

  public myAngularxQrCode: string = null;


  formSubmitted = false;
  userForm: FormGroup;
  user: any;


  accountValidationMessages = {
    transferAddress: [
      { type: 'required', message: 'Transfer Address is required' },
      { type: 'minLength', message: 'Transfer Address must be 42 characters long' },
      { type: 'maxLength', message: 'Transfer Address must be 42 characters long' }
    ],
    amount: [
      { type: 'required', message: 'Amount is required' },
      { type: 'pattern', message: 'Amount must be a positive number' }
    ],
    remarks: [
      { type: 'required', message: 'Remarks are required' }
    ]
  };

  constructor(private fb: FormBuilder, private transferService: ContractService, private router: Router) {

    this.userName = sessionStorage.getItem('userName');
    this.myAngularxQrCode = this.userName;
    console.log(this.userName);
    if (this.userName != null) {
      this.userLayout = true;
    }
    else {
      this.commonLayout = true;
    }
  }


  ngOnInit(): void {

    this.formSubmitted = false;
    this.user = { address: '', transferAddress: '', balance: '', amount: '', remarks: '' };
    this.getAccountAndBalance();
    this.createForms();


  }

  ReciveQr() {
    if (this.recive == true) {
      this.recive = false;
    }
    else {
      this.recive = true;
      this.send = false;
      this.buy = false;
      this.swap = false;
    }
  }

  sendtoken() {
    if (this.send == true) {
      this.send = false;
    }
    else {
      this.send = true;
      this.recive = false;
      this.buy = false;
      this.swap = false;
    }

  }

  buytoken() {
    if (this.buy == true) {
      this.buy = false;
    }
    else {
      this.buy = true;
      this.send = false;
      this.recive = false;
      this.swap = false;
    }

  }

  swaptoken() {
    if (this.swap == true) {
      this.swap = false;
    }
    else {
      this.swap = true;
      this.send = false;
      this.buy = false;
      this.recive = false;
    }

  }




  createForms() {
    this.userForm = this.fb.group({
      transferAddress: new FormControl(this.user.transferAddress, Validators.compose([
        Validators.required,
        Validators.minLength(42),
        Validators.maxLength(42)
      ])),
      amount: new FormControl(this.user.amount, Validators.compose([
        Validators.required,
        Validators.pattern('^[+]?([.]\\d+|\\d+[.]?\\d*)$')
      ])),
      //remarks: new FormControl(this.user.remarks, Validators.compose([
      //  Validators.required
      //]))
    });
  }

  getAccountAndBalance = () => {
    const that = this;
    this.transferService.getUserBalance().
      then(function (retAccount: any) {
        that.user.address = retAccount.account;
        that.user.balance = retAccount.balance/(10**18);
        console.log('transfer.components :: getAccountAndBalance :: that.user');
        console.log(that.user);
      }).catch(function (error) {
        console.log(error);
      });
  }

  submitForm() {
    if (this.userForm.invalid) {
      alert('transfer.components :: submitForm :: Form invalid');
      return;
    } else {
      console.log('transfer.components :: submitForm :: this.userForm.value');
      console.log(this.userForm.value);
      // TODO: service call
      this.transferService.transferEther(this.userForm.value).
        then(function () { }).catch(function (error) {
          console.log(error);
        });
    }
  }
}
