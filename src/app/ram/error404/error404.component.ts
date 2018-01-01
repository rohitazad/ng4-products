import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  pageTitle:string = '404 Not Found Error';
  pageNotFound:string = 'Page not found';
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack():void{
    this._router.navigate(['/dashboard']);
  }

}
