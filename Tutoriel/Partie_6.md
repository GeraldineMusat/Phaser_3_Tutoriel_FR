# Partie 6

Lorsqu'un sprite physique est créé, on lui attribue une propriété `body`, qui est une référence à son corps physique Arcade. Cela représente le sprite en tant que corps physique dans le jeu. L'objet `body` possède de nombreuses propriétés et méthodes avec lesquelles nous pouvons jouer.

Par exemple, pour simuler les effets de la gravité sur un sprite, il suffit d'écrire :

    player.body.setGravityY(300)
    
Il s'agit d'une valeur arbitraire, mais logiquement, plus la valeur est élevée, plus votre objet semble lourd et plus il tombe rapidement. Si vous ajoutez ceci à votre code, vous verrez que le joueur tombe sans s'arrêter, ignorant complètement le sol que nous avons créé plus tôt.

La raison en est que nous ne testons pas encore la collision entre le sol et le joueur.

Nous avons déjà dit à Phaser que notre sol et nos plateformes seraient des corps statiques. 

Afin de permettre au joueur d'entrer en collision avec les plateformes, nous pouvons créer un objet `Collider`. Cet objet surveille deux objets physiques (qui peuvent inclure des groupes) et vérifie les collisions ou les chevauchements entre eux :

    this.physics.add.collider(player, platforms);
    
Le Collider est celui qui opère la magie. Il prend deux objets, teste la collision et effectue la séparation entre eux. Dans ce cas, nous lui donnons le sprite du joueur et le groupe de plateformes. Il est assez intelligent pour exécuter la collision contre tous les membres du groupe. Ainsi, quand le `player` entrera en contact avec une plateforme il ya aura une collision. 
