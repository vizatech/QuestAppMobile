
// You can write more code here

/* START OF COMPILED CODE */

class Pause extends Phaser.Scene {
	
	constructor() {
	
		super("Pause");
		
	}
	
	_create() {
	
		
	}
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.scene.pause("Gameplay");
		this.input.once("pointerup", () => this.unpauseGame(), this);
		
		var hitButton = document.getElementById("hitButton");
		if (hitButton) {
			hitButton.onclick = () => this.unpauseGame();
		}
	}

	unpauseGame() {
		this.scene.resume("Gameplay");
		this.scene.stop();
		
		var gameplayScene = this.scene.get("Gameplay");
		if (gameplayScene) {
			gameplayScene.setPause(false);
			
			var hitButton = document.getElementById("hitButton");
			if (hitButton) {			
				hitButton.onclick = () => gameplayScene.startHit();
			}
		}
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
