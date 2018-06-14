define(function (require, exports) { //dedine闭包  
	var loads=require("./load");//加载机制引用
	var jldata=require("./jlData");//数据导入
    var funs=require("./jlfunction");//函数导入
	
	
exports.jl = function () {

	loads.startPreload(jldata.loadimg,function(){
		$(".loadprogress").fadeOut(200);
		for (var key in loads.preload._loadItemsById) {
            $("." + key).html(loads.preload.getResult(key));
		}
		loads.pageimg($(".page"), 1920, 1080);
		window.onresize = function () {
			loads.pageimg($(".page"), 1920, 1080);
		}
		loadafter();
	})

	function loadafter(){

		funs.echartsLine("jl-eeline-ec",jldata.eeData.line);
		funs.echartsPie("jl-eepie-ec",jldata.eeData.pie);
		
		funs.echartsLine("jl-weline-ec",jldata.weData.line);
		funs.echartsPie("jl-wepie-ec",jldata.weData.pie);
		

		funs.echartsBar("jl-plline-ec",jldata.plData);
		
		funs.echartsGauge("jl-electric-ec1",13);
		funs.echartsGauge("jl-electric-ec2",30);
		funs.echartsGauge("jl-electric-ec3",40);

		$(".jl-radio").on("click",".jl-rali",function(){
			$(this).addClass("act").siblings().removeClass("act");
			if($(this).parent().attr("tochange")=="ee"){
				if($(this).attr("isdate")=="m"){
					funs.echartsPie("jl-eepie-ec",jldata.eeData.pie);
					funs.echartsLine("jl-eeline-ec",jldata.eeData.line);
				}else{
					funs.echartsPie("jl-eepie-ec",jldata.eeData.pieY);
					funs.echartsLine("jl-eeline-ec",jldata.eeData.lineY);
				}
			}else{
				if($(this).attr("isdate")=="m"){
					funs.echartsPie("jl-wepie-ec",jldata.weData.pie);
					funs.echartsLine("jl-weline-ec",jldata.weData.line);
				}else{
					funs.echartsPie("jl-wepie-ec",jldata.weData.pieY);
					funs.echartsLine("jl-weline-ec",jldata.weData.lineY);
				}
			}
		})
	}
		
	
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

		// $(window).scroll(function(){
		// 	 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

		// });

	}

});