game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
        //lets yu press the enter button to start your game from the title screen
	onResetEvent: function() {	
		var titleImage = new me.Sprite(0, 0, me.loader.getImage("2012-02-19_M104_Sombrero_Galaxy"));
                me.game.world.addChild(titleImage, -10);
                me.input.bindKey(me.input.KEY.ENTER, "start");
                
                me.game.world.addChild(new(me.Renderable.extend({
                    init:function(){
                      this._super(me.Renderable, 'init', [510, 30,  me.game.viewport.width, me.game.viewport.height]);  
                      this.font = new me.Font("Arial", 46, "White");
                      
                    },
                   
                    
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "SPACE BLOBB!!", 450, 130);
                        this.font.draw(renderer.getContext(), "Press ENTER to play!", 250 ,530);
                    }
                    
                })));
                
                this.handler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge){
                    if(action ==="start"){
                        me.state.change(me.state.PLAY);
                    }
                });
	},
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            me.input.unbindKey(me.input.KEY.ENTER);
            me.event.unsubscribe(this.handler);
        }
		
});
