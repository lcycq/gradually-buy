/**
 * Created by Administrator on 2018-1-19.
 */
$(function(){
    //点击更多逻辑
   $('.gengduo').on('click',function(){
       console.log('hehe');
       $('.gd').toggleClass('dp');
   });


    //渲染折扣内容
    function render(){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getmoneyctrl',
            success:function(info){
                console.log(info);
                $('.content ul').html(template('tpl',info));
                //初始化muiscroll
                mui('.mui-scroll-wrapper').scroll({
                    deceleration: 0.0005
                });
            }
        })
    }
    render();
});