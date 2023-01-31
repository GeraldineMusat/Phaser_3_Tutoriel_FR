# Partie 8

## Stars!

Il est temps de donner un but à notre petit jeu. Laissons tomber un peu d'étoiles dans la scène du jeu et laissons le joueur les collecter. Pour cela, nous allons créer un nouveau groupe appelé `stars` et le remplir. Dans notre fonction de création `create`, nous ajoutons le code suivant :

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
    
Le processus est similaire à celui de la création du groupe de plates-formes. Comme nous avons besoin que les étoiles bougent et rebondissent, nous créons un groupe de physique dynamique au lieu d'un groupe statique.

Les groupes peuvent prendre des objets de configuration pour les aider à se mettre en place. Dans ce cas, l'objet de configuration du groupe a 3 parties : Premièrement, il définit la clé de texture comme étant l'image de l'étoile `key: 'star'`. Cela signifie que tous les enfants créés à la suite de l'objet de configuration recevront tous la texture de l'étoile par défaut. Ensuite, il définit la valeur de répétition à 11 `repeat: 11`. Puisqu'il crée automatiquement un enfant, répéter 11 fois signifie que nous en obtiendrons 12 au total, ce qui est exactement ce dont nous avons besoin pour notre jeu.

La dernière partie est `setXY` - elle est utilisée pour définir la position des 12 enfants créés par le groupe. Chaque enfant sera placé à partir de x : 12, y : 0 et avec un pas en x de 70. Cela signifie que le premier enfant sera placé à 12 x 0, le deuxième à 70 pixels de là, à 82 x 0, le troisième à 152 x 0, et ainsi de suite. Les valeurs de "pas" sont un moyen très pratique d'espacer les enfants d'un groupe pendant la création. La valeur de 70 a été choisie parce qu'elle signifie que les 12 enfants seront parfaitement espacés sur l'écran.

Le morceau de code suivant itère tous les enfants du groupe et leur donne une valeur de rebond Y aléatoire entre 0,4 et 0,8. La plage de rebond est comprise entre 0, aucun rebond, et 1, un rebond complet. Comme les étoiles sont toutes créées à y 0, la gravité va les tirer vers le bas jusqu'à ce qu'elles entrent en collision avec les plateformes ou le sol. La valeur de rebond signifie qu'elles vont rebondir de manière aléatoire jusqu'à ce qu'elles s'immobilisent.

Si nous devions exécuter le code tel qu'il est maintenant, les étoiles tomberaient à travers le fond du jeu et hors de vue. Pour éviter cela, nous devons vérifier si elles entrent en collision avec les plateformes. Nous pouvons utiliser un autre objet Collider pour ce faire :

    this.physics.add.collider(stars, platforms);
    
En plus de cela, nous allons également vérifier si le joueur chevauche une étoile ou non :

    this.physics.add.overlap(player, stars, collectStar, null, this);
    
Ceci indique à Phaser de vérifier s'il existe un chevauchement entre le joueur et toute étoile du groupe d'étoiles. Si le joueur touche une etoile, la fonction 'collectStar' est executee :

    function collectStar (player, star)
    {
        star.disableBody(true, true);
    }
    
L'étoile a tout simplement son corps physique désactivé et son objet de jeu parent est rendu inactif et invisible, ce qui le supprime de l'affichage. En exécutant le jeu, nous avons maintenant un joueur qui peut se déplacer, sauter, rebondir sur les plateformes et collecter les étoiles qui tombent du ciel. Pas mal pour quelques lignes de code :)

