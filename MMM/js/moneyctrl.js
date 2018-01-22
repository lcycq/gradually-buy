/**
 * Created by Administrator on 2018-1-20.
 */

$(function(){
    //初始化muiscroll
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });
    var page1 = 0;
    //获取数据并渲染
    function renderP(page){
        $.ajax({
            type: 'get',
            url: ip+':9090/api/getmoneyctrl',
            data:{
                pageid:++page || 1
            },
            success:function(info){
                console.log(info);
                $('.content ul').html(template('tpl',info));
                //分页标签初始化
                $("#Pagination").pagination(info.totalCount, {
                    //该参数显示当前标签背景变化的页数
                    current_page: page1,
                    //默认初始化的时候不调用回调函数
                    load_first_page:false,
                    callback: function(page){
                        page1 = page;
                        renderP(page1);
                    },
                    items_per_page:10,
                    prev_text: '上一页',
                    next_text: '下一页',
                    prev_show_always: true,
                    next_show_always: true
                });

            }
        })
    }
    renderP();
});