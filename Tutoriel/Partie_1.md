# Partie 1

## Introduction
Dans le dossier "Phaser_3_Projet" vous pouvez voir plusieurs dossiers et fichiers déjà créés.

#### assets 
Dans ce dossier vous allez retrouver toutes les images du jeu dont vous aller avoir besoin. Si ovus voulez ajouter des nouvelles images dans votre jeu, il faudra les ajouter dans ce dossier.

#### css
Dans ce dossier se trouve un fichier "style.css" qui sert au design de la page HTML du jeu (index.html). (HTML est le langage de balisage conçu pour représenter les pages web.) Vous n'aurez pas besoin de modifier ce fichier pendant ce tutoriel.

#### javascript
Dans ce dossier se trouve le fichier "script.js". C'est dans ce fichier que vous aller construire votre jeu. 

#### lib
Ce dossier contient le fichier "phaser.js" qui est le fichier de la librairie Phaser 3. C'est ce fichier qui va nous aider à construire notre jeu. Vous devez pas le modifier.

#### index.html
Le fichier "index.html" sert à afficher notre jeu dans le navigateur.

## Explication du fichier 'script.js'

Voici a quoi ressemble le fichier 'script.js':

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    
    var game = new Phaser.Game(config);
    
    function preload ()
    {
    
    }
    
    function create ()
    {
    
    }
    
    function update ()
    {
    
    }
    
L'objet config est la façon dont vous configurez votre jeu Phaser. Il y a beaucoup d'options qui peuvent être placées dans cet objet et au fur et à mesure que vous approfondissez vos connaissances de Phaser, vous en rencontrerez d'autres. Mais dans ce tutoriel, nous allons simplement définir le moteur de rendu, les dimensions et une scène par défaut.

Une instance d'un objet Phaser.Game est affectée à une variable locale appelée `game` et l'objet de configuration lui est transmis. Le processus de création de Phaser commence alors.

La propriété `type` peut être soit `Phaser.CANVAS`, soit `Phaser.WEBGL`, soit `Phaser.AUTO`. Il s'agit du contexte de rendu que vous souhaitez utiliser pour votre jeu. La valeur recommandée est `Phaser.AUTO`, qui essaie automatiquement d'utiliser WebGL, mais si le navigateur ou le périphérique ne le prend pas en charge, il revient à Canvas. L'élément Canvas créé par Phaser sera simplement ajouté au document à l'endroit où le script a été appelé, mais vous pouvez également spécifier un conteneur parent dans la configuration du jeu si vous le souhaitez.

Les propriétés `width` (largeur) et `height` (hauteur) définissent la taille de l'élément du canvas que Phaser va créer. Dans ce cas, il s'agit de 800 x 600 pixels. Votre jeu peut avoir la taille que vous voulez, mais c'est la résolution dans laquelle le jeu s'affichera.

La propriété `scène` de l'objet de configuration sera traitée plus en détail dans la suite de ce tutoriel.
