$(function(){
	pushHistory();
	window.addEventListener("popstate", function(e) {
		if(window.confirm("你确定取消订单信息吗？")){
			return true;
		}//根据自己的需求实现自己的功能
		else{

		}
	}, false);
	function pushHistory() {
		var state = {
			title: "title",
			url: "#"
		};
		window.history.pushState(state, "title", "#");
	}
});