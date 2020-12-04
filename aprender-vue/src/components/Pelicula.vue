<template>
  <div class="general">
    <div class="center">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img :src="pelicula.image" :alt="pelicula.title" />
        </div>

        <h2>{{ pelicula.title }}</h2>
        <span
          class="date"
          :class="{
            yeargreen: pelicula.year >= 2010,
            yearred: pelicula.year < 2010,
          }"
        >
          {{ pelicula.year }}
        </span>

        <a href="article.html">Leer más</a>

        <input type="button" value="Marcar como Favorito" 
          @click="pasarFavoritaAlPadre(pelicula)"
        />

        <div class="clearfix"></div>
      </article>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Pelicula",
  props: ["pelicula"], // Recibo una propiedad
  methods: {
    pasarFavoritaAlPadre(pelicula){
      this.$emit('favorita', pelicula); // Generamos un evento-
    }
  }
};
</script>
