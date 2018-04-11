class BootScene extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'BootScene'
        })
    }

    preload () {
        this.load.image('debug-grid', 'assets/images/debug-grid-1920x1920.png')
        this.load.atlas('knight', 'assets/knight.png', 'assets/knight.json')
        // this.load.atlas('knight', 'assets/knight_2.png', 'assets/knight_2.json')
    }

    create () {
        this.scene.start('GameScene')
    }
}

export default BootScene
