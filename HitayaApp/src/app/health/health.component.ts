import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;
  url: any;

  file: File = null;

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

      //this.imageService.uploadImage(this.file).subscribe(
      //  (event: any) => {
      //    if (typeof (event) === 'object') {

      //      console.log(event);
      //      this.name = event[1];
      //      this.id = event[2];

      //      console.log(this.name, this.id);


      //    }
      //  }
      //);





      readerx.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

}
