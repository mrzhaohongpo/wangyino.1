//购买页js
//放大镜 
$(function(){
			$(".tou").hover(function(){
				$('.concealdivmin').css('display','block');
				$('.concealdiv').css('display','block');
				$(".tou").mousemove(function(evt){
					var l = evt.pageX - $(".maizhbLimg").offset().left - $(".concealdivmin").width() / 2;
					var t = evt.pageY - $(".maizhbLimg").offset().top - $(".concealdivmin").height() / 2;
					if(l <= 0){
						l = 0;
					}else if(l >= $(".maizhbLimg").width() - $(".concealdivmin").width()){
						l = $(".maizhbLimg").width() - $(".concealdivmin").width();
					}
					if(t <= 0){
						t = 0;
					}else if(t >= $(".maizhbLimg").height() - $(".concealdivmin").height()){
						t = $(".maizhbLimg").height() - $(".concealdivmin").height();
					}
					//移动比例
					var lix = l / $(".tou").width();
					var liy = t / $(".tou").height();
					//大图移动范围
					var Bx =( $('.concealdiv').children().width() - $('concealdiv').width()) * lix;
					var By =( $('.concealdiv').children().height() - $('concealdiv').height()) * liy;
					
					
					$('.concealdiv img').css({'left':-Bx,'top':-By});
					$('.concealdivmin').css({"left":l,"top":t});
				})
			},function(){
				$('.concealdivmin').css('display','none');
				$('.concealdiv').css('display','none');
			})
	//缩略图切换	
		$('.maizhbLul').children().each(function(){
			$(this).mouseover(function(){
				var $sum = $(this).index();
				$(this).css('border','1px solid #b4a078').siblings().css('border','none');
				$('.maizhbLimg').children('img').remove();
				$('.concealdiv').children('img').remove();
				$(this).children().children().clone().appendTo($('.maizhbLimg'));
				$(this).children().children().clone().appendTo( $('.concealdiv') ).css({'width':870,'height':870});
			})
		});
//右侧规格选择功能
	(function(){
		var n = true;
		var n2 = true;
		var $oA = $('.maizhbRp1').children('a');
		var $oB = $('.maizhbRp2').children('a');
		var $oC = $('.maizhbRp3').children('a');
		$oA.each(function(){	//颜色选择
			$(this).click(function(){
				if(n){
					$(this).css({'borderColor':'#d0a143'}).siblings().css({'borderColor':'#fff'});
					n = false;
				}else{
					$(this).css({'borderColor':'#fff'});
					n = true;
				}
			})
		});
		$oB.each(function(){	//尺寸选择
			$(this).click(function(){
				if(n2){
					$(this).css({'borderColor':'#d0a143'}).siblings().css({'borderColor':'#fff'});
					n2 = false;
				}else{
					$(this).css({'borderColor':'#fff'});
					n2 = true;
				}
			})
		});
		$oC.each(function(){			//数量选择
			var index = $(this).index();
			$(this).click(function(){
				var $sun = Number($('.maizhbRp3').children('input').val());
				if(index === 1 ){
					$sun <= 1 ? $sun = 1 : $sun -= 1;
				}else{
					if(index === 3){
						$sun += 1;
					}
				}
				$('.maizhbRp3').children('input').val($sun);
			})
		})
	})();
	//加入购物车按钮功能
	(function(){
		$('.maizhbRp4 a').eq(1).click(function(){
			var sn = $('.maizhbRp3').children('input');	//用户控制
			var cart = $('.for1input').children('a');	//购物车
		})
		
		
		
	})();
		
		
		
		
		
		
		
			
});
	
	
	
	
	
	
	
	
	
	
	
	

