define(['jquery','gotop','carousel','waterfall','ajax-append'],function($,goTop,Carousel,Waterfall,GetImg) {
	new goTop('gotop');
	new Carousel($('.carousel'));
	new Waterfall($('.ct'));
	new GetImg();
})