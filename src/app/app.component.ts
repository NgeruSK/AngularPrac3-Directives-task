import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  buttonText = 'Display Details'
  timeStamps = [];

  showInfo()
  {
    this.timeStamps.push(new Date().getTime());
  //  this.timeStamps.push(this.timeStamps.length + 1);
    this.showDetails = !this.showDetails;
    this.buttonText = this.showDetails === false ? 'Display Details' : 'Hide Details';
  }

  checkFifthPlus()
  {
    console.log(this.timeStamps.length > 4)
    return this.timeStamps.length > 4;
  }

  styleGive()
  {
    return this.checkFifthPlus() === true ? 'blue':'yellow';
  }

}
