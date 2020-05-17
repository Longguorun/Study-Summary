(function(){
	var that;
	function Game(){
		this.food = new Food();
		this.snack = new Snack();
		that = this;
	}
	Game.prototype.gameStart = function(){
		this.food.rendor();
		this.snack.rendor();
		this.snack.move();
		keyin();
	}
	function keyin(){
		document.onkeydown = function(e){
			switch(e.keyCode)
			{
				case 37: {that.snack.direction = 'left';break;}
				case 38: {that.snack.direction = 'top';break;}
				case 39: {that.snack.direction = 'right';break;}
				case 40: {that.snack.direction = 'bottom';break;}				
			}
		}
	}

	window.Game = Game;
})()
