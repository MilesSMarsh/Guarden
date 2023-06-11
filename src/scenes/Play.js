class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }
    create(){
        this.cameras.main.setBackgroundColor('0x135711');

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

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '9px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }


        this.keys = this.input.keyboard.createCursorKeys();
        this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keys.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        this.snailsLeft = 0;
        this.ratsLeft = 0;
        
        this.enemyName = "snail";
        if (round % 2 != 0){
            this.enemyName = "snail";
        }
        else {
            this.enemyName = "rat";
        }

        this.snail_speed = 20;
        this.rat_speed = 45;

        this.gameOver = false;
        this.roundOver = false;

        this.snail_Health = 2;
        this.rat_Health = 2;

        //this.numOfSnails = 0;
        //this.numOfRats = 0;

        this.interactText = this.add.text(375, 140, 'Press E on garden', textConfig).setOrigin(0.5, 0.5);
        this.interactText.setVisible(false);

        this.garden = this.physics.add.staticSprite(375, 175, 'garden').setOrigin(0.5, 0.5);
        this.garden.name = 'garden';
        this.gardenHealth = 3;


        this.add.text(350, 25, `Round: ${round}`, menuConfig);

        this.gameplayMusic = this.sound.add('combat_music');
        this.gameplayMusic.loop = true;
        this.gameplayMusic.play();


        this.p1Character = new Character(this, 380, 220, `move-right-${characterState.weapon.name}-sheet`, 0, 'right', characterState).setOrigin(0.5, 0.5);
        this.p1Character.currHealth = characterState.currHealth;
        this.hoe = new Weapon('hoe', 2, 0, 0, 50, 25);
        this.shovel = new Weapon('shovel', 2, 0, 0, 50, 25);
        
        //create state machine for new character
        this.characterFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            damaged: new DamagedState(),
            attacking: new AttackState(),
            interact: new InteractState()
        }, [this, this.p1Character]);

        //Music from #Uppbeat (free for Creators!):
        //https://uppbeat.io/t/moire/bees-in-the-garden
        //License code: CNJBGQ0Y7QR1DZ9S

        this.enemyGroup = this.add.group({
            runChildUpdate: true
        });

        if (round % 2 != 0){
            for (let i = 0; i < (numOfSnails); i += 1){
                this.clock = this.time.delayedCall((i/round)*1000, () => {
                    this.addEnemy();
                    this.snailsLeft += 1;
                }, null, this);
            }
            //this.numOfSnails += 3;
        }

        else {
            for (let i = 0; i < (numOfRats); i += 1){
                this.clock = this.time.delayedCall((i/round)*1000, () => {
                    this.addEnemy();
                    this.ratsLeft += 1;
                }, null, this);
            }
            //this.numOfRats += 3;
        }

        this.physics.add.collider(this.p1Character, this.garden);
        this.physics.add.overlap(this.enemyGroup, this.garden, this.whatup, null, this);
        this.physics.add.overlap(this.enemyGroup, this.p1Character, this.takeDamage, null, this);

        this.heart1 = this.add.tileSprite(50,30,30,30, 'heart');
        this.heart2 = this.add.tileSprite(80,30,30,30, 'heart');
        this.heart3 = this.add.tileSprite(110,30,30,30, 'heart');
        this.heart4 = this.add.tileSprite(140,30,30,30, 'heart');
        this.heart5 = this.add.tileSprite(170,30,30,30, 'heart');

    }

    update(){

        //console.log(hardMode)
        //console.log(this.p1Character.x);
        //console.log(this.p1Character.y);

        this.characterFSM.step();
        this.p1Character.moveHitBox();


        if (round % 2 != 0){
            if(this.snailsLeft <= 0){
                this.roundOver = true;
                this.interactText.setVisible(true);
            }
        }
        else{
            if(this.ratsLeft <= 0){
                this.roundOver = true;
                this.interactText.setVisible(true);
            }
        }

        //this.physics.moveToObject(this.enemy, this.garden, 5);

        if(Phaser.Input.Keyboard.JustDown(this.keys.shift)){
            this.p1Character.changeWeapon(this.shovel);
        }

        if (this.p1Character.currHealth == 4){
            //console.log("health");
            this.heart5.setVisible(false);
            this.heart4.setVisible(true);
            this.heart3.setVisible(true);
            this.heart2.setVisible(true);
            this.heart1.setVisible(true);
        }
        if (this.p1Character.currHealth == 3){
            //console.log("health");
            this.heart5.setVisible(false);
            this.heart4.setVisible(false);
            this.heart3.setVisible(true);
            this.heart2.setVisible(true);
            this.heart1.setVisible(true);
        }
        if (this.p1Character.currHealth == 2){
            //console.log("health");
            this.heart5.setVisible(false);
            this.heart4.setVisible(false);
            this.heart3.setVisible(false);
            this.heart2.setVisible(true);
            this.heart1.setVisible(true);
        }
        if (this.p1Character.currHealth == 1){
            //console.log("health");
            this.heart5.setVisible(false);
            this.heart4.setVisible(false);
            this.heart3.setVisible(false);
            this.heart2.setVisible(false);
            this.heart1.setVisible(true);
        }
        if (this.p1Character.currHealth == 0){
            //console.log("health");
            this.heart5.setVisible(false);
            this.heart4.setVisible(false);
            this.heart3.setVisible(false);
            this.heart2.setVisible(false);
            this.heart1.setVisible(false);
            //maybe play a cute little animation
            //this.scene.start('gameOverScene');
        }


    }

    addEnemy(){
        if (this.gameOver == false){ 
            this.num = this.getRandomInt(4);
            if (this.enemyName == "snail"){
                if (this.num == 0){
                    this.yCoord = Phaser.Math.Between(75, 305);
                    let enemy = new Enemy(this, 700, this.yCoord, -this.snail_speed, (((this.yCoord - 175))/350)*-this.snail_speed,'snail-move-right-sheet', 0,  this.snail_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
                if (this.num == 1){
                    this.yCoord = Phaser.Math.Between(75, 305);
                    let enemy = new Enemy(this, 0, this.yCoord, this.snail_speed, ((-(this.yCoord - 175))/350)*this.snail_speed,'snail-move-right-sheet', 0, this.snail_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
                if (this.num == 2){
                    this.xCoord = Phaser.Math.Between(50,650)
                    let enemy = new Enemy(this, this.xCoord, 0, ((-(this.xCoord - 350))/175)*(this.snail_speed/2), (this.snail_speed/ 2),'snail-move-right-sheet', 0, this.snail_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
                if (this.num == 3){
                    this.xCoord = Phaser.Math.Between(50,650);
                    let enemy = new Enemy(this, this.xCoord, 350, (((this.xCoord - 350))/175)*-(this.snail_speed/2), (-this.snail_speed/2), 'snail-move-right-sheet', 0, this.snail_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
            }

            if (this.enemyName == "rat"){
                if (this.num == 0){
                    this.yCoord = Phaser.Math.Between(75, 305);
                    let enemy = new Enemy(this, 700, this.yCoord, -this.rat_speed, (((this.yCoord - 175))/350)*-this.rat_speed,'rat-move-right-sheet', 0,  this.rat_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
                if (this.num == 1){
                    this.yCoord = Phaser.Math.Between(75, 305);
                    let enemy = new Enemy(this, 0, this.yCoord, this.rat_speed, ((-(this.yCoord - 175))/350)*this.rat_speed,'rat-move-right-sheet', 0, this.rat_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
                if (this.num == 2){
                    this.xCoord = Phaser.Math.Between(50,650)
                    let enemy = new Enemy(this, this.xCoord, 0, ((-(this.xCoord - 350))/175)*(this.rat_speed/2), (this.rat_speed/ 2),'rat-move-right-sheet', 0, this.rat_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
                if (this.num == 3){
                    this.xCoord = Phaser.Math.Between(50,650);
                    let enemy = new Enemy(this, this.xCoord, 350, (((this.xCoord - 350))/175)*-(this.rat_speed/2), (-this.rat_speed/2), 'rat-move-right-sheet', 0, this.rat_Health, this.enemyName);
                    this.enemyGroup.add(enemy);
                }
            }
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    whatup(enemy, garden){
        //lower garden health
        if (round % 2 == 0){
            this.gardenHealth -= .5;
        }
        else{
            this.gardenHealth -= 1;
        }
        enemy.die();
        if (this.gardenHealth == 0)
        {
            if (round % 2 == 0){
                numOfRats -= 2;
            }
            else{
                numOfSnails -= 3;
            }
            if (hardMode === true){
                this.scene.start('titleScene');
                this.gameplayMusic.stop();
            }
            else{
                round -= 1;
                this.scene.start('gardenScene');
                this.gameplayMusic.stop();
            }
        }
    }

    takeDamage(enemy, player){
        enemy.die();
        this.p1Character.damage();
        if (this.p1Character.currHealth == 0){
            if (hardMode === true){
                round -= 1;
                this.gameplayMusic.stop();
                this.scene.start('titleScene');
            }
            else{
                round -= 1;
                this.gameplayMusic.stop();
                this.scene.start('gardenScene');
            }
        }
    }
}