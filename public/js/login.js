function change_div(div1,div2) {
    if (document.getElementById(div1).style.display=='none'){
        document.getElementById(div2).style.display='none';
        document.getElementById(div1).style.display='block';
    }else {
        document.getElementById(div1).style.display='none';
    }
}
// window.onload=function () {
//     document.getElementById('login_user_btu').onclick=change_div('login_user','login_admin');
//     document.getElementById('login_admin_btu').onclick=change_div('login_admin','login_user');
// }