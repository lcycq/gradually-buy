/**
 * Created by Administrator on 2018-1-19.
 */
(function(){
    var Tools = {
        getSearchObj: function(){
            //获取当前页面的url
            var url = location.search;
            //去掉？
            url = url.slice(1);
            //对字符串进行解码
            url = decodeURI(url);
            //对&进行拆分，生成数组
            var arr = url.split('&');
            //遍历数组，拆分
            var obj = {};
            for(var i = 0; i < arr.length; i++){
                var key = arr[i].split('=')[0];
                var value = arr[i].split('=')[1];
                obj[key] = value;
            }
            return obj;
        },
        getSearch: function(key){
            var obj = this.getSearchObj();
            return obj[key];
        }
    };
    window.Tools = Tools;
    window.ip = 'http://192.168.46.82';
})(window);


