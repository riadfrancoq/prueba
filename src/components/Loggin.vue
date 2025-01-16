<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Welcome to the Best Ecommerce Store</h1>
      
      <GoogleLogin
        :callback="callback"
        prompt
        class="google-login-btn"
      />
    </div>
  </div>
</template>

<script setup>
import { googleLogout, decodeCredential } from "vue3-google-login";

const callback = (response) => {
  const userData = decodeCredential(response.credential);
  console.log(userData);
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f6fc;
  font-family: 'Arial', sans-serif;
}

.login-box {
  background-color: #4285f4; 
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
}

.google-login-btn {
  background-color: white;
  color: #4285f4;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
}

.google-login-btn:hover {
  background-color: #f1f3f6;
  border: 1px solid #4285f4;
}
</style>
