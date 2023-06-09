class Garden extends Phaser.Scene{
    constructor(){
        super('gardenScene');
    }
    create(){

        //this.pickedUp = false;
        
        this.cameras.main.setBackgroundColor('0xFFFF00');

        this.add.image(0, 0, 'gardenScene').setOrigin(0, 0);

        // Plot areas
        this.plot1 = this.physics.add.staticSprite(95, 95, 'plot').setOrigin(0, 0);
        this.plot1.setVisible(false);
        this.plot1.name = 'plot1';
        this.plot2 = this.physics.add.staticSprite(185, 95, 'plot').setOrigin(0, 0);
        this.plot2.setVisible(false);
        this.plot3 = this.physics.add.staticSprite(271, 103, 'plot').setOrigin(0, 0);
        this.plot3.setVisible(false);
        this.plot3.name = 'plot3';
        this.plot7 = this.physics.add.staticSprite(90, 225, 'plot').setOrigin(0, 0);
        this.plot7.setVisible(false);
        this.plot7.name = 'plot7';
        this.plot8 = this.physics.add.staticSprite(175, 228, 'plot').setOrigin(0, 0);
        this.plot8.setVisible(false);
        this.plot8.name = 'plot8';
        this.plot9 = this.physics.add.staticSprite(266, 232, 'plot').setOrigin(0, 0);
        this.plot9.setVisible(false);
        this.plot9.name = 'plot9';

        // Lightning plant stages in plot 1
        this.lightning0 = this.add.image(50, 70, 'lightning0').setOrigin(0, 0);
        this.lightning0.setVisible(false);
        this.lightning0.setScale(0.85);
        this.lightning1 = this.add.image(55, 75, 'lightning1').setOrigin(0, 0);
        this.lightning1.setVisible(false);
        this.lightning1.setScale(0.85);
        this.lightning2 = this.add.image(57, 68, 'lightning2').setOrigin(0, 0);
        this.lightning2.setVisible(false);
        this.lightning2.setScale(0.85);
        this.lightning3 = this.add.image(58, 55, 'lightning3').setOrigin(0, 0);
        //this.lightning3.name = 'lightning3';
        this.lightning3.setScale(0.75);
        this.lightning3.setVisible(false);

        
        // Lightning plant stages in plot 2
        this.lightning0_2 = this.add.image(140, 68, 'lightning0').setOrigin(0, 0);
        this.lightning0_2.setVisible(false);
        this.lightning0_2.setScale(0.85);
        this.lightning1_2 = this.add.image(147, 70, 'lightning1').setOrigin(0, 0);
        this.lightning1_2.setVisible(false);
        this.lightning1_2.setScale(0.85);
        this.lightning2_2 = this.add.image(147, 68, 'lightning2').setOrigin(0, 0);
        this.lightning2_2.setVisible(false);
        this.lightning2_2.setScale(0.85);
        this.lightning3_2 = this.add.image(147, 58, 'lightning3').setOrigin(0, 0);
        this.lightning3_2.setScale(0.75);
        this.lightning3_2.setVisible(false);
        
        // Lightning plant stages in plot 3
        this.lightning0_3 = this.add.image(226, 75, 'lightning0').setOrigin(0, 0);
        this.lightning0_3.setVisible(false);
        this.lightning0_3.setScale(0.85);
        this.lightning1_3 = this.add.image(235, 84, 'lightning1').setOrigin(0, 0);
        this.lightning1_3.setVisible(false);
        this.lightning1_3.setScale(0.85);
        this.lightning2_3 = this.add.image(233, 75, 'lightning2').setOrigin(0, 0);
        this.lightning2_3.setVisible(false);
        this.lightning2_3.setScale(0.85);
        this.lightning3_3 = this.add.image(235, 64, 'lightning3').setOrigin(0, 0);
        this.lightning3_3.setScale(0.75);
        this.lightning3_3.setVisible(false);
        
        this.carrot1 = this.add.image(45, 120, 'carrot1').setOrigin(0, 0);
        this.carrot1.setVisible(true);
        this.carrot2 = this.add.image(45, 120, 'carrot2').setOrigin(0, 0);
        this.carrot2.setVisible(false);
        this.carrot3 = this.add.image(45, 120, 'carrot3').setOrigin(0, 0);
        this.carrot3.setVisible(false);
        this.carrot4 = this.add.image(50, 120, 'carrot4').setOrigin(0, 0);
        this.carrot4.setScale(0.8);
        this.carrot4.setVisible(false);

        // Heart plant stages in plot 7
        this.heart0 = this.add.image(45, 200, 'heart0').setOrigin(0, 0);
        this.heart0.setVisible(false);
        this.heart0.setScale(0.85);
        this.heart1 = this.add.image(45, 200, 'heart1').setOrigin(0, 0);
        this.heart1.setVisible(false);
        this.heart1.setScale(0.85);
        this.heart2 = this.add.image(45, 200, 'heart2').setOrigin(0, 0);
        this.heart2.setVisible(false);
        this.heart2.setScale(0.85);
        this.heart3 = this.add.image(47, 184, 'heart3').setOrigin(0, 0);
        this.heart3.setVisible(false);
        this.heart3.setScale(0.8);
        
        // Heart plant stages in plot 8
        this.heart0_2 = this.add.image(65, 200, 'heart0').setOrigin(0, 0);
        this.heart0_2.setVisible(false);
        this.heart0_2.setScale(0.85);
        this.heart1_2 = this.add.image(45, 200, 'heart1').setOrigin(0, 0);
        this.heart1_2.setVisible(false);
        this.heart1_2.setScale(0.85);

        /*this.pepper1 = this.add.image(135, 68, 'pepper1').setOrigin(0, 0);
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
        this.radish4.setVisible(false);*/
        
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
        if (round != 5){
            this.gameplayMusic.play();
        }


        this.add.text(350, 25, `Next Round: ${round + 1}`, menuConfig);
        this.add.text(25, 240, ' Interact with GATE', menuConfig);
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
        this.sblightningf.name = 'sblightning';
        this.sblightningf.setVisible(true);

        this.sbheartf = this.physics.add.staticSprite(600, 200, 'sb_heartf').setOrigin(0.5, 0.5);
        this.sbheartf.name = 'sbheart';
        this.sbheartf.setVisible(false);

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
        this.physics.add.overlap(this.p1Character, this.plot2, this.plant_seed2, null, this);
        this.physics.add.overlap(this.p1Character, this.plot3, this.plant_seed3, null, this);
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

        console.log(round_planted);

        if (round == 1) {
            setTimeout(() => {
                this.carrot2.setVisible(true);
                this.carrot1.setVisible(false);
                if (round_planted == 0) {
                    this.sblightningf.setVisible(false);
                    if (plot == 1) {
                        this.lightning1.setVisible(true);
                        this.lightning0.setVisible(false);
                    } else if (plot == 2) {
                        this.lightning1_2.setVisible(true);
                        this.lightning0_2.setVisible(false);
                    } else if (plot == 3) {
                        this.lightning1_3.setVisible(true);
                        this.lightning0_3.setVisible(false);
                    }
                } 
                //this.pepper2.setVisible(true);
                //this.radish2.setVisible(true);
                /*this.pepper1.setVisible(false);
                this.radish1.setVisible(false);*/
            }, 40);
        } else if (round == 2 || round == 4) {
            setTimeout(() => {
                this.carrot2.setVisible(false);
                this.carrot1.setVisible(false);
                this.carrot3.setVisible(true);
                if (round_planted == round - 2) {
                    this.sblightningf.setVisible(false);
                    if (plot == 1) {
                        this.lightning2.setVisible(true);
                        this.lightning1.setVisible(false);
                    } else if (plot == 2) {
                        this.lightning2_2.setVisible(true);
                        this.lightning1_2.setVisible(false);
                    } else if (plot == 3) {
                        this.lightning2_3.setVisible(true);
                        this.lightning1_3.setVisible(false);
                    }
                } else if (round_planted == round - 1) {
                    this.sblightningf.setVisible(false);
                    if (plot == 1) {
                        this.lightning1.setVisible(true);
                        this.lightning0.setVisible(false);
                    } else if (plot == 2) {
                        this.lightning1_2.setVisible(true);
                        this.lightning0_2.setVisible(false);
                    } else if (plot == 3) {
                        this.lightning1_3.setVisible(true);
                        this.lightning0_3.setVisible(false);
                    }
                } else if (round_planted == round - 3) {
                    this.sblightningf.setVisible(false);
                    if (plot == 1 && !harvested_lightningp) {
                        this.lightning3.setVisible(true);
                        this.lightning2.setVisible(false);
                        this.lightning1.setVisible(false);
                    } else if (plot == 2 && !harvested_lightningp) {
                        this.lightning3_2.setVisible(true);
                        this.lightning2_2.setVisible(false);
                        this.lightning1_2.setVisible(false);
                    } else if (plot == 3 && !harvested_lightningp) {
                        this.lightning3_3.setVisible(true);
                        this.lightning2_3.setVisible(false);
                        this.lightning1_3.setVisible(false);
                    }
                }
                //this.pepper2.setVisible(false);
                //this.radish2.setVisible(false);
                //this.pepper3.setVisible(true);
                //this.radish3.setVisible(true);
            }, 40); 
        } else if (round == 3 || round == 5 || round == 6) {
            setTimeout(() => {
                this.carrot3.setVisible(false);
                this.carrot1.setVisible(false);
                if (round == 3) {
                    this.carrot4.setVisible(true);
                }
                if (round_planted == round - 3) {
                    this.sblightningf.setVisible(false);
                    if (plot == 1 && !harvested_lightningp) {
                        this.lightning3.setVisible(true);
                        this.lightning2.setVisible(false);
                        this.lightning1.setVisible(false);
                    } else if (plot == 2 && !harvested_lightningp) {
                        this.lightning3_2.setVisible(true);
                        this.lightning2_2.setVisible(false);
                        this.lightning1_2.setVisible(false);
                    } else if (plot == 3 && !harvested_lightningp) {
                        this.lightning3_3.setVisible(true);
                        this.lightning2_3.setVisible(false);
                        this.lightning1_3.setVisible(false);
                    }
                } else if (round_planted == round - 2) {
                    this.sblightningf.setVisible(false);
                    if (plot == 1) {
                        this.lightning2.setVisible(true);
                        this.lightning1.setVisible(false);
                    } else if (plot == 2) {
                        this.lightning2_2.setVisible(true);
                        this.lightning1_2.setVisible(false);
                    } else if (plot == 3) {
                        this.lightning2_3.setVisible(true);
                        this.lightning1_3.setVisible(false);
                    }
                } else if (round_planted == round - 1) {
                    this.sblightningf.setVisible(false);
                    if (plot == 1) {
                        this.lightning1.setVisible(true);
                        this.lightning0.setVisible(false);
                    } else if (plot == 2) {
                        this.lightning1_2.setVisible(true);
                        this.lightning0_2.setVisible(false);
                    } else if (plot == 3) {
                        this.lightning1_3.setVisible(true);
                        this.lightning0_3.setVisible(false);
                    }
                } else {
                    this.sblightningf.setVisible(false);
                }
                //this.pepper3.setVisible(false);
                //this.radish3.setVisible(false);
                //this.pepper4.setVisible(true);
                //this.radish4.setVisible(true);
            }, 40);
        } else if (round > 6) {
            this.sblightningf.setVisible(false);
        }
        if (planted && round == round_planted + 2) {
            //this.sbheartf.setVisible(true);
            round_planted_heart = round;
            //planted_heart = true;
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
            if (!pickedUp) {
                this.sound.play('click');
                this.sblightningf.setVisible(false);
                seed = this.lightning1;
                this.plottext = this.add.text(40, 25, 'Go to a top row plot to plant it');
                pickedUp = true;
            }
        }
    }
    plant_seed(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.keyE) && pickedUp){
            console.log('plant seed');
            plot = 1;
            if (seed = this.lightning1 && !planted) {
                this.lightning0.setVisible(true);
                planted = true;
                round_planted = round;
                this.sound.play('plant');
            } else if (this.lightning3.visible){
                // increase player speed
                console.log('grown');
                this.sound.play('powerup');
                this.lightning3.setVisible(false);
                harvested_lightningp = true;
            }
            this.plottext.setVisible(false);
        }
    }
    plant_seed2(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.keyE) && pickedUp){
            console.log('plant seed');
            plot = 2;
            if (seed = this.lightning1 && !planted) {
                this.lightning0_2.setVisible(true);
                planted = true;
                round_planted = round;
                this.sound.play('plant');
            } else if (this.lightning3_2.visible){
                // increase player speed
                console.log('grown2');
                this.sound.play('powerup');
                this.lightning3_2.setVisible(false);
                harvested_lightningp = true;
            }
            this.plottext.setVisible(false);
        }
    }
    plant_seed3(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.keyE) && pickedUp){
            console.log('plant seed');
            plot = 3;
            if (seed = this.lightning1 && !planted) {
                this.lightning0_3.setVisible(true);
                round_planted = round;
                planted = true;
                this.sound.play('plant');
            } else if (this.lightning3_3.visible){
                // increase player speed
                console.log('grown3');
                console.log( round_planted +3 >= round);
                this.sound.play('powerup');
                this.lightning3_3.setVisible(false);
                harvested_lightningp = true;
            }
            this.plottext.setVisible(false);
        }
    }

}
