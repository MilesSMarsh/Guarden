class Garden extends Phaser.Scene{
    constructor(){
        super('gardenScene');
    }
    create(){

        this.pickedUp = false;
        this.cameras.main.setBackgroundColor('0xFFFF00');

        this.add.image(0, 0, 'gardenScene').setOrigin(0, 0);

        //this.lightning1 = this.add.image(50, 70, 'lightning1').setOrigin(0, 0);
        this.plot1 = this.physics.add.staticSprite(95, 95, 'plot').setOrigin(0, 0);
        this.lightning1 = this.add.image(55, 75, 'lightning1').setOrigin(0, 0);
        this.plot1.setVisible(false);
        this.lightning1.setVisible(false);
        this.lightning1.setScale(0.85);
        /*this.carrot2 = this.add.image(45, 120, 'carrot2').setOrigin(0, 0);
        this.carrot2.setVisible(false);
        this.carrot3 = this.add.image(45, 120, 'carrot3').setOrigin(0, 0);
        this.carrot3.setVisible(false);
        this.carrot4 = this.add.image(50, 120, 'carrot4').setOrigin(0, 0);
        this.carrot4.setScale(0.8);
        this.carrot4.setVisible(false);*/
        
        
        this.carrot1 = this.add.image(45, 120, 'carrot1').setOrigin(0, 0);
        this.carrot1.setVisible(true);
        this.carrot2 = this.add.image(45, 120, 'carrot2').setOrigin(0, 0);
        this.carrot2.setVisible(false);
        this.carrot3 = this.add.image(45, 120, 'carrot3').setOrigin(0, 0);
        this.carrot3.setVisible(false);
        this.carrot4 = this.add.image(50, 120, 'carrot4').setOrigin(0, 0);
        this.carrot4.setScale(0.8);
        this.carrot4.setVisible(false);

        this.pepper1 = this.add.image(135, 68, 'pepper1').setOrigin(0, 0);
        this.pepper1.setScale(0.9);
        this.pepper1.setVisible(true);
        this.pepper2 = this.add.image(135, 68, 'pepper2').setOrigin(0, 0);
        this.pepper2.setScale(0.9);
        this.pepper2.setVisible(false);
        this.pepper3 = this.add.image(135, 68, 'pepper3').setOrigin(0, 0);
        this.pepper3.setScale(0.9);
        this.pepper3.setVisible(false);
        this.pepper4 = this.add.image(140, 60, 'pepper4').setOrigin(0, 0);
        this.pepper4.setScale(0.8);
        this.pepper4.setVisible(false);

        this.radish1 = this.add.image(215, 130, 'radish1').setOrigin(0, 0);
        this.radish1.setVisible(true);
        this.radish2 = this.add.image(215, 130, 'radish2').setOrigin(0, 0);
        this.radish2.setVisible(false);
        this.radish3 = this.add.image(215, 130, 'radish3').setOrigin(0, 0);
        this.radish3.setVisible(false);
        this.radish4 = this.add.image(220, 130, 'radish4').setOrigin(0, 0);
        this.radish4.setScale(0.8);
        this.radish4.setVisible(false);
        
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

        this.gameplayMusic = this.sound.add('background_music');
        this.gameplayMusic.loop = true;
        this.gameplayMusic.play();


        this.add.text(350, 25, `Next Round: ${round + 1}`, menuConfig);
        this.add.text(25, 230, ' Interact with GATE', menuConfig);
        this.gate = this.physics.add.staticSprite(20, 320, 'fence').setOrigin(0.5, 0.5);
        this.gate.name = 'gate';


        this.spades = this.physics.add.staticSprite(600, 100, 'spades').setOrigin(0.5, 0.5);
        this.spades.setSize(30, 10);
        this.spades.name = 'spades';
        this.shovel = this.physics.add.staticSprite(500, 100, 'shovel').setOrigin(0.5, 0.5);
        this.shovel.setSize(50, 50);
        this.shovel.name = 'shovel';
        this.rake = this.physics.add.staticSprite(500, 200, 'rake').setOrigin(0.5, 0.5);
        this.rake.setSize(50, 50);
        this.rake.name = 'rake';

        this.sblightningf = this.physics.add.staticSprite(600, 200, 'sb_lightningf').setOrigin(0.5, 0.5);
        //this.sblightningf.setScale(20, 20);
        this.sblightningf.name = 'sblightning';
        this.sblightningf.setVisible(true);

        this.keys = this.input.keyboard.createCursorKeys();
        this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keys.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.p1Character = new Character(this, 70, 300, 'move-right-shovel-sheet', 0, 'right', characterState).setOrigin(0.5, 0.5);

        this.characterFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            damaged: new DamagedState(),
            attacking: new AttackState(),
            interact: new InteractState()
        }, [this, this.p1Character]);



        this.physics.add.collider(this.p1Character, this.gate);

        this.physics.add.collider(this.p1Character, this.shovel);

        this.physics.add.collider(this.p1Character, this.spades);

        //this.physics.add.collider(this.p1Character, this.sblightningf);
        this.physics.add.overlap(this.p1Character, this.sblightningf, this.hide_seed, null, this);

        this.physics.add.overlap(this.p1Character, this.plot1, this.plant_seed, null, this);

    }
    update(){

        //console.log(hardMode)

        this.characterFSM.step();
        this.p1Character.moveHitBox();

        /*console.log('x',this.sblightningf.x);
        console.log('y',this.sblightningf.y);
        console.log('char x',this.p1Character.x);
        console.log('char y',this.p1Character.y);
        console.log('y/n', this.checkLocation(this.p1Character, this.sblightningf));
        */

        // if (Phaser.Input.Keyboard.JustDown(this.keys.keyE) && 
        // this.checkLocation(this.p1Character, this.sblightningf)){
        //     console.log('in front seed');
        //     this.sblightningf.setVisible(false);
        // }

        //console.log('gard',this.pickedUp);
        //if (this.pickedUp) {
        //    this.sblightningf.setPosition(45, 180);
        //    this.sblightningf.setVisible(false);
        //}

        if (round == 1) {
            //this.lightning1.setVisible(true);
            this.carrot2.setVisible(true);
            this.pepper2.setVisible(true);
            this.radish2.setVisible(true);
            this.carrot1.setVisible(false);
            this.pepper1.setVisible(false);
            this.radish1.setVisible(false);
        } else if (round == 2) {
            this.carrot2.setVisible(false);
            this.pepper2.setVisible(false);
            this.radish2.setVisible(false);
            this.carrot3.setVisible(true);
            this.pepper3.setVisible(true);
            this.radish3.setVisible(true);
        } else if (round == 3) {
            this.carrot3.setVisible(false);
            this.pepper3.setVisible(false);
            this.radish3.setVisible(false);
            this.carrot4.setVisible(true);
            this.pepper4.setVisible(true);
            this.radish4.setVisible(true);
        }
      
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
          this.scene.start('playScene');    
          this.gameplayMusic.stop();
        }
    }
    checkLocation(player, plant) {
        if(player.x >= plant.x - 26 &&
            player.x <= plant.x + 31 &&
            player.y <= plant.y + 46) {
            return true;
        } else {
            return false;
        }
    }

    hide_seed(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.keyE)){
            console.log('in front seed');
            this.sblightningf.setVisible(false);
            this.pickedUp = true;
        }
    }
    plant_seed(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.keyE) && this.pickedUp){
            console.log('plant seed');
            //this.lightning1.setPosition(55, 65);
            //this.lightning1.setScale(0.85);
            this.lightning1.setVisible(true);
        }
    }

}