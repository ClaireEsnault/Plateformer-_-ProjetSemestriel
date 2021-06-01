class Niveau3 extends Phaser.Scene{
    constructor()
    {
        super("Niveau3");
    }

preload()
{
    this.load.image('fond', 'assets/fond_niveau.png');
    this.load.image('perso', 'assets/perso.png');
    this.load.image('ennemi', 'assets/ennemi.png');
    this.load.image('bordure', 'assets/bordure.png');
}
//Fin preload
//_________________________________________________________________________________________________________________________

create()
{
    this.add.image(2500, 224, 'fond');

    this.player = this.physics.add.image(150,50, 'perso');
    this.player.direction = 'right';
    this.player.setBounce(0);
    this.player.setCollideWorldBounds(true);

    //this.ennemi = this.physics.add.image(400, 50, 'ennemi');
    //this.ennemi.setCollideWorldBounds(true);
    
    //this.platform = this.physics.add.image(867, 447, 'bordure')
    this.cursors = this.input.keyboard.createCursorKeys();


    this.cameras.main.setBounds(0, 0, 5000, 448);
    this.cameras.main.setSize(896,448);
    this.cameras.main.startFollow (this.player);
}
//Fin create
//_________________________________________________________________________________________________________________________

update()
{
    if (this.cursors.left.isDown)
    {
        this.player.direction = 'left';
        this.player.setVelocityX(-300);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.direction = 'right';
        this.player.setVelocityX(300);
    }
    else if(this.cursors.left.isUp && this.cursors.right.isUp)
    {
        this.player.setVelocityX(0);
    }
    if (this.cursors.up.isDown)
    {
        this.player.direction = 'up';
        this.player.setVelocityY(-300);
    }
  
}
//Fin update
//_________________________________________________________________________________________________________________________

//FIN SCENE
}