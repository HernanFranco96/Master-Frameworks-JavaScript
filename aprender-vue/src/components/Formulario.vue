<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <!-- prevent evita que se envie el formulario y recargue la pantalla. Solo ejecutara el metodo indicado -->
        <form action="" class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido.</div>
            <div v-if="submitted && !$v.user.nombre.minLength">Este campo debe tener mas caracteres.</div>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido</label>
            <input type="text" name="apellido" v-model="user.apellido" />
            <div v-if="submitted && !$v.user.apellido.required">Este campo es requerido.</div>
            <div v-if="submitted && !$v.user.apellido.minLength">Este campo debe tener mas caracteres.</div>
          </div>
          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea
              name="bio"
              id=""
              cols="30"
              rows="10"
              v-model="user.bio"
            ></textarea>
            <div v-if="submitted && !$v.user.bio.required">Este campo es requerido.</div>
            <div v-if="submitted && !$v.user.bio.minLength">Este campo debe tener mas caracteres.</div>
          </div>
          <div class="form-group radio-buttons">
            <input
              type="radio"
              name="genero"
              id=""
              value="hombre"
              checked
              v-model="user.genero"
            />
            Hombre
            <input
              type="radio"
              name="genero"
              id=""
              value="mujer"
              v-model="user.genero"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              id=""
              value="otro"
              v-model="user.genero"
            />
            Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="datos" v-if="user.nombre && user.apellido">
          <h3>{{ user.nombre + " " + user.apellido }}</h3>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",
  components: {
    Sidebar,
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2),
      },
      apellido: {
        required,
        minLength: minLength(2),
      },
      bio: {
        required,
        minLength: minLength(10),
      },
    },
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellido: "",
        bio: "",
        genero: "",
      },
    };
  },
  methods: {
    mostrarUsuario() {
      this.submitted = true;

      this.$v.$touch(); // Se an tocado los campos que se quieren validar
      if (this.$v.$invalid) { // Si la validacion no es valida
        return false;
      }

      alert("validacion pasada");
    },
  },
};
</script>
