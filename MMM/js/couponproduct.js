/**
 * Created by Administrator on 2018-1-20.
 */

$(function(){
    //初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        indicators: false,
        deceleration: 0.0005
    });


    //修改大标题
    var title = Tools.getSearch('title');
    $('.title').text(title);

    var id = Tools.getSearch('couponId');
    //渲染
    function render(id) {
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getcouponproduct',
            data:{
                couponid:id
            },
            success:function(info){
                //console.log(info);
                $('.content ul').html(template('tpl',info));
                //创建一个数组，放置所有的图片
                var imgs = [];
                //遍历info中的result，获取图片
                info.result.forEach(function(e,i){
                    imgs.push(e.couponProductImg);
                })
                //console.log(imgs);
                //给li添加点击事件
                $('.content ul').on('click','li',function(){
                    //获取该图片的index
                    var index = $(this).data('index');
                    //显示模态框
                    $('.M_mo').removeClass('dp');
                    //渲染图片
                    $('.M_mo').html(template('tpl1',{imgs:imgs}));
                    //初始化轮播图
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: false,//可选选项，自动滑动
                        loops:true,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    })
                    //设置轮播图从点击的那个图片开始滚动
                    mySwiper.slideTo(index,0, false);
                    //关闭模态框逻辑
                    $('.cha').on('click',function(){
                        //隐藏模态框
                        $('.M_mo').addClass('dp');
                    })
                })

            }
        })
    }
    render(id);

});
