var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var platforms;
var cursors;
var score = 0;
var scoreText;
var bonbs;

var game = new Phaser.Game(config);

function creerCiel (that) {
    that.add.image(400, 300, 'sky');
}

function initialiserPlatforms(that){
    platforms = that.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
}

function ajouterPlatform (x, y) {
    platforms.create(x, y, 'ground');
}

function ajouterJoueur(that) {
    player = that.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    that.physics.add.collider(player, platforms);
}

function animerJoueur(that) {
    that.anims.create({
        key: 'left',
        frames: that.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    }); 
    that.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    }); 
    that.anims.create({
        key: 'right',
        frames: that.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    cursors = that.input.keyboard.createCursorKeys();
}

function ajouterEtoiles(that, total) {
    if (total > 200) {
        total = 200;
    }
    stars = that.physics.add.group({
        key: 'star',
        repeat: total -1
    }); 
    stars.children.iterate(function (child) {
        child.x = Phaser.Math.Between(20, 780);
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); 
    });
    that.physics.add.collider(stars, platforms);
}
function ajouterbombs(that, total) {
    if (total > 200) {
        total = 200;
    }
    bombs = that.physics.add.group({
        key: 'bomb',
        repeat: total -1
    }); 
    bombs.children.iterate(function (child) {
        child.x = Phaser.Math.Between(20, 780);
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); 
       child.setBounce(1)

    });
    that.physics.add.collider(bombs, platforms);
}



function collectStar (player, star) {
    star.disableBody(true, true);
    score = score +10;
    scoreText.setText('Score: ' + score);
   



} 

function collecterElement (that, element) {
    that.physics.add.overlap(player, element, collectStar, null, this);
}

function bougerJoueur() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true); }
    else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}

function preload ()
{
    this.load.image('sky', 'assets/sky.png') 
    this.load.image('ground', 'assets/platform.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('star', 'assets/star.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png'); 

    
 
}

function create ()
{ 
     creerCiel(this);
     initialiserPlatforms(this);
     ajouterPlatform(  200,400)
     ajouterPlatform(800,400)
     ajouterPlatform(800, 300)
     ajouterPlatform(800, 400)
     ajouterPlatform(400,500)
     ajouterJoueur(this);
     animerJoueur(this);
     ajouterEtoiles(this, 1000);
     collecterElement(this, stars);
     scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
     bombs = this.physics.add.group();
     this.physics.add.collider(bombs, platforms);
     ajouterbombs(this, 10);
     this.physics.add.collider(player, bombs, hitBomb, null, this);
     

   

}  

function update ()
{ 
    bougerJoueur();
    
}

function hitBomb (player, bomb)
{
   //s this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    //gameOver = true;
    score =score -10 ;
    scoreText.setText('Score: ' + score);
   

} 



