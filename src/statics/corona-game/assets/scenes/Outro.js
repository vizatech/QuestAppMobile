
// You can write more code here

/* START OF COMPILED CODE */

class Outro extends Phaser.Scene {
	
	constructor() {
	
		super("Outro");
		
	}
	
	_create() {
	
		var restartButton = this.add.image(496.0, 599.0, "textures", "restartButton");
		
		var shareButton = this.add.image(588.0, 527.0, "textures", "shareButton");
		
		this.fRestartButton = restartButton;
		this.fShareButton = shareButton;
		
	}
	
	
	
	/* START-USER-CODE */

	// Write your code here.
	create() {		
		this._create();
		this.bCanUpdateScore = false;
		
		var _this = this;
		
		var won = (kvsk.b == 0);
		
		this.fKlichkoShastat = this.sound.add("klichkoShastat");
		this.fKlichkoShastat.play();
		this.events.on(Phaser.Scenes.Events.SHUTDOWN, function () {
			this.fKlichkoShastat.stop();
		}, this);
		
		var outro = this.add.image(0.0, 0.0, "textures", won ? "outroWon" : "outroLose");
		outro.setOrigin(0.0, 0.0);
				
		this.add.image(325.0, 103.0, "textures", this.getPhrase(won));
			
		this.fRestartButton.depth = 1000;
		this.fRestartButton.setInteractive().on('pointerup', () => this.startGame());

		this.fShareButton.depth = 1001;
		this.fShareButton.setInteractive().on('pointerup', () => window.open("https://t.me/freegengamebot?game=kyivvscorona", "TelegramFreeGenGame"));
		
		this.input.keyboard.on("keyup_SPACE", () => this.startGame());
		
		var hitButton = document.getElementById("hitButton");
		if (hitButton) {
			hitButton.parentElement.removeChild(hitButton);
		}
		
		WebFont.load({
	        google: {
	            families: [ "Roboto Mono" ]
	        },
	        active: function ()
	        {
	        	_this.fScoreText = _this.add.text(380, 485, "0", { fontFamily: "Roboto Mono", fontSize: 75, color: "#eb5c18", fontStyle: "bold"}).setOrigin(1, 0.5);
				_this.fScoreText.depth = 1501;
				_this.fScoreTween = _this.tweens.addCounter({ from: 0, to: kvsk.a, duration: 250 + 1.0 * kvsk.a });
				_this.bCanUpdateScore = true;
			}
	    });

		netHandler.time(kvsk.v);
	}
	
	update() {
		if (this.bCanUpdateScore) {
			this.fScoreText.text = Math.floor(this.fScoreTween.getValue());
		}
	}
	
	startGame() {
		this.scene.start("Gameplay");
	}
	
	getPhrase(won) {
		if (won) {
			return "pWon0";
		} 
		else {
			if (globalPhrasesLose.length == 0) {
				globalPhrasesLose = ["pLose0", "pLose1", "pLose2", "pLose3", "pLose4", "pLose5", "pLose6", "pLose7", "pLose8", "pLose9", "pLose10" ];
			}
			
			var randomIdx = Phaser.Math.RND.integerInRange(0, globalPhrasesLose.length - 1);
			var phrase = globalPhrasesLose[randomIdx];
			globalPhrasesLose.splice(randomIdx, 1);

			return phrase;
		}
	}
	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
