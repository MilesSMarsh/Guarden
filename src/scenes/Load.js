class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(50, 300, 600, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });


        this.load.spritesheet('move-down-sheet', './assets/Shovel_Assets/Down/Move/Sprite_Sheet_Shovel_Down.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-left-sheet', './assets/Shovel_Assets/Left/Shoulder/Move/Sprite_Sheet_Shovel_Left_Shoulder.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-right-sheet', './assets/Shovel_Assets/Right/Shoulder/Move/Sprite_Sheet_Shovel_Right_Shoulder.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-up-sheet', './assets/Shovel_Assets/Up/Move/Sprite_Sheet_Shovel_Up.png',{
            frameWidth: 100,
            frameHeight: 100
        });


        this.load.spritesheet('attack-down-sheet', './assets/Shovel_Assets/Down/Attack/Sprite_Sheet_Shovel_Down_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-left-sheet', './assets/Shovel_Assets/Left/Forward/Attack/Sprite_Sheet_Shovel_Left_Attack_Forward.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-right-sheet', './assets/Shovel_Assets/Right/Forward/Attack/Sprite_Sheet_Shovel_Right_Attack_Forward.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-up-sheet', './assets/Shovel_Assets/Up/Attack/Sprite_Sheet_Shovel_Up_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });

        this.load.spritesheet('enemy-move-left-sheet', './assets/Pests/Snail/Left/Sprite_Sheet_Snail_Left.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('enemy-move-right-sheet', './assets/Pests/Snail/Right/Sprite_Sheet_Snail_Right.png',{
            frameWidth: 100,
            frameHeight: 100
        });

        this.load.spritesheet('carrot-sheet', './assets/Plants/Carrot/Sprite_Sheet_Carrot.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('power-pepper-sheet', './assets/Plants/Power_Pepper/Sprite_Sheet_Power_Pepper.png',{
            frameWidth: 100,
            frameHeight: 100
        });        
        this.load.spritesheet('radish-sheet', './assets/Plants/Radish/Sprite_Sheet_Radish.png',{
            frameWidth: 100,
            frameHeight: 100
        });        


        this.load.audio('background_music', './assets/backgroundMusic.mp3');

        this.load.audio('combat_music', './assets/combatMusic.mp3');


        this.load.image('title', './assets/Guarden_Title.png');

        this.load.image('garden', './assets/tempGarden.png');

        this.load.image('gardenScene', './assets/tempGardenScene.png');

        this.load.image('fence', './assets/fence.png');

        this.load.image('heart', './assets/heart.png');

        this.load.image('carrot1', './assets/Plants/Carrot/Plant1.png');
        this.load.image('carrot2', './assets/Plants/Carrot/Carrot2.png');
        this.load.image('carrot3', './assets/Plants/Carrot/Carrot3.png');
        this.load.image('carrot4', './assets/Plants/Carrot/Carrot.png');

        this.load.image('pepper1', './assets/Plants/Power_Pepper/Plant1.png');
        this.load.image('pepper2', './assets/Plants/Power_Pepper/PowerPepper2.png');
        this.load.image('pepper3', './assets/Plants/Power_Pepper/PowerPepper3.png');
        this.load.image('pepper4', './assets/Plants/Power_Pepper/PowerPepper.png');

        this.load.image('radish1', './assets/Plants/Radish/Plant1.png');
        this.load.image('radish2', './assets/Plants/Radish/Radish2.png');
        this.load.image('radish3', './assets/Plants/Radish/Radish3.png');
        this.load.image('radish4', './assets/Plants/Radish/Radish.png');

        //this.load.image('enemy', './assets/tempEnemy.png');

        
    }

    create() {
        this.anims.create({
            key: 'move-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-right-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'move-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-left-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'move-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-up-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'move-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-down-sheet', {start: 0, end:2})
        });


        this.anims.create({
            key: 'attack-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-right-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'attack-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-left-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'attack-up',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-up-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'attack-down',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-down-sheet', {start: 0, end:2})
        });
        

        this.anims.create({
            key: 'enemy-move-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('enemy-move-left-sheet', {start: 0, end:1})
        });
        this.anims.create({
            key: 'enemy-move-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('enemy-move-right-sheet', {start: 0, end:1})
        });

        this.anims.create({
            key: 'carrot-sheet',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('carrot-sheet', {start: 0, end: 3})
        });



        this.scene.start('titleScene');
    }
}