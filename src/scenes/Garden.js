class Garden extends Phaser.Scene{
    constructor(){
        super('gardenScene');
    }
    create(){

        this.cameras.main.setBackgroundColor('0xFFFF00');

        this.add.image(0, 0, 'gardenScene').setOrigin(0, 0);

        this.gate = this.physics.add.staticSprite(20, 320, 'fence').setOrigin(0.5, 0.5);
        this.gate.name = 'gate';

        this.keys = this.input.keyboard.createCursorKeys();
        this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keys.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        this.p1Character = new Character(this, game.config.width/2, game.config.height/2, 'temp_move', 0, 'right', characterState).setOrigin(0.5, 0.5);

        this.characterFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            damaged: new DamagedState(),
            attacking: new AttackState(),
            interact: new InteractState()
        }, [this, this.p1Character]);



        this.physics.add.collider(this.p1Character, this.gate);

    }
    update(){
        this.characterFSM.step();
        this.p1Character.moveHitBox();
    }
}