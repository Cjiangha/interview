"use strict";!function(){var l=document.querySelector("#form-account"),o=document.querySelector("#form-pwd"),t=document.querySelector("#form-equalTopwd"),c=(document.querySelector("#cbox"),document.querySelector("#form-account-error")),a=document.querySelector("#form-pwd-error"),n=document.querySelector("#form-equalTopwd-error"),i=!1,s=!1,u=!1;l.onblur=function(){var e=l.value,r=/^[a-zA-Z]\w{3,15}$/.test(e);e&&(r?(i=!0,$.ajax({type:"post",url:"../api/regandlogin.php",data:{username:l.value.trim(),type:"checkname"},success:function(e){console.log(e),"yes"==e?(c.style="display:block;color:#58bc58;",c.innerHTML="用户名没人用"):"no"==e&&(c.style="display:block;color: #f91;",c.innerHTML='<i class="i-error"></i>用户名被占用了')}})):(c.style="display:block",c.innerHTML='<i class="i-error"></i>用户名必须是长度4到16位（必须以字母为开头）',i=!1))},o.onblur=function(){var e=o.value,r=/^\S{6,20}$/.test(e);e&&(r?t.value==o.value?(a.style="display:block;",n.style="color:#58bc58",n.innerHTML="输入正确",u=s=!0):(a.style="display:block;",a.innerHTML="",s=!0):(a.style="display:block;",a.innerHTML='<i class="i-error"></i>密码长度必须为6-20位',s=!1))},t.onblur=function(){u=""==t.value?(n.classList.add("error"),n.style="display:block;",!(n.innerHTML='<i class="i-error"></i>输入为空')):t.value==o.value?(n.style="display:block;color:#58bc58",n.innerHTML="输入正确",!0):(n.style="display:block;color:red;",!(n.innerHTML='<i class="i-error"></i>您输入的密码不一致'))},document.querySelector("#form-register").onclick=function(){var e=l.value,r=o.value;console.log(i,s,u,e,r),i&&s&&u&&""!=e&&""!=r?ajax({type:"post",url:"../api/regandlogin.php",data:{username:l.value.trim(),password:o.value.trim(),type:"reginsert"},success:function(e){0==e?(alert("注册成功"),location.href="login.html",l.value=o.value=t.value="",getCookie("url")||setCookie("url","main.html",7)):1==e?alert("用户名已经存在"):2==e&&alert("用户名有误")}}):alert("抱歉  注册的信息有误 请重新填写！！")}}();