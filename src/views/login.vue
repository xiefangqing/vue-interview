<script setup>
import { ref } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { debounce } from '@/utils'
import { login } from '@/api/login'

const userName = ref('')
const password = ref('')

const debounceLoginCheck = debounce(loginCheck, 300)

function loginCheck() {
  if (!userName.value || !password.value) {
    message.warning('请填写所有字段！');
    return
  }
  if (userName.value === 'jack' && password.value === 'redballoon') {
    message.success('登录成功！即将跳转至首页，请稍后。');
  } else {
    message.error('登录失败！错误的用户名或密码。');
  }

  // 登录
  login().then(res => {
    console.log(res)
  })

}
</script>

<template>
  <div class="container">
    <div class="login">
      <h2 class="login-title">登录系统</h2>
      <a-input-group size="large">
        <a-input
          v-model:value="userName"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <user-outlined type="user" style="{ color: 'rgba(0, 0, 0, .5)' }" />
          </template>
        </a-input>
        <a-input-password
          v-model:value="password"
          :visibilityToggle="false"
          placeholder="请输入密码"

        >
          <template #prefix>
            <LockOutlined type="user" style="{ color: 'rgba(0, 0, 0, .5)' }" />
          </template>
        </a-input-password>
      </a-input-group>
      <a-button block type="primary" @click="debounceLoginCheck">登录</a-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: grid;
  place-items: center;
  font-size: 18px;
  background: linear-gradient(to bottom, #1BB3DE, #000A53);
}

.login {
  width: 350px;
}

.login-title {
  color: white;
  text-align: center;
}

.ant-input-group > * {
  height: 40px;
  line-height: 1.5em;
  margin-bottom: 16px;
}

.ant-btn {
  margin-top: 15px;
  height: 40px;
  font-size: 18px;
}
</style>
