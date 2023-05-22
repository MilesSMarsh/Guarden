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

        this.add.text(50, 50, 'Tutorial:', menuConfig);
        this.add.text(50, 80, 'The aim of the game is to protect your garden from critters.', wordConfig);
        this.add.text(50, 100, 'The critters will show up in waves, and each wave will be', wordConfig);
        this.add.text(50, 120, 'tougher than the last.', wordConfig);
        this.add.text(50, 140, 'Interact with the fence and garden respectively to move', wordConfig);
        this.add.text(50, 160, 'between scenes.', wordConfig);
        this.add.text(50, 180, 'Controls:', menuConfig);
        this.add.text(50, 210, 'Move using WASD or Arrows, and press Space to Attack', wordConfig);
        this.add.text(50, 230, 'Press E to interact with objects', wordConfig);
        this.add.text(400, 325, 'Press BACKSPACE to return', wordConfig);
        keyBACKSPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

    }

    update() {
    if (Phaser.Input.Keyboard.JustDown(keyBACKSPACE)) {
          this.scene.start('menuScene');    
        }
      }
}