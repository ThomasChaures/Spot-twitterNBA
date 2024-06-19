<template>
  <div>
    <h2>Bienvenido a Spot</h2>
    <p>La red social de la <span>NBA</span></p>
    <p>Completa el form para loguearte!</p>
    <form @submit.prevent="login()">
      <label for="nombre">Nombre de usuario</label>
      <input type="text" name="nombre" id="nombre" v-model="nombre" />
      <button type="submit">Login</button>
    </form>
    <p v-show="mensajeFlag" class="redError animate__animated animate__shakeX">{{ mensaje }}</p>
  </div>
</template>

<style scoped>
input {
  padding: 4px;
  margin-top: 7px;
  background: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 48px -7px rgba(171, 171, 171, 0.77);
  -webkit-box-shadow: 0px 0px 48px -7px rgba(171, 171, 171, 0.77);
  -moz-box-shadow: 0px 0px 48px -7px rgba(171, 171, 171, 0.77);
}
button {
  background: red;
  color: #fff;
  cursor: pointer;
  padding: 4px;
  outline: none;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
}
button:hover {
  background: rgb(252, 60, 60);
}

div {
  max-width: 300px;
  margin: auto;
  text-align: center;
  padding-top: 60px;
}
h2 {
  font-size: 2rem;
}
div > p:nth-child(2) > span {
  font-weight: bold;
}
div > p:nth-child(2) {
  font-size: 1.4rem;
  margin-top: 2px;
}

div > p:nth-child(3) {
  margin-top: 10px;
}

form {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      nombre: '',
      mensaje: '',
      mensajeFlag: false
    }
  },
  emits: ['submit'],
  methods: {
    submitTwit() {
      this.$emit('submit')
    },
    login: function () {
      if (this.nombre.trim() !== '' && this.nombre.trim().length <= 10) {
        localStorage.setItem('user', JSON.stringify(this.nombre))
        this.$emit('submit', this.nombre)
        this.nombre = ''
      } else {
        this.mensajeFlag = true
        this.mensaje = 'Debe ingresar un minimo de un carácter para loguearte.'
        console.log(this.mensajeFlag)
      }
    }
  }
}
</script>
