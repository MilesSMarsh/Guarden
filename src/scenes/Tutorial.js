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


        this.add.text(50, 20, 'Tutorial:', menuConfig);
        this.add.text(50, 50, 'The aim of the game is to protect your garden from critters.', wordConfig);
        this.add.text(50, 70, 'The critters will show up in waves, and each wave will be', wordConfig);
        this.add.text(50, 90, 'tougher than the last.', wordConfig);
        this.add.text(50, 110, 'Interact with the gate and garden respectively to move', wordConfig);
        this.add.text(50, 130, 'between scenes.', wordConfig);
        this.add.text(50, 150, 'Make it to wave 5 to complete the base game', wordConfig);
        this.add.text(50, 180, 'Controls:', menuConfig);
        this.add.text(50, 210, 'Move using WASD or Arrows, and press Space to Attack', wordConfig);
        this.add.text(50, 230, 'Press E to interact with objects, like the weapons or seeds', wordConfig);
        this.add.text(50, 250, 'Press E on the weapons on the shed to equip them', wordConfig);
        this.add.text(50, 270, 'Press E on the seed bags to equip them', wordConfig);
        this.add.text(400, 325, 'Press BACKSPACE to return', wordConfig);

        keyBACKSPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

    }

    update() {
    if (Phaser.Input.Keyboard.JustDown(keyBACKSPACE)) {
          this.scene.start('menuScene');    
        }
      }
}