

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
	

	 exports.echartsGauge=function(id){
	
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
					data:[{value: 13, name: ''}]
				}
			]
		};
	
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
	}

	 exports.echartsPie=function(id,datas,tit){
		var labels = new Array();
		var values = new Array();
		for(var key in datas){
			labels.push(key);
			values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
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
						name:tit,
						type:'pie',
						//radius: ['60%','65%'],
						radius: '80%',
						avoidLabelOverlap: false,
						startAngle:0,
						center: ['50%', '50%'],
						itemStyle:{normal:{
						}},
						label:{normal:{textStyle:{fontSize:14},show:false,formatter: '{b}: \n {d}%'}},
						labelLine:{normal:{smooth:false,length:12,length2:8,show:true}},
						data:values
					}
				]
			};
	
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
	}

	
 exports.echartsLine=function(id,datas,tit){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push(datas[key]);
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
					name: tit,
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

 exports.echartsBar=function(id,datas,tit){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push(datas[key]);
	}
	var labelInfo={
		normal: {
        show: true,
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
				axisTick:{show:true,lineStyle:{color:'#acc4f9'}},
				axisLabel:{textStyle:{color:'#acc4f9'}},
				axisLine:{lineStyle:{color:'#acc4f9'}},
				data:labels
			},
			series: [
				{
					name: tit[0],
					type: 'bar',
					itemStyle:{normal:{color:'#418fb4'}},
					barGap:"0%",
					label:labelInfo,
					data: values
				},
				{
					name: tit[1],
					type: 'bar',
					itemStyle:{normal:{color:'#003366'}},
					barGap:"0%",
					label:labelInfo,
					data: values
				},
				{
					name: tit[2],
					type: 'bar',
					itemStyle:{normal:{color:'#045789'}},
					barGap:"0%",
					label:labelInfo,
					data: values
				},
				{
					name: tit[3],
					type: 'bar',
					itemStyle:{normal:{color:'#bb2e41'}},
					barGap:"0%",
					label:labelInfo,
					data: values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

});