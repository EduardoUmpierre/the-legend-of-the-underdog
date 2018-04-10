import 'phaser';
import BootScene from './BootScene';
import GameScene from './GameScene';

let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 400,
    height: 240,
    scaleMode: 0, // Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        BootScene,
        GameScene
    ]
};

let game = new Phaser.Game(config);