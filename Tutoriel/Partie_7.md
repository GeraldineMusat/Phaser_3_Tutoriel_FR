# Partie 7

## Contrôler le joueur avec le clavier

La collision est une bonne chose, mais nous avons vraiment besoin que le joueur bouge! Pour cela, nous allons utiliser cette fonction :

    cursors = this.input.keyboard.createCursorKeys();
    
Cela remplit l'objet curseurs avec quatre propriétés : haut, bas, gauche, droite, qui sont toutes des instances d'objets Key. Ensuite, tout ce que nous avons à faire est de les interroger dans la boucle de notre jeu :

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
    
Cela fait beaucoup de nouveau code !

Dans ce code, la première chose qu'il fait est de vérifier si la touche gauche est maintenue enfoncée. Si c'est le cas, nous appliquons une vélocité horizontale négative et démarrons l'animation de la course à gauche. S'ils tiennent la touche 'droite', nous faisons littéralement l'inverse. 

Le sprite du joueur se déplace uniquement lorsqu'une touche est maintenue enfoncée et s'arrête dès qu'elle ne l'est plus. 

La dernière partie est l'animation `turn` si aucune des touches gauche ou droite n'est enfoncée. Cette animation correpond au moment ou le joueur ne bouge pas donc on met a 0 la volocité.

## Sauter

La dernière partie du code ajoute la possibilité de sauter. La fleche du haut `cursor.up` sur notre clavier va permetre au joueur de sauter, pour activer l'animation du saut nous devons regarder si la touche est enfoncee `isDown` et si le joueur touche le sol, sinon il pourrait sauter en l'air.

Si ces deux conditions sont remplies, nous appliquons une vélocité verticale de 330 px/sec carrée. Le joueur tombera automatiquement au sol à cause de la gravité. Avec les contrôles en place, nous avons maintenant un monde de jeu que nous pouvons explorer !
