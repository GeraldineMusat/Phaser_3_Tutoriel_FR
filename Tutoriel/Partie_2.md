# Partie 2

## Chargement des ressources

Chargeons les ressources dont nous avons besoin pour notre jeu! 
Pour ce faire, il faut placer les appels pour charger les ressources dans une fonction de Scene appelée `preload`. Phaser recherche automatiquement cette fonction au démarrage et charge tout ce qui y est défini.

Voici comment vous devez faire pour charger vos images dans votre jeu:

    function preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }
    
Cela chargera 5 ressources : 4 images et un sprite `spritesheet`. Cela peut sembler évident pour certains d'entre vous, mais j'aimerais attirer l'attention sur le premier paramètre, également connu sous le nom de clé de ressource (par exemple, "sky", "bomb"). Cette chaîne est un lien vers l'objet chargé et c'est ce que vous utiliserez dans votre code lorsque vous créerez des objets de jeu. 

## Affichage des images

Afin d'afficher l'une des images que nous avons chargées, placez le code suivant dans la fonction `create` :

    this.add.image(400, 300, 'sky');
    
Si vous lancez votre jeu dans un navigateur, vous devriez maintenant voir un écran de jeu avec un fond de ciel bleu `sky` qui le recouvre.

Les valeurs `400` et `300` sont les coordonnées **x** et **y** de l'image. Pourquoi 400 et 300 ? C'est parce que dans Phaser 3, tous les objets de jeu sont positionnés par défaut en fonction de leur **centre**. L'image d'arrière-plan a une taille de 800 x 600 pixels, donc si nous l'affichons centrée à 0 x 0, vous ne verrez que le coin inférieur droit de l'image. Si nous l'affichons à 400 x 300, vous verrez l'ensemble de l'image.

L'ordre dans lequel les objets du jeu sont affichés correspond à l'ordre dans lequel vous les créez. Ainsi, si vous souhaitez placer un sprite d'étoile au-dessus de l'arrière-plan, vous devez vous assurer qu'il a été ajouté en tant que deuxième image, après l'image du ciel :

    function create ()
    {
        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'star');
    }
    
Si vous placez l'image de l'étoile `star` en premier, elle sera recouverte par l'image du ciel `sky`.
