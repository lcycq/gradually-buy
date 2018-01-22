/**
 * Created by Administrator on 2018-1-19.
 */

//改变字体大小的函数
function resize(){
    //获取屏幕宽度
    var width = window.innerWidth || document.documentElement.clientWidth;
    //由于设计图是750，分15份，每1rem=50px
    var n = 15;
    //设置页面的字体大小
    document.documentElement.style.fontSize = (width/n).toFixed(2) + 'px';
}
//页面加载就设置
resize();
//监听页面宽度的变化
window.addEventListener('resize',function(){
    resize();
})