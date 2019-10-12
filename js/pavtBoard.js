$(function () {

    //页面淡入效果
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 300,
        outDuration: 1000,
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading: false,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay: false,

        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'
    });

    document.onreadystatechange = subSomething;
    function subSomething() {
        if (document.readyState == "complete") {
            $('#loader').hide();
        }
    }
});

//顶部时间
function getTime() {
    var myDate = new Date();
    var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var myToday = myDate.getDate(); //获取当前日(1-31)
    var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    var myHour = myDate.getHours(); //获取当前小时数(0-23)
    var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
    var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
    var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var nowTime;

    nowTime = myYear + '-' + fillZero(myMonth) + '-' + fillZero(myToday) + '&nbsp;&nbsp;' + week[myDay] + '&nbsp;&nbsp;' + fillZero(myHour) + ':' + fillZero(myMinute) + ':' + fillZero(mySecond);
    $('.topTime').html(nowTime);
};
function fillZero(str) {
    var realNum;
    if (str < 10) {
        realNum = '0' + str;
    } else {
        realNum = str;
    }
    return realNum;
}
setInterval(getTime, 1000);


//高德地图
var myMap = new AMap.Map('myMap', {
    resizeEnable: true,
    zoom: 14,
    mapStyle: 'amap://styles/darkblue',
    center: [120.14281, 30.319333],
});