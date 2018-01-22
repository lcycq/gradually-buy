/**
 * Created by Administrator on 2018-1-20.
 */

$(function(){


    function render(){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getcoupon',
            success: function(info){
                console.log(info);
                $('.content ul').html(template('tpl',info));
                //初始化滚动
                mui('.mui-scroll-wrapper').scroll({
                    indicators: false,
                    deceleration: 0.0005
                });
            }
        })
    }
    render();
})