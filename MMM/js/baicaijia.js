/**
 * Created by Administrator on 2018-1-20.
 */

$(function(){

    //渲染滚动标签
    function renderB(){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getbaicaijiatitle',
            success: function(info){
                console.log(info);
                //设置滚动控件的宽度
                //var w = $('.mui-scroll li').outerWidth(true) * info.result.length + 240;
                //$('.mui-scroll').width(w);
                $('.left ul').html(template('tpl',info));
                //初始化滚动1
                mui('.mui-scroll-wrapper1').scroll({
                    scrollY: false,
                    scrollX: true,
                    indicators: false,
                    deceleration: 0.0005
                });
                //给每个li注册点击事件
                $('.left ul').on('click','li',function(){
                    //添加active类并移除其他li的该类
                    $('.left a').removeClass('active');
                    $(this).find('a').addClass('active');
                    //获取titleid
                    var id = $(this).data('id');
                    //发送请求
                    $.ajax({
                        type: 'get',
                        url: ip + ':9090/api/getbaicaijiaproduct',
                        data: {
                            titleid:id
                        },
                        success:function(info){
                            console.log(info);
                            $('.content ul').html(template('tpl1',info));
                            //初始化滚动
                            mui('.mui-scroll-wrapper').scroll({
                                indicators: false,
                                deceleration: 0.0005
                            });
                        }
                    })
                })
                //页面加载时，默认点击全部按钮
                $('.qb').trigger('click');
            }
        })
    }
    renderB();
});