import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  sidebarComponents = ['Bank Transfer','Credits','Exchange','Exchange2Gold','Investments'];

  handleClick=(event:any)=>{
    event.preventDefault();
    // const eventValue = event.target.;
    // return eventValue;
    // console.log(eventValue);
  }

}
