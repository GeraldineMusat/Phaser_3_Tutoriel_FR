# Partie 3

## Construction du monde

En réalité, `this.add.image` crée un nouvel objet image dans le jeu et l'ajoute à la liste d'affichage de la scène en cours. C'est dans cette liste que se trouvent tous vos objets de jeu. Vous pouvez placer l'image n'importe où et Phaser n'y verra aucun inconvénient. Bien sûr, si elle se trouve en dehors de la région 0x0 à 800x600, vous ne la verrez pas visuellement, car elle sera " hors écran ", mais elle existera toujours dans la scène.

La scène elle-même n'a pas de taille fixe et s'étend à l'infini dans toutes les directions. Le système de caméra contrôle votre vue dans la scène et vous pouvez déplacer et zoomer la caméra active selon vos besoins.

Pour l'instant, construisons la scène en ajoutant une image de fond et quelques plateformes dans la fonciton `create` comme cela :

    var platforms;

    function create ()
    {
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
    }
    
En regardant rapidement le code, vous verrez un appel à `this.physics`. Cela signifie que nous utilisons le système Arcade Physics, mais avant cela, nous devons l'ajouter à notre configuration de jeu pour indiquer à Phaser que notre jeu en a besoin. Mettons donc à jour la configuration pour inclure la prise en charge de la physique. Voici la configuration de jeu révisée :

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
    

Nous venons d'ajouter la propriété physique. Avec ce code en place, si vous lancez votre jeu dans le navigateur, vous devriez voir une scène avec le ciel bleu et les plates-formes. Mais comment ces plates-formes fonctionnent-elles exactement ?
