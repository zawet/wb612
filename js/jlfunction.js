

define(function(require,exports) {//dedine闭包

exports.htmlajax=function(url,sucfun){
		var urlhtml="";
		$.ajax({
		  url: url,
		  cache: false,
		  success: function(html){
			 sucfun(html);
		  }
		});	
}

exports.getUrl=function(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}
exports.isNull=function (data){ 
    	return (data == "" || data == undefined || data == null) ? "kong" : data; 
	}

	 exports.indexOf=function(arr, str){
		// 如果可以的话，调用原生方法
		if(arr && arr.indexOf){
			return arr.indexOf(str);
		}
		 
		var len = arr.length;
		for(var i = 0; i < len; i++){
			// 定位该元素位置
			if(arr[i] == str){
				return i;
			}
		}
		 
		// 数组中不存在该元素
		return -1;
	}
	

	 exports.echartsGauge=function(id,datas){
	
		//渲染表格（想看明白请看ECharts 3.0官方api） 
		var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip : {
				formatter: "{a} <br/>{c} {b}"
			},
			
			series : [
				{
					name: '温度',
					type: 'gauge',
					z: 3,
					min: 0,
					max: 220,
					splitNumber: 11,
					radius: '98%',
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							width: 0
						}
					},
					axisTick: {            // 坐标轴小标记
						length: 3,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: '#00fefe',
							width:'1'
						}
					},
					pointer:{
						length:'96%',
						width:'4'
						
					},
					itemStyle:{
						color:"#00fefe"
					},
					splitLine: {           // 分隔线
						length: 6,         // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							color: '#00fefe',
							width:'1'
						}
					},
					axisLabel: {
						show:false,
						color: '#00fefe',
						padding: 3,
						
					},
					title : {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						show:false,
						fontSize: 8,
						fontStyle: 'italic'
					},
					detail : {
						// 其余属性默认使用全局文本样式，详见TEXTSTYLE
						formatter: function (value) {
							return  value+"%";
						},
						offsetCenter:['0','90%'],
						width: 100,
						fontSize:'14',
						color: '#00fefe',
						rich: {}
					},
					data:[{value:datas, name: '温度'}]
				}
			]
		};
	
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
	}

	 exports.echartsPie=function(id,datas){
		var labels = new Array();
		var values = new Array();
		for(var key in datas.data){
			labels.push(key);
			values.push({value:datas.data[key][0],name:key,itemStyle:{normal:{color:datas.data[key][1]}}});
		}
		
		//渲染表格（想看明白请看ECharts 3.0官方api） 
		var myChart = echarts.init(document.getElementById(id));
			option = {
				tooltip: {
					trigger: 'item',
					formatter: "{b}:\n {d}%"
				},
				
				series: [
					{
						name:datas.tit,
						type:'pie',
						//radius: ['60%','65%'],
						radius: '70%',
						avoidLabelOverlap: false,
						startAngle:0,
						center: ['50%', '50%'],
						itemStyle:{normal:{
						}},
						label:{normal:{textStyle:{fontSize:14},show:true,formatter: '{b}'}},
						labelLine:{normal:{smooth:true,length:6,length2:4,show:true}},
						data:values
					}
				]
			};
	
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
	}

	
 exports.echartsLine=function(id,datas){
	var labels = new Array();
	var values = new Array();
	for(var key in datas.data){
		labels.push(key);
		values.push(datas.data[key]);
	}
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				top:'5%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			yAxis:  {
				type: 'value',
				axisLabel:{textStyle:{color:'#acc4f9'}},
				axisTick:{lineStyle:{color:'#acc4f9'}},
				axisLine:{lineStyle:{color:'#acc4f9'}},
				splitLine:{show:false}
			},
			xAxis: {
				type: 'category',
				splitLine:{show:false},
				axisTick:{lineStyle:{color:'#acc4f9'}},
				axisLabel:{textStyle:{color:'#acc4f9'}},
				axisLine:{lineStyle:{color:'#acc4f9'}},
				data:labels
			},
			series: [
				{
					name: datas.tit,
					type: 'line',
					barWidth:'60%',
					smooth:true,
					itemStyle:{normal:{color:'#00fefe'}},
					data: values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

 exports.echartsBar=function(id,datas){
	var labels = new Array();
	var values = new Array();
	var value1 = new Array();
	var value2 = new Array();
	var value3 = new Array();
	var value4 = new Array();

	for(var key in datas.data){
		labels.push(key);
		value1.push(datas.data[key][0]);
		value2.push(datas.data[key][1]);
		value3.push(datas.data[key][2]);
		value4.push(datas.data[key][3]);
		//console.log(datas.data[key][0]);
	}
	 

	var labelInfo={
		normal: {
        show: false,
        position: "insideBottomLeft",
        distance: "15",
        align: "left",
        verticalAlign: "left",
        rotate: "90",
        formatter: '{a} : {c}',
        fontSize: 12,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
	}
}
	
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				textStyle:{color:"#fff"},
				data:  datas.tit
			},
			grid: {
				top:'15%',
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			yAxis:  {
				type: 'value',
				axisLabel:{textStyle:{color:'#acc4f9'}},
				axisTick:{lineStyle:{color:'#acc4f9'}},
				axisLine:{lineStyle:{color:'#acc4f9'}},
				splitLine:{show:false}
			},
			xAxis: {
				type: 'category',
				splitLine:{show:false},
				axisTick:{show:true,lineStyle:{color:'#acc4f9'}},
				axisLabel:{textStyle:{color:'#acc4f9'}},
				axisLine:{lineStyle:{color:'#acc4f9'}},
				data:labels
			},
			series: [
				{
					name: datas.tit[0],
					type: 'bar',
					itemStyle:{normal:{color:'#07c0c0'}},
					barGap:"0%",
					label:labelInfo,
					data: value1
				},
				{
					name: datas.tit[1],
					type: 'bar',
					itemStyle:{normal:{color:'#b46b0d'}},
					barGap:"0%",
					label:labelInfo,
					data: value2
				},
				{
					name: datas.tit[2],
					type: 'bar',
					itemStyle:{normal:{color:'#0864c2'}},
					barGap:"0%",
					label:labelInfo,
					data: value3
				},
				{
					name: datas.tit[3],
					type: 'bar',
					itemStyle:{normal:{color:'#bb2e41'}},
					barGap:"0%",
					label:labelInfo,
					data: value4
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

// for(var i=0;i<jldata.pdData.length;i++){
		// 	$("#pdMoudle .roomNumber").html(jldata.pdData[i].roomNumber);
		// 	$("#pdMoudle .roomD").html(jldata.pdData[i].roomD);
		// 	$("#pdMoudle .roomRH").html(jldata.pdData[i].roomRH);

		// 	$("#pdMoudle .jl-electric-ec").attr("id","jl-electric-ec"+i);
		// 	pdec.push(jldata.pdData[i].Ds);

		// 	$("#pdMoudle .roomDl,#pdMoudle .roomDr").html("");
		// 	for( var j=0;j<jldata.pdData[i].roomDl.length;j++){
		// 		$("#pdMoudle .roomDl").append('<b >'+jldata.pdData[i].roomDl[j]+'  <span>°C</span>');
		// 	}
		// 	for( var k=0;k<jldata.pdData[i].roomDr.length;k++){
		// 		$("#pdMoudle .roomDr").append('<b >'+jldata.pdData[i].roomDr[k]+'  <span>A</span>');
		// 	}
			
		// 	$(".pd .swiper-wrapper").append($("#pdMoudle").html());
		// }

		// var pd = new Swiper(".pd", {
		// 	slidesPerView :3,
		// 	autoplay : 3000
			
		// });

		// for(var i=0;i<jldata.sbData.length;i++){
		// 	$("#sbMoudle .roomNumber").html(jldata.sbData[i].roomNumber);
		// 	$("#sbMoudle .roomD").html(jldata.sbData[i].roomD);
		// 	$("#sbMoudle .roomRH").html(jldata.sbData[i].roomRH);
		// 	$("#sbMoudle .roomDr").html("");
		// 	for( var k=0;k<jldata.sbData[i].roomDr.length;k++){
		// 		$("#sbMoudle .roomDr").append('<b >'+jldata.sbData[i].roomDr[k]+'  <span>A</span>');
		// 	}

		// 	$("#sbMoudle .roomHZ").html(jldata.sbData[i].roomHZ+"<span>HZ</span>");

		// 	if(jldata.sbData[i].runing){
		// 		$("#sbMoudle .runing").addClass("ing").removeClass("un").html("运行");
		// 		$("#sbMoudle .roomHZ,#sbMoudle .roomDr").removeClass("yc");
		// 		$("#sbMoudle .jcl-cont-icon").removeClass("un");
		// 	}else{
		// 		$("#sbMoudle .runing").addClass("un").removeClass("ing").html("停止");
		// 		$("#sbMoudle .roomHZ,#sbMoudle .roomDr").addClass("yc");
		// 		$("#sbMoudle .jcl-cont-icon").addClass("un");
		// 	}
			
		// 	$(".sb .swiper-wrapper").append($("#sbMoudle").html());
		// }

		// var sb = new Swiper(".sb", {
		// 	slidesPerView :3,
		// 	autoplay : 3000
			
		// });

		// for(var i=0;i<jldata.grData.length;i++){
		// 	$("#grMoudle .roomNumber").html(jldata.grData[i].roomNumber);
		// 	$("#grMoudle .roomD").html(jldata.grData[i].roomD);
		// 	$("#grMoudle .roomRH").html(jldata.grData[i].roomRH);
		// 	$("#grMoudle .roomDr").html("");
		// 	for( var k=0;k<jldata.grData[i].roomDr.length;k++){
		// 		$("#grMoudle .roomDr").append('<b >'+jldata.grData[i].roomDr[k]+'  <span>A</span>');
		// 	}

		// 	if(jldata.grData[i].runing){
		// 		$("#grMoudle .runing").addClass("ing").removeClass("un").html("运行");
		// 		$("#grMoudle .roomDr").removeClass("yc");
		// 		$("#grMoudle .jcl-cont-icon").removeClass("un");
		// 	}else{
		// 		$("#grMoudle .runing").addClass("un").removeClass("ing").html("停止");
		// 		$("#grMoudle .roomDr").addClass("yc");
		// 		$("#grMoudle .jcl-cont-icon").addClass("un");
		// 	}
			
			
		// 	$(".gr .swiper-wrapper").append($("#grMoudle").html());
		// }

		// var gr = new Swiper(".gr", {
		// 	slidesPerView :3,
		// 	autoplay : 3000
			
		// });

		// $(window).scroll(function(){
		// 	 var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

		// });


});