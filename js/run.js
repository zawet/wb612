define(function (require, exports) { //dedine闭包  
	var loads=require("./load");//加载机制引用
	var funs=require("./jlfunction");//函数导入
	var jldata=require("./jlData");//获取模拟数据
	var jlconfig=require("./jlConfig");//获取配置项（图片地址和异步地址）
	
exports.jl = function () {
	
	loads.startPreload(jlconfig.loadimg,function(){
		//加载图片
		$(".loadprogress").fadeOut(200);
		for (var key in loads.preload._loadItemsById) {
            $("." + key).html(loads.preload.getResult(key));
		}
		loads.pageimg($(".page"), 1920, 1080);

		//渲染右三项并进行轮播实例
		domDraw("pdMoudle",jldata.pdData,"pd");
		domDraw("sbMoudle",jldata.sbData,"sb");
		domDraw("grMoudle",jldata.grData,"grs");
		sw();

		//加载初始化数据
		loadData(jldata);

		//浏览器窗户变化时
		window.onresize = function () {
			loads.pageimg($(".page"), 1920, 1080);
			dataPOST();
		}
		//摄像头点击后
		$(".cameras").click(function(){
			console.log("我是摄像头："+$(this).index());
			$(".videobox").slideDown(200);
		});
		$(".videoclose").click(function(){
			$(".videobox").slideUp(200);
		})
		//ajaxData(jlconfig.ajaxUrl[0][0],jlconfig.ajaxUrl[0][1])//测试用的
		
		//RfData();//刷新数据
	})
}

//数据刷新机制
function RfData(){
	//4秒刷新一次数据，刷新20秒，休息10秒，再开始刷	
	toRfData();
	setInterval(function(){
		toRfData();
	},30000);

	function toRfData(){
		//每4秒刷新数据
		var count=1;
		console.log("数据开始刷新");
		var rfData= setInterval(function() {
			console.log("刷新："+count++);
			dataPOST();//异步获取数据后进行数据加载在页面上显示
		},4000);
		//更新20秒后停止刷新数据
		setTimeout(function(){
			clearInterval(rfData);
			console.log("数据停止刷新");
		},20000)
	}	
}

//循环异步获取
function dataPOST(){
	for(var d=0;d<jlconfig.ajaxUrl.length;d++){
		ajaxData(jlconfig.ajaxUrl[d][0],jlconfig.ajaxUrl[d][1]);
	}
}
//异步获取数据
function ajaxData(url,key){
	$.ajax({ 
		type: "POST",
		url: url,  
		dataType: 'json',
		crossDomain: true,
		success: function(data){
			//这里要让异步过来的数据跟本地jldata的模拟数据的格式和命名对好，
			console.log(data,key);
			//jldata[key]=data;
			//loadData(jldata);
		}
	});
}




//渲染dom
function domDraw(mID,data,drwaID){
	for(var i=0;i<data.length;i++){
		$("."+drwaID+" .swiper-wrapper").append($("#"+mID).html());
	}
}

//数据加载
	function loadData(JDATA){
		//水能电能
		$(".eetotalEnergy").html(JDATA.eeData.totalEnergy);
		$(".wetotalEnergy").html(JDATA.weData.totalEnergy);
		funs.echartsLine("jl-eeline-ec",JDATA.eeData.line);
		funs.echartsPie("jl-eepie-ec",JDATA.eeData.pie);
		funs.echartsLine("jl-weline-ec",JDATA.weData.line);
		funs.echartsPie("jl-wepie-ec",JDATA.weData.pie);
		$(".jl-radio").on("click",".jl-rali",function(){
			$(this).addClass("act").siblings().removeClass("act");
			if($(this).parent().attr("tochange")=="ee"){
				if($(this).attr("isdate")=="m"){
					funs.echartsPie("jl-eepie-ec",JDATA.eeData.pie);
					funs.echartsLine("jl-eeline-ec",JDATA.eeData.line);
					$(".eetotalEnergy").html(JDATA.eeData.totalEnergy);
				}else{
					funs.echartsPie("jl-eepie-ec",JDATA.eeDataY.pie);
					funs.echartsLine("jl-eeline-ec",JDATA.eeDataY.line);
					$(".eetotalEnergy").html(JDATA.eeDataY.totalEnergy);
				}
			}else{
				if($(this).attr("isdate")=="m"){
					funs.echartsPie("jl-wepie-ec",JDATA.weData.pie);
					funs.echartsLine("jl-weline-ec",JDATA.weData.line);
					$(".wetotalEnergy").html(JDATA.weData.totalEnergy);
				}else{
					funs.echartsPie("jl-wepie-ec",JDATA.weDataY.pie);
					funs.echartsLine("jl-weline-ec",JDATA.weDataY.line);
					$(".wetotalEnergy").html(JDATA.weDataY.totalEnergy);
				}
			}
		});
		
		//停车场
		funs.echartsBar("jl-plline-ec",JDATA.plData);
		
		//右边三排
		mouldeLoadData(JDATA.pdData,"pd");
		mouldeLoadData(JDATA.sbData,"sb");
		mouldeLoadData(JDATA.grData,"grs");
		for(var ii=0;ii<JDATA.pdData.length;ii++){funs.echartsGauge("jl-electric-ec"+ii,JDATA.pdData[ii].Ds);}
		//其他
		for(var key in JDATA.others){
			for(var inkey in JDATA.others[key]){
				$("."+key).find("."+inkey).html(JDATA.others[key][inkey]);
			}	
		}
	
	}

//轮播机制
	function sw(){
		var swpd = new Swiper(".pd", {
			slidesPerView : 3,
			slidesPerGroup : 3,
			autoplayDisableOnInteraction:false,
			autoplay :6000
			
	
		});
		var swsb = new Swiper(".sb", {
			slidesPerView :3,
			autoplay : 6000,
			slidesPerGroup : 3,
			autoplayDisableOnInteraction:false,
			//loop : true
		});
		var swgr = new Swiper(".grs", {
			slidesPerView :3,
			//autoplay : 2000
		});
	}


	//右三项数据加载
	function mouldeLoadData(data,drwaID){
		var changeID=$("."+drwaID+" .swiper-wrapper .swiper-slide")
		for(var i=0;i<data.length;i++){
			changeID.eq(i).find(".roomNumber").html(data[i].roomNumber);
			changeID.eq(i).find(".roomD").html(data[i].roomD);
			changeID.eq(i).find(".roomRH").html(data[i].roomRH);

			changeID.eq(i).find(".roomDr").html("");
			for( var k=0;k<data[i].roomDr.length;k++){
				changeID.eq(i).find(".roomDr").append('<b >'+data[i].roomDr[k]+'  <span>A</span>');
			}

			if(drwaID=="pd"){
				changeID.eq(i).find(".jl-electric-ec").attr("id","jl-electric-ec"+i);
				changeID.eq(i).find(".totalPower").html(data[i].totalPower);
				changeID.eq(i).find(".powerFactor").html(data[i].powerFactor);
				changeID.eq(i).find(".roomDl").html("");	
				for( var j=0;j<data[i].roomDl.length;j++){
					changeID.eq(i).find(".roomDl").append('<b >'+data[i].roomDl[j]+'  <span>°C</span>');
				}
			}else{
				if(drwaID=="sb"){
					changeID.eq(i).find(".roomHZ").html(data[i].roomHZ+"<span>HZ</span>");
					changeID.eq(i).find(".waterLevel").html(data[i].waterLevel);
				}
				if(drwaID=="grs"){
					changeID.eq(i).find(".oilLevel").html(data[i].oilLevel);
				}
				if(data[i].runing){
					changeID.eq(i).find(".runing").addClass("ing").removeClass("un").html("运行");
					changeID.eq(i).find(".roomHZ").removeClass("yc");
					changeID.eq(i).find(".roomDr").removeClass("yc");
					changeID.eq(i).find(".jcl-cont-icon").removeClass("un");
				}else{
					changeID.eq(i).find(".runing").addClass("un").removeClass("ing").html("停止");
					changeID.eq(i).find(".roomHZ").addClass("yc");
					changeID.eq(i).find(".roomDr").addClass("yc");
					changeID.eq(i).find(".jcl-cont-icon").addClass("un");
				}
			}
			
		}

		
	}

	

});