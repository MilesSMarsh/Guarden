class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }
    create(){
        this.cameras.main.setBackgroundColor('0x135711');

        this.keys = this.input.keyboard.createCursorKeys();
        this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keys.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        this.object = this.add.rectangle(game.config.width/4, game.config.height/4 ,35, 35, 0x000000, 1);
        this.physics.add.existing(this.object);
        this.object.body.onOverlap = true;

        this.shovelHitBox = this.add.rectangle(10000, 10000 ,50, 25, 0xffffff, 0.1);
        this.shovel = new Weapon(this, 'shovel', 2, this.shovelHitBox);

        this.hoeHitBox = this.add.rectangle(10000, 10000 ,75, 10, 0xffffff, 0.1);
        this.hoe = new Weapon(this, 'hoe', 2, this.hoeHitBox);

        this.p1Character = new Character(this, game.config.width/2, game.config.height/2, 'temp_move', 0, 'right', this.shovel, 5).setOrigin(0.5, 0.5);
        
        //create state machine for new character
        this.characterFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            damaged: new DamagedState(),
            attacking: new AttackState(),
            interact: new InteractState()
        }, [this, this.p1Character]);



        this.garden = this.physics.add.staticGroup();
        this.garden.create(375, 175, 'garden')




        this.physics.world.on('overlap', (obj1, obj2, body1, body2)=>{
            if(obj1 == this.p1Character.interactHitBox){
                this.p1Character.interacting = true;
                this.p1Character.interactingWith = obj2;
            } else if(obj1 == this.p1Character.weapon.hitBox){
                this.p1Character.isAttacking = true;
                this.p1Character.attackingThis = obj2;
            }

        });

        this.gameOver = false;

        this.enemyGroup = this.add.group({
            runChildUpdate: true
        });

        this.roundLength = 5;
        //this.round_time = 1000;
        // for (let i = 0; i < this.roundLength; i++){
        //     this.clock = this.time.delayedCall(this.time + i, () => {
        //         //console.log('howdy');
        //         this.addEnemy();
        //     }, null, this);
        // }


        for (let i = 0; i < (this.roundLength)*2; i += 2){
            this.clock = this.time.delayedCall(i*1000, () => {
                console.log('yo whatup');
                this.addEnemy();
            }, null, this);
        }
        
        // for (let i = 10000; i > 0; i -= 1000){
        //     this.clock = this.time.delayedCall(i, () => {
        //         //console.log('yo whatup');
        //         this.timer = this.add.text(borderUISize + borderPadding + 418, borderUISize + borderPadding*2, (game.settings.gameTimer - i)/1000, timeConfig);
        //         //this.timer = this.add.text(borderUISize + borderPadding + 450, borderUISize + borderPadding*2, 9, scoreConfig);
        //         //console.log((game.settings.gameTimer - i)/1000);
        //     }, null, this);
        // }

        // this.time.delayedCall(2500, () => {
        //     this.addEnemy();
        // });

        this.physics.add.overlap(this.enemyGroup, this.garden, this.whatup, null, this);

        this.speed = 60;

    }

    update(){

        this.characterFSM.step();
        this.p1Character.moveHitBox();

        
        this.physics.overlap(this.p1Character.weapon, this.object); 
        this.physics.world.collide(this.garden, this.enemyGroup, function(obj1, obj2){this.whatup(obj1, obj2)}, null, this);


        this.p1Character.isAttacking = false;
        this.p1Character.attackingThis = null;
        this.physics.overlap(this.shovelHitBox, this.object); 
        this.physics.overlap(this.hoeHitBox, this.object); 

        this.p1Character.interacting = false;
        this.p1Character.interactingWith = null;
        this.physics.overlap(this.p1Character.interactHitBox, this.object);

        if(Phaser.Input.Keyboard.JustDown(this.keys.shift)){
            if(this.p1Character.weapon.name == 'shovel'){
                this.p1Character.weapon.hitBox.x = 10000;
                this.p1Character.weapon.hitBox.y = 10000;
                this.p1Character.changeWeapon(this.hoe);
            }
            else if(this.p1Character.weapon.name == 'hoe'){
                this.p1Character.weapon.hitBox.x = 10000;
                this.p1Character.weapon.hitBox.y = 10000;
                this.p1Character.changeWeapon(this.shovel);
            }
        }

    }

    

    addEnemy(){
        if (this.gameOver == false){ 
            this.num = this.getRandomInt(4);
            console.log(this.num);
            if (this.num == 0){
                this.yCoord = Phaser.Math.Between(75, 305);
                let enemy = new Enemy(this, 700, this.yCoord, -this.speed, (((this.yCoord - 175))/350)*-this.speed,'enemy');
                this.enemyGroup.add(enemy);
            }
            if (this.num == 1){
                this.yCoord = Phaser.Math.Between(75, 305);
                let enemy = new Enemy(this, 0, this.yCoord, this.speed, ((-(this.yCoord - 175))/350)*this.speed,'enemy');
                this.enemyGroup.add(enemy);
            }
            if (this.num == 2){
                this.xCoord = Phaser.Math.Between(50,650)
                let enemy = new Enemy(this, this.xCoord, 0, ((-(this.xCoord - 350))/175)*this.speed, this.speed,'enemy');
                this.enemyGroup.add(enemy);
            }
            if (this.num == 3){
                this.xCoord = Phaser.Math.Between(50,650);
                let enemy = new Enemy(this, this.xCoord, 350, (((this.xCoord - 350))/175)*-this.speed, -this.speed, 'enemy');
                this.enemyGroup.add(enemy);
            }
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    whatup(enemy, garden){
        console.log("garden hit")
        //console.log(this.enemyGroup.xVelocity);
        enemy.destroy();
    }


}