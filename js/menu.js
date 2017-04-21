var menuState = function() {

}

menuState.prototype = {

    preload: function(){

        game.load.image('background_menu', 'assets/background_menu.png');
        game.load.image('play_button', 'assets/play_button.png');
        game.load.image('play_button_hover', 'assets/play_button_hover.png');
        game.load.image('credit_button', 'assets/credit_button.png');
        game.load.image('credit_button_hover', 'assets/credit_hover_button.png');
        game.load.image('howtoplay_button', 'assets/howtoplay_button.png');
        game.load.image('howtoplay_button_hover', 'assets/howtoplay_hover_button.png');
        game.load.image('crédits', 'assets/crédits.png');
        game.load.image('howtoplay', 'assets/comment-jouer.png');
        game.load.image('croix_fermee', 'assets/croix_fermee.png');

        game.load.audio('menu', 'sounds/enjoy.wav');

        playButton = null;
        backgroundMenu = null;
        creditButton = null;
        howtoplayButton = null;
        tween = null;
        closeButton = null;
        musique_background = null;
    },

    create: function(){
        this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();
        backgroundMenu = game.add.sprite(0,0,'background_menu');
        
        playButton = game.add. button(0,250,'play_button',this.actionOnClick);
        playButton.onInputOver.add(this.play_button_hover, this);
        playButton.onInputOut.add(this.play_button, this);
         
        howtoplayButton = game.add. button(0,310, 'howtoplay_button', this.openWindowHowToPlay);
        howtoplayButton.onInputOver.add(this.howtoplay_hover_button, this);
        howtoplayButton.onInputOut.add(this.howtoplay_button, this);
        
        creditButton = game.add. button(0,370, 'credit_button', this.openWindowCredit);
        creditButton.onInputOver.add(this.credit_hover_button, this);
        creditButton.onInputOut.add(this.credit_button, this);
        
        popup_credit = game.add.sprite(0, 0, 'crédits'); 
        popup_credit.visible = false;
        
        closeButton_credit = game.add.button(1150, 60, 'croix_fermee', this.closeWindowCredit, this);
        closeButton_credit.visible = false;
        
        popup_howtoplay = game.add.sprite(0, 0, 'howtoplay'); 
        popup_howtoplay.visible = false;
        
        closeButton_howtoplay = game.add.button(1150, 60, 'croix_fermee', this.closeWindowHowToPlay, this);
        closeButton_howtoplay.visible = false;
                //musique
        musique_background = game.add.audio('menu');
        musique_background.play();

    },
    actionOnClick: function() {
        game.sound.stopAll();
        game.state.start('boot', true, true);
    },
    play_button_hover: function(){
       playButton.loadTexture('play_button_hover', 0, false); 
    },
    play_button: function(){
       playButton.loadTexture('play_button', 0, false); 
    },
    howtoplay_hover_button: function(){
       howtoplayButton.loadTexture('howtoplay_button_hover', 0, false); 
    },
    howtoplay_button: function(){
       howtoplayButton.loadTexture('howtoplay_button', 0, false); 
    },
    credit_hover_button: function(){
       creditButton.loadTexture('credit_button_hover', 0, false); 
    },
    credit_button: function(){
       creditButton.loadTexture('credit_button', 0, false); 
    },
    openWindowCredit: function() {
        popup_credit.visible = true;
        closeButton_credit.visible = true;
        playButton.inputEnabled = false;
        creditButton.inputEnabled = false;
        howtoplayButton.inputEnabled = false;

        //  Create a tween that will pop-open the window, but only if it's not already tweening or open
        tween = game.add.tween(popup_credit.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None, true);

    },
    closeWindowCredit: function() {
        playButton.inputEnabled = true;
        creditButton.inputEnabled = true;
        howtoplayButton.inputEnabled = true;
        popup_credit.kill();
        closeButton_credit.kill();
    },
    openWindowHowToPlay: function() {
        popup_howtoplay.visible = true;
        closeButton_howtoplay.visible = true;
        playButton.inputEnabled = false;
        creditButton.inputEnabled = false;
        howtoplayButton.inputEnabled = false;
        //  Create a tween that will pop-open the window, but only if it's not already tweening or open
        tween = game.add.tween(popup_howtoplay.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None, true);
    },
    closeWindowHowToPlay: function(){
        playButton.inputEnabled = true;
        creditButton.inputEnabled = true;
        howtoplayButton.inputEnabled = true;
        popup_howtoplay.kill();
        closeButton_howtoplay.kill();
    }
}