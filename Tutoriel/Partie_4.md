# Partie 4

## Les plate-formes

Nous venons d'ajouter un tas de code à notre fonction de création `create` qui mérite une explication plus détaillée. D'abord, cette partie :

    platforms = this.physics.add.staticGroup();
    
Cela crée un nouveau groupe physique statique et l'affecte à la variable locale `platforms`. Dans la physique arcade, il existe deux types de corps physiques : **Dynamique** et **Statique**. Un corps dynamique est un corps qui peut se déplacer via des forces telles que la vitesse ou l'accélération. Il peut rebondir et entrer en collision avec d'autres objets et cette collision est influencée par la masse du corps et d'autres éléments.

En revanche, un corps statique a simplement une position et une taille. Il n'est pas touché par la gravité, vous ne pouvez pas lui donner de vitesse et lorsque quelque chose entre en collision avec lui, il ne bouge jamais. Statique par son nom, statique par nature. Et il est parfait pour le sol et les plates-formes sur lesquels nous allons laisser le joueur courir.

Mais qu'est-ce qu'un groupe ? Comme leur nom l'indique, ils vous permettent de regrouper des objets similaires et de les contrôler comme une seule unité. Vous pouvez également vérifier les collisions entre les groupes et les autres objets du jeu. Les groupes sont capables de créer leurs propres objets de jeu grâce à des fonctions d'aide pratiques comme `create`.

Notre groupe de plateformes étant constitué, nous pouvons maintenant l'utiliser pour créer les plateformes :

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    
Au cours de la phase de chargement des ressources, nous avons importé une image `ground`. Il s'agit d'un simple rectangle vert, de 400 x 32 pixels, qui servira de base à la création de notre plate-forme.

La première ligne de code ci-dessus ajoute une nouvelle image du sol de 400 x 568 (rappelez-vous que les images sont positionnées en fonction de leur centre) - le problème est que nous avons besoin que cette plate-forme couvre toute la largeur de notre jeu, sinon le joueur tombera sur les côtés. Pour ce faire, nous la mettons à l'échelle x2 avec la fonction `setScale(2)`. Sa taille est maintenant de 800 x 64, ce qui est parfait pour nos besoins. L'appel à la fonction `refreshBody()` est nécessaire car nous avons mis à l'échelle un corps physique statique, nous devons donc informer la physique du jeu des changements que nous avons effectués.

Le sol est mis à l'échelle et en place, il est donc temps de passer aux autres plateformes :

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    
Le processus est exactement le même que précédemment, sauf que nous n'avons pas besoin de mettre à l'échelle ces plates-formes car elles ont déjà la bonne taille.

3 plateformes sont placées autour de l'écran, à la bonne distance les unes des autres pour permettre au joueur de sauter vers elles.

Ajoutons donc notre joueur!
