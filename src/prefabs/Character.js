class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, direction, weapon, health){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this).setOrigin(0.5);

        this.setScale(0.5);
        this.body.onOverlap = true;
        this.body.setCollideWorldBounds(true);

        this.interactHitBox = scene.add.rectangle(this.x, this.y ,25, 25, 0xffffff, 0.1);
        scene.physics.add.existing(this.interactHitBox);

        this.direction = direction;
        this.charVelocity = 100;
        this.collided = false;
        this.isAttaking = false;
        this.interacting = false;
        this.interactingWith = null;
        this.attackingThis = null;

        this.currHealth = health;
        this.weapon = weapon;
        this.level = 1;
        this.xp = 0;



    }

    changeWeapon(newWeapon){
        this.weapon = newWeapon;
    }

    moveHitBox(){
        //moves hitbox
        switch(this.direction) {
            case 'up':
                this.weapon.hitBox.x = this.x;
                this.weapon.hitBox.y = this.y - this.height;
                this.weapon.changeHitBoxSize(this.weapon.hitBoxWidth, this.weapon.hitBoxHeight);

                this.interactHitBox.x = this.x;
                this.interactHitBox.y = this.y - this.height / 1.5;
                break;

            case 'down':
                this.weapon.hitBox.x = this.x;
                this.weapon.hitBox.y = this.y + this.height;
                this.weapon.changeHitBoxSize(this.weapon.hitBoxWidth, this.weapon.hitBoxHeight);

                this.interactHitBox.x = this.x;
                this.interactHitBox.y = this.y + this.height / 1.5;
                break;

            case 'left':
                this.weapon.hitBox.x = this.x - this.width;
                this.weapon.hitBox.y = this.y;
                this.weapon.changeHitBoxSize(this.weapon.hitBoxHeight, this.weapon.hitBoxWidth);

                this.interactHitBox.x = this.x - this.width / 1.5;
                this.interactHitBox.y = this.y;
                break;
                
            case 'right':
                this.weapon.hitBox.x = this.x + this.width;
                this.weapon.hitBox.y = this.y;
                this.weapon.changeHitBoxSize(this.weapon.hitBoxHeight, this.weapon.hitBoxWidth);

                this.interactHitBox.x = this.x + this.width / 1.5;
                this.interactHitBox.y = this.y;
                break;
        }
    }

    handleAttackOverlap(){
        if(this.isAttacking){
            if(this.attackingThis != null){
                console.log(this.attackingThis);
            }
        }
    }

    handleInteractOverlap(){
        if(this.interacting){
            if(this.interactingWith != null){
                console.log(this.interactingWith);
            }
        }
    }
    
}

    //vvvvvv character states vvvvvv
class IdleState extends State{
    enter(scene, character){

        character.weapon.hitBox.setActive(false);
        character.isAttacking = false;
        character.setVelocity(0);
        character.anims.play(`walk-${character.direction}`, true);
        character.anims.stop();

    }
    execute(scene, character){
        const {left, right, up , down, space, shift, keyE} = scene.keys;

        if(character.collided){
            this.stateMachine.transition('damaged');
            return;
        }
        if(left.isDown || right.isDown || up.isDown || down.isDown || scene.keys.keyA.isDown || scene.keys.keyW.isDown || scene.keys.keyS.isDown || scene.keys.keyD.isDown){
            this.stateMachine.transition('move');
            return;
        }
        if(Phaser.Input.Keyboard.JustDown(space)){
            this.stateMachine.transition('attacking');
            return;
        }
        if(Phaser.Input.Keyboard.JustDown(keyE)){
            this.stateMachine.transition('interact');
            return;
        }

        
    }

}

class MoveState extends State{
    // enter(scene, character){
    //     character.isAttacking = false;
    // }
    execute(scene, character){
        const { left, right, up, down, space, shift, keyE} = scene.keys;
        if(character.collided){
            this.stateMachine.transition('damaged');
            return;
        }

        if(Phaser.Input.Keyboard.JustDown(keyE)){
            this.stateMachine.transition('interact');
            return;
        }

        //attack
        if(Phaser.Input.Keyboard.JustDown(space)){
            this.stateMachine.transition('attacking');
            return;
        }

        // transition to idle if not pressing movement keys or attacking
        if(!(left.isDown || right.isDown || up.isDown || down.isDown || scene.keys.keyA.isDown || scene.keys.keyW.isDown || scene.keys.keyS.isDown || scene.keys.keyD.isDown)) {
            this.stateMachine.transition('idle');
            return;
        }

        // handle movement
        let moveDirection = new Phaser.Math.Vector2(0, 0);
        if(up.isDown || scene.keys.keyW.isDown) {
            moveDirection.y = -1;
            character.direction = 'up';
            
        } else if(down.isDown || scene.keys.keyS.isDown) {
            moveDirection.y = 1;
            character.direction = 'down';
        }
        if(left.isDown || scene.keys.keyA.isDown) {
            moveDirection.x = -1;
            character.direction = 'left';

        } else if(right.isDown || scene.keys.keyD.isDown) {
            moveDirection.x = 1;
            character.direction = 'right';
        }
        // normalize movement vector, update character position, and play proper animation
        moveDirection.normalize();
        character.setVelocity(character.charVelocity * moveDirection.x, character.charVelocity * moveDirection.y);
        character.anims.play(`walk-${character.direction}`, true);
    }
}

class DamagedState extends State{
    enter(scene, character){
        console.log('oof');
        character.anims.play(`walk-${character.direction}`);
        character.anims.stop();

        switch(character.direction) {
            case 'up':
                character.setVelocityY(character.charVelocity+1*4);
                break;
            case 'down':
                character.setVelocityY((-character.charVelocity-1)*4);
                break;
            case 'left':
                character.setVelocityX((character.charVelocity+1)*4);
                break;
            case 'right':
                character.setVelocityX((-character.charVelocity-1)*4);
                break;
        }
    }
}

class AttackState extends State{
    enter(scene, character) {
        character.weapon.hitBox.setActive(true);
        console.log('attacking');
        character.setVelocity(0);
        character.handleAttackOverlap();
        character.anims.play(`attack-${character.direction}`);
        character.once('animationcomplete', () => {
            this.stateMachine.transition('idle');
            return;
        });
    }
}

class InteractState extends State{
    enter(scene, character){
        console.log(`character.interacting = ${character.interacting}`);
        character.setVelocity(0);
        character.handleInteractOverlap();
        // character.anims.play('interact');
        // character.once('animationcomplete', () => {
        //     this.stateMachine.transition('idle');
        //     return;
        // });

        this.stateMachine.transition('idle');
    }
}





    //^^^^^^ character states ^^^^^^