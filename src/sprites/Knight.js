export default class Knight extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key)
        config.scene.physics.world.enable(this)
        config.scene.add.existing(this)
        this.acceleration = 400
        this.body.maxVelocity.x = 100
        this.body.maxVelocity.y = 100
    }

    update (keys, time, delta) {
        console.log(this.body)

        let input = {
            left: keys.left && keys.left.isDown,
            right: keys.right && keys.right.isDown,
            down: keys.down && keys.down.isDown,
            top: keys.up && keys.up.isDown,
        }

        if (input.left) {
            this.run(-this.acceleration)
        } else if (input.right) {
            this.run(this.acceleration)
        } else {
            this.body.setVelocityX(0)
            this.run(0)
        }

        if (input.top) {
            this.runY(-this.acceleration)
        } else if (input.down) {
            this.runY(this.acceleration)
        } else {
            this.body.setVelocityY(0)
            this.runY(0)
        }
    }

    run (vel) {
        this.body.setVelocityX(vel)
    }

    runY (vel) {
        this.body.setVelocityY(vel)
    }
}