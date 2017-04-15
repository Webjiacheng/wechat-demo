/**
 * Created by Administrator on 2017/4/12 0012.
 */
$(function () {
    //求出屏幕高度及设置body高度
    var h = window.screen.height;
    $("body").css("height",h);
    //设置遮罩层的高度
    var th=h*0.9;
    $('.mask').css("height",th);
    $('.mask-box').css("height",h);
    //判断是否要固定footer
    if(h>=667){
        $('.footer').css('position','absolute');
        $('.footer').css('bottom',0);
    }
})