/**
 * Created by Administrator on 2018-1-21.
 */



$(function(){

    //初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });

    //渲染一级标题
    function render(){
        $.ajax({
            type: 'get',
            url: ip + ':9090/api/getbrandtitle',
            success: function(info){
                //console.log(info);
                $('.first').html( template('tpl',info) );
                //给渲染的li添加点击事件
                $('.first').on('click','li',function(){
                    //切换下面ul的类名
                    $(this).next('ul').toggleClass('dp');
                    // 获取id
                    var id = $(this).data('id');
                    //渲染下面ul的数据
                    renderX(id);
                })
            }
        })
    }
    render();

    //渲染下面ul的数据
    function renderX(id){
        $.ajax({
            type:'get',
            url: ip + ':9090/api/getbrand',
            data: {
                brandtitleid:id
            },
            success:function(info){
                //console.log(info);
                $('.sun').prepend(template('tpl2',info));
            }
        })
    }

    //渲染排行数据
    function renderP(id){
        $.ajax({
            type: 'get',
            url: ip + ':9090/api/getbrandproductlist',
            data: {
                brandtitleid:id,
                pagesize:4
            },
            success:function(info){
                console.log(info);
                $('.qph').html(template('tpl3',info));
            }
        })
    }
    renderP(0);
})