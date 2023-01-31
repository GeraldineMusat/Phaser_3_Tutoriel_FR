# Partie 10

## Mechantes bombes!

Afin de compléter notre jeu, il est temps d'ajouter quelques méchants !

L'idée est la suivante : Lorsque vous collectez toutes les étoiles la première fois, une bombe rebondissante est libérée. 
La bombe rebondit aléatoirement dans le niveau et si vous entrez en collision avec elle, vous mourrez. 
Toutes les étoiles réapparaîtront pour que vous puissiez les collecter à nouveau, et si vous le faites, une autre bombe sera libérée. 
Le joueur devra donc relever un défi : obtenir le meilleur score possible sans mourir.

La première chose dont nous avons besoin est un groupe pour les bombes et quelques Colliders :

    bombs = this.physics.add.group();

    this.physics.add.collider(bombs, platforms);

    this.physics.add.collider(player, bombs, hitBomb, null, this);
    
Les bombes vont bien sûr rebondir sur les plateformes, et si le joueur les touche, nous appellerons la fonction `hitBomb`. 
Tout ce que cela fera, c'est arrêter le jeu et rendre le joueur rouge :

    function hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        gameOver = true;
    }
    
Jusqu'ici, tout va bien, mais nous devons libérer une bombe. Pour ce faire, nous modifions la fonction `collectStar` :

    function collectStar (player, star)
    {
        star.disableBody(true, true);

        score += 10;
        scoreText.setText('Score: ' + score);

        if (stars.countActive(true) === 0)
        {
            stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

        }
    }
    
Nous utilisons une méthode de groupe appelée `countActive` pour voir combien d'étoiles sont encore en vie. 
S'il n'y en a aucune, le joueur les a toutes collectées. 
Nous utilisons donc la fonction `iterate` pour réactiver toutes les étoiles et remettre leur position y à zéro. 
Ainsi, toutes les étoiles tomberont à nouveau du haut de l'écran.

La partie suivante du code crée une bombe. 
Tout d'abord, nous choisissons une coordonnée x aléatoire pour celle-ci, toujours du côté opposé de l'écran par rapport au joueur, juste pour lui donner une chance. 
Ensuite, la bombe est créée, elle est configurée pour entrer en collision avec le monde, rebondir et avoir une vélocité aléatoire.

Le résultat final est un joli petit sprite de bombe qui rebondit autour de l'écran. 
Elle est assez petite pour être facile à éviter au début, mais dès que le nombre de bombes augmente, cela devient beaucoup plus difficile !


Et notre jeu est terminé :)
