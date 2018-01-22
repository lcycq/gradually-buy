/**
 * Created by Administrator on 2018-1-20.
 */

$(function(){
   //发送ajax获取数据
    $.ajax({
        type:'get',
        url: ip + ':9090/api/getinlanddiscount',
        success: function(info){
            console.log(info);
            $('.M_discount ul').html(template('tpl',info));
            //初始化滚动
            mui('.mui-scroll-wrapper').scroll({
                indicators: false,
                deceleration: 0.0005
            });
        }
    })


});