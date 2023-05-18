class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, Xvelocity, Yvelocity, texture) {
        //super(scene, 700, Phaser.Math.Between(75, 305), texture);
        super(scene, x, y, texture); 
        
        this.parentScene = scene;

        this.parentScene.add.existing(this);    
        this.parentScene.physics.add.existing(this);   
        this.setVelocityX(Xvelocity);
        this.setVelocityY(Yvelocity);           
        this.setImmovable();                    
        this.newEnemy = true;
    }

    update() {
        if(this.newEnemy && this.x < 0) {
            this.parentScene.addEnemey(this.parent, this.Xvelocity, this.Yvelocity);
            this.newEnemy = false;
        }

        if(this.newEnemy && this.x > 700) {
            this.parentScene.addEnemy(this.parent, this.Xvelocity, this.Yvelocity);
            this.newEnemy = false;
        }

        if(this.newEnemy && this.y < 0) {
            this.parentScene.addEnemy(this.parent, this.Xvelocity, this.Yvelocity);
            this.newEnemy = false;
        }

        if(this.newEnemy && this.y > 350) {
            this.parentScene.addEnemy(this.parent, this.Xvelocity, this.Yvelocity);
            this.newEnemy = false;
        }

        // if(this.x < -this.width) {
        //     this.destroy();
        // }
    }
}