export default class Knight extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key)
        config.scene.physics.world.enable(this)
        config.scene.add.existing(this)
        this.acceleration = 600
        this.body.maxVelocity.x = 100
        this.body.maxVelocity.y = 100
        this.body.collideWorldBounds = true
        this.anim = 'resting'
        this.anims.play(this.anim)
        console.log(this);
        // this.anchor.setTo(0.5, 0.5)
    }

    update (keys, time, delta) {
        this.move(keys)
    }

    // Move knight function
    move (keys) {
        this.moveX(0)
        this.moveY(0)

        this.anim = 'resting'

        let input = {
            left: keys.left.isDown,
            right: keys.right.isDown,
            down: keys.down.isDown,
            top: keys.up.isDown
        }

        if (input.left) {
            this.moveX(-this.acceleration)
            this.flipX = true
            // this.anim = 'run-left'
            this.anim = 'walking'
        } else if (input.right) {
            this.moveX(this.acceleration)
            this.flipX = false
            // this.anim = 'run-right'
            this.anim = 'walking'
        }

        if (input.top) {
            this.moveY(-this.acceleration)
            // this.anim = 'run-up'
            this.anim = 'walking'
        } else if (input.down) {
            // this.anim = 'run-down'
            this.anim = 'walking'
            this.moveY(this.acceleration)
        }

        if (this.anims.currentAnim.key !== this.anim) {
            this.anims.play(this.anim)
        }
    }

    // Move knight in the X axis
    moveX (vel) {
        this.body.velocity.x = vel
    }

    // Move knight in the Y axis
    moveY (vel) {
        this.body.velocity.y = vel
    }
}