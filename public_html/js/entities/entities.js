// makes the players height
game.PlayerEntity = me.Entity.extend({
    init:function(x, y, settings){
        this._super(me.Entity, 'init' ,[x, y, {
            image:"mario",
            spritewidth: "128",
            spriteheight:"128",
            width:128,
            height:128,
            getShape: function(){
                return (new me.Rect(0, 0, 30,128)).toPolygon();
            }
        }]);
            //adds anmation to the player
            this.renderable.addAnimation("idle",[3]);
            this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13], 80);
            
            this.renderable.setCurrentAnimation("idle");
            this.body.setVelocity(5,20);
            //makes the speed of mario .the first
            me.game.viewport.follow(this.pos,me.game.viewport.AXIS.BOTH);
    },
    
    update: function (delta){
        //checks if the right button is pressed, and if so executes the next line of code
      if(me.input.isKeyPressed("right")){
          //sets the x position of mario by adding the velocity set above in setVelocity()me.timer.tick
          //me.timer.tick is
          this.body.vel.x += this.body.accel.x * me.timer.tick;
          //checks if the left button is pressed
      }else if(me.input.isKeyPressed("left")){
          this.body.vel.x -= this.body.accel.x / me.timer.tick;
          
      }
        else{
          this.body.vel.x = 0;
   }
   
   if(me.input.isKeyPressed("up")){
       this.body.vel.y -= this.body.accel.y * me.timer.tick;
       
   }
  
    this.body.update(delta);
    //check collition.check is a function that 4 parameters to determine and resolve mario walking into objects
    //the first parameter passes this object as one of the ones hit, the third parameterr passes all the informaion
    //a function named collideHandler
    me.collision.check(this, true, this.collideHandler.bind(this),true); 
    
    if(this.body.vel.x !== 0){
        if(!this.renderable.isCurrentAnimation("smallWalk")){
            this.renderable.setCurrentAnimation("smallWalk");
            this.renderable.setAnimationFrame();
      }
    }else{
       this.renderable.setCurrentAnimation("idle");
    };
    
//allows you to update
    this._super(me.Entity,"update",[delta]);
    return true;
    
    },
    
    collideHandler: function(response){
        
    }
    
});     
//lets yu choose where to spawn your player in the game
game.LevelTrigger = me.Entity.extend({
    init: function(x, y, settings){
    this._super(me.Entity, 'init', [x, y, settings]);
    this.body.onCollision = this.onCollision.bind(this);
    this.level = settings.level;
    this.xSpawn = settings.xSpawn;
    this.ySpawn = settings.ySpawn;
    },
    onCollision: function(){
       this.body.setCollisionMask(me.collision.types.NO_OBJECT);
       me.levelDirector.loadLevel(this.level);
       me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
    }
});

game.BadGuy = me.Entity.extend({
   init: function(x, y, settings){
         this._super(me.Entity, 'init' ,[x, y, {
            image:"slime",
            spritewidth: "60",
            spriteheight:"28",
            width:60,
            height:28,
            getShape: function(){
                return (new me.Rect(0, 0, 00,28)).toPolygon();
            }
        }]);
    this.spritewidth = 60;
    var width = settings.width;
    
    x = this.pos.x;
    this.startX = x;
    this.endX = x + width - this.spritewidth;
    this.posX = x + width - this.spritewidth;
    
    this.updateBounds();
    
    this.alwaysUpdate = true;
    this.walkLeft = false;
    this.alive = true;
    
    this.type = "badguy";
    this.renderable
   },
   
   update: function(delta){
       
   }
   
});








