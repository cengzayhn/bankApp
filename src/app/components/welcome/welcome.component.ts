import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
@Injectable({
  providedIn:`root`
})
export class WelcomeComponent implements OnInit{
  constructor() {
  }
  ngOnInit() {
  }

  isClicked:boolean = false;

  bindOperation=(value:boolean)=>{
    this.isClicked = value;
  }





}
