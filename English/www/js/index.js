var app = {

  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function (e) {
    this.receivedEvent('deviceready');
  },

  receivedEvent: function (id) {

    /*var onSuccess = function(result) {
      // handle result  
      console.log(result);
      };

      var onError = function(err) {
      // handle error
      console.log(err);
      }

      var options = {
          devKey: 'LW6HqaFQY7CtGB2MKz4nWE',
          isDebug: false
      };

      console.log(window.plugins.appsFlyer);

      window.plugins.appsFlyer.initSdk(options, onSuccess, onError);

      facebookConnectPlugin.activateApp(onSuccess, onError);

      FirebasePlugin.setCrashlyticsCollectionEnabled();

      

     bbreglogin.initializeDB();

     screen.orientation.lock('portarait');

     FirebasePlugin.onMessageReceived(function(message) {
        console.log("Message type: " + message.messageType);
        if(message.messageType === "notification"){
            console.log("Notification message received");
            if(message.tap){
                console.log("Tapped in " + message.tap);
            }
        }
        console.dir(message);
    }, function(error) {
        console.error(error);
    });


  */

    //bbreglogin.initializeDB();

    var game = new Phaser.Game(540, 960, Phaser.CANVAS, 'phaser_canvas', { preload: this.preload, create: this.create }, false, true, null);

    game.state.add('boot', Game.boot);
    game.state.add('langSelectScreen', Game.langSelectScreen);
    game.state.add('preloader', Game.preloader);
    game.state.add('userprogress', Game.userprogress);
    game.state.add('userprogress2', Game.userprogress2);

    //  game.state.add('appLoginScreen',Game.appLoginScreen);
    //  game.state.add('appLoginEditScreen',Game.appLoginEditScreen);
    //  game.state.add('editLangScreen',Game.editLangScreen);
    //  game.state.add('registrationLangSelectionScreen',Game.registrationLangSelectionScreen);
    //  game.state.add('registrationPicSelectionScreen',Game.registrationPicSelectionScreen);
    game.state.add('index2', Game.index2);
    
    // 12-01-2023
    game.state.add('downloadData', Game.downloadData);

  },


  preload: function (game) {
    game.load.video('demo', './demo.mp4');
    game.load.image('splash', 'assets/splash.png');
    game.load.image('helpIcon', './helpIcon.png');
    game.load.image('closeIcon', './closeIcon.png');
    game.load.image('userProgressBtn', 'assets/userProgressBtn.png');
    game.load.atlas('regloding', 'assets/loding.png', 'assets/loding.json');
    game.load.bitmapFont('regFont', 'regFont.png', 'regFont.xml');
    // 12-01-2023
    game.load.image('registrationbg', 'assets/registrationbg.png');
  },

  create: function (game) {

    game.input.maxPointers = 1;

    game.stage.disableVisibilityChange = true;

    //setting scale and orientation for the game.
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.updateLayout(true);
    game.scale.forceOrientation(true, false);

    this.game.add.text(0, 0, "hack", {font:"1px myfont", fill:"#FFFFFF"});
		this.game.add.text(0, 0, "jack", {font:"1px Akzidenz-Grotesk BQ", fill:"#000000"});

    game.stage.backgroundColor = '#71c5cf';
    var splash = game.add.sprite(game.world.centerX, game.world.centerY, 'splash');
    splash.scale.setTo(1);
    splash.anchor.setTo(0.5);

    console.log(game);

    this.game.add.text(0, 0, "hack", { font: "1px myfont", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px gradefont", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont1", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont2", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont3", fill: "#FFFFFF" });
    this.game.add.text(0, 0, "hack", { font: "1px regfont4", fill: "#FFFFFF" });



    game.time.events.add(300, function () {
      game.time.events.removeAll();
      /*game.width = 960;
        game.height = 540;
      console.log(game);

      screen.orientation.lock('landscape');*/



      game.state.start('index2', true, false, '', false);
    }, this);

  },

};


app.initialize();