class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, direction, weapon, health){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this).setOrigin(0.5);

        this.setScale(0.5);

        this.body.onOverlap = true;

        this.body.setCollideWorldBounds(true);
        this.direction = direction;
        this.charVelocity = 100;
        this.collided = false;
        this.isAttaking = false;
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
                break;
            case 'down':
                this.weapon.hitBox.x = this.x;
                this.weapon.hitBox.y = this.y + this.height;
                this.weapon.changeHitBoxSize(this.weapon.hitBoxWidth, this.weapon.hitBoxHeight);
                break;
            case 'left':
                this.weapon.hitBox.x = this.x - this.width;
                this.weapon.hitBox.y = this.y;
                this.weapon.changeHitBoxSize(this.weapon.hitBoxHeight, this.weapon.hitBoxWidth);
                break;
            case 'right':
                this.weapon.hitBox.x = this.x + this.width;
                this.weapon.hitBox.y = this.y;
                this.weapon.changeHitBoxSize(this.weapon.hitBoxHeight, this.weapon.hitBoxWidth);
                break;
        }
    }

    handleAttackOverlap(obj){
        if(this.isAttacking){
            console.log(`the object was hit`);
            this.isAttaking = false;
            //console.log(obj);
        }
    }
    
}

    //vvvvvv character states vvvvvv
class IdleState extends State{
    enter(scene, character){

        character.isAttacking = false;
        character.setVelocity(0);
        character.anims.play(`walk-${character.direction}`, true);
        character.anims.stop();

    }
    execute(scene, character){
        const {left, right, up , down, space, shift} = scene.keys;

        if(character.collided){
            this.stateMachine.transition('damaged');
            return;
        }
        if(left.isDown || right.isDown || up.isDown || down.isDown ){
            this.stateMachine.transition('move');
            return;
        }
        if(Phaser.Input.Keyboard.JustDown(space)){
            this.stateMachine.transition('attacking');
            return;
        }

        
    }

}

class MoveState extends State{
    // enter(scene, character){
    //     character.isAttacking = false;
    // }
    execute(scene, character){
        const { left, right, up, down, space, shift } = scene.keys;
        if(character.collided){
            this.stateMachine.transition('damaged');
            return;
        }

        //attack
        if(Phaser.Input.Keyboard.JustDown(space)){
            this.stateMachine.transition('attacking');
            return;
        }

        // transition to idle if not pressing movement keys or attacking
        if(!(left.isDown || right.isDown || up.isDown || down.isDown)) {
            this.stateMachine.transition('idle');
            return;
        }

        // handle movement
        let moveDirection = new Phaser.Math.Vector2(0, 0);
        if(up.isDown) {
            moveDirection.y = -1;
            character.direction = 'up';
            
        } else if(down.isDown) {
            moveDirection.y = 1;
            character.direction = 'down';
        }
        if(left.isDown) {
            moveDirection.x = -1;
            character.direction = 'left';

        } else if(right.isDown) {
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
        character.isAttacking = true;
        console.log('attacking');
        character.setVelocity(0);
        character.anims.play(`attack-${character.direction}`);
        character.once('animationcomplete', () => {
            this.stateMachine.transition('idle');
            return;
        });
    }
}





    //^^^^^^ character states ^^^^^^