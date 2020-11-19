class Enemy extends Phaser.GameObjects.Sprite {

	/**
	 * Enemy
	 *
	 * @param {Phaser.Scene} scene
	 * @param x
	 * @param y
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y, texture, frame) {
		var image = null;
		var moveSpeed = 40 + (5 - kvsk.b) * 6.25;
		var health = 1;
		var damagedImage = null;
		var time = 0;
		var depth = 0;
		var timeToEat = 0;
		var boomImage = null;
		
		if (frame == "virus") {
			const viruses = [ { image: "virus_0", boomImage: "boomLightGreen" },
							  { image: "virus_1", boomImage: "boomRed" },
							  { image: "virus_2", boomImage: "boomLightGreen" },
							  { image: "virus_3", boomImage: "boomDarkGreen" } ];
			var virusData = Phaser.Utils.Array.GetRandom(viruses);
			image = virusData.image;
			boomImage = virusData.boomImage;
			time = 1;
			timeToEat = 4000;
		}
		else if (frame == "bat") {
			image = "bat";
			boomImage = "boomBat";
			moveSpeed *= 2;
			time = 5;
			timeToEat = 3250;
			depth = 2;
		} else if (frame == "corona") {
			image = "corona_0";
			moveSpeed *= 0.875;
			boomImage = "boomCorona";
			health = 2;
			damagedImage = "corona_1";
			time = 3;
			timeToEat = 2500;
			depth = 1;
		} else if (frame == "pandemic") {
			image = "pandemic";
			moveSpeed *= 0.75;
			depth = 3;
			boomImage = "pandemic";
		}
		
		
		super(scene, x, y, texture, image);
		scene.physics.world.enable(this);		
		
		this.timeToEat = timeToEat;
		this.depth = depth;
		this.type = frame;
		this.time = time;
		this.health = health;
		this.damagedImage = damagedImage;
		this.moveSpeed = moveSpeed;
		this.boomImage = boomImage;
		this.move();
	}

	stop(){
		this.body.setVelocity(0, 0);
	}

	move(){
		this.body.setVelocity(0, this.moveSpeed);
	}
	
	takeHit(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			return true;
		}
		else {
			this.setFrame(this.damagedImage);
			return false;
		}
	}
	
	/*preUpdate(time, delta) {
		super.preUpdate(time, delta);
		
		if (this.delay > 0) {
	}*/
}

Phaser.GameObjects.GameObjectFactory.register("enemy", function (x, y, texture, frame) {

	var sprite = new Enemy(this.scene, x, y, texture, frame);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});
