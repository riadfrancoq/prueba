<template>
    <div>
      <div class="prueba"></div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          FRANQUIZ
          <img v-if="picture" :src="picture" alt="Foto de Perfil ">

          <button type="button" class="m-2 btn btn-dark" @click="logout">
            Salir
          </button>
        </div>
      </nav>
  
      <h3 class="m-5">Lista de Productos</h3>
      <div v-if="loading">Cargando productos...</div>
      <div v-else class="container mt-3">
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
            <div class="card h-100">
              <img :src="product.image" :alt="product.title" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <a href="#" class="btn btn-primary">Precio: ${{ product.price }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  export default {
    name: "Products",
    data() {
      return {
        picture: localStorage.getItem('picture') || null
      }
    },
    setup() {
      const products = ref([]);
      const loading = ref(true);
  
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          products.value = response.data;
        } catch (error) {
          console.error("Error al cargar los productos:", error);
        } finally {
          loading.value = false;
        }
      };
  
      const logout = () => {
        console.log("No hay datos de autenticación en el localStorage");
        localStorage.clear(); 
        window.location.reload();
      };
  
      onMounted(fetchProducts);
  
      return {
        products,
        loading,
        logout,
      };
    },
  };
  </script>
  
  <style>
  .navbar {
    background-image: url("../assets/fondopagina.jpg");
    background-size: cover;
    background-position: 50% 20%;
    background-repeat: no-repeat;
    height: 15rem;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
  }
  
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card img {
    margin: 20px;
    object-fit: contain;
    max-height: 150px;
  }
  
  .card-body {
    text-align: start;
  }
  
  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  