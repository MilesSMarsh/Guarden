class Weapon{
    constructor(name, damage, x_, y_, w_, h_){
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
    }

    changeHitBoxSize(width, height){
        this.hitBoxWidth = width;
        this.hitBoxHeight = height;
    }

}