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


    this.load.image('menu', 'assets/Menu.png');
}
//Fin preload
//_________________________________________________________________________________________________________________________

create()
{   
    this.add.image(448,224,'menu');

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