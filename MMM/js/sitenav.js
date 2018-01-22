/**
 * Created by Administrator on 2018-1-21.
 */

$(function(){
    //初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        indicators: false,
        deceleration: 0.0005
    });
    //渲染页面数据
    function render(){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getsitenav',
            success:function(info){
                console.log(info);
                $('.content ul').html(template('tpl',info));
            }
        })
    }
    render();
})