import Knight from './sprites/Knight'

class GameScene extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'GameScene'
        })
    }

    preload () {

    }

    create () {
        this.knight = new Knight({
            scene: this,
            key: 'knight',
            x: 0,
            y: this.sys.game.config.height / 2
        })

        this.cursors = this.input.keyboard.createCursorKeys()

        // this.keys will contain all we need to control Mario.
        // Any key could just replace the default (like this.key.jump)
        this.keys = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
        }

        this.cameras.main.setBounds(0, 0, 400, 400)
        this.cameras.main.startFollow(this.knight)
    }

    update (time, delta) {
        this.knight.update(this.keys, time, delta)
    }
}

export default GameScene