define(function (require, exports) { //dedine闭包  
	var loads=require("./load");//加载机制引用
	var jldata=require("./jlData");//数据导入
	var jldataAjax=[];
	var funs=require("./jlfunction");//函数导入
	var pdec=[];//缓存度数
	//var swpd,swsb,swgr;
	 
	//模拟异步过来后的数据（参照）
	// var jldataAjaxMn={
	// 	eeDataY:{
	// 		"totalEnergy":15290.0,
	// 		"timeline":[{"1月":1558.2},{"2月":1160.4},{"3月":1271.1},{"4月":1908.6},{"5月":1186.0},{"6月":1102.1}],
	// 		" pie":{"房1":500,"房2":300,"房3":400}
	// 	},
	// 	eeData:{
	// 		"totalEnergy":15290.0,
	// 		"timeline":[
	// 			{"6.1":127.5},{"6.2":104.3},{"6.3":110.6},{"6.4":152.0},{"6.5":144.7},{"6.6":152.6},{"6.7":169.4},{"6.8":136.4},
	// 			{"6.9":164.3},{"6.10":125.3},{"6.11":144.7},{"6.12":176.4},{"6.13":105.7},{"6.14":152.1},{"6.15":197.3}
	// 		],
	// 		"pie":{"房1":500,"房2":300,"房3":400}
	// 	},
	
	
	// 	weDataY:{
	// 	"totalEnergy":15290.0,
	// 	"timeline":[{"1月":1558.2},{"2月":1160.4},{"3月":1271.1},{"4月":1908.6},{"5月":1186.0},{"6月":1102.1}],
	// 	"pie":{"房1":500,"房2":300,"房3":400}
	// 	},
	// 	weData:{
	// 		"totalEnergy":15290.0,
	// 		"timeline":[
	// 			{"6.1":127.5},{"6.2":104.3},{"6.3":110.6},{"6.4":152.0},{"6.5":144.7},{"6.6":152.6},{"6.7":169.4},{"6.8":136.4},
	// 			{"6.9":164.3},{"6.10":125.3},{"6.11":144.7},{"6.12":176.4},{"6.13":105.7},{"6.14":152.1},{"6.15":197.3}
	// 		],
	// 		" pie":{"房1":500,"房2":300,"房3":400}
	// 	},
	
	// 	plData:[
	// 		{"6.1":[161,176,109,128]},
	// 		{"6.2":[124,115,156,135]},
	// 		{"6.3":[147,149,149,190]},
	// 		{"6.4":[181,168,128,118]},
	// 		{"6.5":[155,141,165,103]},
	// 		{"6.6":[156,142,193,157]},
	// 		{"6.7":[114,135,136,117]},
	// 		{"6.8":[110,147,126,196]},
	// 		{"6.9":[171,122,109,192]},
	// 		{"6.10":[131,166,179,168]},
	// 		{"6.11":[153,162,116,123]},
	// 		{"6.12":[113,164,194,189]},
	// 		{"6.13":[190,179,118,170]},
	// 		{"6.14":[137,117,151,139]},
	// 		{"6.15":[191,106,126,120]}
	// 	],
	
	// 	pdData:[
	// 		{"roomName":"配电1房","totalPower":15241.4,"powerFactor":0.88,"roomTemperature":30.3,"roomHumidity":66,"waterImmersion":"无","tempA":36.8,"tempB":42.3,"tempC":39.6,"voltageA":232.5,"voltageB":228.6,"voltageC":241.8,"currentA":60.5,"currentB":70.8,"currentC":92.6},
	// 		{"roomName":"配电2房","totalPower":19968.5,"powerFactor":0.88,"roomTemperature":30.3,"roomHumidity":66,"waterImmersion":"无","tempA":36.8,"tempB":42.3,"tempC":39.6,"voltageA":232.5,"voltageB":228.6,"voltageC":241.8,"currentA":60.5,"currentB":70.8,"currentC":92.6},
	// 		{"roomName":"配电3房","totalPower":15590.4,"powerFactor":0.88,"roomTemperature":30.3,"roomHumidity":66,"waterImmersion":"无","tempA":36.8,"tempB":42.3,"tempC":39.6,"voltageA":232.5,"voltageB":228.6,"voltageC":241.8,"currentA":60.5,"currentB":70.8,"currentC":92.6}
	// 	],
	// 	sbData:[
	// 		{"roomName":"水泵1房","waterLevel":50,"roomTemperature":30.3,"roomHumidity":66,"waterImmersion":"无","voltageA":232.5,"voltageB":228.6,"voltageC":241.8,"currentA":60.5,"currentB":70.8,"currentC":92.6,"rate":100,"status":"运行"},
	// 		{"roomName":"水泵2房","waterLevel":50,"roomTemperature":30.3,"roomHumidity":66,"waterImmersion":"无","voltageA":232.5,"voltageB":228.6,"voltageC":241.8,"currentA":60.5,"currentB":70.8,"currentC":92.6,"rate":100,"status":"停止"},
	// 		{"roomName":"水泵3房","waterLevel":50,"roomTemperature":30.3,"roomHumidity":66,"waterImmersion":"无","voltageA":232.5,"voltageB":228.6,"voltageC":241.8,"currentA":60.5,"currentB":70.8,"currentC":92.6,"rate":100,"status":"运行"}
	// 	],
	
	
	// 	grData:[
	// 		{"roomName":"发电机1房","oilLevel":50,"roomTemperature":30.3,"roomHumidity":66,"voltage":232.5,"current":60.5,"status":"运行"},
	// 		{"roomName":"发电机2房","oilLevel":50,"roomTemperature":30.3,"roomHumidity":66,"voltage":232.5,"current":60.5,"status":"停止"},
	// 		{"roomName":"发电机3房","oilLevel":50,"roomTemperature":30.3,"roomHumidity":66,"voltage":232.5,"current":60.5,"status":"运行"}
	// 	],
	
	
	// 	others:{
	// 		"Charge":{"totalNum":60,"faultNum":10,"curChargeNum":20,"curPower":3000.3},
	// 		"EntranceGuard":{"totalNum":600,"faultNum":100,"openTimes":2000,"closeTimes":3000},
	// 		"patrol":{"totalPatrol":60,"curPatrol":10},
	// 		"perimeterSecurity":{"alarmTimes":300},
	// 		"camera":{"totalNum":60,"offlineNum":10},
	// 		"alarmInfo":{"totalAlarm":60,"handledAlarm":10},
	// 		"landscaping":{"status":"启动","soilMoisture":50}
	// 	}
	
	// };

	
    //循环异步数据
	
	function dataPOST(){
		for(var d=0;d<jldata.ajaxUrl.length;d++){
			jldataAjax.push(ajaxData(jldata.ajaxUrl[d]));
		}
	}
	
exports.jl = function () {
	
	loads.startPreload(jldata.loadimg,function(){
		$(".loadprogress").fadeOut(200);
		for (var key in loads.preload._loadItemsById) {
            $("." + key).html(loads.preload.getResult(key));
		}
		loads.pageimg($(".page"), 1920, 1080);
		loadafter();
		window.onresize = function () {
			loads.pageimg($(".page"), 1920, 1080);
			loadafter();
		}
		
		//每2秒刷新数据
		// setInterval(() => {
		// 	loadafter();
		// },2000);
		
	})
}

	function loadafter(){
		//dataPOST();//异步获取数据
		//console.log(jldataAjax);

		//这里要让jldataAjax异步过来的数据跟本地jldata的模拟数据对好，
		//jldataAjax是一个数组，
		//jldata是json,里面分了很多模块数据，把jldataAjax的数据赋给jldata，就可以了，要看清对应数据的细节作用

		//水能电能
		$(".eetotalEnergy").html(jldata.eeData.totalEnergy);
		$(".wetotalEnergy").html(jldata.weData.totalEnergy);
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
					$(".eetotalEnergy").html(jldata.eeData.totalEnergy);
				}else{
					funs.echartsPie("jl-eepie-ec",jldata.eeDataY.pie);
					funs.echartsLine("jl-eeline-ec",jldata.eeDataY.line);
					$(".eetotalEnergy").html(jldata.eeDataY.totalEnergy);
				}
			}else{
				if($(this).attr("isdate")=="m"){
					funs.echartsPie("jl-wepie-ec",jldata.weData.pie);
					funs.echartsLine("jl-weline-ec",jldata.weData.line);
					$(".wetotalEnergy").html(jldata.weData.totalEnergy);
				}else{
					funs.echartsPie("jl-wepie-ec",jldata.weDataY.pie);
					funs.echartsLine("jl-weline-ec",jldata.weDataY.line);
					$(".wetotalEnergy").html(jldata.weDataY.totalEnergy);
				}
			}
		});
		
		//停车场
		funs.echartsBar("jl-plline-ec",jldata.plData);
		
		//右边三排
		mouldeDrwa("pdMoudle",jldata.pdData,"pd");
		mouldeDrwa("sbMoudle",jldata.sbData,"sb");
		mouldeDrwa("grMoudle",jldata.grData,"grs");

		var swpd = new Swiper(".pd", {
			slidesPerView :3,
			autoplay : 100
		});
		var swsb = new Swiper(".sb", {
			slidesPerView :3,
			autoplay : 100
		});
		var swgr = new Swiper(".grs", {
			slidesPerView :3,
			autoplay : 100
		});

		for(var ii=0;ii<pdec.length;ii++){funs.echartsGauge("jl-electric-ec"+ii,pdec[ii]);}

		st();
		var l=0;
		setInterval(() => {
			st();
			//console.log(l++);
		 },9600);

		 function st(){
			swpd.stopAutoplay();
			swsb.stopAutoplay();
			swgr.stopAutoplay();

			setTimeout(() => {
				swpd.startAutoplay();
				setTimeout(() => {swpd.stopAutoplay();},100);
				swsb.stopAutoplay();
				swgr.stopAutoplay();
			}, 3000);
			setTimeout(() => {
				swpd.stopAutoplay();
				swsb.startAutoplay();
				setTimeout(() => {swsb.stopAutoplay();},100);
				swgr.stopAutoplay();
			}, 6000);
			setTimeout(() => {
				swpd.stopAutoplay();
				swsb.stopAutoplay();
				swgr.startAutoplay();
				setTimeout(() => {swgr.stopAutoplay();},100);
			},9000);
		 }
		
		


		//其他
		for(var key in jldata.others){
			for(var inkey in jldata.others[key]){
				$("."+key).find("."+inkey).html(jldata.others[key][inkey]);
			}	
		}
	
	}

	function mouldeDrwa(mID,data,drwaID){
		for(var i=0;i<data.length;i++){
			$("#"+mID+" .roomNumber").html(data[i].roomNumber);
			$("#"+mID+" .roomD").html(data[i].roomD);
			$("#"+mID+" .roomRH").html(data[i].roomRH);

			$("#"+mID+" .roomDr").html("");
			for( var k=0;k<data[i].roomDr.length;k++){
				$("#"+mID+" .roomDr").append('<b >'+data[i].roomDr[k]+'  <span>A</span>');
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

		
	}

	function ajaxData(url){
		$.ajax({ 
			type: "POST",
			url: url,  
			dataType: 'jsonp',
			crossDomain: true,
			success: function(data){
				return data;
			}
		});
	}

});