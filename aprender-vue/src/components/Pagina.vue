<template>
  <div class="general">
    <Slider texto="Pagina de pruebas"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar Nombre</button>
        <button @click="redirigirAlBlog()">Redirigir al Blog</button>
        <h4>{{ nombre }}</h4>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Pagina",
  components: {
   Slider,
   Sidebar,
  },

  // created Se ejecuta cuando el componente se crea pero no se termina de cargar por completo
  created() {
    console.log("componente creado");
  },

  // mounted Se ejecuta cuando se carga/monta el componente por completo
  mounted() {
    // Obtenemos el dato que viene por url
    this.id_desde_url = this.$route.params.id;
    console.log("componente montado");
  },

  // updated se ejecuta cuando el componente se actualiza, cuando se actualiza alguno de sus datos
  updated() {
    console.log("componente actualizado");
  },

  // destroyed se ejecuta cuando el componente se elimina
  destroyed() {
    console.log("componente eliminado");
  },

  data() {
    return {
      id_desde_url: null,
      nombre: "Hernán Franco",
    };
  },

  methods: {
    actualizarNombre() {
      this.nombre = "Te cambie el nombre, je";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      // Redirige a la direccion que quieras
      this.$router.push("/blog");
    },
  },
};
</script>
