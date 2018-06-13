define(function (require, exports) { //dedine闭包  
    //var data=require("./Data.js");
    var manifest;
    exports.preload = "";
    //定义相关JSON格式文件列表
  


    //开始预加载
    exports.startPreload=function(loadData,fun) {
        exports.preload = new createjs.LoadQueue(true);
        //preload.on("fileload", handleFileLoad);
        exports.preload.on("progress", handleFileProgress);
        exports.preload.on("complete", fun);
        exports.preload.on("error", loadError);
        exports.preload.loadManifest(loadData);

    }

    //处理单个文件加载
    function handleFileLoad(event) {
        console.log("文件类型: " + event.item.type);
        if (event.item.id == "logo") {
            console.log("logo图片已成功加载");
        }
    }

    //处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
    function loadError(evt) {
        console.log("加载出错！", evt.text);
    }

    //已加载完毕进度 
    function handleFileProgress(event) {
        var p = exports.preload.progress * 100 | 0;
        //$(".bf").html(p + "%");
        var bf = document.getElementById("bf");
        bf.innerHTML = p + "%";
        if (p <= 50) {
            document.getElementById("rb").style.transform = "rotateZ(" + (p * 3.6 + 225) + "deg)";
            //$(".pro.proright b").css("transform","rotateZ("+(p*3.6+225)+"deg)");
        } else {
            //$(".pro.proright b").css("transform","rotateZ(405deg)");
            //$(".pro.proleft b").css("transform","rotateZ("+(p*3.6+45)+"deg)");
            document.getElementById("rb").style.transform = "rotateZ(405deg)";
            document.getElementById("lb").style.transform = "rotateZ(" + (p * 3.6 + 45) + "deg)";
        }

    }

    //全度资源加载完毕
    function loadComplete(event) {
       // $(".loadprogress").fadeOut(200);
        //document.getElementById("loadprogress").style.display="none";
        exports.setImg(exports.preload._loadItemsById);
    }

    exports.setImg = function (obj) {
        for (var key in obj) {
            $("." + key).html(exports.preload.getResult(key));
        }
        // pageimg($(".page"), 1920, 664);
        // window.onresize = function () {
        //     pageimg($(".page"), 1920, 664);
        // }
    }

    //实现图片全自适应的函数
     exports.pageimg=function(id, w, h) { //输入的参数为，id为父类ID，w,h为该父类里图片的真实的宽高
        id.each(function (i) {
            var tw = $(this).width(); //父类宽
            var th = $(this).height(); //父类高
            var new_imgw = Math.floor((w / h) * th); //根据父类高算图片的实践宽
            var new_imgh = Math.floor((h / w) * tw); //根据父类宽算图片的实践高
            //console.log(tw, th, new_imgw, new_imgh);
            var ml = 0,
                mt = 0;
            if (tw < new_imgw) { //当实践图片宽大于父类宽，启动高限制模式，宽两边裁；
                ml = Math.floor((new_imgw - tw) / 2);
                $(this).find("img").removeClass("w").css("margin-left", -ml + "px");
            } else { //当实践图片宽小于父类宽，启动宽限制模式，高上下两边裁；

                $(this).find("img").addClass("w").css("margin-left", "0px");
                if (th < new_imgh) {
                    mt = Math.floor((new_imgh - th) / 2);
                    $(this).find("img").css("margin-top", -mt + "px");
                } else {
                    $(this).find("img").css("margin-top", "0px");
                }
            }
        });
    }


});