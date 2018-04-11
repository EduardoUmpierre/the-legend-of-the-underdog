import 'phaser'
import BootScene from './BootScene'
import GameScene from './GameScene'

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        BootScene,
        GameScene
    ]
}

let game = new Phaser.Game(config)
console.log(game)