$(function(){
	var page=1;
	var pagesize=10;
	var loadDataStatus=0;//0:不在加载中;1:加载中;2:所有数据加载完毕
	var totalData=[];
	//刚进入页面时调用getData,将page、pagesize两个变量传过去
	getData(page,pagesize)
	
	$(window).scroll(function(){
		//视窗上面隐藏掉的部分，即滚动条滚动的距离
		var scrollTop=$(this).scrollTop();
		//页面的高度
		var scrollHeight=$(document).height();
		//浏览器窗口高度
		var windowHeight=$(this).height();

		if(scrollTop+windowHeight==scrollHeight){
			if(loadDataStatus==2){
				return;
			}
			page++;

			loadDataStatus=1;
			getData(page,pagesize);
		}
	});

	function getData(page,pagesize){
		$.ajax({
			url:'http://restaurant.yijiahotel.shop/v1/news/'+page+'/'+pagesize,
			type:'GET',
			dataType:'json',
			data:null,
			success:function(data){
				//data.data.length==0表示所有数据加载完毕
				if(data.data.length==0){
					loadDataStatus=2;

				}
				$('.jz').hide();
				$('.mask').hide();
				$('.xr').show();
				totalData=data.data.concat(totalData);
						//将要遍历的赋值给List
						// console.log(totalData)	
						var html=template('remTemplate',{list:totalData});
						// console.log(html)
						$('.xr').html(html)

					}

				})
	}
})


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