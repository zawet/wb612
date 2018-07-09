define({ //dedine闭包 
        
        weData: {
                "totalEnergy":1290.0,
                line: {
                        tit: "水能消耗",
                        data: {"5.1": 45,"5.2": 55, "5.3": 36,"5.4": 28,"5.5": 64,"5.6": 51,"5.7": 20,"5.8": 71,"5.9": 42,"5.10": 45,
                        "5.11": 55, "5.12": 36,"5.13": 28,"5.14": 64,"5.15": 51,"5.16": 20,"5.17": 71,"5.18": 42,"5.19": 41,
                        "5.20": 55, "5.21": 36,"5.22": 28,"5.23": 64,"5.24": 51,"5.25": 20,"5.26": 71,"5.27": 42,"5.28": 28,"5.29": 59,"5.30": 30,"5.31": 48}
                },
                pie: { 
                        tit: "水能耗能占比",
                        data: {
                                "房111111": [71, "#07c0c0 "],
                                "房222222": [29, "#ffb768"],
                                "房33333333": [19, "#cf3b6f"]
                        }
                },
        },
        weDataY:{
                "totalEnergy":15290.0,
                line: {
                        
                        tit: "水能年消耗",
                        data: {"1月": 405,"2月": 535, "3月": 376,"4月": 218,"5月": 654,"6月": 521,"7月": 270,"8月": 731,"9月": 422,"10月": 719,"11月": 441,"12月": 401}
                },
                pie: {
                        tit: "水能耗能年占比",
                        data: {
                                "房13222": [7001, "#07c0c0 "],
                                "房23se": [2009, "#ffb768"],
                                "房3送到附近": [1009, "#cf3b6f"]
                        }
                }
        
            
        },
        eeData: {
                "totalEnergy":1590.0,
                line: {
                        tit: "电能消耗",
                        data: {
                                "5.10": 45,
                                "5.11": 55,
                                "5.12": 36,
                                "5.13": 28,
                                "5.14": 64,
                                "5.15": 51,
                                "5.16": 20,
                                "5.17": 71,
                                "5.18": 42,
                                "5.19": 41
                        }
                },
                pie: {
                        tit: "电能耗能占比",
                        data: {
                                "房1胜多负少": [71, "#07c0c0 "],
                                "房2开放接口": [29, "#ffb768"],
                                "房32委任为": [19, "#cf3b6f"]
                        }
                }
        },
        eeDataY: {
                "totalEnergy":15690.0,
                line: {
                        tit: "电能年消耗",
                        data: {"1月": 405,"2月": 535, "3月": 376,"4月": 218,"5月": 654,"6月": 521,"7月": 270,"8月": 731,"9月": 422,"10月": 719,"11月": 441,"12月": 401}
                },
                pie: {
                        tit: "电能耗能年占比",
                        data: {
                                "房1": [7001, "#07c0c0 "],
                                "房2": [2009, "#ffb768"],
                                "房3": [1009, "#cf3b6f"]
                        }
                }
        },
        plData: {
                tit: ["车位总数", "剩余车位数", "车流量", "收费"],
                data: {
                        "6.1":[120,100,240,300],
                        "6.2":[120,85,246,340],
                        "6.3":[120,90,252,423],
                        "6.4":[120,60,239,292],
                        "6.5":[120,50,261,534],
                        "6.6":[120,100,240,300],
                        "6.7":[120,85,246,340],
                        "6.8":[120,90,252,423],
                        "6.9":[120,60,239,292],
                        "6.10":[120,50,261,534],
                        "6.11":[120,100,240,300],
                        "6.12":[120,85,246,340],
                        "6.13":[120,90,252,423],
                        "6.14":[120,60,239,292],
                        "6.15":[120,50,261,534],
                        "6.16":[120,100,240,300],
                        "6.17":[120,85,246,340],
                        "6.18":[120,90,252,423],
                        "6.19":[120,60,239,292],
                        "6.20":[120,50,261,534],
                        "6.21":[120,100,240,300],
                        "6.22":[120,85,246,340],
                        "6.23":[120,90,252,423],
                        "6.24":[120,60,239,292],
                        "6.25":[120,50,261,534],
                        "6.26":[120,85,246,340],
                        "6.27":[120,90,252,423],
                        "6.28":[120,60,239,292],
                        "6.29":[120,50,261,534],
                        "6.30":[120,50,261,534]
                }
        },
        pdData:[//配电房数据
           {roomNumber:"1房1机",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"13","totalPower":15241.4,"powerFactor":0.88},
           {roomNumber:"1房2机",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"18","totalPower":15241.4,"powerFactor":0.88},
           {roomNumber:"1房3机",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"23","totalPower":15241.4,"powerFactor":0.88},
           {roomNumber:"2房1机",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"60","totalPower":15241.4,"powerFactor":0.88}, 
           {roomNumber:"3房1机",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"40","totalPower":15241.4,"powerFactor":0.88},      
        ],
        sbData:[//水泵房数据
                {roomNumber:"1房1泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"1房2泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"1房3泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"1房4泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"1房5泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:false,"waterLevel":50}, 
                {roomNumber:"1房6泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:false,"waterLevel":50},
                {roomNumber:"2房1泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房2泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房3泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房4泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房5泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:false,"waterLevel":50}, 
                {roomNumber:"2房6泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:false,"waterLevel":50},  
                {roomNumber:"2房7泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房8泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房9泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房10泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"2房11泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:false,"waterLevel":50}, 
                {roomNumber:"2房12泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:false,"waterLevel":50},  
                {roomNumber:"3房1泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"3房2泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"3房3泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50},
                {roomNumber:"3房4泵",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true,"waterLevel":50}          
             ],
        grData:[//发动机房数据
                {roomNumber:"房1",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:true,"oilLevel":50},
                {roomNumber:"房2",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:true,"oilLevel":50},
                {roomNumber:"房3",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:true,"oilLevel":50}    
             ],
        others:{
                "Charge":{"totalNum":60,"faultNum":10,"curChargeNum":20,"curPower":3000.3},
                "EntranceGuard":{"totalNum":600,"faultNum":100,"openTimes":2000,"closeTimes":3000},
                "patrol":{"totalPatrol":60,"curPatrol":10},
                "perimeterSecurity":{"alarmTimes":300},
                "camera":{"totalNum":60,"offlineNum":10},
                "alarmInfo":{"totalAlarm":60,"handledAlarm":10},
                "landscaping":{"status":"启动","soilMoisture":50}
            }

});
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