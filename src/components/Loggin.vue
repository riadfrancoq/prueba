<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Welcome to the Best Ecommerce Store</h1>

      <GoogleLogin :callback="callback" prompt class="google-login-btn" />
    </div>
  </div>
</template>

<script setup>
import { googleLogout, decodeCredential } from "vue3-google-login";

const callback = (response) => {
  const userData = decodeCredential(response.credential);
  console.log(response);
  console.log(userData);
  localStorage.setItem("email", userData.email);
  localStorage.setItem(
    "name",
    `${userData.given_name} ${userData.family_name} `
  );
  localStorage.setItem("picture", userData.picture);
  window.location.reload();
};
</script>

<style scoped>
.login-container {
  background-image: url("../assets/fondopagina.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f6fc;
}

.login-box {
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
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
