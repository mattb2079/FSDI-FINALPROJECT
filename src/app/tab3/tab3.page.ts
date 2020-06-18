import { TabsPage } from './../tabs/tabs.page';
import { Component } from '@angular/core';
import { Beast } from '../models/beast';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myBeast: Beast = new Beast();
  otherBeast: Beast = new Beast ();
  num: number;
  resultMessage = "-";
  page: TabsPage = new TabsPage();
  attackResult: String = "";

  constructor() {
    this.myBeast.randomBeast();
    this.otherBeast.randomBeast();
  }

  onChangeHandler(event: string){
    console.log(event);

    this.myBeast.selectedAttack = event;

  }

  attackRound(){

    if (this.myBeast.health <= 0 || this.otherBeast.health <= 0){
      return;
    }
    
    if(this.myBeast.selectedAttack == ""){
      this.resultMessage = "no attack selected"
    } else {
      this.resultMessage = "";
      this.attack(this.myBeast, this.otherBeast);
      this.otherBeast.selectedAttack = this.randomlySelectAttack();
      this.attack(this.otherBeast, this.myBeast);
    }
    
    if(this.myBeast.health <= 0){
      this.resultMessage = this.otherBeast.name + " wins!";
    } else if (this.otherBeast.health <= 0){
      this.resultMessage = this.myBeast.name + " wins!";
    }
  }

  attack(beast1: Beast, beast2: Beast){
    // beast1 attacks beast2
    this.resultMessage += beast1.name + " attacked " + beast2.name + " with " + beast1.selectedAttack;
    switch (beast1.selectedAttack){
      case "Bite":
        this.attackResult = this.biteAttack(beast1, beast2);
        break;
      case "Claw":
        this.attackResult = this.clawAttack(beast1, beast2);
        break;
      case "Grapple":
        this.attackResult = this.grappleAttack(beast1, beast2);
        break;
    }
    
    if(this.attackResult == "hit"){
      this.resultMessage += " and hit! ";
    } else {
      this.resultMessage += " and missed! ";
    }
  }

  attackRoll(){
    return this.page.randomNumber(10) - this.page.randomNumber(10);
  }

  biteAttack(beast1: Beast, beast2: Beast){
    this.num = this.attackRoll() + beast1.bite + beast1.strength + beast1.strength + beast1.endurance
                - beast2.speed - beast2.speed - beast2.endurance;
    console.log("attack roll: " + this.num);
                
    if(this.num > 0){
      this.num = (beast1.strength + beast1.bite - beast2.endurance + this.attackRoll());
      if (this.num < 0){
        this.num = 0;
      }
      beast2.health -= this.num;
      if(beast2.health < 0 ){
        beast2.health = 0;
      }
      console.log("damage: " + this.num);
      return "hit";
    }
    return "miss";
  }

  clawAttack(beast1: Beast, beast2: Beast){
    this.num = this.attackRoll() + beast1.claw + beast1.strength + beast1.speed + beast1.speed
                - beast2.strength - beast2.speed - beast2.strength;
    console.log("attack roll: " + this.num);
                
    if(this.num > 0){
      this.num = (beast1.strength + beast1.claw - beast2.endurance + this.attackRoll());
      if (this.num < 0){
        this.num = 0;
      }
      beast2.health -= this.num;
      if(beast2.health < 0 ){
        beast2.health = 0;
      }
      console.log("damage: " + this.num);
      return "hit";
    }
    return "miss";
  }

  grappleAttack(beast1: Beast, beast2: Beast){
    this.num = this.attackRoll() + beast1.grapple + beast1.strength + beast1.speed + beast1.endurance
                - beast2.strength - beast2.speed - beast2.endurance;
    console.log("attack roll: " + this.num);
                
    if(this.num > 0){
      this.num = (beast1.strength + beast1.grapple - beast2.endurance + this.attackRoll());
      if (this.num < 0){
        this.num = 0;
      }
      beast2.health -= this.num;
      if(beast2.health < 0 ){
        beast2.health = 0;
      }
      console.log("damage: " + this.num);
      return "hit";
    }
    return "miss";
  }

  randomlySelectAttack(){
    this.num = this.page.randomNumber(2);
    switch (this.num){
      case 0:
        return "Bite";
      case 1:
        return "Claw";
      case 2:
        return "Grapple";
    }

  }
}
