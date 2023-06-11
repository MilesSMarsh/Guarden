class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
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
            fontSize: '10px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }


        this.add.text(30, 20, 'Game by: Miles Marsh, Sean Rowley, Wendy Chen, Brandon Tanega', wordConfig);
        this.add.text(50, 50, 'Sound Credits:', menuConfig);
        this.add.text(50, 80, 'Garden Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/christian-larssen/light-and-easy', creditConfig);
        this.add.text(50, 90, 'License code: VIY3ECE2JGWL7DCL', creditConfig);
        this.add.text(50, 100, 'Fighting Music from #Uppbeat (free for Creators!): https://uppbeat.io/t/moire/bees-in-the-garden', creditConfig);
        this.add.text(50, 110, 'License code: CNJBGQ0Y7QR1DZ9S', creditConfig);
        this.add.text(50, 120, 'Interaction sound effects from sfxr.me', creditConfig);
        this.add.text(400, 325, 'Press BACKSPACE to return', wordConfig);

        keyBACKSPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

    }

    update() {
    if (Phaser.Input.Keyboard.JustDown(keyBACKSPACE)) {
          this.scene.start('menuScene');    
        }
      }
}