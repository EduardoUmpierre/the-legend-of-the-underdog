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
        this.add.tileSprite(0, 0, 1920, 1920, 'debug-grid')

        console.log(this)

        this.cameras.main.setBounds(0, 0, 1920, 1920)
        console.log(this)
        console.log(this.cameras)

        this.anims.create({
            key: 'resting',
            frames: this.anims.generateFrameNames('knight', {prefix: 'idle_', end: 2, suffix: '.png'}),
            frameRate: 2,
            repeat: -1
        })

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNames('knight', {prefix: 'walking_', end: 9, suffix: '.png'}),
            frameRate: 10,
            repeat: -1
        })

        // this.anims.create({
        //     key: 'resting',
        //     frames: this.anims.generateFrameNames('knight', {prefix: 'knight iso char_idle_', start: 0, end: 3, suffix: '.png'}),
        //     frameRate: 2,
        //     repeat: -1
        // })
        //
        // this.anims.create({
        //     key: 'run-down',
        //     frames: this.anims.generateFrameNames('knight', {prefix: 'knight iso char_run down_', start: 0, end: 4, suffix: '.png'}),
        //     frameRate: 5,
        //     repeat: -1
        // })
        //
        // this.anims.create({
        //     key: 'run-up',
        //     frames: this.anims.generateFrameNames('knight', {prefix: 'knight iso char_run up_', start: 0, end: 4, suffix: '.png'}),
        //     frameRate: 5,
        //     repeat: -1
        // })
        //
        // this.anims.create({
        //     key: 'run-left',
        //     frames: this.anims.generateFrameNames('knight', {prefix: 'knight iso char_run left_', start: 0, end: 5, suffix: '.png'}),
        //     frameRate: 5,
        //     repeat: -1
        // })
        //
        // this.anims.create({
        //     key: 'run-right',
        //     frames: this.anims.generateFrameNames('knight', {prefix: 'knight iso char_run right_', start: 0, end: 5, suffix: '.png'}),
        //     frameRate: 5,
        //     repeat: -1
        // })

        this.knight = new Knight({
            scene: this,
            key: 'knight',
            x: 0,
            y: 0
        })

        this.cameras.main.startFollow(this.knight)

        this.keys = {
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
        }
    }

    update (time, delta) {
        this.knight.update(this.keys, time, delta)
    }
}

export default GameScene