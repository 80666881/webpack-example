
/*
	waterfall();
	$(window).on('resize',function(){
		waterfall();
	});
	function waterfall(){
		var $items = $('.ct img');
		var itemWidth = $items.outerWidth(true);
		var colLength = parseInt($(window).width()/itemWidth);
		var arr = [];
		for (var i = 0; i < colLength; i++) {
			arr[i] = 0;
		}
		var a = 0;

		$items.each(function(){
			if(this.complete){
				layout(this);
			}else{
				$(this).on('load',function(){
					layout(this);
				})
			}
		})

		function layout(ele){
			var minHeight= Math.min.apply(null,arr);
			var minIndex= arr.indexOf(minHeight);	
			$(ele).css({
				top: arr[minIndex],
				left: $(ele).outerWidth(true) * minIndex
			})
			arr[minIndex] += $(ele).outerHeight(true);	
		}
	}*/

	define(['jquery'],function($){
		
		function Waterfall($ct){
			this.$ct = $ct//注意书写顺序，$ct的定义不能放在init后
			this.init();
			
		}
		Waterfall.prototype = {
			init: function(){
				var $imglist = this.$imglist = this.$ct.find('.img-list');
				var $items = this.$ct.find('.img-list img');
				var itemWidth = $items.outerWidth(true);
				var colLength = parseInt($imglist.width()/itemWidth);
				this.arr = [];
				for (var i = 0; i < colLength; i++) {
					this.arr[i] = 0;
				}
				var _this = this;
				$items.each(function(){
					if(this.complete){
						_this.layout(this);
					}else{
						$(this).on('load',function(){
							_this.layout(this);
						})
					}
				})
			},
			layout: function(ele){
				var minHeight= Math.min.apply(null,this.arr);
				var minIndex= this.arr.indexOf(minHeight);
				$(ele).css({
					top: this.arr[minIndex],
					left: $(ele).outerWidth(true) * minIndex
				})
				this.arr[minIndex] += $(ele).outerHeight(true);	
				var maxHeight = Math.max.apply(null,this.arr);
				this.$imglist.height(maxHeight);
			}
		}

		return Waterfall;
	})
