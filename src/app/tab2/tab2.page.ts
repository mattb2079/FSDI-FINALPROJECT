import { Component } from '@angular/core';
import { Beast } from '../models/beast';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myBeast: Beast = new Beast();
  resultMessage: string = "-";

  constructor() {
    this.myBeast.randomBeast();
    this.myBeast.trainingPoints = 5;
  }

  train(stat: number, statName: string){
    if(this.myBeast.trainingPoints > 0){
      this.resultMessage = "trained " + statName;
      this.myBeast.trainingPoints -= 1;
      return stat + 1;
    } 
    this.resultMessage = "no training points"
    return stat;
  }

  trainStrength(){
    this.myBeast.strength = this.train(this.myBeast.strength, "strength");
  }

  trainSpeed(){
    this.myBeast.speed = this.train(this.myBeast.speed, "speed");
  }

  trainEndurance(){
    this.myBeast.endurance = this.train(this.myBeast.endurance, "endurance");
  }

  trainBite(){
    this.myBeast.bite = this.train(this.myBeast.bite, "bite attack"); 
  }

  trainClaw(){
    this.myBeast.claw = this.train(this.myBeast.claw, "claw attack");
  }

  trainGrapple(){
    this.myBeast.grapple = this.train(this.myBeast.grapple, "grapple attack");
  }

}
