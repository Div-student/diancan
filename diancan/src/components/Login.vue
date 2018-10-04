<template>
  <div>
    <h3 class="header">登录</h3>
    <form action="">
      <div class="account"> <span> 账号：</span><input type="text" placeholder="请输入账号"></div>
      <div class="password"> <span>密码：</span> <input type="password" placeholder="请输入密码"></div>
      <div class="autoLogin"> <span>自动登录：</span> <span></span></div>
      <div class="login"><a href="">登录</a></div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .header{
    height: 44px;
    width:100%;
    color: white;
    text-align: center;
    line-height: 44px;
    background-color: #000;
    letter-spacing: 5px;
    margin-bottom: 20px;
  }
  .account, .password, .autoLogin, .login{
    height: 40px;
    width:96%;
    border:1px solid #ddd;
    border-radius: 5px;
    line-height: 40px;
    margin: 10px auto;
  }
  .account>span, .password>span{
    margin-left: 10px;
  }
  .account>input, .password>input{
    height: 34px;
    border: none;
    width: 80%;
    outline: none;
  }
  .autoLogin{
    border:none;
  }
  .login{
    text-align: center;
    background-color: #39B868;
    font-weight: bold;
    letter-spacing:5px;
  }
  .login>a{
    text-decoration: none;
    color:white;
  }
</style>
