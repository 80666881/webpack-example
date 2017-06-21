define(['jquery','waterfall'],function($,Waterfall){
	function GetImg(){
		this.init();
	}

	GetImg.prototype = {
		init: function(){
			var _this = this;
			$('.add-more').on('click',function(e){
				e.preventDefault();
				$.ajax({
					url: '/getImgs',
					type: 'get',
					success: function(ret){_this.appendHtml(ret)},
					error: function(){alert('与服务器连接失败')}
				})
			})
		},
		appendHtml: function(ret){
			var html = '';
			$.each(ret,function(){
				html += '<li><img src="'+this.src+'" alt="">'
			})
			$('.img-list>ul').append(html);
			new Waterfall($('.ct'))
		}
	}
		
	return GetImg;
	
})