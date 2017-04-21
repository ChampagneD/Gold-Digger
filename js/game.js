var game = new Phaser.Game(1280,720, Phaser.AUTO);

localStorage.i = 0;

game.state.add('menu', menuState);
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('level', playState);
game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('gameover_tuto', tutoLoseState);
game.state.add('gameover_level1', level1LoseState);
game.state.add('gameover_level2', level2LoseState);
game.state.add('winLevel1', winLevel1State);
game.state.add('winLevel2', winLevel2State);
game.state.add('wintuto', winState);
game.state.start('menu');