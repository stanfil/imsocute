

// $(document).ready(function () {
//     var btu1=document.getElementById('login_user_btu');
//     var btu2=document.getElementById('login_admin_btu');
//     btu1.onclick=change_div('login_user','login_admin');
//     btu2.onclick=change_div('login_admin','login_user');
//
// });
function change_div(div1,div2) {
    if (document.getElementById(div1).style.display=='none'){
        document.getElementById(div2).style.display='none';
        document.getElementById(div1).style.display='block';
    }else {
        document.getElementById(div1).style.display='none';
    }
}
