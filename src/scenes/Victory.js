class Victory extends Phaser.Scene {
    constructor() {
        super("victoryScene");
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

        this.add.image(0, 0, 'victoryScreen').setOrigin(0, 0);
        //this.cameras.main.setBackgroundColor("#d5d5d5");
        //this.add.text(100, 100, 'Victory\nPress Enter to go to Title\nPress E to continue playing', menuConfig);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        //this.gameplayMusic.stop()


    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
          this.scene.stop('gardenScene');
          round = 0;
          this.scene.start('titleScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('gardenScene');    
          }
      }
}