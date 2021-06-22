class Options extends Phaser.Scene{
    constructor()
    {
        super("Options");
    }

preload()
{
    this.load.image('controles', 'assets/controles.png');
    this.load.image('retour', 'assets/retour.png');
}
//Fin preload
//_________________________________________________________________________________________________________________________

create()
{
    this.add.image(448, 224, 'controles')
    
    let retourButton = this.add.image(this.game.renderer.width / 8.58 , this.game.renderer.height / 1.158 , 'retour').setDepth(1);

        retourButton.setInteractive();

        retourButton.on("pointerdown", () => {
            this.scene.start('Menu', {x : 960, y : 540});
        })
}
//Fin create
//_________________________________________________________________________________________________________________________

update()
{

}
//Fin update
//_________________________________________________________________________________________________________________________

//FIN SCENE
}