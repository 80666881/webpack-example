define(['jquery'], function( $ ) {


	function goTop(id) {
		this.id = id || 'jrg-gotop';
		this.init();
	}

	goTop.prototype = {
		init: function() {
			var $el = this.$el = $('#' + this.id);
			if ($el.length === 0) {
				this.$el = $('<div id="' + this.id + '" style="background:#F8DC68;padding: 10px 20px;color:#2049EB;cursor:pointer; position: fixed; right: 10px; bottom: 10px; ">回到顶部</div>');
				$('body').append(this.$el);
			} else {
				this.$el = $el;
			}
			this.$c = $(document);

			this.bind();
		},

		bind: function() {
			var me = this;

			this.$el.on('click', function() {
				me.goToTop();
			});

			this.$el.on('scroll', function(){
				me.scroll();
			});
		},

		goToTop: function() {
			this.$c.scrollTop(0);
		},

		scroll: function(e) {
			var scrollTop = this.$c.scrollTop();
			if (scrollTop > 100) {
				this.$el.show();
			} else {
				this.$el.hide();
			}
		}
	};

	return goTop; 
});