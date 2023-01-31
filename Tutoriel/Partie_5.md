# Partie 5

## Ready Player One

Nous avons de belles plateformes, mais personne pour sauter dessus.. Rectifions cela!

Créez une nouvelle variable appelée `player` et ajoutez le code suivant à la fonction `create` :

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    
Il y a deux choses distinctes qui se passent ici : la création d'un Sprite physique et la création de certaines animations qu'il peut utiliser.

### Sprite physique 

La première partie du code crée le sprite :

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    
Cela crée un nouveau sprite appelé `player`, positionné à 100 x 450 pixels. Le sprite a été créé par l'intermédiaire de Physics Game Object Factory (`this.physics.add`), ce qui signifie qu'il possède un corps Dynamic Physics par défaut.

Après avoir créé le sprite, on lui a attribué une légère valeur de rebond de 0,2. Cela signifie que lorsqu'il atterrit après avoir sauté, il rebondit légèrement. Le sprite est ensuite configuré pour entrer en collision avec les limites du monde. Les limites, par défaut, sont à l'extérieur des dimensions du jeu. Comme nous avons réglé le jeu sur 800 x 600, le joueur ne pourra pas courir en dehors de cette zone. Cela empêchera le joueur de courir sur les bords de l'écran ou de sauter par le haut.


### Animations 

Si vous jetez un coup d'œil à la fonction de prechargement `preload`, vous verrez que `dude` a été chargé en tant que feuille de sprite et non en tant qu'image. C'est parce qu'il contient des images d'animation.

Il y a 9 images au total, 4 pour courir à gauche, 1 pour faire face à la caméra et 4 pour courir à droite.

Nous définissons deux animations appelées gauche `left` et droite `right`. Voici l'animation de gauche :

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
L'animation gauche `left` utilise les images 0, 1, 2 et 3 et fonctionne à 10 images par seconde. La valeur `repeat: -1` indique à l'animation de tourner en boucle.

On fait la meme chose pour courrir a droite `right` et pareil pour `turn`.
