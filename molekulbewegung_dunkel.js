var game = new Phaser.Game(1440, 740, Phaser.AUTO, 'game');

    //1
    var moleCo2 = function () {
        this.bmd = null;
        this.alien = null;
        this.mode = 0;
        this.points = {
            'x': [ 0, 280, 360 ],
            'y': [ 150, 170, 160 ],
        };

        this.pi = 0;
        this.path = [];
    }; 

    moleCo2.prototype = {

        init: function () {
            this.stage.backgroundColor = '#FAFAFF';
        },

        preload: function () {
            game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
            game.load.image('alien', '../../assets/img/icon-co2.png');
            game.load.image('ribiscus', '../../assets/img/ribiscus.png');
        },

        create: function () {
            this.add.sprite(142,152,'calvinNormal');  

            this.bmd = this.add.bitmapData(this.game.width, this.game.height);
            this.bmd.addToWorld();

            this.alien = this.add.sprite(0, 0, 'alien');
            this.alien.anchor.set(0.5);
        this.alien.scale.setTo(0.5, 0.5);

        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        var py = this.points.y;

        this.input.onDown.addOnce(stopAnimation, this);

        this.plot();
    },

       

        plot: function () {
            this.bmd.clear();
            this.path = [];
            
            var x = 10 / game.width; //Geschwindigkeit der Moleküle

            for (var i = 0; i <= 1; i += x) {
                if (this.mode === 0) {
                    var px = this.math.catmullRomInterpolation(this.points.x, i);
                    var py = this.math.catmullRomInterpolation(this.points.y, i);
                }
                else if (this.mode === 1) {
                    var px = this.math.catmullRomInterpolation(this.points.x, i);
                    var py = this.math.catmullRomInterpolation(this.points.y, i);
                }
                else if (this.mode === 2) {
                    var px = this.math.catmullRomInterpolation(this.points.x, i);
                    var py = this.math.catmullRomInterpolation(this.points.y, i);
                }

                this.path.push( { x: px, y: py } );
            }

            for (var p = 0; p < this.points.x.length; p++)
            {
               //Farbe der Punkte, auf der die Moleküle fahren
               //this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
            }
        },

        update: function (game) {

            this.alien.x = this.path[this.pi].x;
            this.alien.y = this.path[this.pi].y;

            this.pi++;

            if (this.pi >= this.path.length) {
                this.pi = 0;
                this.alien.scale.setTo(0, 0);
                game.state.start("mole1");
            }   
        }
    };
 

    //2
    var moleone = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
        'x': [ 155, 180, 260, 360 ],
        'y': [ 380, 270, 190, 160 ],
      };

      this.pi = 0;
      this.path = [];
    }

    moleone.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-seven.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();
      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } 
          else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } 
          else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {
        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("mole7");
        }           
      }
    };



    //3
    var moleSeven = function () {

        this.bmd = null;

        this.moleculeSeven = null;

        this.mode = 0;

        this.points = {
            'x': [ 360, 480, 550 ],
            'y': [ 160, 200, 270 ],
        };

        this.pi = 0;
        this.path = [];
    };

    moleSeven.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-three.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },



        create: function () {
            this.add.sprite(142,152,'calvinNormal');  

            this.bmd = this.add.bitmapData(this.game.width, this.game.height);
            this.bmd.addToWorld();


            this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
            this.moleculeSeven.anchor.set(0.5);
            //this.moleculeSeven.scale.setTo(1, 1);

            this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

            var py = this.points.y;

            
            //this.hint = this.add.bitmapText(8, 444, 'shmupfont', "Catmull Rom", 24);

            this.input.onDown.addOnce(stopAnimation, this);

            this.plot();
        },

        

        plot: function () {

            this.bmd.clear();

            this.path = [];
            

            var x = 10 / game.width; //Geschwindigkeit der Moleküle

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

                this.path.push( { x: px, y: py } );

                //Farbe der Strecke, auf der die Moleküle fahren
                //this.bmd.rect(px, py, 1, 1, 'rgba(0, 0, 0, 1)');
            }

            for (var p = 0; p < this.points.x.length; p++)
            {
               //Farbe der Punkte, auf der die Moleküle fahren
               //this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
            }

        },

        update: function () {
            this.moleculeSeven.x = this.path[this.pi].x;
            this.moleculeSeven.y = this.path[this.pi].y;

            this.pi++;

            if (this.pi >= this.path.length) {
                this.pi = 0;
                this.moleculeSeven.scale.setTo(0, 0);
                game.state.start("moleatp");
            }           
        }
    };
    



    //4 ATP
    var moleculeatp = function () {

        this.bmd = null;

        this.moleculeSeven = null;

        this.mode = 0;

        this.points = {
            'x': [ 650, 600, 550 ],
            'y': [ 180, 200, 270 ],
        };

        this.pi = 0;
        this.path = [];
    };

    moleculeatp.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-atp.png');
        game.load.image('moleculeThreeImg', '../../assets/img/molecule-three.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },



        create: function () {
            this.add.sprite(142,152,'calvinNormal');  

            this.bmd = this.add.bitmapData(this.game.width, this.game.height);
            this.bmd.addToWorld();


            this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
            this.moleculeSeven.anchor.set(0.5);

            this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

            this.moleculeThreeImg = this.add.sprite(550, 270, 'moleculeThreeImg');
            this.moleculeThreeImg.anchor.set(0.5);


            var py = this.points.y;

            
            //this.hint = this.add.bitmapText(8, 444, 'shmupfont', "Catmull Rom", 24);

            this.input.onDown.addOnce(stopAnimation, this);

            this.plot();
        },

        

        plot: function () {

            this.bmd.clear();

            this.path = [];
            

            var x = 10 / game.width; //Geschwindigkeit der Moleküle

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

                this.path.push( { x: px, y: py } );

                //Farbe der Strecke, auf der die Moleküle fahren
                //this.bmd.rect(px, py, 1, 1, 'rgba(0, 0, 0, 1)');
            }

            for (var p = 0; p < this.points.x.length; p++)
            {
               //Farbe der Punkte, auf der die Moleküle fahren
               //this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
            }

        },

        update: function () {
            this.moleculeSeven.x = this.path[this.pi].x;
            this.moleculeSeven.y = this.path[this.pi].y;

            this.pi++;

            if (this.pi >= this.path.length) {
                this.pi = 0;
                this.moleculeSeven.scale.setTo(0, 0);
                game.state.start("moleadp");
            }           
        }
    };



    //5 ADP
    var moleculeadp = function () {

        this.bmd = null;

        this.moleculeSeven = null;

        this.mode = 0;

        this.points = {
            'x': [ 550, 680 ],
            'y': [ 270, 400 ],
        };

        this.pi = 0;
        this.path = [];
    };

    moleculeadp.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-adp.png');
        game.load.image('moleculeFiveImg', '../../assets/img/molecule-five.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },



        create: function () {
            this.add.sprite(142,152,'calvinNormal');  

            this.bmd = this.add.bitmapData(this.game.width, this.game.height);
            this.bmd.addToWorld();


            this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
            this.moleculeSeven.anchor.set(0.5);
            //this.moleculeSeven.scale.setTo(1, 1);

            this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

            this.moleculeFiveImg = this.add.sprite(550, 270, 'moleculeFiveImg');
            this.moleculeFiveImg.anchor.set(0.5);

            var py = this.points.y;

            
            //this.hint = this.add.bitmapText(8, 444, 'shmupfont', "Catmull Rom", 24);

            this.input.onDown.addOnce(stopAnimation, this);

            this.plot();
        },

        

        plot: function () {

            this.bmd.clear();

            this.path = [];
            

            var x = 10 / game.width; //Geschwindigkeit der Moleküle

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

                this.path.push( { x: px, y: py } );

                //Farbe der Strecke, auf der die Moleküle fahren
                //this.bmd.rect(px, py, 1, 1, 'rgba(0, 0, 0, 1)');
            }

            for (var p = 0; p < this.points.x.length; p++)
            {
               //Farbe der Punkte, auf der die Moleküle fahren
               //this.bmd.rect(this.points.x[p]-3, this.points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
            }

        },

        update: function () {
            this.moleculeSeven.x = this.path[this.pi].x;
            this.moleculeSeven.y = this.path[this.pi].y;

            this.pi++;

            if (this.pi >= this.path.length) {
                this.pi = 0;
                this.moleculeSeven.scale.setTo(0, 0);
                game.state.start("mole3");
            }           
        }
    };


    //6
    var molethree = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
        'x': [ 550, 575, 550 ],
        'y': [ 270, 370, 470 ],
      };

      this.pi = 0;
      this.path = [];
    }

    molethree.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-five.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();
      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {
        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("moleNadph");
        }           
      }
    };


    //7 NADPH
    var moleculeNadph = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
        'x': [ 650, 550 ],
        'y': [ 550, 470 ],
      };

      this.pi = 0;
      this.path = [];
    }

    moleculeNadph.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-nadph.png');
        game.load.image('moleculeFiveImg', '../../assets/img/molecule-five.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        this.moleculeFiveImg = this.add.sprite(550, 470, 'moleculeFiveImg');
        this.moleculeFiveImg.anchor.set(0.5);

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();
      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {
        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("moleNadpp");
        }           
      }
    };




   //8 NADPP
    var moleculeNadpp = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
        'x': [ 550, 650 ],
        'y': [ 470, 550 ],
      };

      this.pi = 0;
      this.path = [];
    }

    moleculeNadpp.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-nadpp.png');
        game.load.image('moleculeThreeImg', '../../assets/img/molecule-three.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');
        this.moleculeThreeImg = this.add.sprite(550, 470, 'moleculeThreeImg');
        this.moleculeThreeImg.anchor.set(0.5);

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();
      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {
        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("mole4");
        }           
      }
    };


    //9
    var molefour = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
        'x': [ 550, 480, 395, 350 ],
        'y': [ 470, 550, 585, 670 ],
      };

      this.pi = 0;
      this.path = [];
    }

    molefour.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-three.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();

      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {

        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("mole5");
        }           
      }
    };




    //10
    var molefive = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
       'x': [ 395, 270, 190, 155 ],
       'y': [ 585, 565, 490, 380 ],
      };

      this.pi = 0;
      this.path = [];
    }

    molefive.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-three.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
        game.load.image('glucose', '../../assets/img/icon-glucose.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        this.glucose = this.add.sprite(340, 640, 'glucose');
        this.glucose.scale.setTo(0.5, 0.5);    

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();

      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {

        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("moleatp2");
        }           
      }
    };


    //11 ATP2
    var moleculeatp2 = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
       'x': [ 50, 155 ],
       'y': [ 450, 380 ],
      };

      this.pi = 0;
      this.path = [];
    }

    moleculeatp2.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-atp.png');
        game.load.image('moleculeThreeImg2', '../../assets/img/molecule-three.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
        game.load.image('glucose', '../../assets/img/icon-glucose.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();

        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        this.moleculeThreeImg2 = this.add.sprite( 155, 380, 'moleculeThreeImg2');
        this.moleculeThreeImg2.anchor.set(0.5);

        this.glucose = this.add.sprite(340, 640, 'glucose');
        this.glucose.scale.setTo(0.5, 0.5);    

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();

      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {

        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("moleadp2");
        }           
      }
    };



    //12 ADP2
    var moleculeadp2 = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
       'x': [ 155, 50 ],
       'y': [ 380, 300 ],
      };

      this.pi = 0;
      this.path = [];
    }

    moleculeadp2.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-adp.png');
        game.load.image('moleculeSevenImg', '../../assets/img/molecule-seven.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
        game.load.image('glucose', '../../assets/img/icon-glucose.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');

        this.moleculeSevenImg = this.add.sprite( 155, 380, 'moleculeSevenImg');
        this.moleculeSevenImg.anchor.set(0.5);

        this.glucose = this.add.sprite(340, 640, 'glucose');
        this.glucose.scale.setTo(0.5, 0.5);    

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();

      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {

        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          game.state.start("mole6");
        }           
      }
    };



    //13
    var molesix = function () {

      this.bmd = null;
      this.moleculeSeven = null;
      this.mode = 0;
      this.points = {
        'x': [ 155, 180, 260, 360 ],
        'y': [ 380, 270, 190, 160 ],
      };

      this.pi = 0;
      this.path = [];
    }

    molesix.prototype = {

      init: function () {
        this.stage.backgroundColor = '#FAFAFF';
      },

      preload: function () {
        game.load.image('calvinNormal', '../../assets/img/calvin-normal.png');
        game.load.image('moleculeSeven', '../../assets/img/molecule-seven.png');
        game.load.image('ribiscus', '../../assets/img/ribiscus.png');
        game.load.image('glucose', '../../assets/img/icon-glucose.png');
      },

      create: function () {
        this.add.sprite(142,152,'calvinNormal');  
        this.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.bmd.addToWorld();
        this.moleculeSeven = this.add.sprite(100, 50, 'moleculeSeven');
        this.moleculeSeven.anchor.set(0.5);
    
        this.ribiscus = this.add.sprite(320, 140, 'ribiscus');
        this.glucose = this.add.sprite(340, 640, 'glucose');
        this.glucose.scale.setTo(0.5, 0.5); 

        var py = this.points.y;
        this.input.onDown.addOnce(stopAnimation, this);
        this.plot();

      },

      plot: function () {
        this.bmd.clear();
        this.path = [];
            
        var x = 10 / game.width; //Geschwindigkeit der Moleküle
        for (var i = 0; i <= 1; i += x) {
          if (this.mode === 0) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 1) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          } else if (this.mode === 2) {
            var px = this.math.catmullRomInterpolation(this.points.x, i);
            var py = this.math.catmullRomInterpolation(this.points.y, i);
          }
          this.path.push( { x: px, y: py } );
        }

      },

      update: function () {

        this.moleculeSeven.x = this.path[this.pi].x;
        this.moleculeSeven.y = this.path[this.pi].y;

        this.pi++;                 
        if (this.pi >= this.path.length) {
          this.pi = 0;
          this.moleculeSeven.scale.setTo(0, 0);
          //game.state.start("mole5");
        }           
      }
    };

    

    game.state.add('Game', moleCo2, true);
    game.state.start('Game', moleCo2);
    game.state.add('mole1', moleone, false);
    game.state.add('mole7', moleSeven, false);
    game.state.add('moleatp', moleculeatp, false);
    game.state.add('moleadp', moleculeadp, false);
    game.state.add('mole3', molethree, false);
    game.state.add('moleNadph', moleculeNadph, false);
    game.state.add('moleNadpp', moleculeNadpp, false);
    game.state.add('mole4', molefour, false);
    game.state.add('mole5', molefive, false);
    game.state.add('moleatp2', moleculeatp2, false);
    game.state.add('moleadp2', moleculeadp2, false);
    game.state.add('mole6', molesix, false);
    


function stopAnimation() {
    this.alien.animations.stop();
    this.moleculeSeven.animations.stop();
}