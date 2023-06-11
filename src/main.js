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


    scene: [Load, Title, Menu, Tutorial, Garden, Play, Victory]

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

let round = 0;
let numOfSnails = 0;
let numOfRats = 0;
let pickedUp = false;
let planted = false;
let plot = -1;
let round_planted = -1;
let round_planted_heart = -1;
let seed = -1;
let planted_heart = false;

let return_from_victory_screen = false;

let characterState = {
    weapon: new Weapon('shovel', 2, 0, 0, 50, 25),
    maxHealth: 5,
    currHealth: 5,
    charXP: 0,
    charLevel: 1,
    startOfRoundHealth : 5
}
