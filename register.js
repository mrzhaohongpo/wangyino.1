//注册页
(function(){
	var $d = false;
	$('.zhanghao').focusout(function(){
		var $sn = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
		if($(this).val() == ""){
			alert('用户名不能为空');
		}else if(!($sn.test($(this).val() )) ){
				 alert('不符合规则');
				 return false;
		}else{
			$d=true;
		}
	})
	$('.pword').focusout(function(){
		var $sn = /^[a-z].[0-9]{5,15}/i;
		if( $sn.test($(this).val() == false )){
			$d = false;
			alert('不对');
		}else{
			
			$d=true;
		}
		$('pwordd').focusout(function(){	//密码确认
			if( $(this).val() != $('.pword').val() ){
				$d = false;
				alert('两次输入不一致');
			}else{
				$d = true;
			}
			
		})
	})
	$('ip').focusout(function(){	//手机号11位数
		var $sn = /^1+[0-9]{10}/;
		if( !($sn.test( $(this).val() )) ){
			$d = false;
			alert('手机号不对');
		}else{
			$d = true;
		}
	})
	$('form :checkbox').is(':checked') == true ? $d=true : $d = false;
//	console.log($('form :checkbox').is(':checked'));
	$('.forsub').click(function(){	//注册按钮
		if($d == true){
			$.get('../ifto.php',{
				name : $('.zhanghao').val(),
				pword: $('pwordd').val(),
				ip : $('ip').val()
			},function(date){
				alert('您的信息是' + date['name'] + date['pword']);
			})
			
		}else{
			alert('您的信息不对，请重新输入');
		}
	})
})();


