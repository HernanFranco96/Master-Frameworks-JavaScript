<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>
        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          <br>
          {{ mail | mayusculas | concatenaYear('Este es el mejor año.') }} <!-- Aplicamos un filtro-->
        </div>

        <div class="favorita" v-if="favorita">
          <h3>{{favorita.title}}</h3>
        </div>

        <div id="articles">
          <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
            <Pelicula 
              :pelicula="pelicula"
              v-on:favorita="llegoPeliculaFavorita"
            ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from './Sidebar.vue';

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    llegoPeliculaFavorita(favorita){
      console.log(favorita)
      this.favorita = favorita;
    }
  },
  filters: { // Filtros
    mayusculas(value){
      return value.toUpperCase();
    },
    concatenaYear(value, message){
      var date = new Date();

      return value + ' ' + date.getFullYear() + ' ' + message;
    } 
  },
  computed: { // Propiedad computada, modifica una propiedad original y genera una nueva propiedad
    peliculasMayuscula(){
      var peliculasMod = this.peliculas;
      for(var i = 0; i < this.peliculas.length; i++){
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      
      return peliculasMod;
    },
    misDatos(){
      return this.nombre + ' ' + this.apellido + '<br/>' + 'Sitio web: ' + this.mail;
    }
  },
  data() {
    return {
      nombre: 'Hernan',
      apellido: 'Franco',
      mail: 'hernan.franco051096@gmail.com',
      favorita: null,
      peliculas: [
        {
          title: "Batman",
          year: 2017,
          image: "https://i.blogs.es/24bcec/the-batman-affleck/450_1000.jpg",
        },
        {
          title: "El Señor de los Anillos",
          year: 2003,
          image:
            "https://as.com/epik/imagenes/2020/04/07/portada/1586255793_671702_1586256329_noticia_normal.jpg",
        },
        {
          title: "Warcraft",
          year: 2016,
          image:
            "https://www.cinemascomics.com/wp-content/uploads/2017/06/warcraft-secuelas.jpg",
        },
        {
          title: "Glemlins",
          year: 1984,
          image:
            "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_600/https://wipy.tv/wp-content/uploads/2020/09/elenco-de-la-nueva-serie-de-gremlins.jpg",
        },
      ],
    };
  },
};
</script>
