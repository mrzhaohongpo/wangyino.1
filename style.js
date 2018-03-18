
//顶部客户服务下拉菜单
$('.topli7').on({
	'mouseover':function(){
		$('.service').css('display','block');
	},'mouseout':function(){
		$('.service').css('display','none');
	}
})
//app二维码
$('.topli7+li').on({
	'mouseover':function(){
		$('.app').css('display','block');
	},'mouseout':function(){
		$('.app').css('display','none');
	}
})
//nav下拉菜单
$('.navlif').each(function(){
	$(this).hover(function(){
		$(this).children('ul').css('display','block');
	},function(){
		$(this).children('ul').css('display','none');
	})
	
})
//吸顶登录按钮滑过效果
$('.for1div').hover(function(){
	$('.for1deng').css('display','block');
},function(){
	$('.for1deng').css('display','none');
})

//nav吸顶效果
$(window).scroll(function(){
	if($(document).scrollTop() >= 194 ){
		$('.nav').addClass('navtop');
		$('.logomin').css('display','block');
		$('.navli2').css('top',40);
		$('.navout').css({position:'fixed',zIndex:100,top:0,left:0});
		$('.for1deng').css('dispaly','none');
		$('.for1div').css('display','block');
		$('.navtop').after($('.for1').addClass('form1'));
//		$('.for1').addClass('form1').after('.navtop');
	}else{
		$('.nav').removeClass('navtop');
		$('.logomin').css('display','none');
		$('.navout').css('position','');
		$('.navli2').css('top',30);
		$('#for1').removeClass('form1');
		$('.for1div').css('display','none');
		$('#head').append($('.for1'));
//		$('.for1').append($('.head'));
	}
})
			//	banner轮播图尝试
	var $index = 0;				//下标 大
	var $endex = 0;				//下标 小点
	var $timer = null; 
	var $banner = $('.banner');
	var $img = $('.banner img');//轮播图集合
	var $left = $('.bannerleft');//左右按钮	
	var $right = $('.banneright');
	//按钮的移入移出效果 
	$banner.hover(function(){	//移入是清除定时器，加点击事件
		$left.stop().animate({'opacity':'1'},200);
		$right.stop().animate({'opacity':'1'},200);
		clearInterval($timer);
		$left.click(function(){
			$index--;
			nex();
			$('.bannermin li').eq($index).addClass('bannerminli').siblings().removeClass('bannerminli');
			console.log($endex);
			return $endex = $index;
		});
		$right.click(function(){
			$index++;
			pre();
			$('.bannermin li').eq($index).addClass('bannerminli').siblings().removeClass('bannerminli');
			return $endex = $index;
		})
	},function(){	//移出效果
		$left.stop().animate({'opacity':'0.3'},200);
		$right.stop().animate({'opacity':'0.3'},200);
		$timer = setInterval(function(){
			$index--;
			nex();
			$('.bannermin li').eq($index).addClass('bannerminli').siblings().removeClass('bannerminli');
		},1000);
	})
	$img.each(function(){
		$index = $(this).index();
		$index = $(this).index();
		
	});
		function nex(){
			$index < 0 ? $index = 7 : $index;
			$img.eq($index).stop(true,true).animate({'zIndex':'1','opacity':1},500).siblings('img').animate({'opacity':0});      
		}
		function pre(){
			$index >= 7 ? $index = 0 :$index;
			$img.eq($index).stop(true,true).animate({"zIndex":1,'opacity':1},500).siblings('img').animate({'opacity':0});
		}
		$timer = setInterval(function(){
			$index--;
			nex();
			$('.bannermin li').eq($index).addClass('bannerminli').siblings().removeClass('bannerminli');
		},1000);
	/******人气推荐切换*********/
//	.h3j_span1  h3j_span2 切换的左右按钮			.zhbtuijian1 .zhbtuijian2 被切换的内容块
(function(){
	$('.h3j_span1').click(function(){
		$('.zhbtuijian1').css({'zIndex' : 2,});
		$(this).css({'borderBottom':'2px solid #cdb27c'});
		$('.h3j_span2').css({'borderBottom':'none'});
		$('.zhbtuijian2').css({'zIndex': 0});
	})
	$('.h3j_span2').click(function(){
		$('.zhbtuijian2').css({'zIndex' : 2,});
		$(this).css({'borderBottom':'2px solid #cdb27c'});
		$('.h3j_span1').css({'borderBottom':'none'});
		$('.zhbtuijian1').css({'zIndex': 0});
	})
})();
/**____________限时购模块______________**/
// 倒计时处理 	乱点了
(function(){
	var $date = new Date();
	var $later = new Date('2018,3,19');
	var $t = chas($date,$later);
	function showTim(){
		var $h = parseInt($t/3600);//剩余小时
		var $m = parseInt( ($t - $h*3600)/60 );//剩余分钟
		var $s = parseInt($t - $h*3600 - $m*60);//剩余秒
		$('.countDown').html($h);
		$('.countDown2').html($m);
		$('.countDown3').html($s);
	}
	showTim();
	var $timer = setInterval(function(){
		$t--;
		if($t <= 0){
			$('.countDown').html(0);
			$('.countDown2').html(0);
			$('.countDown3').html(0);
			clearInterval($timer);
		}else{
			showTim();
		}
	},1000)
	function chas(kai,end){	//2个时间相差的秒数
		return Math.abs( kai.getTime() - end.getTime())/1000;
	}
})();
//右侧小广告app //不管用
(function(){
	$('.gaoapp0').hover(function(){
		alert(1);
		$('.gaoapp').css('dispaly','block');
		
	},function(){
		$('.gaoapp').css('dispaly','none');
	})
})();


























