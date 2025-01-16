<template>
    <div class="home-container">
      <div class="welcome-text">
        <h1>¡Bienvenido a FRANQUIZ</h1>
        <p>Inicia sesión para continuar</p>
      </div>
      <router-link to="/login">
        <button class="login-btn">Iniciar sesión</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "homePage"
  };
  </script>
  
  <style scoped>
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    background: #f3f4f6;
  }
  
  .welcome-text {
    text-align: center;
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
    font-weight: bold;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
  }
  
  .login-btn {
    padding: 15px 30px;
    background-color: #3498db;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .login-btn:hover {
    background-color: #2980b9;
    transform: translateY(-5px);
  }
  
  .login-btn:active {
    transform: translateY(0);
  }
  </style>
  