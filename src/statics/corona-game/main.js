var kvsk;

window.addEventListener('load', function() {

	var config = {
		title: 'Kyiv vs Corona',
	    type: Phaser.AUTO,
	    backgroundColor: '#FFFFFF',
	    scale: {
	        mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
	        parent: 'game-container',
	        width: 640, 
	        height: 670
	    },
		physics: {
        	default: 'arcade',
        	arcade: {
            	debug: false
        	}
    	}
	};

	kvsk = new Phaser.Game(config);
	kvsk.scene.add("Boot", Boot, true); 
	kvsk.scale.lockOrientation(true);
	kvsk.a = 0;
	kvsk.b = 0;
});

class Boot extends Phaser.Scene {

	preload() {
		var progressBar = this.add.graphics();            
        var percentText = this.make.text({
            x: 320,
            y: 310,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#eb621c'
            }
        });
        percentText.setOrigin(0.5, 0.5);
             
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xeb621c, 1);
            progressBar.fillRect(160, 325, 320 * value, 20);
        });
         
        this.load.on('complete', function () {
            progressBar.destroy();
            percentText.destroy();
        });
	
		
		this.load.pack("pack", "assets/pack.json");
		
		WebFont.load({ google: { families: [ "Roboto Mono" ]}});
	}

	create() {
		this.bIntroStarted = false;
		
		var background = this.add.image(0.0, 0.0, "textures", "intro");
		background.setOrigin(0.0, 0.0);
		
		this.fPlayButton = this.add.image(0.0, 0.0, "textures", "introButton");
		this.fPlayButton.setOrigin(0.0, 0.0);
		
		this.input.on('pointerup', () => this.startGame());
		this.input.keyboard.on("keyup_SPACE", () => this.startGame());
	}
	
	startGame() {
		if (!this.bIntroStarted) {
			this.fKlichkoSmotret = this.sound.add("klichkoSmotret");
			this.fKlichkoSmotret.play();
			this.events.on(Phaser.Scenes.Events.SHUTDOWN, function () {
				this.fKlichkoSmotret.stop();
			}, this);
			
			var faceMask = this.add.image(72.0, 143.0, "textures", "introFaceMask");
			faceMask.setOrigin(0.0, 0.0);
			
			this.fPlayButton.setVisible(false);
			
			this.bIntroStarted = true;
			
			this.time.addEvent({ delay: 2000, callback: () => this.cameras.main.fadeOut(2000), callbackScope: this });
			
			this.time.addEvent({ delay: 4000, callback: () => this.scene.start("Gameplay"), callbackScope: this });
		}
	}
}

var globalScore = 0;
var globalRemainingPandemics = 0;
var globalPhrasesLose = [];
