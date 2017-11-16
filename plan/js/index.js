$(function(){
	var totalData=[];
	$.ajax({
		url:'http://restaurant.yijiahotel.shop/v1/news/1/10',
		//获取数据用get方法，参数放在url上
		type:'GET',
		dataType:'json',
		data:null,
		success:function(data){
			console.log(data)
			$('.jz').hide();
			$('.mask').hide();
			$('.xr').show();
			//将要遍历的赋值给List

			totalData=data.data.concat(totalData);

			var html=template('remTemplate',{list:totalData});
			// console.log(html)
			$('.xr').html(html)
		}
	})
	//1表示娱乐，2:社会，3:科技，4:其他
	template.helper('typeFilter',function(state){
		switch(state){
			case 1:
			return "娱乐";
			break;
			case 2:
			return '社会';
			case 3:
			return "科技";
			break;
			default:
			return '其他';
			break;

		}
	})

	$(window).scroll(function(){
		//视窗上面隐藏掉的部分，即滚动条滚动的距离
		　　var scrollTop = $(this).scrollTop();
			//页面高度
		　　var scrollHeight = $(document).height();
			//浏览器窗口高度
		　　var windowHeight = $(this).height();
		　　if(scrollTop + windowHeight == scrollHeight){
// 　　　　alert("已经到最底部了！");
		　　$.ajax({
			url:'http://restaurant.yijiahotel.shop/v1/news/2/10',
			type:'GET',
			dataType:'json',
			data:null,
			success:function(data){
				// $('.jz').hide();
				// $('.mask').hide();
				// $('.xr').show();
				scrollTop=0;
				totalData=data.data.concat(totalData);
				var html=template('remTemplate',{list:totalData});
					// console.log(html)
					$('.xr').html(html)
				}
				
			})
		　　　　
		　　}
	});



})