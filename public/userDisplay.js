'use strict';
const BASE_URL = "http://localhost:8081";
//处理url获取requestID
function UrlSearch() {
    var name, value;
    var str = location.href; //取得整个地址栏
    var num = str.indexOf("?");
    str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}
$(document).ready(function () {
    var Request = new UrlSearch(); //实例化
    $.ajax({
        url: BASE_URL + '/user' + '?phoneNumber=' + Request.phoneNumber,
        type: 'get',
        success: function (data) {
            //console.log(data);
            let total=`<span class="glyphicon glyphicon-tag">积分：${data[0]}</span>`
            $(`#userPoints`).append(total);
        }
    });
});

