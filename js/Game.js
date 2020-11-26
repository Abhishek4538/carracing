class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gamestate = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  async start(){
    if(gamestate === 0){
      player = new Player();
      var playerCountRef = await database.ref('playercount').once("value")
      if(playerCountRef.exists()){
        playercount = playerCountRef.val()
        player.getCount();
      }
      form = new Form()
      form.display();
      
    }
    car1 = createSprite(100,200)
    car1.addImage("car1",car1Img)
    car2 = createSprite(300,200)
    car2.addImage("car2",car2Img)
    car3 = createSprite(500,200)
    car3.addImage("car3",car3Img)
    car4 = createSprite(700,200)
    car4.addImage("car4",car4Img)
    cars=[car1,car2,car3,car4]
    car1.visible =false
    car2.visible = false
    car3.visible = false
    car4.visible = false
  }
  
  
  play(){
    form.hide();
    car1.visible = true
    car2.visible= true
    car3.visible = true
    car4.visible= true
    textSize(30)
    text('Game Start',120,100);
    Player.getPlayerInfo();
    
    if (allPlayers !== undefined) {
      background("#c68767")
      image(TrackImg,0,-windowHeight*4,windowWidth,windowHeight*5.5)
      var index=0;
      var x =175;
      var y=0;
      var display_position = 130;
      for (var plr in allPlayers) {
          
        index = index+1
        x = x+200
        y=windowHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
          if(index===player.index){
            cars[index-1].shapeColor = 'red'
            camera.position.x = windowWidth/2;
            camera.position.y = cars[index-1].y 
          }
    }
    }
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance=player.distance+50;
      
      player.update();
    }
    if(player.distance>3860){
      gamestate=2
    }
  }
  end(){
    console.log("game ended")
  }
}
