<template>
  <section id="articles-component">

    <div id="articles-list" v-if="articles && articles.length >= 1">
      <article
        class="article-item"
        v-for="article in articles"
        :key="article._id"
      >
        <div class="image-wrap">
          <img
            :src="'http://localhost:3900/api/get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img
            src="../assets/image/bosque.jpg"
            :alt="article.title"
            v-if="!article.image"
          />
        </div>

        <h2>{{ article.title }}</h2>
        <span class="date">{{ article.date | moment('from', 'now')}}</span>

        <a href="article.html">Leer más</a>

        <div class="clearfix"></div>
      </article>
    </div>

    <div v-else-if="articles && articles < 1">
      No hay articulos para mostrar.
    </div>

    <div v-else>
      Cargando...
    </div>
  </section>
</template>

<script>
export default {
  name: "Articles",
  props: ["articles"],
};
</script>
