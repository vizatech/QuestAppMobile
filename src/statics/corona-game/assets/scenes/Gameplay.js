
// You can write more code here

/* START OF COMPILED CODE */

class Gameplay extends Phaser.Scene {
	
	constructor() {
	
		super("Gameplay");
		
	}
	
	_create() {
	
		var background = this.add.image(0.0, 0.0, "textures", "background");
		background.setOrigin(0.0, 0.0);
		
		var brick_0 = this.add.image(-7.0, 490.0, "textures", "brick_0");
		brick_0.setOrigin(0.0, 0.0);
		
		var brick_1 = this.add.image(85.0, 490.0, "textures", "brick_1");
		brick_1.setOrigin(0.0, 0.0);
		
		var brick_2 = this.add.image(177.0, 490.0, "textures", "brick_2");
		brick_2.setOrigin(0.0, 0.0);
		
		var brick_3 = this.add.image(269.0, 490.0, "textures", "brick_3");
		brick_3.setOrigin(0.0, 0.0);
		
		var brick_4 = this.add.image(361.0, 490.0, "textures", "brick_4");
		brick_4.setOrigin(0.0, 0.0);
		
		var brick_5 = this.add.image(453.0, 490.0, "textures", "brick_5");
		brick_5.setOrigin(0.0, 0.0);
		
		var brick_6 = this.add.image(545.0, 490.0, "textures", "brick_6");
		brick_6.setOrigin(0.0, 0.0);
		
		var brick_7 = this.add.image(-7.0, 445.0, "textures", "brick_7");
		brick_7.setOrigin(0.0, 0.0);
		
		var brick_8 = this.add.image(85.0, 445.0, "textures", "brick_8");
		brick_8.setOrigin(0.0, 0.0);
		
		var brick_9 = this.add.image(177.0, 445.0, "textures", "brick_9");
		brick_9.setOrigin(0.0, 0.0);
		
		var brick_10 = this.add.image(269.0, 445.0, "textures", "brick_10");
		brick_10.setOrigin(0.0, 0.0);
		
		var brick_11 = this.add.image(361.0, 445.0, "textures", "brick_11");
		brick_11.setOrigin(0.0, 0.0);
		
		var brick_12 = this.add.image(453.0, 445.0, "textures", "brick_12");
		brick_12.setOrigin(0.0, 0.0);
		
		var brick_13 = this.add.image(545.0, 445.0, "textures", "brick_13");
		brick_13.setOrigin(0.0, 0.0);
		
		var glove = this.add.image(324.5, 563.0, "textures", "glove");
		glove.setOrigin(0.5, 1.0);
		
		var gloveSpring = this.add.tileSprite(320.0, 551.0, 20.0, 32.0, "textures", "gloveSpring");
		gloveSpring.setOrigin(0.5, 1.0);
		
		var canon = this.add.image(320.0, 586.0, "textures", "canon");
		canon.setOrigin(0.5, 1.0);
		
		var canonSocket = this.add.image(357.0, 670.0, "textures", "canonSocket");
		canonSocket.setOrigin(0.5, 1.0);
		
		var person = this.add.image(179.00975, 683.61304, "textures", "person");
		person.setOrigin(0.5, 1.0);
		
		var topUI = this.add.image(320.0, 0.0, "textures", "topUI");
		topUI.setOrigin(0.5, 0.0);
		
		var soundButton = this.add.image(608.0, 30.0, "textures", "soundButton");
		soundButton.setScale(0.88, 0.93);
		
		var pauseButton = this.add.image(27.0, 30.0, "textures", "pauseButton");
		pauseButton.setScale(0.95, 0.95);
		
		var foints = this.add.image(389.47546, 29.840992, "textures", "foints");
		
		var faceNormal = this.add.image(69.0, 470.0, "textures", "faceNormal");
		
		var pandemicScore = this.add.image(111.17284, 23.765417, "textures", "pandemicScore");
		pandemicScore.setTint(0xF3F3F3, 0xF3F3F3, 0xF3F3F3, 0xF3F3F3);
		
		var pandemicScore_1 = this.add.image(141.17287, 23.765417, "textures", "pandemicScore");
		pandemicScore_1.setTint(0xF3F3F3, 0xF3F3F3, 0xF3F3F3, 0xF3F3F3);
		
		var pandemicScore_2 = this.add.image(171.17284, 23.765417, "textures", "pandemicScore");
		pandemicScore_2.setTint(0xF3F3F3, 0xF3F3F3, 0xF3F3F3, 0xF3F3F3);
		
		var pandemicScore_3 = this.add.image(201.17284, 23.765417, "textures", "pandemicScore");
		pandemicScore_3.setTint(0xF3F3F3, 0xF3F3F3, 0xF3F3F3, 0xF3F3F3);
		
		var pandemicScore_4 = this.add.image(231.17284, 23.765417, "textures", "pandemicScore");
		pandemicScore_4.setTint(0xF3F3F3, 0xF3F3F3, 0xF3F3F3, 0xF3F3F3);
		
		this.fBricks = this.add.group([ brick_0, brick_13, brick_12, brick_11, brick_10, brick_9, brick_8, brick_7, brick_6, brick_5, brick_4, brick_3, brick_2, brick_1 ]);
		this.fPandemicScores = this.add.group([ pandemicScore_4, pandemicScore_3, pandemicScore_2, pandemicScore_1, pandemicScore ]);
		
		this.fGlove = glove;
		this.fGloveSpring = gloveSpring;
		this.fCanon = canon;
		this.fCanonSocket = canonSocket;
		this.fPerson = person;
		this.fTopUI = topUI;
		this.fSoundButton = soundButton;
		this.fPauseButton = pauseButton;
		this.fFoints = foints;
		this.fFaceNormal = faceNormal;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* START-USER-CODE */
	
	create() {
		this._create();
		
		this.fGameOver = false;
		this.cameras.main.fadeIn(250);
		
		this.createAudio();
		
		this.fBonusSpawnTimeMin = 10000;
		this.fBonusSpawnTimeMax = 15000;
		this.fEnemySpawnTimeMin = 2500;
		this.fEnemySpawnTimeMax = 3000;
		this.fSpawnPandemicTime = 15000;
		this.fSpawnPandemicTimeInc = 5000;
		this.fSpawnPandemicTimer = this.fSpawnPandemicTime;
		this.fCanonAngularVelocity = 0.13;
		this.fCanonAngularVelocityInc = 0.01125;
		
		this.createUI();
		
		this.createCanonContainer();

		this.gBonuses = this.add.group();
		this.physics.world.enable(this.gBonuses);

		this.gEnemies = this.add.group({ classType: Enemy });
		
		this.physics.world.enable(this.fBricks);
		Phaser.Actions.Call(this.fBricks.getChildren(), function(brick) {
    		brick.body.width = 30;
			brick.body.height = 30;
			brick.body.setOffset(30, 30);
			brick.depth = 30;
  		}, this);

		
		
		this.physics.add.overlap(this.gEnemies, this.fBricks, this.enemyBrickOverlap, null, this);
		
		this.fHitZone = this.add.zone(this.fCanonContainer.x, this.fCanonContainer.y).setSize(10, 10);
		this.physics.world.enable(this.fHitZone);
		this.physics.add.overlap(this.fHitZone, this.gEnemies, this.hitZoneEnemyOverlap, null, this);
		this.physics.add.overlap(this.fHitZone, this.gBonuses, this.hitZoneBonusOverlap, null, this);
		this.physics.add.overlap(this.gBonuses, this.gEnemies, this.bonusEnemyOverlap, null, this);

		this.fGameOverZone = this.add.zone(320, 680).setSize(640, 20);
		this.physics.world.enable(this.fGameOverZone);
		this.physics.add.overlap(this.fGameOverZone, this.gEnemies, this.gameOverZoneOverlap, null, this);

		this.fCreateEnemyPrevX = -1;
		this.createEnemy();
		this.time.addEvent({ delay: Phaser.Math.RND.integerInRange(this.fBonusSpawnTimeMin, this.fBonusSpawnTimeMax), callback: this.createBonus, callbackScope: this });
		
		this.bHitActive = false;
		this.bHitReturn = false;
		
		this.fPerson.depth = 150;
		this.fFaceNormal.depth = 151;
	}

	createUI() {
		kvsk.a = 0;
		kvsk.b = this.fPandemicScores.getLength();
		
		var _this = this;
		
		var hitButton = document.getElementById("hitButton");
		if (!hitButton && window.screen.height > window.screen.width)
		{
			hitButton = document.createElement("img");
			hitButton.id = "hitButton";
			hitButton.src = "assets/images/hitButton.svg";
			hitButton.style.cssText = "height: calc(100% - " + window.screen.width + "px); display: block; margin-left: auto; margin-right: auto; transform: translate(0%, -2vh);";
			
			document.getElementById("game-container").appendChild(hitButton);
		}
		
		if (hitButton) {
			hitButton.onclick = function() {
				_this.startHit();
			}
		}

		WebFont.load({
	        google: {
	            families: [ "Roboto Mono" ]
	        },
	        active: function ()
	        {
	        	_this.fScoreText = _this.add.text(320, 25, "0", { fontFamily: "Roboto Mono", fontSize: 45, color: "#eb5c18", fontStyle: "bold"}).setOrigin(0.5, 0.5);
				_this.fScoreText.depth = 1501;
				_this.fFoints.depth = 1501;
				_this.fFoints.y = _this.fScoreText.y - 1;
				
				_this.fFoints.x = _this.fScoreText.getBounds().right + 22;
				_this.fFoints.setScale(0.7, 0.7);
			}
	    });

		kvsk.z = 0;

		this.fHitButtonZone = this.add.zone(320, 360).setSize(640, 630)
		.setInteractive().on('pointerup', () => this.startHit());

		this.input.keyboard.on("keyup_SPACE", () => this.startHit());
		
		this.fPauseButton.setInteractive().on('pointerup', () => this.setPause(true));
		this.fSoundButton.setInteractive().on('pointerup', () => this.toggleSound());
		
		this.fTopUI.depth = 1500;
		this.fPauseButton.depth = 1501;
		this.fSoundButton.depth = 1501;
		
		Phaser.Actions.Call(this.fPandemicScores.getChildren(), function(pandemicScore) {
			pandemicScore.depth = 1501;
  		}, this);


		this.fPauseBackground = this.add.image(0.0, 0.0, "textures", "pause");
		this.fPauseBackground.setOrigin(0.0, 0.0);
			
		this.fPauseBackground.depth = 5000;
		
		this.fPauseBackground.setVisible(false);
		
		netHandler.tg = 0;
	}
	
	createAudio() {
		this.fHitPunchSounds = [ "hitPunch0", "hitPunch1", "hitPunch2" ];
		this.fHitStartSounds = [ "hitStart0", "hitStart1", "hitStart2", "hitStart3" ];
		this.fHitBonusSounds = [ "hitBonus0", "hitBonus1", "hitBonus2" ];
		this.fEnemyDeathSounds = [ "enemyDeath0", "enemyDeath2", "enemyDeath3", "enemyDeath4", "enemyDeath5" ];

		this.fMusic = this.sound.add("theme");
		this.fMusic.loop = true;
		this.fMusic.volume = 0.5;
		this.fMusic.play();
	}
	
	playRandomSound(soundArray, volume) {
		const soundName = Phaser.Utils.Array.GetRandom(soundArray);
		var sound = this.sound.add(soundName);
		if (volume) {
			sound.volume = volume;
		}
		sound.play();

	}
	
	tz(tk) {
		kvsk.a += tk;
		this.fScoreText.text = kvsk.a;
		kvsk.z += tk;
		this.fFoints.x = this.fScoreText.getBounds().right + 22;
	}
	
	setPause(pause) {
		if (this.fGameOver) { 
			return; 
		}
		
		this.fPauseBackground.setVisible(pause);
		
		if (pause) {
			this.scene.launch('Pause');
			this.sound.pauseAll();
		}
		else {
			this.sound.resumeAll();
		}
		
	}
	
	toggleSound() {
		this.sound.mute = !this.sound.mute;
		this.fSoundButton.setFrame(this.sound.mute ? "soundButton" : "nosoundButton");
	}

	createCanonContainer() {
		this.fCanonSocket.depth = 61;

		this.fCanonContainer = this.add.container(this.fCanon.x, this.fCanon.y);
		this.fCanonContainer.add([this.fGloveSpring, this.fGlove, this.fCanon]);
		this.fGloveSpring.setPosition(this.fGloveSpring.x - this.fCanonContainer.x, this.fGloveSpring.y - this.fCanonContainer.y)
		this.fGlove.setPosition(this.fGlove.x - this.fCanonContainer.x, this.fGlove.y - this.fCanonContainer.y);
		this.fCanon.setPosition(0, 0);

		this.fCanonContainer.rotationSign = Phaser.Math.RND.sign();
		this.fCanonContainer.maxRotationAngle = 77.5;
		this.fGlove.startPosY = this.fGlove.y;
		
		this.fCanonContainer.depth = 60;
		
		this.fGlove.bonusSpeedTime = -1;
	}

	createEnemy() {
		if (this.fGameOver) { 
			return; 
		}
		
		var enemyType;
				
		if (this.fSpawnPandemicTimer < 0)
		{
			enemyType = "pandemic";
			this.fSpawnPandemicTime += this.fSpawnPandemicTimeInc;
			this.fSpawnPandemicTimer = this.fSpawnPandemicTime;
		}
		else {
			var frac = Phaser.Math.RND.frac();
			if (frac > 0.9 && kvsk.b <= 3) {
				enemyType = "bat";
			}
			else if (frac > 0.65 && kvsk.b <= 4) {
				enemyType = "corona";
			}
			else {
				enemyType = "virus";	
			}
		}

		var x;
		do {
			x = Phaser.Math.RND.integerInRange(0, 6);
		} while (x == this.fCreateEnemyPrevX)

		this.fCreateEnemyPrevX = x;

		var enemy = this.gEnemies.create(46 + 92 * x, -100, "textures", enemyType);

		var delay = (enemyType == "pandemic") ? 0 : Phaser.Math.RND.integerInRange(this.fEnemySpawnTimeMin, this.fEnemySpawnTimeMax);
		this.time.addEvent({ delay: delay, callback: this.createEnemy, callbackScope: this });
		
		if (enemyType == "pandemic") {
			enemy.fAliveSound = this.sound.add("pandemicSpawn"); enemy.fAliveSound.volume = 0.2; enemy.fAliveSound.loop = true; enemy.fAliveSound.play();
		}
	}
	
	createBonus() {
		if (this.fGameOver) { 
			return; 
		}
		
		const bonusTypes = ["antiseptic", "dumbbell", "soap", "ghostGlove"];
		const bonusType = Phaser.Utils.Array.GetRandom(bonusTypes);

		const direction = Phaser.Math.RND.sign();
		const fromX = direction > 0 ? -100 : 740;
		const toX = direction > 0 ? 740 : -100;
		const y = Phaser.Math.RND.integerInRange(300, 340);
		
		var bonus = this.gBonuses.create(fromX, y, "textures", bonusType);
		
		this.physics.world.enable(bonus);
		bonus.type = bonusType;
		if (bonusType == "ghostGlove") {
			bonus.flipX = direction < 0;
			bonus.body.width /= 1.5;
			bonus.body.height /= 1.5;
			bonus.body.setOffset(25, 15);
		}

		bonus.depth = 10;

		this.fBonusTween = this.tweens.add({
				targets: bonus,
				ease: "Linear",
				duration: 4000,
				x: toX,
				onComplete: () => bonus.destroy()
			});

		this.time.addEvent({ delay: Phaser.Math.RND.integerInRange(this.fBonusSpawnTimeMin, this.fBonusSpawnTimeMax), callback: this.createBonus, callbackScope: this });
	}

	update(time, deltaTime) {
		
		if (this.cheat(globalScore)) {
			this.game.destroy();
		}
		
		if (this.fGameOver) { 
			return; 
		}
		
		if (!this.bHitActive) {
			this.rotateCanonContainer(deltaTime);
		}

		if (this.fGlove.bonusSpeedTime > 0) {
			this.fGlove.bonusSpeedTime -= deltaTime;
		}

		if (kvsk.a != kvsk.z) {
			this.game.destroy();
		}

		this.updateHitZonePosition();
		
		const bonusSpawnTimeDecrease = 0.02;
		const enemySpawnTimeDecrease = 0.02;
		
		this.fBonusSpawnTimeMin = Math.max(2500, this.fBonusSpawnTimeMin - bonusSpawnTimeDecrease*deltaTime);
		this.fBonusSpawnTimeMax = Math.max(3500, this.fBonusSpawnTimeMax - bonusSpawnTimeDecrease*deltaTime);
		this.fEnemySpawnTimeMin = Math.max(600, this.fEnemySpawnTimeMin - enemySpawnTimeDecrease*deltaTime);
		this.fEnemySpawnTimeMax = Math.max(900, this.fEnemySpawnTimeMax - enemySpawnTimeDecrease*deltaTime);
		this.fSpawnPandemicTimer -= deltaTime;
	}

	rotateCanonContainer(deltaTime) {		
		this.fCanonContainer.setAngle(this.fCanonContainer.angle + this.fCanonContainer.rotationSign * this.fCanonAngularVelocity * deltaTime);
		if (Math.abs(this.fCanonContainer.angle) > this.fCanonContainer.maxRotationAngle) {
			this.fCanonContainer.angle = this.fCanonContainer.rotationSign * this.fCanonContainer.maxRotationAngle;
			this.fCanonContainer.rotationSign = -this.fCanonContainer.rotationSign;
		}	
	}

	updateHitZonePosition() {
		var hitPos = new Phaser.Geom.Point(this.fGlove.x, this.fGlove.y - 100.0);
		hitPos = Phaser.Math.Rotate(hitPos, Phaser.Math.DegToRad(this.fCanonContainer.angle));
		hitPos.setTo(hitPos.x + this.fCanonContainer.x, hitPos.y + this.fCanonContainer.y);

		this.fHitZone.setPosition(hitPos.x, hitPos.y);
	}

	damageEnemy(enemy, damage) {
		this.playRandomSound(this.fHitPunchSounds);
		if (enemy.takeHit(damage)) {			
			if (enemy.type == "pandemic") {
				var allEnemies = this.gEnemies.getChildren();
				for(var i = allEnemies.length - 1; i >= 0; i--) {
					if (allEnemies[i] != enemy) {
						this.onEnemyDeath(allEnemies[i]);
						allEnemies[i].destroy();
					}

				}
			}
			
				this.onEnemyDeath(enemy);
				enemy.destroy();
		}
	}

	hitZoneEnemyOverlap(hitZone, enemy) {
		if (this.bHitActive && !this.bHitReturn) {
			this.damageEnemy(enemy, 1);

			this.returnHit();

			this.fFaceNormal.setFrame("faceWon");
		}
	}
	
	hitZoneBonusOverlap(hitZone, bonus) {
		if (this.bHitActive && !this.bHitReturn) {
			
			bonus.bUsed = true;
			
			this.playRandomSound(this.fHitBonusSounds);
			
			if (bonus.type == "soap") {
				Phaser.Actions.Call(this.gEnemies.getChildren(), enemy => {
					
					if (enemy.fDestroyTimer) {
						enemy.fDestroyTimer.remove(false);
					}
					
					enemy.stop();
					this.tweens.add({
						targets: enemy,
						ease: "Linear",
						duration: 300,
						y: enemy.y - Phaser.Math.RND.integerInRange(200, 300),
						onComplete: () => { enemy.fDestroyTimer = null; enemy.move(); }
					});
				}, this);
			} 
			else if (bonus.type == "dumbbell") {
				Phaser.Actions.Call(this.fBricks.getChildren(), brick => {
					if (!brick.visible) {
						brick.setVisible(true);
						
						Phaser.Actions.Call(this.gEnemies.getChildren(), enemy => {
							if (this.physics.world.intersects(brick.body, enemy.body)) {
								this.damageEnemy(enemy, 100);
							}
						}, this);
					}
					
				}, this);
			} 
			else if (bonus.type == "antiseptic") {
				var allEnemies = this.gEnemies.getChildren();
				for(var i = allEnemies.length - 1; i >= 0; i--) {
					this.onEnemyDeath(allEnemies[i]);
					allEnemies[i].destroy();
				}
			}
			else if (bonus.type == "ghostGlove") {
				this.fGlove.bonusSpeedTime = 10000;
				this.fGlove.bonusSpeedModifier = 1.75;
			}
			
			this.tweens.add({
				targets: bonus,
				ease: "Power3",
				duration: 200,
				scale: 0.7,
				alpha: 0,
				onComplete: () => bonus.destroy()
			});
			
			
			this.returnHit();

			this.fFaceNormal.setFrame("faceWon");
		}
	}
	
	bonusEnemyOverlap(bonus, enemy) {
		if (bonus.type == "ghostGlove" && !bonus.bUsed) {
			this.damageEnemy(enemy, 100);
		}
	}
	
	onEnemyDeath(enemy) {
		
		if (enemy.fDestroyTimer) {
			enemy.fDestroyTimer.remove(false);
		}
		
		if (enemy.fEatSound) {
			enemy.fEatSound.destroy();
			enemy.fEatSound = null;
		}
		
		if (enemy.fAliveSound) {
			enemy.fAliveSound.destroy();
			enemy.fAliveSound = null;
		}
		
		if (enemy.boomImage) {
			var boom = this.add.image(enemy.x, enemy.y, "textures", enemy.boomImage);
			//boom.setScale(0.75, 0.75);
			this.tweens.add({
				targets: boom,
				ease: "Power3",
				duration: 700,
				scale: 0.7,
				alpha: 0,
				onComplete: () => boom.destroy()
			});
		}
		
		this.tz(enemy.time);
		if (enemy.fEatSound) {
			enemy.fEatSound.destroy();
			enemy.fEatSound = null;
		}
		
		netHandler.tg = kvsk.a * kvsk.a;
		if (enemy.type == "pandemic") {
			
			this.fCanonAngularVelocity += this.fCanonAngularVelocityInc;

			var pandemicDeathSound = this.sound.add("pandemicDeath");
			pandemicDeathSound.play();
			
			this.fPandemicScores.remove(this.fPandemicScores.getChildren()[0], true, true);
			kvsk.b = this.fPandemicScores.getLength();
			if (kvsk.b == 0)
			{
				this.tz(kvsk.a);
				
				if (enemy.fEatSound) {
					enemy.fEatSound.destroy();
					enemy.fEatSound = null;
				}
				
				netHandler.tg = kvsk.a * kvsk.a;
				
				this.gameOver();
			}
		}
		else {
			this.playRandomSound(this.fEnemyDeathSounds, 0.5);
		}
	}
	
	gameOverZoneOverlap(gameOverZone, enemy) {
		this.gameOver();
	}
	
	enemyBrickOverlap(enemy, brick) {
		if (enemy.fDestroyTimer || !brick.visible) {
			return;
		}
		
		enemy.stop();
		enemy.fDestroyTimer = this.time.delayedCall(enemy.timeToEat, this.destroyBrick, [enemy, brick], this);
		
		if (enemy.timeToEat > 0) {
			if (!enemy.fEatSound) {
				enemy.fEatSound = this.sound.add("enemyEating");
			}
			enemy.fEatSound.play();
		}
	}
	
	destroyBrick(enemy, brick) {
		if (this.fGameOver) { 
			return; 
		}
		
		if (this.gEnemies.contains(enemy)) {
			enemy.fDestroyTimer = null;
			
			if (enemy.fEatSound) {
				enemy.fEatSound.stop();	
			}
			
			enemy.move();
			
			if (enemy.type == "pandemic") {
				Phaser.Actions.Call(this.fBricks.getChildren(), x => x.setVisible(false), this);
			} else {
				brick.setVisible(false);
			}
		}
	}

	startHit() {
		if (this.fGameOver) { 
			return; 
		}
		
		if (kvsk.a != kvsk.z) {
			this.game.destroy();
		}
		
		if (!this.bHitActive) {
			this.bHitActive = true;
			this.bHitReturn = false;
			
			this.playRandomSound(this.fHitStartSounds);
			var _this = this;

      		var angle = Math.abs(this.fCanonContainer.angle);
			this.fHitRange = (4.0*Math.pow(angle, 3.0) / 4125.0) - (311.0*Math.pow(angle, 2.0) / 1650.0) + (1853.0*angle/330.0) + 500;
			var duration = this.fHitRange;
			if (this.fGlove.bonusSpeedTime > 0) {
				duration /= this.fGlove.bonusSpeedModifier;
			}

			this.fPerson.setFrame("personPress");
			this.fGlove.fHitTween = this.tweens.add({
				targets: this.fGlove,
        ease: "Linear",
        duration: duration,
				y: -this.fHitRange,
				onComplete: function() { _this.returnHit(); _this.fFaceNormal.setFrame("faceLose"); }
			});

			this.fGloveSpring.fHitTween = this.tweens.add({
				targets: this.fGloveSpring,
        ease: "Linear",
        duration: duration,
				height: this.fHitRange - 24.0
			});
		}
	}

	returnHit() {
		if (this.bHitActive && !this.bHitReturn) {
			this.bHitReturn = true;
			var _this = this;
			var returnDuration = Math.abs(this.fGlove.y);
			if (this.fGlove.bonusSpeedTime > 0) {
				returnDuration /= this.fGlove.bonusSpeedModifier;
			}

			this.fGlove.fHitTween.stop();
			this.fGloveSpring.fHitTween.stop();

			this.fGlove.fHitForwardTween = this.tweens.add({
				targets: this.fGlove,
				ease: "Linear",
				duration: returnDuration,
				y: this.fGlove.startPosY,
				onComplete: function() { _this.bHitReturn = false; _this.bHitActive = false; _this.fPerson.setFrame("person"); _this.fFaceNormal.setFrame("faceNormal"); }
			});

			this.fGloveSpring.fHitForwardTween = this.tweens.add({
				targets: this.fGloveSpring,
				ease: "Linear",
				duration: returnDuration,
				height: 32
			});
		}
	}

	cheat()
	{
		return false;
	}


	gameOver() {
		if (this.fGameOver) { 
			return; 
		}
		this.fGameOver = true;
		
		if (kvsk.a != kvsk.z) {
			this.game.destroy();
		}
		
		var won = (kvsk.b == 0);
		
		this.sound.stopAll();
		
		var gameOverSound = this.sound.add(won ? "gameOverWon" : "gameOverLose");
		if (!won) {
			gameOverSound.volume = 0.5;
		}
		gameOverSound.play();

		var texture = won ? "overlayWon" : "overlayLose";
		var overlay = this.add.image(0.0, 0.0, "textures", texture);
		overlay.setOrigin(0.0, 0.0);
		overlay.depth = won ? 1200 : 2200;
		
		overlay.alpha = 0;
		
		this.tweens.add({
        	targets: overlay,
        	alpha: won ? 0.6 : 1.0,
        	ease: 'Power1',
        	duration: won ? 1500 : 600
    	});
		
		this.fFaceNormal.setFrame(won ? "faceWon" : "faceLose");
		
		Phaser.Actions.Call(this.gEnemies.getChildren(), enemy => {
			 enemy.stop()
			if (enemy.fEatSound) {
				enemy.fEatSound.destroy();
				enemy.fEatSound = null;
			}
		}, this);
		kvsk.v = kvsk.a;
		
		if (this.fBonusTween) {
			this.fBonusTween.stop();
		}
		
		this.time.addEvent({ delay: won ? 4000 : 1200, callback: () => this.scene.start("Outro"), callbackScope: this });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
