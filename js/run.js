define(function (require, exports) { //dedine闭包  
	var loads=require("./load");//加载机制引用
	//var loadData=require("./loadData");//图片资源引用
    var funs=require("./qkyFunH5");
	
	
exports.jl = function () {
	
	funs.echartsGauge("jl-electric-ec1");
	funs.echartsGauge("jl-electric-ec2");
	funs.echartsGauge("jl-electric-ec3");
	var weData={
			line:{
				tit:"消耗",
				data:{"5.10":45,"5.11":55,"5.12":36,"5.13":28,"5.14":64,"5.15":51,"5.16":20,"5.17":71,"5.18":42,"5.19":41}
			},
			pie:{
				tit:"耗能",
				data:{"房1":[71,"#07c0c0 "],"房2":[29,"#ffb768"],"房3":[19,"#cf3b6f"]}
			}
	};
	var eeData={
		line:{
			tit:"消耗",
			data:{"5.10":45,"5.11":55,"5.12":36,"5.13":28,"5.14":64,"5.15":51,"5.16":20,"5.17":71,"5.18":42,"5.19":41}
		},
		pie:{
			tit:"耗能",
			data:{"房1":[71,"#07c0c0 "],"房2":[29,"#ffb768"],"房3":[19,"#cf3b6f"]}
		}
};
var plData={
	tit:["车位总数","剩余车位数","车流量","收费"],
	data:{"6.11":55,"6.12":36,"6.13":28,"6.14":64,"6.15":51}
};
	funs.echartsPie("jl-wepie-ec",weData.pie.data,weData.pie.tit);
	funs.echartsLine("jl-weline-ec",weData.line.data,weData.line.tit);
	funs.echartsPie("jl-eepie-ec",eeData.pie.data,weData.pie.tit);
	funs.echartsLine("jl-eeline-ec",eeData.line.data,weData.line.tit);

	funs.echartsBar("jl-plline-ec",plData.data,plData.tit);
	

	var outindex=[
		{id: "bg", src: "images/bg.png"},
		{id: "logo", src: "images/logo.png"}
		
	];
	loads.startPreload(outindex,function(){
		$(".loadprogress").fadeOut(200);
		for (var key in loads.preload._loadItemsById) {
            $("." + key).html(loads.preload.getResult(key));
		}
		loads.pageimg($(".page"), 1920, 1080);
		window.onresize = function () {
			loads.pageimg($(".page"), 1920, 1080);
		}

	})
		
	
		//var inbox = new Swiper(".inbox", {
			//initialSlide :1,
			//pagination : '.swiper-pagination',
			//paginationClickable :true,
			//autoplay : 3000
			
		//});

		// $(".icon-but a").click(function () {
		// 	if ($(this).hasClass("left")) {
		// 		inbox.slidePrev();
		// 	} else {
		// 		inbox.slideNext();
		// 	}
		// });

		$(window).scroll(function(){
			 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

		});

	}

});