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

        this.enemiesLeft = 0;

        this.speed = 20;

        this.gameOver = false;
        this.roundOver = false;

        this.enemyHealth = 2;

        this.garden = this.physics.add.sprite(375, 175, 'garden').setOrigin(0.5, 0.5);
        this.garden.name = 'garden';

        //this.shovelHitBox = this.add.rectangle(10000, 10000 ,50, 25, 0xffffff, 0.1);
        this.shovel = new Weapon(this, 'shovel', 2, 0, 0, 50, 25);

        //this.hoeHitBox = this.add.rectangle(10000, 10000 ,75, 10, 0xffffff, 0.1);
        //this.hoe = new Weapon(this, 'hoe', 2, this.hoeHitBox);

        this.p1Character = new Character(this, game.config.width/2, game.config.height/2, 'temp_move', 0, 'right', this.shovel, 5).setOrigin(0.5, 0.5);
        
        //create state machine for new character
        this.characterFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            damaged: new DamagedState(),
            attacking: new AttackState(),
            interact: new InteractState()
        }, [this, this.p1Character]);


        this.enemyGroup = this.add.group({
            runChildUpdate: true
        });


        for (let i = 0; i < (round)*3; i += 1){
            this.clock = this.time.delayedCall((i/round)*1000, () => {
                console.log('spawn enemy');
                this.addEnemy();
                this.enemiesLeft += 1;
            }, null, this);
        }


        this.physics.add.overlap(this.enemyGroup, this.garden, this.whatup, null, this);


    }

    update(){

        this.characterFSM.step();
        this.p1Character.moveHitBox();

        if(this.enemiesLeft <= 0){
            this.roundOver = true;
            console.log(`round over ${this.roundOver}`);
        }

    }

    

    addEnemy(){
        if (this.gameOver == false){ 
            this.num = this.getRandomInt(4);
            if (this.num == 0){
                this.yCoord = Phaser.Math.Between(75, 305);
                let enemy = new Enemy(this, 700, this.yCoord, -this.speed, (((this.yCoord - 175))/350)*-this.speed,'enemy', this.enemyHealth);
                this.enemyGroup.add(enemy);
            }
            if (this.num == 1){
                this.yCoord = Phaser.Math.Between(75, 305);
                let enemy = new Enemy(this, 0, this.yCoord, this.speed, ((-(this.yCoord - 175))/350)*this.speed,'enemy', this.enemyHealth);
                this.enemyGroup.add(enemy);
            }
            if (this.num == 2){
                this.xCoord = Phaser.Math.Between(50,650)
                let enemy = new Enemy(this, this.xCoord, 0, ((-(this.xCoord - 350))/175)*(this.speed/2), (this.speed/ 2) ,'enemy', this.enemyHealth);
                this.enemyGroup.add(enemy);
            }
            if (this.num == 3){
                this.xCoord = Phaser.Math.Between(50,650);
                let enemy = new Enemy(this, this.xCoord, 350, (((this.xCoord - 350))/175)*-(this.speed/2), (-this.speed/2), 'enemy', this.enemyHealth);
                this.enemyGroup.add(enemy);
            }
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    whatup(enemy, garden){
        console.log("garden hit");
        enemy.die();
    }


}