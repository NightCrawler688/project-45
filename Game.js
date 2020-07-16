class Game {
    constructor() {
     this.playButton = createSprite(width/2,height/2 + 200,30,40);
     this.level = 3;
    }
    start() {
        textSize(40);
        fill("blue");
        text("SUPER WEAPON",width/2,height/2);
        
        if(mousePressedOver(this.playButton)) {
            gameState = 1;
        }
        player.sprite.visible = false;
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
    }
    play() {
      player.sprite.visible= true;
      this.playButton.visible = false;
      player.controls();
      player.collision();
      obstacles.reveal();
      enemy1.show();
      enemy2.show();
      enemy3.show();
      if(frameCount%100 === 0) {
          enemy1.enemyBullet(458,281);
      }
      if(frameCount%200 === 0) {
          enemy2.enemyBullet(414,502);
      }
      if(frameCount%300 === 0) {
          enemy3.enemyBullet(184,377); 
      }
      if(enemy1.bulletGroup.isTouching(player.sprite) || enemy2.bulletGroup.isTouching(player.sprite) || enemy3.bulletGroup.isTouching(player.sprite)) {
          this.level = this.level - 1;
          player.sprite.x = width - 50;
          player.sprite.y = height/2;
      }
      if(this.level === 0) {
          gameState = 2;
      }
      text("Number Of Lives: " + this.level,1117,646);
      
    }
    end() {
        text("Game Over" , width/2,height/2);
        player.sprite.visible = false;
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
       

    }

}