class BootScene extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'BootScene'
        })
    }

    preload () {
        this.load.spritesheet('knight', 'assets/images/knight.png', {frameWidth: 16, frameHeight: 34})
    }

    create () {
        this.scene.start('GameScene')
    }
}

export default BootScene
