<template>
  <div>
    <h3 class="header">登录</h3>
    <form action="">
      <div class="account"> <span> 账号：</span><input type="text" v-model="account" placeholder="请输入账号"><span class="clearup"  @click="clearAcount"></span></div>
      <div class="password"> <span>密码：</span> <input type="password" v-model="password" placeholder="请输入密码" ><span class="clearup"  @click="clearPassword"></span></div>
      <div class="autoLogin"> <span>自动登录：</span> <span :class="{togglebar:onoff, active:isonoff}" @click="autoLoginclick"></span></div>
      <div class="login" @click="loginclick"><a href="#">登录</a></div>
    </form>
    <toast :contents='data1' :class="{hidden:onor}"></toast>
  </div>
</template>
<script>
import toast from '@/cmcomponents/toats'
// import axios from '@/commonjs/axios'
import urls from '@/commonjs/urls'
// import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      account: '11',
      password: '22',
      onoff: false,
      isonoff: true,
      onor: true,
      data1: '请输入正确的用户名'
    }
  },
  methods: {
    autoLoginclick () {
      this.isonoff = !this.isonoff
      this.onoff = !this.onoff
    },
    clearAcount () {
      this.account = ''
    },
    clearPassword () {
      this.password = ''
    },
    loginclick () {
      const params = new URLSearchParams()
      params.append('memberId', 1234)
      params.append('password', 123456)
      this.$axios.post(urls.login, params).then((data) => {
        console.log(data)
      }).catch(() => {
        alert('请求失败')
      })

      if (this.account === '') {
        this.onor = false
        this.data1 = '请输入正确的用户名'
      } else if (this.password === '') {
        this.onor = false
        this.data1 = '请输入正确的密码'
      } else {
        this.$router.push('/cantaiv ')
      }
      setTimeout(() => {
        this.onor = true
      }, 1500)
    }
  },
  components: {
    toast
  }
}
</script>
<style scoped>
  .hidden{
    display: none;
  }
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
    box-shadow: 0px 1px 2px #EEE;
    position: relative;
  }
  .account>span, .password>span{
    margin-left: 10px;
  }
  .account>input, .password>input{
    height: 34px;
    border: none;
    width: 79%;
    outline: none;
  }
  .autoLogin{
    border:none;
    box-shadow: none;
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

  .clearup{
    display: inline-block;
    width:30px;
    height: 30px;
    background-color: #DDDDDD;
    border-radius: 50%;
    position: absolute;
    right:10px;
    top:5px;
  }
  .clearup:after{
    content: "";
    display: inline-block;
    width: 24px;
    height:2px;
    background-color:white;
    transform: rotate(45deg);
    position: absolute;
    top: 15px;
    left: 4px;
  }
 .clearup:before{
    content: "";
    display: inline-block;
    width: 24px;
    height:2px;
    background-color:white;
    transform: rotate(-45deg);
    position: absolute;
    top:15px;
    left:3px;
  }
 .togglebar{
    width: 60px;
    height: 30px;
    background-color: #C0C0C0;
    border-radius: 15px;
    float: right;
    margin-top:5px;
    border: 1px solid #ccc;
  }
 .togglebar:after{
    content: "";
    width:30px;
    height: 30px;
    border-radius: 50%;
    background:linear-gradient(#E2E2E2,#F7F7F7);
    float: left;
  }
  .active{
    width: 60px;
    height: 30px;
    background-color: #39B868;
    border-radius: 15px;
    float: right;
    margin-top:5px;
    border: 1px solid #ccc;
  }
  .active:after{
    content: "";
    width:30px;
    height: 30px;
    border-radius: 50%;
    background:linear-gradient(#E2E2E2,#F7F7F7);
    float: right;
  }
</style>
