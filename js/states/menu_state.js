(function () {
    'use strict'; 

    var MenuState = function() {
    };

    MenuState.prototype.preload = function() {
        this.game.load.image('start', 'assets/img/start.png');
    }   
    
    MenuState.prototype.create = function() {

        this.game.stage.backgroundColor = '#f00';
        
        var startButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 150, 'start', startButtonClicked, this);
        startButton.anchor.set(0.5);

        function startButtonClicked() {
            // this.game.state.start('level1');
        }
    }
    
    MenuState.prototype.update = function() {
    }  
    
    gameManager.addState('menu', MenuState);

})();