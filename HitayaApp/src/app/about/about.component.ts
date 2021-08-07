import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
