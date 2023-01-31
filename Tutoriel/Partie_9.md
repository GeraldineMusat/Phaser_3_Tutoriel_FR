# Partie 9

## Score

Nous allons ajouter deux touches finales à notre jeu : un ennemi à éviter qui peut tuer le joueur, et un score lorsque vous collectez les étoiles. Tout d'abord, le score.

Pour ce faire, nous allons utiliser un objet de jeu texte. Ici, nous créons deux nouvelles variables, une pour contenir le score réel et l'objet texte lui-même :

    var score = 0;
    var scoreText;
    
Le `scoreText` est configuré dans la fonction de création `create` :

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
16 x 16 est la coordonnée à laquelle afficher le texte. 

'score : 0' est la chaîne par défaut à afficher et l'objet qui suit contient une taille de police et une couleur de remplissage.

Ensuite, nous devons modifier la fonction `collectStar` pour que, lorsque le joueur ramasse une étoile, son score augmente et que le texte soit mis à jour en conséquence :

    function collectStar (player, star)
    {
        star.disableBody(true, true);

        score += 10;
        scoreText.setText('Score: ' + score);
    }
    
Ainsi, 10 points sont ajoutés pour chaque étoile et le texte du score est mis à jour pour afficher ce nouveau total. 

Dans la dernière partie, nous ajouterons quelques méchants..
