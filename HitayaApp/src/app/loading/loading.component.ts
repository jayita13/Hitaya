import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

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

    this.userName = sessionStorage.getItem('userName');
    if (this.userName != null) {
      setTimeout(() => {
        this.router.navigate(['wallet']);
      }, 3000);  //3s
    }
    else {
      setTimeout(() => {
        this.router.navigate(['register']);
      }, 3000);  //3s
    }
  }

}
