<template>
  <div>
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
      <span class="date">{{ article.date }}</span>

      <a href="article.html">Leer más</a>

      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: ['articles']
};
</script>
