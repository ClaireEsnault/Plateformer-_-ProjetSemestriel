class Menu extends Phaser.Scene{
    constructor()
    {
        super("Menu");
    }

preload()
{
    this.load.image('menu', 'assets/Menu.png');
    this.load.image('demarrer', 'assets/demarrer.png');
    this.load.image('Option', 'assets/option.png');
    this.load.image('Quitter', 'assets/quitter.png');

}
//Fin preload
//_________________________________________________________________________________________________________________________

create()
{   
    this.add.image(448,224,'menu');

    let demarrerButton = this.add.image(this.game.renderer.width / 2.01 , this.game.renderer.height / 1.175 , 'demarrer').setDepth(1);

        demarrerButton.setInteractive();

        demarrerButton.on("pointerdown", () => {
            this.scene.start('Niveau3', {x : 960, y : 540});
        })
    
    let quitterButton = this.add.image(this.game.renderer.width / 5.775 , this.game.renderer.height / 1.89 , 'Quitter').setDepth(1);

        quitterButton.setInteractive();

        quitterButton.on("pointerdown", () => {
            this.scene.remove();
        })
    
    let optionButton = this.add.image(this.game.renderer.width / 1.215 , this.game.renderer.height / 1.95 , 'Option').setDepth(1);

        optionButton.setInteractive();

        optionButton.on("pointerdown", () => {
            this.scene.start('Options');
        })
}
//Fin create
//_________________________________________________________________________________________________________________________

update()
{


}
//Fin update
//________________________________________________________________________________________________________________________

//FIN SCENE
}