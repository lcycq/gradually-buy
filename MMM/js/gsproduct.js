/**
 * Created by Administrator on 2018-1-21.
 */

$(function(){

    //初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        indicators: false,
        deceleration: 0.0005
    });

    //渲染店铺数据
    function renderS(){
        $.ajax({
            type: 'get',
            url: ip + ':9090/api/getgsshop',
            success: function(info){
                $('.shop').html(template('tplS',info));
                //点击按钮显示隐藏逻辑
                $('.a').on('click',function(){
                    $('.shop').toggleClass('hd');
                })
                //点击按钮显示隐藏逻辑
                $('.c').on('click',function(){
                    $('.price').toggleClass('hd');
                })
                //点击下拉li的逻辑、利用事件委托
                $('.shop').on('click','li',function(){
                    //获取id和name数据
                    var id = $(this).data('id');
                    var name = $(this).text();
                    //将name赋值给点击的li
                    $('.a span').text(name);
                    //对勾排他逻辑
                    $('.shop li span').removeClass('mui-icon mui-icon-checkmarkempty');
                    $(this).find('span').addClass('mui-icon mui-icon-checkmarkempty');
                    //隐藏本ul
                    $('.shop').addClass('hd');
                    //重新渲染主要内容,获取打钩的地区的id
                    var areaid = $('.area span[class="mui-icon mui-icon-checkmarkempty"]').parent('li').data('id');
                    console.log(areaid);
                    renderC(id,areaid);
                })

            }
        })
    }
    renderS();

    //渲染地区数据
    function renderA(){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getgsshoparea',
            success: function(info){
                //console.log(info);
                $('.area').html(template('tplA',info));
                //点击按钮显示隐藏逻辑
                $('.b').on('click',function(){
                    $('.area').toggleClass('hd');
                })
                //点击下拉li的逻辑、利用事件委托
                $('.area').on('click','li',function(){
                    //获取id和name数据
                    var id = $(this).data('id');
                    var name = $(this).text();
                    name = name.slice(0,2);
                    //将name赋值给点击的li
                    $('.b span').text(name);
                    //对勾排他逻辑
                    $('.area li span').removeClass('mui-icon mui-icon-checkmarkempty');
                    $(this).find('span').addClass('mui-icon mui-icon-checkmarkempty');
                    //隐藏本ul
                    $('.area').addClass('hd');
                    //重新渲染主要内容,获取打钩的地区的id
                    var shopid = $('.shop span[class="mui-icon mui-icon-checkmarkempty"]').parent('li').data('id');
                    renderC(shopid,id);
                })
            }
        })
    }
    renderA();

    //渲染主体内容区域
    function renderC(shop,area){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getgsproduct',
            data:{
                shopid:shop,
                areaid:area
            },
            success:function(info){
                console.log(info);
                $('.content ul').html(template('tpl1',info));
            }
        })
    }
    renderC(0,0);

});
