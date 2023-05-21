let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 350,
    pixelArt: true,
    zoom : 2,
    physics:{
        default: "arcade",
        arcade : {
            //debug: true
        }
    },


    scene: [Load, Title, Tutorial, Garden, Play, Victory]

}

let game = new Phaser.Game(config);

let keyLEFT = null;
let keyRIGHT = null;
let keyUP = null;
let keyDOWN = null;
let keySPACE = null;
let keyBACKSPACE = null;
let keyENTER = null;
let keyW = null;
let keyA = null;
let keyS = null;
let keyD = null;
let keyE = null;
let hardMode = false;

let round = 1;

let characterState = {
    weapon: new Weapon('hoe', 2, 0, 0, 50, 25),
    maxHealth: 5,
    currHealth: 5,
    charXP: 0,
    charLevel: 1
}
