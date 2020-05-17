var screen = document.getElementById('screen');
(function(){
	var foodList = [];
	function Food(options){
		options = options ||{};
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.x = options.x || 4;
		this.y = options.y ||4;
		this.backgroundColor = options.backgroundColor || 'blue';
	}
	Food.prototype.rendor = function(){
		foodDelete();
		var div = document.createElement('div');
		screen.appendChild(div);
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.position = 'absolute';
		this.x = Tools.getRandomNum(0,screen.offsetWidth / this.width-1);
		this.y = Tools.getRandomNum(0,screen.offsetHeight / this.height-1);
		div.style.left = this.x * this.width +'px';
		div.style.top = this.y * this.height +'px';
		div.style.backgroundColor = this.backgroundColor;
		foodList.push(div);
	}
	function foodDelete(){
		for(var i = foodList.length-1;i>=0;i-- ){
			screen.removeChild(foodList[i]);
			foodList.splice(i,1);
		}
	}
	window.Food = Food;


})()

//测试
// var food = new Food();
// food.rendor();