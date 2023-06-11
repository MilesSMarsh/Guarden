class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, Xvelocity, Yvelocity, texture, frame, health, name) {
        super(scene, x, y, texture, frame); 
        
        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setVelocityX(Xvelocity);
        this.setVelocityY(Yvelocity);
        this.setImmovable();
        this.setScale(0.25);
        this.body.setSize(50, 50);

        this.health = health;
        this.name = 'enemy';
        if(Xvelocity > 0){
            if (name == 'snail'){
                this.anims.play(`snail-move-right`, true);
            }
            if (name == 'rat'){
                this.anims.play('rat-move-right', true);
            }
        } else {
            if (name == 'snail'){
                this.anims.play(`snail-move-left`, true);
            }
            if (name == 'rat'){
                this.anims.play('rat-move-left', true);
            }
        }
    }

    update() {
        if(this.x < 0) {
            this.die();
        }

        if(this.x > 700) {
            this.die();
        }

        if(this.y < 0) {
            this.die();
        }

        if(this.y > 350) {
            this.die();
        }
    }

    takeDamage(dam){
        this.health -= dam;
        if(this.health <= 0){
            this.die();
        }
    }

    die(){
        if (round % 2 != 0){
            this.parentScene.snailsLeft -= 1;
            this.destroy();
            this.parentScene.sound.play('hit');
        }
        else{
            this.parentScene.ratsLeft -= 1;
            this.destroy();
            this.parentScene.sound.play('hit');
        }
    }
}