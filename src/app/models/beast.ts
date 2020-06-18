export class Beast {
    public name: string;
    public imageURL: string;
    public strength: number;
    public speed: number;
    public endurance: number;
    public health: number;
    public bite: number;
    public claw: number;
    public grapple: number;
    public losses: number;
    public wins: number;
    public trainingPoints: number;
    public selectedAttack: string;

    constructor(){
        this.wins = 0;
        this.losses = 0;
    }

    createBeast(name, imageURL, strength, speed, endurance, bite, claw, grapple){
        this.name = name;
        this.imageURL = "../assets/"+imageURL;
        this.strength = strength;
        this.speed = speed;
        this.endurance = endurance;
        this.health = 100;
        this.bite = bite;
        this.claw = claw;
        this.grapple = grapple;        
    }

    randomBeast(){        
        var num =  Math.floor(Math.random()*Math.floor(5));
        if (num == 0){
            this.createBeast("Krubb", "krubs.jpg", 10, 5, 10, 5, 15, 10);
        } else if (num == 1){
            this.createBeast("Bujeebus", "bujeebus.jpg", 5, 10, 10, 7, 8, 8);
        } else if (num == 2){
            this.createBeast("Hurn", "hurn.jpg", 10, 10, 5, 5, 10, 10);
        } else if (num == 3){
            this.createBeast("Thaash", "thaash.jpg", 10, 5, 10, 8, 2, 15);
        } else if (num == 4){
            this.createBeast("Kawroo", "kawroo.jpg", 7, 8, 8, 15, 8, 2);
        }
    }

}