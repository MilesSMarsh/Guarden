class Weapon{
    constructor(scene, name, damage, HitBox){

        this.name = name;
        this.damage = damage;
        this.hitBox = HitBox;
        this.hitBoxWidth = HitBox.width;
        this.hitBoxHeight = HitBox.height;

        scene.physics.add.existing(this.hitBox).setOrigin(0.5);
        this.hitBox.body.onOverlap = true;

    }

    changeHitBoxSize(width, height){
        this.hitBox.width = width;
        this.hitBox.height = height;

        this.hitBox.body.width = width;
        this.hitBox.body.height = height;

        // this.hitBoxWidth = height;
        // this.hitBoxHeight = width;

        this.hitBox.setOrigin(0.5,0.5);

    }
}