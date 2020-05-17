//生成范围随机数函数
var Tools = {
		getRandomNum: function(min,max) {
		 min = Math.ceil(min);
 		 max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}