var res = {

	//opening

		open_bg: 'res/open-bg.png',
		open_team: 'res/maxon-team.png',

		mode_board: 'res/mode-board.png',
		mode_mode1: 'res/mode1.png',
		mode_mode2: 'res/mode2.png',

		info_board: 'res/info-board.png',
		info_done: 'res/done.png',

		rank_board: 'res/rank-board.png',

	//////////////////
	//menu
		menu_bg: 'res/menu-bg.png',
		menu_playBtn: 'res/play-btn.png',
		menu_playBtnS: 'res/play-btn-s.png',
		//storeBtn: 'res/store-btn.png',
		//storeBtnS: 'res/store-btn-s.png',
		menu_storeBtn: 'res/rank-btn.png',
		menu_storeBtnS: 'res/rank-btn.png',
		menu_setBtn: 'res/set-btn.png',
		menu_setBtnS: 'res/set-btn-s.png',
		menu_startBtn: 'res/start-btn-normal.png',
		menu_startBtnS: 'res/start-btn-selected.png',
		menu_aboutBtn: 'res/about-btn.png',
		menu_aboutBtnS: 'res/about-btn-s.png',
		menu_logo: 'res/game-logo.png',
		menu_wait: 'res/wait.png',
		menu_enable: 'res/enable.png',
		menu_disable: 'res/disable.png',

        //panda
		panda_plist: 'res/panda.plist',
		panda_png: 'res/panda.png',

	// Platform Related.
		platform_plist: 'res/platform.plist',
		platform_png: 'res/platform.png',

	// Background
		background_one : 'res/far-bg.png',
		background_two : 'res/near-bg.png',
	// gold
		gold_plist: 'res/gold.plist',
		gold_png: 'res/gold.png',

	//enemy
		/*enemy_png: 'res/enemy.png',
		enemy_plist: 'res/enemy.plist',*/

	
	//bird
		bird_png: 'res/bird.png',
		bird_plist: 'res/bird.plist',

	// enemy
		enemy_png: 'res/enemy.png',
		enemy_plist: 'res/enemy.plist',

	//magnet
		magnet_png: 'res/magnet.png',
		magnet_plist: 'res/magnet.plist',
		magnet_effect: 'res/magnetEffect.png',

	//spring
		spring_png: 'res/spring.png',
		spring_plist: 'res/spring.plist',

	//shoes
		shoes_png: 'res/shoes.png',
		shoes_plist: 'res/shoes.plist',

	//red shoes
		redshoes_png: 'res/redshoes.png',
		redshoes_plist: 'res/redshoes.plist',

	//particle
		particle_circle: 'res/circle_particle.plist',
		particle_stars: 'res/stars_particle.plist',

	//fire
		fire_plist: 'res/fire.plist',

	//game over res
		over_board: 'res/ui/score-board.png',
		over_store: 'res/ui/store.png',
		over_reload: 'res/ui/reload.png',
		over_menu: 'res/ui/menu.png',

	// Sound Effect
		sound_bg_mp3: 'res/sound/bg.mp3',
		sound_jump_mp3: 'res/sound/jump.mp3',
		sound_gold_mp3: 'res/sound/eat_gold.mp3',
		sound_game_over: 'res/sound/game_over.mp3',
		sound_button: 'res/sound/button.mp3',
		sound_menu: 'res/sound/menu.mp3',
		sound_opening: 'res/sound/opening.mp3',
		sound_enemyDied: 'res/sound/enemyDied.mp3',
		sound_magnet: 'res/sound/magnet.mp3',
		sound_lose_prop: 'res/sound/lose_prop.mp3',
		sound_spring: 'res/sound/spring.mp3',
		sound_speedup: 'res/sound/speedup.mp3',
		sound_alert: 'res/sound/alert.mp3',
		sound_shopping: 'res/sound/shopping.mp3',

		ui_goldbar: 'res/ui/gold-bar.png',
		ui_energybar: 'res/ui/energy-bar.png',
		ui_progress: 'res/ui/progress.png',
		ui_soundOn: 'res/ui/soundOnBtn.png',
		ui_soundOff: 'res/ui/soundOffBtn.png',
		ui_distance: 'res/ui/distance.png',
		ui_aboutBoard: 'res/ui/about-board.png',
		ui_backBtn: 'res/ui/back-btn.png',
		ui_setBoard: 'res/ui/set-board.png',
		ui_onBtn: 'res/ui/on-btn.png',
		ui_offBtn: 'res/ui/off-btn.png',
		ui_highBtn: 'res/ui/high-btn.png',
		ui_lowBtn: 'res/ui/low-btn.png',
		ui_storeBoard: 'res/ui/store-board.png',
		ui_buy30: 'res/ui/buy-30.png',
		ui_buy50: 'res/ui/buy-50.png',
		ui_magnetProp: 'res/ui/magnet-prop.png',
		ui_shoesProp: 'res/ui/shoes-prop.png',
		ui_redshoesProp: 'res/ui/redshoes-prop.png',
		ui_man: 'res/runner.png',

		physics_groundHeight: -1000
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

var SpriteTag = {
	player : 0,
	gold : 1,
	inventory: 2,
	platform: 3,
	ground: 4,
	magnet: 5,
	spring: 6,
	shoes: 7,
	redshoes: 8,
	bird: 9,
	frog: 10
};

//game global variable
var gameStarted = false;
var firstInit = true;

//load game audio sys
var canMusicPlaying = 0;
var canAudioPlaying = 0;
var diffDeg = 0;
var isMusicPlaying = 0;

var localStorage = cc.sys ? cc.sys.localStorage : window.localStorage;
if(!localStorage.getItem("canAudioPlaying") || !localStorage.getItem("canMusicPlaying")) {
	localStorage.setItem("canMusicPlaying", 1);
	localStorage.setItem("canAudioPlaying", 1);
	localStorage.setItem("diffDeg", 0);
}
canMusicPlaying = parseInt(localStorage.getItem("canMusicPlaying"));
canAudioPlaying = parseInt(localStorage.getItem("canAudioPlaying"));
diffDeg = parseInt(cc.sys.localStorage.getItem("diffDeg"));

//initialize prop to local 
if(!localStorage.getItem("magnet") || !localStorage.getItem("shoes") || !localStorage.getItem("redshoes")) {
	localStorage.setItem("magnet", 0);
	localStorage.setItem("shoes", 0);
	localStorage.setItem("redshoes", 0);
}

//preload objects defined
var pre_bird, pre_frog, pre_magnet, pre_redshoes, pre_shoes, pre_spring;
var new_space = [];