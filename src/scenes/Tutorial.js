class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorialScene");
    }

    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let wordConfig = {
            fontFamily: 'Courier',
            fontSize: '18px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let creditConfig = {
            fontFamily: 'Courier',
            fontSize: '9px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }


        this.add.text(30, 20, 'Game by: Miles Marsh, Sean Rowley, Wendy Chen, Brandon Tanega', wordConfig);
        this.add.text(50, 50, 'Tutorial:', menuConfig);
        this.add.text(50, 80, 'The aim of the game is to protect your garden from critters.', wordConfig);
        this.add.text(50, 100, 'The critters will show up in waves, and each wave will be', wordConfig);
        this.add.text(50, 120, 'tougher than the last.', wordConfig);
        this.add.text(50, 140, 'Interact with the gate and garden respectively to move', wordConfig);
        this.add.text(50, 160, 'between scenes.', wordConfig);
        this.add.text(50, 180, 'Controls:', menuConfig);
        this.add.text(50, 210, 'Move using WASD or Arrows, and press Space to Attack', wordConfig);
        this.add.text(50, 230, 'Press E to interact with objects', wordConfig);
        this.add.text(400, 325, 'Press BACKSPACE to return', wordConfig);
        this.add.text(50, 250, 'Garden Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/christian-larssen/light-and-easy', creditConfig);
        this.add.text(50, 260, 'License code: VIY3ECE2JGWL7DCL', creditConfig);
        this.add.text(50, 280, 'Fighting Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/moire/bees-in-the-garden', creditConfig);
        this.add.text(50, 290, 'License code: CNJBGQ0Y7QR1DZ9S', creditConfig);
        
        keyBACKSPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

    }

    update() {
    if (Phaser.Input.Keyboard.JustDown(keyBACKSPACE)) {
          this.scene.start('menuScene');    
        }
      }
}