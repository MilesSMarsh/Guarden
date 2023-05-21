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


        this.load.spritesheet('temp_move', './assets/tempSpriteSheet.png',{
            frameWidth: 50,
            frameHeight: 50
        });

        this.load.spritesheet('temp_attack', './assets/tempAttackSheet.png',{
            frameWidth: 50,
            frameHeight: 50
        });

        this.load.image('garden', './assets/tempGarden.png');

        //this.load.image('enemy', './assets/tempEnemy.png');

        
    }

    create() {
        this.anims.create({
            key: 'walk-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('temp_move', {start: 0, end:0})
        });
        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('temp_move', {start: 1, end:1})
        });
        this.anims.create({
            key: 'walk-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('temp_move', {start: 2, end:2})
        });
        this.anims.create({
            key: 'walk-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('temp_move', {start: 3, end:3})
        });
        this.anims.create({
            key: 'attack-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('temp_attack', {start: 0, end:0})
        });
        this.anims.create({
            key: 'attack-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('temp_attack', {start: 1, end:1})
        });
        this.anims.create({
            key: 'attack-up',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('temp_attack', {start: 2, end:2})
        });
        this.anims.create({
            key: 'attack-down',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('temp_attack', {start: 3, end:3})
        });
        this.anims.create({
            key: 'interact',
            frameRate: 16,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('temp_attack', {start: 0, end:3})
        });



        this.scene.start('titleScene');
    }
}