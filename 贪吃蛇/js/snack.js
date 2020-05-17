(function(){
	var snackList = [];
	var that;
	function Snack(options){
		options = options || {};
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.body = [
		{x:4 , y:4 , backgroundColor:'red'},
		{x:3 , y:4 , backgroundColor:'green'},
		{x:2 , y:4 , backgroundColor:'green'},
		{x:1 , y:4 , backgroundColor:'green'}];
		this.direction = options.direction || 'right' ;
		that = this;
	}

	Snack.prototype.rendor = function(){
		snackDelete();
		for(var i = 0;i<this.body.length;i++){
			var div = document.createElement('div');
			screen.appendChild(div);
			div.style.position = 'absolute';
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';
			div.style.left = this.body[i].x * this.width +'px';
			div.style.top = this.body[i].y * this.height +'px';
			div.style.backgroundColor = this.body[i].backgroundColor;
			snackList.push(div);
		}
	}
	var timer;
	Snack.prototype.move = function(){
			timer = setInterval(snackMove,300);
	}

	function snackMove(){
		for(var i = that.body.length-1;i>0;i--){
			that.body[i].x = that.body[i-1].x;
			that.body[i].y = that.body[i-1].y;
		}
		switch(that.direction){
			case 'right' : {that.body[0].x++;break;}
			case 'left' : {that.body[0].x--;break;}
			case 'top' : {that.body[0].y--;break;}
			case 'bottom' : {that.body[0].y++;break;}
		}
		that.rendor();	eatFood();		
		if(that.body[0].x > screen.offsetWidth / that.width-1 ||
			that.body[0].x < 0 ||
			that.body[0].y > screen.offsetHeight / that.height-1 ||
			that.body[0].y < 0
			) {clearInterval(timer);alert('GG');}	
	}
	function eatFood(){
		if(that.body[0].x === game.food.x &&
			that.body[0].y === game.food.y)
		{
			game.food.rendor();
			var div = document.createElement('div');
			that.body.push({x:that.body[that.body.length-1].x,
				y:that.body[that.body.length-1].y,
				backgroundColor:'green'});
			console.log(that.body.length);
		}
	}

	function snackDelete(){
		for(var i = snackList.length-1;i>=0;i-- ){
			screen.removeChild(snackList[i]);
			snackList.splice(i,1);
		}
	}
	window.Snack = Snack;
})()
// var snack = new Snack();
// snack.rendor();
// snack.move();