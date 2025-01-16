<template>
    <div>
        <div class="prueba " >
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">FRANQUIZ</a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-white" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Pricing</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link disabled text-white" aria-disabled="true">Disabled</a>
              </li>
            </ul>
        </div>
        <button type="button" class="m-2 btn btn-dark">salir</button>
        </div>
      </nav>
  
      <h3 class="m-5">Lista de Productos</h3>
      <div v-if="loading">Cargando productos...</div>
      <div v-else class="container mt-3">
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
            <div class="card h-100">
              <img
                :src="product.image"
                :alt="product.title"
                class="card-img-top"
              />
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
    localStorage.clear(); // Borra todo el localStorage
    console.log("LocalStorage eliminado");
    
    };

    onMounted(fetchProducts);

    return {
      products,
      loading,
    };
  },
};
</script>

<style>

.navbar {
  background-image: url('../assets/fondopagina.jpg');
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
