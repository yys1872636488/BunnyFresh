<script setup lang="ts">

//表单校验（账号名+密码）
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import router from '@/router'
import {useUserStore} from '@/stores/user'

const userStore = useUserStore()

interface LoginForm {
  account: string
  password: string
  agree: boolean
}
//准备表单对象
const form = ref<LoginForm>({
  account: '',
  password: '',
  agree: false
})

const rules = {
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rule:any,value:any,callback:any) => {
        if(!value){
          callback(new Error('请同意隐私条款和服务条款'))
        }else{
          callback()
        }
      },
      trigger: 'change'
    }
  ]
}

const formRef = ref<FormInstance | null>(null)
const doLogin = () => {
  if(!formRef.value) return
  const {account,password}=form.value
  formRef.value.validate(async (valid) => {
    if (valid) {
      await userStore.getUserInfo({account,password})
      ElMessage({
        message: '登录成功',
        type: 'success',
        duration: 2000,
      })
      router.replace({ path: '/' })
    } 
  })
}
</script>

<template>
  <div>
    <header class="login-header">
      <div class="container">
        <div class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </div>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="60px" status-icon>
              <el-form-item label="账户" prop="account">
                <el-input v-model="form.account" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox v-model="form.agree" size="large">我已同意隐私条款和服务条款</el-checkbox>
              </el-form-item>
              <el-button @click="doLogin" size="large" class="subBtn">点击登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>
    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.login-header {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .logo {
      width: 200px;
      margin-left: 100px;

      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url("@/assets/images/logo.png") no-repeat center 18px/contain;
      }
    }

    .entry {
      width: 120px;
      margin-bottom: 38px;
      font-size: 16px;
      margin-right: 50px;

      i {
        font-size: 14px;
        color: $xtxColor;
        letter-spacing: -5px;
      }
    }
  }
}

.login-section {
  background: url('@/assets/images/login-bg.png') no-repeat center / cover;
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(100px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      line-height: 55px;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
    }

    .account-box {
      margin-top: 20px;
      padding: 0 20px 20px 20px;
    }
  }
}

.subBtn {
  background: $xtxColor;
  width: 100%;
  color: #fff;
}

.login-footer {
  padding: 30px 0 50px;
  background: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~a {
        border-left: 1px solid #ccc;
      }
    }
  }
}
</style>
