let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 350,
    pixelArt: true,
    zoom : 2,
    physics:{
        default: "arcade",
        arcade : {
            debug: true
        }
    },
    scene: [Load, Play]
}

let game = new Phaser.Game(config);

let keyLEFT = null;
let keyRIGHT = null;
let keyUP = null;
let keyDOWN = null;
let keySPACE = null;
let keyENTER = null;