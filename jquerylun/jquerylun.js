/**
 * Created by hee on 2016/12/21.
 */

//testlun（）两个参数，必填，第一个参数为轮播图最外侧的大盒子ID或者类名，第二个参数为轮播图滚动的时间，单位ms。不用写单位,第三个参数为当前图片对应的下标，第四个未选中时候下标的颜色
function testlun(one,timeX,color1,color2){
    obj=$(one)
    $img=obj.find("ul li img")
    $li=obj.find("ul li")
    $oi=obj.find("ol li")
    width1=$img.width()
    $oi.hover(function(){
     var index1=$(this).index()+1
        var inDW=index1*width1
        if('$li:animated'){
            $li.stop()
            $li.animate({left:-inDW},timeX)
            $(this).css("background",color1).siblings().css("background",color2)
        }
    })
    $('body').everyTime(timeX+1000,test);
    $("div").hover(function(){
        $('body').stopTime ();
    },function(){
        $('body').everyTime(timeX+1000,test);
    })
    function  test(){
        width1=$img.width()
        nam=$li.length-1
        nam1=nam*width1
        left1=$li.position().left
        index1=Math.round(left1/width1)
        if(left1>-nam1){
            $oi.eq(-index1).css("background",color1).siblings().css("background",color2)
            $li.animate({left:'-='+width1},timeX)
        }else {
            $li.css("left",0).animate({left:-width1},timeX)
            $("ol li:first").css("background",color1).siblings().css("background",color2)
        }
    }
    }
    function leftLUN(one,timeX,color1,color2){
        obj=$(one)
        $img=obj.find("ul li img")
        $li=obj.find("ul li")
        $oi=obj.find("ol li")
        width1=$img.width()
        nam=$li.length-1
        nam1=nam*width1
        left1=$li.position().left
         index1=Math.round(left1/width1)
        if(!$li.is(":animated")){
            if(left1<-width1){
                $li.animate({left:'+='+width1},timeX)
                $oi.eq(-index1-2).css("background",color1).siblings().css("background",color2)
            }else if(left1==0){
                $li.css("left",0).animate({left:-width1},timeX)
            }else {
                $li.animate({left:0},timeX,function(){
                    $li.css("left",-nam1)
                })
                $("ol li:last").css("background",color1).siblings().css("background",color2)
            }
        }
    }
    function rightLUN(one,timeX,color1,color2){
        obj=$(one)
        $img=obj.find("ul li img")
        $li=obj.find("ul li")
        $oi=obj.find("ol li")
        width1=$img.width()
        nam=$li.length-1
        nam1=nam*width1
        left1=$li.position().left
        index1=Math.round(left1/width1)
        if(!$li.is(":animated")){
            if(left1>(-nam1+width1)){
                $li.animate({left:'-='+width1},timeX)
                $oi.eq(-index1).css("background",color1).siblings().css("background",color2)
            }else if(left1==-nam1){
                    $li.css("left",0).animate({left:-width1},timeX)
            }else{
                $("ol li:last").css("background",color1).siblings().css("background",color2)
                $li.animate({left:-nam1},timeX,function(){
                    $li.css("left",0)
                })
            }
        }
    }



