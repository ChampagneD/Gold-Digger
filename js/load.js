var loadState = {
    preload: function(){
        
        //GAMEOVER
        game.load.image('background_gameover', 'assets/gameover.png');
        
        //WIN
        game.load.image('background_win', 'assets/victoire.png');

        game.load.spritesheet('marche', 'assets/marche5.png', 34, 96, 6);
        game.load.spritesheet('Danse1', 'assets/Danse_un.png', 34, 96, 3);
        game.load.spritesheet('Danse1_vert', 'assets/Danse_un_vert.png', 34, 96, 3);
        game.load.spritesheet('Danse3_vert', 'assets/Danse_trois_vert.png', 34, 96, 2);
        game.load.spritesheet('Danse2', 'assets/Danse_deux_bleu.png', 36, 96, 3);
        game.load.spritesheet('Danse2_vert', 'assets/Danse_deux_vert.png', 36, 96, 3);
        game.load.spritesheet('greek_talking', 'assets/greek_talking.png', 299, 300, 2);
        game.load.image('interface', 'assets/interface.png'); 
        game.load.spritesheet('talk2', 'assets/talk2.png', 34, 96, 5);
        game.load.spritesheet('nope', 'assets/Nope.png', 15, 51, 3);
        game.load.spritesheet('good', 'assets/good.png', 20, 34, 3);    

        if (localStorage.i == 0) {

            joueur = null;
            Boisson = null;
            Danse_un = null;
            Danse_un_vert = null;
            Danse_trois_vert = null;
            Danse_trois_vert = null;
            Mur_Bleu_Gauche_Droit = null;
            Mur_Bleu_Haut = null;
            Mur_Bleu_Droite_Droit = null;
            Mur_Porte_Haut = null;
            Mur_Porte_Bas = null;
            Mur_Bleu_Bas = null;
            Mur_Violet_Bas = null;
            Mur_Cache_Bas = null;
            Tapis = null;
            Tapis_deux = null;
            Statue = null;
            Boite_dialogue = null;
            Plante = null;
            Bureau = null;
            BureauCollision = null;
            Cafe = null;
            CafeCollision = null;
            Cafe_deux = null;
            CafeCollision_deux = null;
            Cafe_trois = null;
            CafeCollision_trois = null;
            TableRonde = null;
            TableRonde_deux = null;
            TableRonde_trois = null;
            TableRonde_quatre = null;
            Bureau_chaise = null;
            Bureau_chaise_deux = null;
            Bureau_chaise_trois = null;
            Bureau_Droite = null;
            Bureau_Droite_collision = null;
            Bureau_Droite_deux = null;
            Bureau_Droite_deux_collision = null;
            Bureau_Droite_trois = null;
            Bureau_Droite_trois_collision = null;
            Porte_Fermee = null;
            porte_ouverte_1 = null;
            porte_ouverte_2 = null;
            Porte_Overlap = null;
            Porte_Overlap_droite = null;
            porte_kill = false;
            Nope = null;
            greek_talking = null;
            Good = null;
            Clé = null;
            countObject = 0;
            cursors = null;
            text = null;
            overlap = false;
            chance = 3;
            spaceIsDown = false;
            enterIsDown = true;
            total = 0;
            opened_door = 0;
            last_tooltip = 0;
            kill_tooltip = 0;   
            pnjsList = [];
            interface = null;
            musique_background = null;

            //TUTO IMAGE ET LEVEL 1
            game.load.image('background', 'assets/background_tuto.png');
            game.load.image('perso_gauche', 'assets/Squelette-Perso-gauche.png');
            game.load.image('bonChoix', 'assets/Squelette-Perso2_gauche.png');
            game.load.image('character3_droite', 'assets/Squelette-Perso2.png');
            game.load.image('mauvaisChoix', 'assets/Squelette-Perso3-gauche.png');
            game.load.image('champagne', 'assets/clé.png');
            game.load.image('Mur-Bleu-Gauche-Droit', 'assets/Mur-Bleu-Gauche-Droit.png');
            game.load.image('Mur-Bleu-Haut', 'assets/Mur-Bleu-Haut.png');
            game.load.image('Mur-Bleu-Droite-Droit', 'assets/Mur-Bleu-Droite-Droit.png');
            game.load.image('Mur-Porte-Haut', 'assets/Mur-Porte-Haut.png');
            game.load.image('Mur-Porte-Bas', 'assets/Mur-Porte-Bas.png');
            game.load.image('Mur-Bleu-Bas', 'assets/Mur-Bleu-Bas.png');
            game.load.image('Mur-Violet-Bas', 'assets/Mur-Violet-Bas.png');
            game.load.image('Mur-Cache-Bas', 'assets/Mur-Cache-Bas.png');
            game.load.image('tapis','assets/tapis_léopard.png');
            game.load.image('statue','assets/statue.png');
            game.load.image('plante','assets/plante.png');
            game.load.image('bureau','assets/bureau.png');
            game.load.image('bureau_collision','assets/bureau_collision.png');
            game.load.image('café','assets/café.png');
            game.load.image('café_collision','assets/café_collision.png');
            game.load.image('table_ronde','assets/table_ronde.png');
            game.load.image('bureau&chaise','assets/bureau&chaise.png');
            game.load.image('bureau_droite','assets/bureau_droite.png');
            game.load.image('bureau_droite_collision','assets/bureau_droite_collision.png');
            game.load.image('bureau_droite_deux','assets/bureau_droite_deux.png');
            game.load.image('bureau_droite_deux_collision','assets/bureau_droite_deux_collision.png');
            game.load.image('bureau_droite_trois','assets/Bureau_droite_trois.png');
            game.load.image('bureau_droite_trois_collision','assets/bureau_droite_trois_collision.png');
            game.load.image('porte_fermee','assets/porte_fermee.png');
            game.load.image('porte_ouverte_1','assets/porte_ouverte_1.png');
            game.load.image('porte_ouverte_2','assets/porte_ouverte_2.png');
            game.load.image('porte_overlap','assets/porte_overlap.png');
            game.load.spritesheet('Boisson', 'assets/Boisson.png', 38, 96, 2);
            game.load.spritesheet('tooltip_1', 'assets/tooltip_1.png');
            game.load.spritesheet('tooltip_2', 'assets/tooltip_2.png');
            game.load.spritesheet('tooltip_3', 'assets/tooltip_3.png');
            game.load.spritesheet('tooltip_4', 'assets/tooltip_4.png');
            game.load.spritesheet('pnj', 'assets/character_random.png', 39, 40);
            game.load.spritesheet('talk', 'assets/talk.png', 34, 96, 5);

        }

        if (localStorage.i == 1) {

            //LEVEL 1 UNIQUEMENT
            
            joueur = null;
            eclairage = null;
            first_door_level1 = null;
            first_door_top_level1 = null;
            top_mur_level1 = null;
            second_door_top = null;
            second_door_bot = null;
            wall_droite = null;
            bottom_wall = null;
            bottom_wall_top = null;
            bottom_wall_all = null;
            collide_object = null;
            dj = null;
            dj_anim = null;
            top_object = null;
            lumiere_gauche = null;
            lumiere_droite = null;
            musique_background = null;
            spaceIsDown = false;
            Danse_un = null;
            Danse_un_vert = null;
            Danse_trois_vert = null;
            Danse_deux = null;
            Danse_deux_2 = null;
            Danse_deux_vert = null;
            Danse_deux_vert_deux = null;
            afficher_pourcentage = null;
            text = null;
            pourcentage = 100;
            vie = 3;
            affiche_pourcentage_cent = null;
            Boite_dialogue = null;
            interface = null;
            Good = null;
            tooltip_count = 0;

            game.load.image('background_level1', 'assets/background_level1.png');
            game.load.spritesheet('eclairage', 'assets/éclairage_2.png', 900, 734, 2);
            game.load.image('first_door_level1', 'assets/first_door_level1.png');
            game.load.image('first_door_top_level1', 'assets/first_door_top_level1.png');
            game.load.image('top_mur_level1', 'assets/top_mur_level1.png');
            game.load.image('second_door_top', 'assets/second_door_top.png');
            game.load.image('second_door_bot', 'assets/second_door_bot.png');
            game.load.image('wall_droite', 'assets/wall_droite.png');
            game.load.image('bottom_wall', 'assets/bottom_wall.png');
            game.load.image('bottom_wall_top', 'assets/bottom_wall_top.png');
            game.load.image('bottom_wall_all', 'assets/bottom_wall_all.png');
            game.load.image('collide_object', 'assets/collide_object.png');
            game.load.image('dj', 'assets/dj.png');
            game.load.image('top_object', 'assets/top_object.png');
            game.load.image('lumiere_gauche', 'assets/lumiere_gauche.png');
            game.load.image('lumiere_droite', 'assets/lumiere_droite.png');
            game.load.spritesheet('dj_anim', 'assets/dj_anim.png', 36, 96, 3);
            game.load.image('affiche_pourcentage', 'assets/affiche_pourcentage.png');
            game.load.image('affiche_pourcentage_100', 'assets/affiche_pourcentage_100.png');
            game.load.image('tooltip_level_1', 'assets/tooltip_level1_1.png');
            game.load.image('tooltip_level_2', 'assets/tooltip_level1_2.png');
        }

        if (localStorage.i == 2) {

            //LEVEL 2
            
            joueur = null;
            grillage_droite = null;
            grillage_gauche = null;
            batiment = null;
            first_door_top_level2 = null;
            first_door_level2 = null;
            bottom_wall_level2 = null;
            bottom_wall_level2_collision = null;
            bottom_wall_level2_nocollision = null;
            top_mur_level2 = null;
            mur_droite_level2 = null;
            top_object = null;
            lumiere_level2 = null;
            bouton = null;
            affiche_pourcentage_cent = null;
            bouton_press = false;
            Boite_dialogue = null;
            greek_talking = null;
            background = null;
            musique_background = null;
            vie = 3;

            game.load.image('background_level2', 'assets/background_level2.png');
            game.load.image('niveau_3_noir', 'assets/niveau_3_noir.png');
            game.load.image('grillage_gauche', 'assets/grillage_gauche.png');
            game.load.image('grillage_droite', 'assets/grillage_droite.png');
            game.load.image('batiment', 'assets/batiment.png');
            game.load.image('first_door_level2', 'assets/first_door_level2.png');
            game.load.image('first_door_top_level2', 'assets/first_door_top_level2.png');
            game.load.image('bottom_wall_level2', 'assets/bottom_wall_level2.png');
            game.load.image('bottom_wall_level2_collision', 'assets/bottom_wall_level2_collision.png');
            game.load.image('bottom_wall_level2_nocollision', 'assets/bottom_wall_level2_nocollision.png');
            game.load.image('top_mur_level2', 'assets/top_mur_level2.png');
            game.load.image('mur_droite_level2', 'assets/mur_droite_level2.png');
            game.load.image('top_object2', 'assets/top_object_2.png');
            game.load.image('lumiere_level2', 'assets/lumiere_level2.png');
            game.load.image('bouton', 'assets/bouton.png');
            game.load.image('bouton_enfonce', 'assets/bouton_enfonce.png');
            game.load.image('tooltip_level_2_1', 'assets/tooltip_level2_1.png');
            game.load.image('tooltip_level_2_2', 'assets/tooltip_level2_2.png');
            game.load.spritesheet('femme_parle', 'assets/femme_parle.png', 36, 96, 5);
            game.load.spritesheet('eclairage_level2', 'assets/éclairage_level2.png', 900, 734, 2);
            game.load.image('affiche_pourcentage_100', 'assets/affiche_pourcentage_100.png');
            game.load.image('dj', 'assets/dj.png');
            game.load.spritesheet('dj_anim', 'assets/dj_anim.png', 36, 96, 3);

        }
        
        //LOAD SOUND
        game.load.audio('interaction', 'sounds/interaction.wav');
        game.load.audio('tuto', 'sounds/highandlow.wav');
        game.load.audio('level2', 'sounds/lookaround.wav');
        game.load.audio('musique_background', 'sounds/enjoy_1.wav');
        game.load.audio('wrong', 'sounds/wrong.mp3');
        game.load.audio('court_circuit', 'sounds/court_circuit.mp3');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);

        if (localStorage.i == 0) {
            game.state.start('level');
        } else{
            game.state.start('level' + localStorage.i);
        }
        
    }
}