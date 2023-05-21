class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
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

        this.add.text(100, 100, 'Guarden', menuConfig);
        this.add.text(100, 200, 'Press DOWN to toggle hard mode', menuConfig);
        this.add.text(100, 300, 'Press BACKSPACE to view tutorial', menuConfig);
        this.hardModeText = this.add.text(100, 250, 'Hard mode is on', menuConfig);
        //this.hardModeText.setVisible(false);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyBACKSPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
        //hardMode = false;

    }

    update() {

        //console.log(hardMode)
        this.hardModeText.setVisible(false);
        if (hardMode == true) {
            this.hardModeText.setVisible(true);
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            if (hardMode == false){
                hardMode = true;    
            }
            else {
                hardMode = false;
            }
            console.log(hardMode);
          }
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
          this.scene.start('gardenScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyBACKSPACE)) {
            this.scene.start('tutorialScene');    
          }
      }
}