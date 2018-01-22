/**
 * Created by Administrator on 2018-1-19.
 */

$(function() {

    //获取链接中的数据
    var categoryId = Tools.getSearch('categoryId');
    var category = Tools.getSearch('category');
    var maxN;
    var page1 = 0;
    //渲染三级标签
    function renderB(id){
        $.ajax({
            type: 'get',
            url: ip + ':9090/api/getcategorybyid',
            data:{
                categoryid:id
            },
            success:function(info){
                var text = info.result[0].category;
                $('.M_title a:nth-of-type(3)').text(text);
            }
        })
    }
    renderB(categoryId);

    //渲染主题内容
    function renderC(id1,id2){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getproductlist',
            data: {
                categoryid:id1,
                pageid:++id2
            },
            success:function(info){
                maxN = info.totalCount;
                info.category = Tools.getSearch('category');
                $('.M_content ul').html(template('tpl',info));
                //分页标签初始化
                $("#Pagination").pagination(maxN, {
                    current_page: page1,
                    load_first_page:false,
                    callback: function(page){
                        console.log(page);
                        page1=page;
                        renderC(categoryId,page1);
                    },
                    items_per_page:10,
                    prev_text: '上一页',
                    next_text: '下一页',
                    prev_show_always: true,
                    next_show_always: true
                });
                //初始化滚动
                mui('.mui-scroll-wrapper').scroll({
                    deceleration: 0.0005
                });
            }
        })
    }
    renderC(categoryId,page1);
})