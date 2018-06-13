
var datas={
	rs:{
		tit:"设备数",
		data:{"在线":[71,"#10b0ec"],"离线":[29,"#f5ba5d"]}
	},
	tc:{
		tit:"预警信息数",
		data:{"t00":212,"t01":256,"t02":265,"t03":231,"t04":287,"t05":264,"t06":257,"t07":245,"t08":224,"t09":257,"t10":247,"t11":224,"t12":257,"t13":254,"t14":254,"t15":214,"t16":254,"t17":254,"t18":224,"t19":241,"t20":254,"t21":245,"t22":245,"t23":285}
	},
	tw:{
		tit:"预警数",
		data:{"5.10":45,"5.11":55,"5.12":36,"5.13":28,"5.14":64,"5.15":51,"5.16":20,"5.17":71,"5.18":42,"5.19":41}
	},
	rss:{
		tit:"正常运行的设备数",
		data:{"警灯":4,"LED屏幕":2,"工业预警器":4,"星光球机":8,"辅助照明灯":8}
	}
};

function xrtj(id,datas,tit){
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
			xAxis:  {
				type: 'value',
				axisLabel:{textStyle:{color:'rgba(255,255,255,0.3)'}},
				axisTick:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				axisLine:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				splitLine:{show:false}
			},
			yAxis: {
				type: 'category',
				splitLine:{show:false},
				axisTick:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				axisLabel:{textStyle:{color:'rgba(255,255,255,0.3)'}},
				axisLine:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				data:labels
			},
			series: [
				{
					name: tit,
					type: 'bar',
					barWidth:'60%',
					itemStyle:{normal:{color:'rgba(255,255,255,0.3)'}},
					data: values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}


function xrzb(id,datas,tit){
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
				formatter: "{b}: {d}%"
			},
			
			series: [
				{
					name:tit,
					type:'pie',
					//radius: ['60%','65%'],
					radius: '65%',
					avoidLabelOverlap: false,
					startAngle:20,
					center: ['50%', '50%'],
					itemStyle:{normal:{
					}},
					label:{normal:{textStyle:{fontSize:14},show:true,formatter: '{b}:{d}%'}},
					labelLine:{normal:{smooth:false,length:12,length2:8,show:true}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}


function xrzx(id,datas,tit){
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
				axisLabel:{textStyle:{color:'rgba(255,255,255,0.3)'}},
				axisTick:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				axisLine:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				splitLine:{show:false}
			},
			xAxis: {
				type: 'category',
				splitLine:{show:false},
				axisTick:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				axisLabel:{textStyle:{color:'rgba(255,255,255,0.3)'}},
				axisLine:{lineStyle:{color:'rgba(255,255,255,0.3)'}},
				data:labels
			},
			series: [
				{
					name: tit,
					type: 'line',
					barWidth:'60%',
					areaStyle: {normal: {}},
					smooth:true,
					itemStyle:{normal:{color:'rgba(255,255,255,0.3)'}},
					data: values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

function xrzb2(id,datas,tit){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push({value:datas[key],name:key});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b}: {c}件正常"
			},
			
			series: [
				{
					name:tit,
					type:'pie',
					radius: ['40%', '55%'],
					avoidLabelOverlap: false,
					startAngle:20,
					center: ['50%', '50%'],
					itemStyle:{normal:{
						color:'rgba(255,255,255,0.3)',
						borderWidth:1,
						borderColor:'rgba(0,0,0,0.3)'
					}},
					label:{normal:{/*formatter:"{b}\n{c}件正常",*/textStyle:{fontSize:12},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4,show:true}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}


function echartsDome(id){
	
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
	option = {
		tooltip : {
			formatter: "{a} <br/>{c} {b}"
		},
		toolbox: {
			show: true,
			feature: {
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		series : [
			{
				name: '速度',
				type: 'gauge',
				z: 3,
				min: 0,
				max: 220,
				splitNumber: 11,
				radius: '50%',
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						width: 10
					}
				},
				axisTick: {            // 坐标轴小标记
					length: 15,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: {           // 分隔线
					length: 20,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					backgroundColor: 'auto',
					borderRadius: 2,
					color: '#eee',
					padding: 3,
					textShadowBlur: 2,
					textShadowOffsetX: 1,
					textShadowOffsetY: 1,
					textShadowColor: '#222'
				},
				title : {
					// 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic'
				},
				detail : {
					// 其余属性默认使用全局文本样式，详见TEXTSTYLE
					formatter: function (value) {
						value = (value + '').split('.');
						value.length < 2 && (value.push('00'));
						return ('00' + value[0]).slice(-2)
							+ '.' + (value[1] + '00').slice(0, 2);
					},
					fontWeight: 'bolder',
					borderRadius: 3,
					backgroundColor: '#444',
					borderColor: '#aaa',
					shadowBlur: 5,
					shadowColor: '#333',
					shadowOffsetX: 0,
					shadowOffsetY: 3,
					borderWidth: 2,
					textBorderColor: '#000',
					textBorderWidth: 2,
					textShadowBlur: 2,
					textShadowColor: '#fff',
					textShadowOffsetX: 0,
					textShadowOffsetY: 0,
					fontFamily: 'Arial',
					width: 100,
					color: '#eee',
					rich: {}
				},
				data:[{value: 40, name: 'km/h'}]
			},
			{
				name: '转速',
				type: 'gauge',
				center: ['20%', '55%'],    // 默认全局居中
				radius: '35%',
				min:0,
				max:7,
				endAngle:45,
				splitNumber:7,
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					length:12,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: {           // 分隔线
					length:20,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer: {
					width:5
				},
				title: {
					offsetCenter: [0, '-30%'],       // x, y，单位px
				},
				detail: {
					// 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder'
				},
				data:[{value: 1.5, name: 'x1000 r/min'}]
			},
			{
				name: '油表',
				type: 'gauge',
				center: ['77%', '50%'],    // 默认全局居中
				radius: '25%',
				min: 0,
				max: 2,
				startAngle: 135,
				endAngle: 45,
				splitNumber: 2,
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					splitNumber: 5,
					length: 10,        // 属性length控制线长
					lineStyle: {        // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					formatter:function(v){
						switch (v + '') {
							case '0' : return 'E';
							case '1' : return 'Gas';
							case '2' : return 'F';
						}
					}
				},
				splitLine: {           // 分隔线
					length: 15,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer: {
					width:2
				},
				title : {
					show: false
				},
				detail : {
					show: false
				},
				data:[{value: 0.5, name: 'gas'}]
			},
			{
				name: '水表',
				type: 'gauge',
				center : ['77%', '50%'],    // 默认全局居中
				radius : '25%',
				min: 0,
				max: 2,
				startAngle: 315,
				endAngle: 225,
				splitNumber: 2,
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					show: false
				},
				axisLabel: {
					formatter:function(v){
						switch (v + '') {
							case '0' : return 'H';
							case '1' : return 'Water';
							case '2' : return 'C';
						}
					}
				},
				splitLine: {           // 分隔线
					length: 15,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer: {
					width:2
				},
				title: {
					show: false
				},
				detail: {
					show: false
				},
				data:[{value: 0.5, name: 'gas'}]
			}
		]
	};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}


	
	