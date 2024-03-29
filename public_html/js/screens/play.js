game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

                me.levelDirector.loadLevel("m");
                
                this.resetPlayer(0, 400);
                
                me.input.bindKey(me.input.KEY.RIGHT,"right");
                me.input.bindKey(me.input.KEY.LEFT,"left");
                me.input.bindKey(me.input.KEY.UP,"up");
              
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},
             

	/**
	 *  action to perform when leaving this screen (state change)
	 */
        //restarts when player dies 
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD)      
	},   
    resetPlayer:function(x, y){
        var player = me.pool.pull("mario", x, y, {});
        me.game.world.addChild(player, 7);
    }
        
});
