class Menu extends Phaser.Scene{
    constructor()
    {
        super("Menu");
    }

preload()
{
    var bouton1;
    var bouton2;
    var bouton3;


    this.load.image('bouton1', 'assets/bouton_jouer.png');
    this.load.image('bouton2', 'assets/bouton_options.png');
    this.load.image ('bouton3', 'assets/bouton_quitter.png');
    this.load.image('menu', 'assets/fond_menu.png');
}
//Fin preload
//_________________________________________________________________________________________________________________________

create()
{   
    this.add.image(448,224,'menu');
    this.add.image(150,50, 'bouton1');
    this.add.image(150,150, 'bouton2');
    this.add.image(150,250, 'bouton3');

    this.input.once('pointerdown', function (event)
    {
        this.scene.start('Niveau3');
    }, this);
    
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