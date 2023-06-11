class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
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

        
        this.add.text(100, 50, 'Guarden', menuConfig);

        this.add.text(100, 100, 'Press SPACE to start', menuConfig);
        this.add.text(100, 200, 'Press DOWN to toggle hard mode', menuConfig);
        this.add.text(100, 250, 'Press BACKSPACE to view tutorial', menuConfig);
        this.add.text(100, 300, 'Press E to view the credits', menuConfig);
        this.hardModeText = this.add.text(100, 150, 'Hard mode is on', menuConfig);
        //this.hardModeText.setVisible(false);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyBACKSPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
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
          }
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          this.scene.start('gardenScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyBACKSPACE)) {
            this.scene.start('tutorialScene');    
          }
        if (Phaser.Input.Keyboard.JustDown(keyE)) {
          this.scene.start('creditsScene');    
        }
      }
}