$(function(){
	var windowHeight = $(window).height();
	// $(window).resize(function(){
	// 	windowHeight  = $(window).height();
	// 	var n = - Math.abs(windowHeight -600 +360);
	// 	console.log(n);
	// 	$("#sofa2").css({"bottom":n});
	// });

	var flag2 =0;
	$('#fullpage').fullpage({
		navigation: 'true',
		afterLoad:function(anchorlink,index){
			if(index == 2 && flag2==0) {
			$("#searchBox").show().animate({
				"left":200,
			},500,function(){
				$("#sofa").animate({"opacity":1},500,function(){
					$("#searchBox").hide();
					$("#trueBox").show().animate({
						"left":400,
						"top":20,
						"height":30,
						"width":155
					},500);
					$("#sofas").show().animate({
						"width":440,
						"height":220
					},500);
					flag2 = 1;
				});
			});
			}
			if(index == 7)
			{
				$("#star5").fadeIn(1000,function(){
					$("#good").fadeIn(1000);
				});
			};
			if(index == 8)
			{
				$("#shoppingBox").mouseenter(function(){
					console.log(1);
					$("#startshoppingS").hide();
				}).mouseleave(function(){
					console.log(2);
					$("#startshoppingS").show();
					});	
				$("#again").click(function(){
					$.fn.fullpage.moveTo(1);
					//所有带有动画的元素添加move类，清除行内样式
					$("img, .move").attr("style", "");
					flag2 = 0;
				});
				$("#mousehand").show();
				$(window).mousemove(function(e){
					if( e.pageY < 0.5*windowHeight ) var Y = 0.5*windowHeight;
					else Y =e.pageY;
					$("#mousehand").offset({
						"top":Y+2,
						"left":e.pageX-65
					});					
				});
			};
		},
		onLeave:function(index,nextIndex,direction){

			var m = windowHeight -600 +360;

			if(index == 2 && nextIndex == 3 && flag2==1){
				$("#sofa2Cover").show();
				$("#sofa2").show();
				$("#sofa2").animate({
					"bottom":-m,
					"width":207,
					"left":65
				},500,function(){
					$("#selectType").attr({"src":"images/img-01-a.gif"});
					$("#favorite").attr({"src":"images/btn-01-a.gif"});
				});
			};

			if(index == 3 && nextIndex == 4){
				$("#sofa2").hide();
				$("#slantsofa3").show().animate({
					"bottom":-windowHeight + 232,
					"left":413
				},500,function(){
					$("#slantsofa3").hide();
					$("#slantsofa4").show();
					$("#carbox").animate({"left":"150%"},2000,"easeInElastic",function(){
						$("#post").fadeIn("2000");
					});
				});
			};
			if(index == 4 && nextIndex == 5){
				$("#hand5").show().animate({
					"bottom":0
				},1000,function(){
					$("#mouseclick").show();
					$("#slantsofa5").show().animate({
						"bottom":120
					},1000,function(){
						$("#cardpaper").show().animate({
							"bottom":400
						},1000);
					});
				});
			};

			if(index == 5 && nextIndex == 6)
			{
				$("#slantsofa5").animate(
				{
					"bottom":"-30%",
					"left":"38%",
					"width":50
				},1000,function()
					{
						$("#slantsofa5").hide();
						$("#presentbox").animate(
						{
							"bottom":30					
						},1000,function(){
							$("#presentbox").hide();
							$("#postaddress").show();
							$("#s6").animate({
							"backgroundPositionX":"100%"
							},2000,function(){
								$("#postman").show().animate({
									"width":252,
								},500,function(){
									$("#postman").animate({
										"right":-330
									},1000,function(){
										$("#alarm").show();
										$("#woman").show().animate({
											"width":87
										},500);
									});
								});
							});						
						});
					}					
			)};

		}
	});



});					