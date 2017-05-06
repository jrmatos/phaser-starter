(function () {
    'use strict'; 
    
    var player = {
        sprite: null,
        imgName: 'player_img',
        imgUrl: 'assets/img/player.png',
        setup: function () {
            player.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, player.imgName);
            player.sprite.anchor.set(0.5);
            this.game.physics.arcade.enable(player.sprite);
        }
    };

    var HomeState = function() {
    };

    HomeState.prototype.preload = function() {
        this.game.load.image(player.imgName, player.imgUrl);
    }

    HomeState.prototype.create = function() {
       player.setup.apply(this);
    }

    HomeState.prototype.update = function() {
        moveToPointer.apply(this, [player.sprite, 200]);
    }    
    
    HomeState.prototype.render = function() {
        this.game.debug.inputInfo(32, 32);
    }

    function moveToPointer(sprite, velocity) { 
        if (this.game.physics.arcade.distanceToPointer(sprite, this.game.input.activePointer) > 8) {
            this.game.physics.arcade.moveToPointer(sprite, velocity || 300);
        }
        else {
            sprite.body.velocity.set(0);
        }
    }

    gameController.addState('home', HomeState);

})();