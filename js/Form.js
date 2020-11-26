class Form {
  constructor() {
    this.input = createInput('Name');
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

  hide() {
        this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(windowWidth/2, 0);
    
    this.input.position(windowWidth/2-40,windowHeight/2-80 );
    this.button.position(windowWidth/2+30,windowHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
      player.name = this.input.value();
      playercount+=1;
      player.index = playercount;
      player.update();
      player.updateCount(playercount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position(windowWidth/2-70,windowHeight/4);
    });
  }
}
