

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics:{
        default:'arcade', 
        arcade:{
            gravity: {
                y: 600
            },
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);
var isJumping = new Boolean(false);
var tomatos;
var score = 0 ;
var tomatoSpeed = 2;
let monSprite;
let text;
let cursors;
let background;

function preload(){
    this.load.image('patateman','assets/patateman.png');
    this.load.image('background1','assets/background.png')
    this.load.image('tomato1', 'assets/tomato.png')
    this.load.image('background2', 'assets/background2.png')
    this.load.image('tomato2', 'assets/tomato2.png')
    this.load.image('bricks', 'assets/bricks.png')
}
function create(){
    isJumping = false;
    background = this.add.sprite(400,300,'background1')
    this.anims.create({
        key: 'miss',
        frames: [
            { key: 'background2' },
            { key: 'background1' }
        ],
        frameRate: 20,
        repeat: 3
    });      
    bricks = this.add.tileSprite(0,0,32,1200,'bricks');
    this.physics.add.existing(bricks,true);
    bricks.body.immovable = true;
    monSprite =this.physics.add.sprite(100,600,'patateman');
    tomatos = this.physics.add.group(
        {
        maxSize: 2,
        bounceY: (Phaser.Math.Between(8, 12) * 0.1),
        collideWorldBounds: true
    });
    tomatos.create(800,Phaser.Math.Between(100, 450),'tomato1')

    this.anims.create({
        key: 'explode',
        frames: [
            { key: 'tomato2' },
        ],
        frameRate: 1,
        repeat: 0
    })
    monSprite.body.collideWorldBounds=true;
    monSprite.setBounce(0.5);    
    monSprite.setScale(1.5);
    cursors = this.input.keyboard.createCursorKeys();
    var potatoCollider = this.physics.add.collider(monSprite,tomatos,levelup);
    var tomatoCollider = this.physics.add.collider(bricks, tomatos,explode,null,this);
    const style = { font: "32px Arial Black", fill: "#fff" };
    text = this.add.text(300, 0, 'Score: ' + score, style);
    
   

    
}
function update(){
    //console.log(tomatos.getLength())
    
    text.setText('Score: ' + score);
    tomatos.children.iterate(function (tomato){
        if(tomato){
            if(tomato.x > 20){
                tomato.x =tomato.x - tomatoSpeed;
            }
        }
    });
    if(cursors.up.isDown){
        if(isJumping){
            monSprite.angle = monSprite.angle+10;
        }else{
        monSprite.setVelocity(0,-400)
        isJumping = true;
        setTimeout(isntJumpingAnymore, 500);
        }   
    }else if(monSprite.angle > 0){
         monSprite.angle = monSprite.angle -10;
    }else if(monSprite.angle < 0){
         monSprite.angle = monSprite.angle + 10;
    }
}

function isntJumpingAnymore(){
    isJumping = false;
}

function explode(bricks, tomato){
        tomato.body.checkCollision.none = true;
        score = score - 10;
        if(score < 0){
            score = 0;
            gameOver(this);
        }
        background.play('miss');
        tomato.play('explode');
        this.tweens.add({
            targets: tomato,
            y: tomato.y + 50,
            duration: 2000,
            alpha: 0,
            ease: "Cubic.easeOut",
            callbackScope: this,
            onComplete: function() {
                tomato.destroy();
                createNewTomato();
            }
        });
}

function levelup(monSprite, tomato){
        tomato.x = 800;
        tomato.y = Phaser.Math.Between(100, 500);
        score = score + 5;
        tomatoSpeed = tomatoSpeed + (Phaser.Math.Between(15, 30) * 0.01);
        tomato.setVelocity(0,0);
        var random = Phaser.Math.Between(1, 10);
        console.log(random)
        if(random == 3 && score >= 20){
            createNewTomato();
        }

}

function gameOver(game){
    const style = { font: "64px Arial Black", fill: "#fff", stroke: 1000};
    game.add.text(225, 250, 'GameOver', style);
    game.scene.pause()
}

function createNewTomato(){
    tomatos.create(800, Phaser.Math.Between(100, 500), 'tomato1')
}