/**
 * Created by Administrator on 2018-1-19.
 */

$(function(){

    //获取url中的id和pruductName
    var id = Tools.getSearch('productid');
    var name = Tools.getSearch('productName');
    var category = Tools.getSearch('category');

    //渲染页面商品数据
    function renderS(id){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getproduct',
            data: {
                productid:id
            },
            success:function(info){
                console.log(info);
                $('.M_content .head').html(template('tpl',info));

                //渲染第二级标签
                $('.second').text(category);
                //渲染第三级标签
                $('.third').text(name);
            }
        })
    }
    renderS(id);

    //渲染评论页面
    function renderP(id){
        $.ajax({
            type:'get',
            url:ip+':9090/api/getproductcom',
            data:{
                productid:id
            },
            success: function(info){
                //console.log(info);
                $('.list ul').html(template('tplP',info));
                //初始化滚动
                mui('.mui-scroll-wrapper').scroll({
                    deceleration: 0.0005
                });
            }
        })
    }
    renderP(id);
})