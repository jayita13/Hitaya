import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  userName: string;

  constructor(private router: Router) {
    this.userName = sessionStorage.getItem('userName');
  }


  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.removeItem('userName');
    this.router.navigate(['/register']);

  }

}
