define(['jquery'],function($){
	function Carousel($ct){
		var _this = this;
		this.$ct = $ct;
		this.init();
		this.bind();
		$(window).on('resize',function(){
			var $newImgLi = _this.$ct.find('.imgList>li');
			$newImgLi.first().remove();
			$newImgLi.last().remove();
			_this.init();
			_this.bind();
		})
	}
	Carousel.prototype = {
		init: function(){
			var $imgList = this.$imgList = this.$ct.find('.imgList');
			var $imgLi = this.$ct.find('.imgList>li');
			var $imgs = this.$imgs = this.$ct.find('.imgList>li img');
			var imgNum = this.imgNum = $imgs.length;
			var $nextPage = this.$nextPage = this.$ct.find('.nextPage');
			var $prePage = this.$prePage = this.$ct.find('.prePage');
			var curIndex = this.curIndex = 0;
			var $bullets = this.$bullets = this.$ct.find('.bullet>li');
			this.loaded = true;

			var windowWidth = $('#header').width();
			var headerHeight = $('#header').height();
			$imgs.width(windowWidth);
			$imgs.height(headerHeight);
			this.$ct.width(windowWidth);
			this.$ct.height(headerHeight);
			var imgWidth =this.imgWidth = $imgs.first().width();
			$imgList.append($imgLi.first().clone());
			$imgList.prepend($imgLi.last().clone());
		
			$imgList.css({
				left: -(this.imgWidth),
				width:(imgNum+2)*imgWidth
			});

		},
		bind: function(){
			var _this = this;
			this.$nextPage.on('click',function(e){
				e.preventDefault();
				_this.playNext();
			});
			this.$prePage.on('click',function(e){
				e.preventDefault();
				_this.playPre();
			})
		},
		playNext: function(){
			var _this = this;
			if (!this.loaded) {return}
			this.loaded = false;
			this.curIndex++;
			this.$imgList.animate({
				left: '-='+this.imgWidth
			},function(){
				if (_this.curIndex == _this.imgNum) {
					_this.$imgList.css({
						left: -_this.imgWidth
					})
					_this.curIndex = 0;
				}
				_this.$bullets.siblings().removeClass('active');
				_this.$bullets.eq(_this.curIndex).addClass('active');
				_this.loaded = true;
			})
		},
		playPre: function(){
			var _this = this;
			if (!this.loaded) {return}
			this.loaded = false;
			this.curIndex--;
			this.$imgList.animate({
				left: '+='+this.imgWidth
			},function(){
				if (_this.curIndex < 0) {
					_this.$imgList.css({
						left: -_this.imgWidth*_this.imgNum
					})
					_this.curIndex =_this.imgNum-1;
				}
				_this.$bullets.siblings().removeClass('active');
				_this.$bullets.eq(_this.curIndex).addClass('active');
				_this.loaded = true;
			})
		}
	};

	return Carousel;
	// var c1 = new Carousel($('.carousel'));
		
})	