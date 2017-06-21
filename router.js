app.get('/getImgs',function (req,res) {
	
	var imgsArr = [{
		src:'images/imgList-05.jpg'
	},{
		src:'images/imgList-06.jpg'
	},{
		src:'images/imgList-07.jpg'
	},{
		src:'images/imgList-08.jpg'
	},{
		src:'images/imgList-09.jpg'
	}]

	res.send(imgsArr);
})