define({ //dedine闭包 
        loadimg:[
		{id: "bg", src: "images/bg.png"},
		{id: "logo", src: "images/logo.png"}
		
        ], 
        ajaxUrl:[
		["https://iottest.mideadc.com/data/electric-energy?show=year","eeDataY"],
		["https://iottest.mideadc.com/data/electric-energy?show=month","eeData"],

		["https://iottest.mideadc.com/data/water-energy?show=year","weDataY"],
		["https://iottest.mideadc.com/data/water-energy?show=month","weData"],

		["https://iottest.mideadc.com/data/paking-stat","plData"],

		["https://iottest.mideadc.com/data/distribution-room","pdData"],
		["https://iottest.mideadc.com/data/water-pump-room","sbData"],
		["https://iottest.mideadc.com/data/generator-room","grData"],

		["https://iottest.mideadc.com/data/charge-stat","others"],
		["https://iottest.mideadc.com/data/door-stat","others"],
		["https://iottest.mideadc.com/data/other-stat","others"]
	]

});
	