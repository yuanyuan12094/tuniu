/**
 * Created by bjwsl-001 on 2017/5/29.
 */

    if(window.$===undefined){
        throw new Error ("jQuery加载失败")
    }
    // 一：大图轮播广告
    jQuery.fn.carousel=function(){
        var interval=3000;
        var $liimgs=this.children("img");
        var $lis=this.children("ul").children("li");
        var index=0;
        var timer=null;
        function lunbo(){
            index++;
            (index>5)&&(index=0);
            $liimgs.eq(index).addClass("active").siblings().removeClass("active");
            $lis.eq(index).addClass("active").siblings().removeClass("active");
        }
         timer = setInterval(lunbo,interval);
        // 二：点击li到相对于的轮播图片
        $lis.click(function(){
            index = $(this).index();
            $liimgs.eq(index).addClass("active").siblings().removeClass("active");
        })
    };

    //三：轮播广告上的小广告鼠标进入事件
    $('.sub-slide li').mouseenter(function(){
       $(this).addClass('current').siblings().removeClass('current');
    });
    //四：楼层点亮
    jQuery.fn.scrollspy=function(options){
        //console.log(options);
        var str=options.target;
        var opt=$(str);//楼层div
        $(window).scroll(function(){
            var top=$(window).scrollTop();//滚动条的位置
            //console.log(top);
            if(top<1100){
                opt.fadeOut();
            }else if(top<=3250){
                opt.fadeIn();
            }else{
                opt.fadeOut();
            };
            //获取导航的开关 li 遍历li each方法
            var $liList=opt.find("li");

            $liList.each(function(i,li){
                var floorId=$(this).children("a").attr("href");
                var floorTop=$(floorId).offset().top;
                if(top>=floorTop-370){
                    $(li).addClass('active').siblings(".active").removeClass("active");
                }
            });

        });
    };
    //倒计时

    function task(){
        var end=new Date("2017/08/28 17:00:00");
        var now=new Date();
        var s=parseInt((end-now)/1000);
        if(s>0){
            var d=parseInt(s/3600/24);
            if(d<10) d="0"+d;
            //s/3600/24,再下取整
            var h=parseInt(s%(3600*24)/3600);
            if(h<10) h="0"+h;
            //s/(3600*24)的余数,再/3600,再下去整
            var m=parseInt(s%3600/60);
            if(m<10) m="0"+m;
            //s/3600的余数,再/60，再下取整
            s%=60;//s/60的余数
            if(s<10) s="0"+s;
            //距离下一个假期还有: ?天?小时?分?秒
            $("#days").html(d);
            $("#hours").html(h);
            $("#minutes").html(m);
            $(".seconds").html(s);
            $(".hours").html(d);
            $(".minutes").html(m);
        }else{
            clearInterval(timer);
            timer=null;
            $("#days").html('已');
            $("#hours").html('结');
            $("#minutes").html('束');
        }
    }

    var timer=setInterval(task,1000);

//$('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);



