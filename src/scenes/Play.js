class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }
    create(){
        this.cameras.main.setBackgroundColor('0x135711');

        this.keys = this.input.keyboard.createCursorKeys();

        this.object = this.add.rectangle(game.config.width/4, game.config.height/4 ,35, 35, 0x000000, 1);
        this.physics.add.existing(this.object);
        this.object.body.onOverlap = true;

        this.shovelHitBox = this.add.rectangle(game.config.width/4, game.config.height/4 ,50, 25, 0xffffff, 0.1);
        this.shovel = new Weapon(this, 'shovel', 2, this.shovelHitBox);

        this.hoeHitBox = this.add.rectangle(game.config.width/4, game.config.height/4 ,75, 10, 0xffffff, 0.1);
        this.hoe = new Weapon(this, 'hoe', 2, this.hoeHitBox);

        this.p1Character = new Character(this, game.config.width/2, game.config.height/2, 'temp_move', 0, 'right', this.shovel, 5).setOrigin(0.5, 0.5);
        
        //create state machine for new character
        this.characterFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            damaged: new DamagedState(),
            attacking: new AttackState()
        }, [this, this.p1Character]);







        this.physics.world.on('overlap', (obj1, obj2, body1, body2)=>{
            this.p1Character.handleAttackOverlap(obj2)
        });

    }

    update(){

        this.characterFSM.step();
        this.p1Character.moveHitBox();

        
        this.physics.overlap(this.p1Character.weapon, this.object); 

        if(this.keys.shift.isDown){
            this.p1Character.changeWeapon(this.hoe);
        }

    }
}