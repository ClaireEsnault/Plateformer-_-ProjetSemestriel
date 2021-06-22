class Niveau3 extends Phaser.Scene{
    constructor()
    {
        super("Niveau3");
    }

preload()
{
    //Chargement des assets
    //_____________________
    this.load.image('perso', 'assets/perso.png');
    this.load.image('ennemi', 'assets/ennemi.png');
    this.load.image('bordure', 'assets/bordure.png');
    this.load.tilemapTiledJSON('map', 'ma_map.json');
    this.load.image('tileset', 'assets/tileset_bien_fait.png');
    this.load.image('fond', 'assets/fond.png');
    this.load.image('boss', 'assets/boss.png');
    this.load.image('portail', 'assets/portail.png');
}
//Fin preload
//____________________________________________________________________________________________________________

create()
{
    //Création de la map
    //__________________
    this.map = this.make.tilemap({ key: 'map'});
    this.physics.world.setBounds(0,0, this.map.widthInPixels, this.map.heightInPixels);
    this.tileset = this.map.addTilesetImage('tileset_bien_fait', 'tileset');
    this.fond = this.add.image(896, 400, 'fond');
    this.pics2 = this.map.createStaticLayer('pics2', this.tileset, 0, 0);
    this.pics = this.map.createStaticLayer('pics', this.tileset, 0, 0);
    this.lave2 = this.map.createDynamicLayer('lave2', this.tileset, 0, 0);
    this.lave = this.map.createDynamicLayer('lave', this.tileset, 0, 0)
    this.poutres = this.map.createDynamicLayer('poutres', this.tileset, 0, 0);
    this.murs = this.map.createDynamicLayer('murs', this.tileset, 0, 0);

    //Placement et définition du personnage
    //_____________________________________
    this.joueur = this.physics.add.group();
    this.player = this.joueur.create(50,400, 'perso');
    this.player.direction = 'right';
    this.player.setCollideWorldBounds(true);

    this.miroir = this.physics.add.group();
    this.portail = this.miroir.create(3825, 450, 'portail').body.setAllowGravity(false);
    //Placement et définition du boss
    this.boss = this.physics.add.group();
    new boss(this,500, 700, 'boss').body.setAllowGravity(false);
    //_______________________________
    //this.ennemi = this.physics.add.image(400, 50, 'ennemi');
    //this.ennemi.setCollideWorldBounds(true);
    
    //Mise en place des contrôles clavier
    //___________________________________
    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, this.miroir, this.hitPortail, null, this);

    this.physics.add.collider(this.player, this.poutres);
    this.poutres.setCollisionByProperty({collides:true});
    
    this.physics.add.collider(this.player, this.murs);
    this.murs.setCollisionByProperty({collides:true});
    
    this.physics.add.collider(this.player, this.lave,this.death,null,this);
    this.lave.setCollisionByProperty({mortal:true});

    this.physics.add.collider(this.player, this.pics, this.death, null, this);
    this.pics.setCollisionByProperty({mortal:true});
    
    
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.cameras.main.setSize(config.width, config.height);
    this.cameras.main.startFollow (this.player);
    
    /*this.physics.add.collider(this.boss, this.poutres);
    this.physics.add.collider(this.boss, this.murs);*/
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
    if (this.cursors.up.isDown && saut == 1)
    {
        this.player.direction = 'up';
        this.player.setVelocityY(-300);
        saut--;
    }
    
    if(this.player.body.blocked.down){
        saut = 1;
    }
    
    for(var i = 0; i < this.boss.getChildren().length; i++){
            let bosses = this.boss.getChildren()[0];
            if(bosses.ia(this.player)){
                if(bosses.direction == 'right') {
                    
                this.projectiles.create(bosses.x, bosses.y, 'balle').setVelocityX(300).body.setAllowGravity(false);
                }
                
                else{
                this.projectiles.create(bosses.x, bosses.y, 'balle').setVelocityX(-300).body.setAllowGravity(false);

                }
            }
        }
  
}
//Fin update
//_________________________________________________________________________________________________________________________
    
death(){
    vie = 0;
    this.physics.pause();
    this.player.setTint('0xff0000');
}
    
hitPortail(joueur, miroir){
    this.scene.start('Menu');
}

//FIN SCENE
}