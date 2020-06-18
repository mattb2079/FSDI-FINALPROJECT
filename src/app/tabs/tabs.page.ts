import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {

  constructor() {}

  randomNumber(num: number){
    //returns a random number from 0 to num
    return Math.floor(Math.random()*Math.floor(num + 1));
  }

}
