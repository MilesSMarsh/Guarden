class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, direction, characterState){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this).setOrigin(0.5);

        this.setOrigin(0, 0);
        this.setScale(0.5);
        this.body.onOverlap = true;
        this.body.setCollideWorldBounds(true);
        this.body.setSize(50, 50);
        

        this.parentScene = scene;
        this.direction = direction;
        this.charVelocity = 100;
        this.collided = false;

        this.maxHealth;
        this.currHealth;
        this.weapon = null;
        this.charLevel;
        this.charXP;

        this.updateCharacterState(characterState);

    }


    updateCharacterState(characterState){
        for(const [key, value] of Object.entries(characterState)){
            console.log(key)
            if(this.hasOwnProperty(key)){
                this[key] = value;
            }
        }
    }


    changeWeapon(newWeapon){
        characterState.weapon = newWeapon;
        this.updateCharacterState(characterState);
        this.parentScene.sound.play('click');
    }

    damage(){
        this.currHealth -= 1;
    }

    moveHitBox(){
        //moves hitbox
        switch(this.direction) {
            case 'up':
                this.weapon.hitBox.x = this.x - this.weapon.hitBoxWidth / 2;
                this.weapon.hitBox.y = this.y - this.weapon.hitBoxHeight - 25;
                this.weapon.hitBox.width = this.weapon.hitBoxWidth;
                this.weapon.hitBox.height = this.weapon.hitBoxHeight;
                break;

            case 'down':
                this.weapon.hitBox.x = this.x - this.weapon.hitBoxWidth / 2;
                this.weapon.hitBox.y = this.y + 25;
                this.weapon.hitBox.width = this.weapon.hitBoxWidth;
                this.weapon.hitBox.height = this.weapon.hitBoxHeight;
                break;

            case 'left':
                this.weapon.hitBox.x = this.x - this.weapon.hitBoxHeight - 25;
                this.weapon.hitBox.y = this.y - this.weapon.hitBoxWidth / 2;
                this.weapon.hitBox.width = this.weapon.hitBoxHeight;
                this.weapon.hitBox.height = this.weapon.hitBoxWidth;
                break;
                
            case 'right':
                this.weapon.hitBox.x = this.x + 25;
                this.weapon.hitBox.y = this.y - this.weapon.hitBoxWidth / 2;
                this.weapon.hitBox.width = this.weapon.hitBoxHeight;
                this.weapon.hitBox.height = this.weapon.hitBoxWidth;
                break;
        }

        // this.weapon.attackHitBox.x = this.weapon.hitBox.x;
        // this.weapon.attackHitBox.y = this.weapon.hitBox.y;
        // this.weapon.attackHitBox.width = this.weapon.hitBox.width;
        // this.weapon.attackHitBox.height = this.weapon.hitBox.height;
    }

    handleAttackOverlap(){
        let objectsHit = this.parentScene.physics.overlapRect(this.weapon.hitBox.x, this.weapon.hitBox.y, this.weapon.hitBox.width, this.weapon.hitBox.height, true, false);
        for(let i in objectsHit){
            if(objectsHit[i].gameObject.name == 'enemy'){
                objectsHit[i].gameObject.takeDamage(this.weapon.damage);
            }
        }
    
    }

    handleInteractOverlap(){
        let objectsHit = this.parentScene.physics.overlapRect(this.weapon.hitBox.x, this.weapon.hitBox.y, this.weapon.hitBox.width, this.weapon.hitBox.height, true, true);
        for(let i in objectsHit){
            if(objectsHit[i].gameObject.name == 'garden'){
                if(this.parentScene.roundOver){
                    //console.log("this is where the scene transition starts")
                    if (round == 5){
                        this.parentScene.gameplayMusic.stop()
                        return_from_victory_screen = true;
                        this.parentScene.scene.start('victoryScene')
                        this.parentScene.gameplayMusic.stop()
                    }
                    this.parentScene.gameplayMusic.stop()
                    this.parentScene.scene.start('gardenScene');
                    this.parentScene.gameplayMusic.stop()}
            }
            if(objectsHit[i].gameObject.name == 'gate'){
                if (round % 2 == 0){
                    numOfSnails += 3;
                }
                else {
                    numOfRats += 2;
                }
                round += 1;
                this.parentScene.scene.start('playScene');

                this.parentScene.gameplayMusic.stop()
                    
            }

            if(objectsHit[i].gameObject.name == 'spades'){
                console.log('equip spades');
                this.changeWeapon(new Weapon('spades', 3, 0, 0, 50, 25));
            }

            if(objectsHit[i].gameObject.name == 'shovel'){
                console.log('equip shovel');
                this.changeWeapon(new Weapon('shovel', 2, 0, 0, 50, 25));
            }

            if(objectsHit[i].gameObject.name == 'rake'){
                console.log('equip rake');
                this.changeWeapon(new Weapon('rake', 2, 0, 0, 50, 25));
            }

            if(objectsHit[i].gameObject.name == 'sblightning'){
                console.log('equip seed');
                //this.pickedUp = true;
                //console.log('char', this.pickedUp);
            }
            if(objectsHit[i].gameObject.name == 'plot1'){
                console.log('harvest 1');
                this.charVelocity += 25;
            }
            if(objectsHit[i].gameObject.name == 'plot3'){
                console.log('harvest 3');
                this.charVelocity += 50;
            }
        }
    }
    
}

    //vvvvvv character states vvvvvv
class IdleState extends State{
    enter(scene, character){

        character.setVelocity(0);
        character.anims.play(`${character.weapon.name}-move-${character.direction}`, true);
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
        character.anims.play(`${character.weapon.name}-move-${character.direction}`, true);
    }
}

class DamagedState extends State{
    enter(scene, character){
        character.anims.play(`move-${character.direction}`);
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
        character.setVelocity(0);
        character.handleAttackOverlap();
        character.anims.play(`${character.weapon.name}-attack-${character.direction}`);
        character.once('animationcomplete', () => {
            this.stateMachine.transition('idle');
        

        
        


            return;
        });
    }
}

class InteractState extends State{
    enter(scene, character){
        character.setVelocity(0);
        character.handleInteractOverlap();
        //
        // if interact animation
        //
        // character.anims.play('interact');
        // character.once('animationcomplete', () => {
        //     this.stateMachine.transition('idle');
        //     return;
        // });

        this.stateMachine.transition('idle');
    }
}


    //^^^^^^ character states ^^^^^^