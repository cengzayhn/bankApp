import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WelcomeComponent} from "../welcome/welcome.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // @ts-ignore
  @Input() status:boolean;
  @Output() statusChange = new EventEmitter<boolean>();

  ngOnInit() {
  }
  constructor( ) {
  }



  setStatus=()=>{
  //if true just return,
    this.status = true;
    this.statusChange.emit(this.status);
    // return this.status;
  }


}
