/**
 * Created by hee on 2016/11/7.
 */
window.onload=function(){
    header();
};
function header(){
    var sousuo=document.querySelector(".jd-header");
    var lunbo=document.querySelector(".jd-lun-box");
    var top=lunbo.offsetHeight;
    window.onscroll=(function(){
        var top1=document.body.scrollTop;
        var ht=0;
        if(top1>top){
            ht=0.85;
            sousuo.style.background="rgba(201,21,35,"+ht+")"
        }else{
            ht=0.85*(top1/top);
            sousuo.style.background="rgba(201,21,35,"+ht+")"
        }
    })
}

$(document).ready(function(){

    var width1=$(".jd-lun-ul1 img").width()
    $('.jd-dian li').mouseenter(function (){
        one=$(this).index()*width1+width1
        $(this).addClass('dian-1').siblings().removeClass('dian-1')
        $('.jd-lun-ul1 li').animate({left:-one},'slow')
    })
        var iceice=0
        function ice(){
                if(iceice==$('.jd-lun-ul1 li').length-2){
                        $('.jd-lun-ul1 li').css({left:0})
                        iceice=0
                }else{
                        iceice++
                }
                $('.jd-lun-ul1 li').animate({left:iceice*-width1-width1},'1000')
                for(var i=0;i<8;i++){
                        $('.jd-dian li').siblings().removeClass('dian-1')
                }$('.jd-dian li').eq(iceice).addClass('dian-1');
        }
        $('body').everyTime('1s',ice);
        $('.jd-lun-box').mouseover(function(){
                $('body').stopTime()
        }).mouseout(function(){
                iceice=$('.dian-1').index()
                /*alert(iceice)*/
                $('body').everyTime('1s',ice)
        })
})
