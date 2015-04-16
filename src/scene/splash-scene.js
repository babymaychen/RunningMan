/**
 * Splash Scene - the opening scene of the game.
 * <p>
 * It cope with the navigation logic and the logos display.
 * </p>
 * 
 * @class
 * @extends cc.Scene
 */
var SplashScene = cc.Scene.extend(/** @lends SplashScene# */{

	/**
	 * Constructor of cc.Scene
	 */
	_className: "SplashScene",
	onEnter:function() {
		this._super();
		var open = new GameOpeningLayer();
		open.bake();
		this.addChild(open, 1, 1);
		this.schedule(function(){
			var dd = cc.sys.localStorage.getItem("username");
			//cc.log(dd.length == 0);
			cc.director.runScene(new InfoScene());
		}, 2);
	}

	/*ctor: function () {
		this._super();
		/!*var open = new GameOpeningLayer();
		open.bake();
		this.addChild(open, 1, 1);*!/
		cc.director.runScene(new InfoScene());
		setTimeout(function(){
			if(cc.sys.localStorage.getItem("username")){
				cc.director.runScene(new WelcomeScene());
			} else {
				cc.director.runScene(new InfoScene());
			}
		}.bind(this), 3000);
	}*/
});
