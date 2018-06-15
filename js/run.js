define(function (require, exports) { //dedine闭包  
	var loads=require("./load");//加载机制引用
	var jldata=require("./jlData");//数据导入
	var funs=require("./jlfunction");//函数导入
	
	var pdec=[];//缓存度数
 	var swpd,swsb,swgr;
	
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
		
		// setInterval(() => {
		// 	loadafter();
		// 	console.log("111");
		// },2000);
		
	})
}

	function loadafter(){

		//水能电能
		funs.echartsLine("jl-eeline-ec",jldata.eeData.line);
		funs.echartsPie("jl-eepie-ec",jldata.eeData.pie);
		funs.echartsLine("jl-weline-ec",jldata.weData.line);
		funs.echartsPie("jl-wepie-ec",jldata.weData.pie);
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
		});
		
		//停车场
		funs.echartsBar("jl-plline-ec",jldata.plData);
		
		//右边三排
		mouldeDrwa("pdMoudle",jldata.pdData,"pd","swpd");
		mouldeDrwa("sbMoudle",jldata.sbData,"sb","swsb");
		mouldeDrwa("grMoudle",jldata.grData,"gr","swgr");
		for(var ii=0;ii<pdec.length;ii++){funs.echartsGauge("jl-electric-ec"+ii,pdec[ii]);}
	
	}

	function mouldeDrwa(mID,data,drwaID,sw){
		for(var i=0;i<data.length;i++){
			$("#"+mID+" .roomNumber").html(data[i].roomNumber);
			$("#"+mID+" .roomD").html(data[i].roomD);
			$("#"+mID+" .roomRH").html(data[i].roomRH);
			$("#"+mID+" .roomDr").html("");
			for( var k=0;k<data[i].roomDr.length;k++){
				$("#"+mID+".roomDr").append('<b >'+data[i].roomDr[k]+'  <span>A</span>');
			}

			if(drwaID=="pd"){
				$("#"+mID+" .jl-electric-ec").attr("id","jl-electric-ec"+i);
				pdec.push(data[i].Ds);

				$("#"+mID+" .roomDl").html("");	
				for( var j=0;j<data[i].roomDl.length;j++){
					$("#"+mID+" .roomDl").append('<b >'+data[i].roomDl[j]+'  <span>°C</span>');
				}
			}else{
				if(drwaID=="sb"){
					$("#"+mID+" .roomHZ").html(data[i].roomHZ+"<span>HZ</span>");
				}
				if(data[i].runing){
					$("#"+mID+" .runing").addClass("ing").removeClass("un").html("运行");
					$("#"+mID+" .roomHZ,#"+mID+" .roomDr").removeClass("yc");
					$("#"+mID+" .jcl-cont-icon").removeClass("un");
				}else{
					$("#"+mID+" .runing").addClass("un").removeClass("ing").html("停止");
					$("#"+mID+" .roomHZ,#"+mID+" .roomDr").addClass("yc");
					$("#"+mID+" .jcl-cont-icon").addClass("un");
				}
			}
			$("."+drwaID+" .swiper-wrapper").append($("#"+mID).html());
		}

		sw = new Swiper("."+drwaID, {
			slidesPerView :3,
			autoplay : 3000
		});
	}

});