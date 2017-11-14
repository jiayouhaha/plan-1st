$(function(){
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
			var html=template('remTemplate',{list:data.data});
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
				break;
			case 3:
				return "科技";
				break;
			case 4:
				return '其他';
				break;

		}
	})





})