/**
 * Created by Administrator on 2018-1-19.
 */

$(function(){
    //初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });

    //渲染一级标题
    function renderF(){
        $.ajax({
            type:'get',
            url:ip + ':9090/api/getcategorytitle',
            success:function(info){
                $('.M_product>ul').html(template('tpl',info));
                //给li标签添加点击事件
                $('.first').on('click','li',function(){
                    $(this).next('ul').toggleClass('dp');
                    //获取当前点击的li的id
                    var id = $(this).data('id');
                    console.log(id);
                    renderS(id);

                })
            }
        })
    }
    renderF();
    function renderS(id){
        $.ajax({
            type:'get',
            url:ip+':9090/api/getcategory',
            data:{
                titleid:id
            },
            success:function(info){
                console.log(info);
                var name = '.'+'sun'+id;
                $(name).html(template('tpl2',info));

            }
        })
    }

});