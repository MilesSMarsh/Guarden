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

        //shovel assets


        this.load.image('shovel', './assets/Shovel_Assets/Shovel.png');

        this.load.spritesheet('move-down-shovel-sheet', './assets/Shovel_Assets/Down/Move/Sprite_Sheet_Shovel_Down.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-left-shovel-sheet', './assets/Shovel_Assets/Left/Shoulder/Move/Sprite_Sheet_Shovel_Left_Shoulder.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-right-shovel-sheet', './assets/Shovel_Assets/Right/Shoulder/Move/Sprite_Sheet_Shovel_Right_Shoulder.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-up-shovel-sheet', './assets/Shovel_Assets/Up/Move/Sprite_Sheet_Shovel_Up.png',{
            frameWidth: 100,
            frameHeight: 100
        });


        this.load.spritesheet('attack-down-shovel-sheet', './assets/Shovel_Assets/Down/Attack/Sprite_Sheet_Shovel_Down_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-left-shovel-sheet', './assets/Shovel_Assets/Left/Forward/Attack/Sprite_Sheet_Shovel_Left_Attack_Forward.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-right-shovel-sheet', './assets/Shovel_Assets/Right/Forward/Attack/Sprite_Sheet_Shovel_Right_Attack_Forward.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-up-shovel-sheet', './assets/Shovel_Assets/Up/Attack/Sprite_Sheet_Shovel_Up_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });



        //spades


        this.load.image('spades', './assets/Spades_Assets/Spades.png');

        this.load.spritesheet('move-down-spades-sheet', './assets/Spades_Assets/Down/Move/Sprite_Sheet_Spades_Down.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-left-spades-sheet', './assets/Spades_Assets/Left/Move/Sprite_Sheet_Spades_Left.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-right-spades-sheet', './assets/Spades_Assets/Right/Move/Sprite_Sheet_Spades_Right.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-up-spades-sheet', './assets/Spades_Assets/Up/Move/Sprite_Sheet_Spades_Up.png',{
            frameWidth: 100,
            frameHeight: 100
        });


        this.load.spritesheet('attack-down-spades-sheet', './assets/Spades_Assets/Down/Attack/Sprite_Sheet_Spades_Down_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-left-spades-sheet', './assets/Spades_Assets/Left/Attack/Sprite_Sheet_Spades_Left_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-right-spades-sheet', './assets/Spades_Assets/Right/Attack/Sprite_Sheet_Spades_Right_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-up-spades-sheet', './assets/Spades_Assets/Up/Attack/Sprite_Sheet_Spades_Up_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });

        //Rake

        this.load.image('rake', './assets/Rake_Assets/Rake.png');

        this.load.spritesheet('move-down-rake-sheet', 'assets/Rake_Assets/Down/Move/Sprite_Sheet_Rake_Down.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-left-rake-sheet', 'assets/Rake_Assets/Left/Shoulder/Move/Sprite_Sheet_Rake_Left_Shoulder.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-right-rake-sheet', 'assets/Rake_Assets/Right/Shoulder/Move/Sprite_Sheet_Rake_Right_Shoulder.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('move-up-rake-sheet', 'assets/Rake_Assets/Up/Move/Sprite_Sheet_Rake_Up.png',{
            frameWidth: 100,
            frameHeight: 100
        });


        this.load.spritesheet('attack-down-rake-sheet', 'assets/Rake_Assets/Down/Attack/Sprite_Sheet_Rake_Down_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-left-rake-sheet', 'assets/Rake_Assets/Left/Forward/Attack/Sprite_Sheet_Rake_Left_Attack_forward.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-right-rake-sheet', 'assets/Rake_Assets/Right/Forward/Attack/Sprite_Sheet_Rake_Right_Attack_Forward.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('attack-up-rake-sheet', 'assets/Rake_Assets/Up/Attack/Sprite_Sheet_Rake_Up_Attack.png',{
            frameWidth: 100,
            frameHeight: 100
        });











        this.load.spritesheet('snail-move-left-sheet', './assets/Pests/Snail/Left/Sprite_Sheet_Snail_Left.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('snail-move-right-sheet', './assets/Pests/Snail/Right/Sprite_Sheet_Snail_Right.png',{
            frameWidth: 100,
            frameHeight: 100
        });

        this.load.spritesheet('rat-move-left-sheet', './assets/Pests/Rat/Left/Sprite_Sheet_Rat_Left.png',{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('rat-move-right-sheet', './assets/Pests/Rat/Right/Sprite_Sheet_Rat_Right.png',{
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

        this.load.image('sb_lightningf', './assets/Plants/Seed_Bags/Seed Bag Lightning Fruit.png');
        this.load.image('sb_heartf', './assets/Plants/Seed_Bags/Seed Bag Heart Fruit.png');

        //this.load.image('enemy', './assets/tempEnemy.png');

        
    }

    create() {
        //shovel
        this.anims.create({
            key: 'shovel-move-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-right-shovel-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'shovel-move-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-left-shovel-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'shovel-move-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-up-shovel-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'shovel-move-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-down-shovel-sheet', {start: 0, end:2})
        });


        this.anims.create({
            key: 'shovel-attack-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-right-shovel-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'shovel-attack-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-left-shovel-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'shovel-attack-up',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-up-shovel-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'shovel-attack-down',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-down-shovel-sheet', {start: 0, end:2})
        });
        
        //Spades
        this.anims.create({
            key: 'spades-move-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-right-spades-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'spades-move-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-left-spades-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'spades-move-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-up-spades-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'spades-move-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-down-spades-sheet', {start: 0, end:2})
        });


        this.anims.create({
            key: 'spades-attack-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-right-spades-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'spades-attack-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-left-spades-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'spades-attack-up',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-up-spades-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'spades-attack-down',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-down-spades-sheet', {start: 0, end:2})
        });


        //rake
        this.anims.create({
            key: 'rake-move-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-right-rake-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'rake-move-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-left-rake-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'rake-move-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-up-rake-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'rake-move-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('move-down-rake-sheet', {start: 0, end:2})
        });


        this.anims.create({
            key: 'rake-attack-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-right-rake-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'rake-attack-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-left-rake-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'rake-attack-up',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-up-rake-sheet', {start: 0, end:2})
        });
        this.anims.create({
            key: 'rake-attack-down',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('attack-down-rake-sheet', {start: 0, end:2})
        });








        this.anims.create({
            key: 'snail-move-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('snail-move-left-sheet', {start: 0, end:1})
        });
        this.anims.create({
            key: 'snail-move-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('snail-move-right-sheet', {start: 0, end:1})
        });

        this.anims.create({
            key: 'rat-move-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('rat-move-left-sheet', {start: 0, end:1})
        });
        this.anims.create({
            key: 'rat-move-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('rat-move-right-sheet', {start: 0, end:1})
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