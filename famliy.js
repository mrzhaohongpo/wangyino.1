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

//			右侧小广告
//右侧小广告app //不管用
(function(){
	$('.gaoapp0').hover(function(){
		$('.gaoapp').css('display','block');
		
	},function(){
		$('.gaoapp').css('display','none');
	})
})();
//登录页效果   #zhbregisterdeng  .zhbregisterdeng   .off0关闭                        
(function(){
	$('.zhbdeng').click(function(){
		$('#zhbregisterdeng').css('display','block');
		$('.zhbregisterdeng').css('display','block');
		$('.off0').click(function(){
			$('#zhbregisterdeng').css('display','none');
			$('.zhbregisterdeng').css('display','none');
		})
	})
})();
//内容区图片动
(function(){
	$('.juzhbtao1 dl').children('dt').children('img').each(function(){
		$(this).hover(function(){
			$(this).stop().animate({'width':260,'height':260,'left':-10,'top':-10},'slow');
		},function(){
			$(this).stop().animate({'width':245,'height':245,'left':0,'top':0},'slow');
		})
	})
})();
