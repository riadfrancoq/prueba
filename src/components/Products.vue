<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">FRANQUIZ</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <h3>Lista de Productos</h3>
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

    onMounted(fetchProducts);

    return {
      products,
      loading,
    };
  },
};
</script>

<style>
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
