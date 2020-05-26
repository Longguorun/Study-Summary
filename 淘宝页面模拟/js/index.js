$(function(){
	$("#closeDigitalCode").click(function(){
		$("#digitalCode").remove();
	});

	$("#serachText").keyup(function(){
		var data = {
		code:'utf-8',
		q: $("#serachText").val(),
		_ksTS:'_ksTS=1589975045160_575',
		k: 1,
		bucketid: 12,
		area:'c2c'
		};
		$.ajax({
			dataType:'jsonp',
			type:'get',
			url:'https://suggest.taobao.com/sug',
			data:data,
			success:function(data){
				var d = template('tbs',data);
				$("#searchResults").html(d).css("border","1px solid #d9d9ce");
				$("#searchResults>li").mouseover(function(){
					$("#searchResultsDetail").remove();
				});	
				$.each(data.magic,function(i,e){
					e.index--;
					$("#searchResults li:eq("+e.index+")").mouseover(function(){
						var det ='<div id="searchResultsDetail"><span>'+data.result[e.index][0]+'</span>';
						det += template('det',data.magic[i]); 
						$("#searchResults").append(det);
						var that = $(this);
						$("#searchResultsDetail div").off();
	// ***********************使用mouseenter而非mouseenter的原因：mouseover为位于元素上方（所有子元素都要受影响）、mouseenter为穿过元素
	//************************因此使用mouseenter防止子元素向上冒泡是父元素相应事件。。。
						$("#searchResultsDetail").mouseenter(function(event){
							console.log(1);
							event.stopImmediatePropagation(); 
							that.css("backgroundColor","#d9d9ce");
						}).mouseleave(function(){
							that.css("backgroundColor","");
							$("#searchResultsDetail").remove();
						});
					})
				});

			}
		});
		$(window).click(function(){
			var d = '';
			$("#searchResults").html(d).css("border","none");
		});	

	});		

	
});
// https://suggest.taobao.com/sug?_ksTS=1589974731502_459&callback=jsonp460&area=history_magic&q=1&bucketid=12
// https://suggest.taobao.com/sug?code=utf-8&q=9&_ksTS=1589975045160_575&callback=jsonp576&k=1&area=c2c&bucketid=12