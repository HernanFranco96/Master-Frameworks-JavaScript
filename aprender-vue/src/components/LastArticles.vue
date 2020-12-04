<template>
  <div class="general">
    <Slider 
    texto="Bienvenido al Curso de Vue con Hernán Franco de zaraza@gmail.com" 
    home="true"
    ></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Ültimos articulos</h2>

        <div id="articles">
          <Articles v-bind:articles="articles"></Articles>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Slider from './Slider.vue';
import Sidebar from './Sidebar.vue';
import Articles from './Articles.vue';
export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getLastArticles() {
      axios.get("articles/true").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;

          console.log(this.articles);
        }
      });
    },
  },
};
</script>