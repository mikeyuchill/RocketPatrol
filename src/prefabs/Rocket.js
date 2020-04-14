// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
   constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);

      
      scene.add.existing(this);// add object to the exitsing scene
      this.isFiring = false; // track firing status
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx

   }

   update() {
      // left/right movement
      if(!this.isFiring) {
         if(keyLEFT.isDown && this.x >= 47)
            this.x -= 2;
         else if(keyRIGHT.isDown && this.x <= 598)
            this.x += 2;

      }

      // fire button (NOT spacebar)
      if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
         this.isFiring = true;
         this.sfxRocket.play(); // play sfx
      }
      // if fire, move up
      if(this.isFiring && this.y >= 108) {
         this.y -= 2;
      }
      // reset on miss
      if(this.y <= 108) {
         this.reset();
      }
   }

   // reset rocket to "ground"
   reset() {
      this.isFiring = false;
      this.y = 431;
   }
}