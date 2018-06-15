define({ //dedine闭包 
        loadimg:[
		{id: "bg", src: "images/bg.png"},
		{id: "logo", src: "images/logo.png"}
		
        ], 
        ajaxUrl:[
		"https://iottest.mideadc.com/data/electric-energy?show=year",
		"https://iottest.mideadc.com/data/electric-energy?show=month",

		"https://iottest.mideadc.com/data/water-energy?show=year",
		"https://iottest.mideadc.com/data/water-energy?show=month",

		"https://iottest.mideadc.com/data/paking-stat",

		"https://iottest.mideadc.com/data/distribution-room",
		"https://iottest.mideadc.com/data/water-pump-room",
		"https://iottest.mideadc.com/data/generator-room",

		"https://iottest.mideadc.com/data/charge-stat",
		"https://iottest.mideadc.com/data/door-stat",
		"https://iottest.mideadc.com/data/other-stat"
	],
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
                                "房1": [71, "#07c0c0 "],
                                "房2": [29, "#ffb768"],
                                "房3": [19, "#cf3b6f"]
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
                                "房1": [7001, "#07c0c0 "],
                                "房2": [2009, "#ffb768"],
                                "房3": [1009, "#cf3b6f"]
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
                                "房1": [71, "#07c0c0 "],
                                "房2": [29, "#ffb768"],
                                "房3": [19, "#cf3b6f"]
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
           {roomNumber:"房1",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"13"},
           {roomNumber:"房2",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"18"},
           {roomNumber:"房3",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"23"},
           {roomNumber:"房4",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"60"}, 
           {roomNumber:"房5",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDl:["56.4","60.2","54.2"],roomDr:["232.2","241.0","281.1"],Ds:"40"},      
        ],
        sbData:[//水泵房数据
                {roomNumber:"房1",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房2",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房3",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房4",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房5",roomD:"28.6 °C",roomRH:"39.2 %RH",roomHZ:"49.93",roomDr:["1.2","1.2","1.2"],runing:false},      
             ],
             grData:[//发动机房数据
                {roomNumber:"房1",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房2",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房3",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房4",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:true},
                {roomNumber:"房5",roomD:"28.6 °C",roomRH:"39.2 %RH",roomDr:["1.2","1.2","1.2"],runing:false},      
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