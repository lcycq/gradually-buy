/**
 * Created by Administrator on 2018-1-20.
 */

$(function(){

    //获取url中的id
    var id = Tools.getSearch('productid');

   function render(id){
       $.ajax({
           type:'get',
           url: ip + ':9090/api/getmoneyctrlproduct',
           data: {
               productid:id
           },
           success: function(info){
               console.log(info);
               $('.M_discount').html(template('tpl',info));
               //初始化muiscroll
               mui('.mui-scroll-wrapper').scroll({
                   deceleration: 0.0005
               });
           }
       })
   }
    render(id);
});



