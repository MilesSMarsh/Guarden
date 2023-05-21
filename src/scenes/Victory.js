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

        this.add.text(100, 100, 'Victory', menuConfig);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
          this.scene.start('titleScene');    
        }
      }
}