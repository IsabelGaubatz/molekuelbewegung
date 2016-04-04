var PhaserGame = function () { // optimal Wasser 

        this.bmd = null;

        this.alien = null;
        this.mode = 0;

        this.points = {
            'x': [ 810,860,1000,1200,1260 ],
            'y': [ 450,500,500,450,385]
        };

        this.pi = 0;
        this.path = [];

    };


    PhaserGame.prototype = {

        init: function () {

          
            this.stage.backgroundColor = '#FAFAFF';
        },

        preload: function () {
            game.load.image('lightsystem', '../../assets/img/lightsimulation.png');
            //  We need this because the assets are on Amazon S3
            //  Remove the next 2 lines if running locally
           

            game.load.image('alien', '../../assets/img/icon-h.svg');
            game.load.image('h1', '../../assets/img/icon-h.svg');
            

            //this.load.bitmapFont('shmupfont', 'assets/shmupfont.png', 'assets/shmupfont.xml');

            //  Note: Graphics are not for use in any commercial project

        },
         
        create: function () {
            this.add.sprite(720,143,'lightsystem');


            this.bmd = this.add.bitmapData(this.game.width, this.game.height);
            this.bmd.addToWorld();
            this.alien = this.add.sprite(0, 0, 'alien');
            this.add.image(900,400,'h1');
            this.add.image(930,390,'h1');
            this.add.image(950,350,'h1');
            this.add.image(970,320,'h1');
            this.add.image(1000,400,'h1');
            this.add.image(870,360,'h1');
            this.add.image(1100,340,'h1');
            this.add.image(1200,400,'h1');
            this.add.image(970,370,'h1');
            this.add.image(920,340,'h1');
            this.add.image(900,320,'h1');
            this.add.image(1100,320,'h1');
            this.add.image(1150,350,'h1');
            this.add.image(1200,330,'h1');
            this.add.image(1050,320,'h1');
            this.add.image(1250,400,'h1');
            this.add.image(1100,400,'h1');
            this.add.image(990,320,'h1');
            this.add.image(1150,390,'h1');
            this.add.image(1250,320,'h1');
            this.add.image(1050,390,'h1');
            this.add.image(1020,350,'h1');

            this.alien.anchor.set(0,5);
            
            var py = this.points.y;


            //this.hint = this.add.bitmapText(8, 444, 'shmupfont', "Catmull Rom", 24);

            this.input.onDown.add(this.changeMode, this);

            this.plot();

        },

        changeMode: function () {

            this.mode++;

            if (this.mode === 3)
            {
                this.mode = 0;
            }

            if (this.mode === 0)
            {
                this.hint.text = "Catmull Rom";
            }
            else if (this.mode === 1)
            {
                this.hint.text = "Catmull Rom";
            }
            else if (this.mode === 2)
            {
                this.hint.text = "Catmull Rom";
            }

            this.plot();

        },

        plot: function () {

            this.bmd.clear();

            this.path = [];

            var x = 7/ game.width;

            for (var i = 0; i <= 1; i += x)
            {
                if (this.mode === 0)
                {
                    var px = this.math.catmullRomInterpolation(this.points.x, i);
                    var py = this.math.catmullRomInterpolation(this.points.y, i);
                }
                else if (this.mode === 1)
                {
                    var px = this.math.catmullRomInterpolation(this.points.x, i);
                    var py = this.math.catmullRomInterpolation(this.points.y, i);
                }
                else if (this.mode === 2)
                {
                    var px = this.math.catmullRomInterpolation(this.points.x, i);
                    var py = this.math.catmullRomInterpolation(this.points.y, i);
                }

                this.path.push( { x: px, y: py });

                //this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
            }

            for (var p = 0; p < this.points.x.length; p++)
            {
               // this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
            }

        },

        update: function () {

            this.alien.x = this.path[this.pi].x;
            this.alien.y = this.path[this.pi].y;

            this.pi++;

            
          
            if(this.pi>=this.path.length){
                this.pi =0;
                this.alien.scale.setTo(0,0);
               
          

            
            }
          

        }

    }
   game.state.add('Game', PhaserGame, true);
