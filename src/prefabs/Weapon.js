class Weapon{
    constructor(name, damage, x_, y_, w_, h_){

        //this.parentScene = scene;
        this.name = name;
        this.damage = damage;
        this.hitBox = {
            x: x_,
            y: y_,
            width: w_,
            height: h_
        }
        this.hitBoxWidth = w_;
        this.hitBoxHeight = h_;
        //this.attackHitBox = scene.add.rectangle(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height, 0xffffff, 0.1).setOrigin(0, 0);

    }

    changeHitBoxSize(width, height){
        this.hitBoxWidth = width;
        this.hitBoxHeight = height;
    }

}