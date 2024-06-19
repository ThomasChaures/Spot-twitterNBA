<template>
  <div class="content animate__animated animate__fadeIn">
    <form @submit.prevent="editUser(usuario)">
      <label for="nombre">Editar Perfil</label>
      <input type="text" name="nombre" id="nombre" v-model="usuario" />
      <div class="buttons">
        <button @click="emitirFalse()">Cancelar</button>
        <button>Editar</button>
      </div>
    </form>
    <p class="redError animate__animated animate__shakeX" v-show="mensajeFlag">{{ mensaje }}</p>
  </div>
</template>

<style scoped>
.content {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #33333388;
  z-index: 1;
}

input {
  padding: 10px;
  margin-top: 7px;
  background: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 48px -7px rgba(171, 171, 171, 0.77);
  -webkit-box-shadow: 0px 0px 48px -7px rgba(171, 171, 171, 0.77);
  -moz-box-shadow: 0px 0px 48px -7px rgba(171, 171, 171, 0.77);
  border: solid 1px rgba(0, 0, 0, 0.075);
}
button {
  cursor: pointer;
  padding: 4px;
  outline: none;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
}

button:nth-child(1) {
  border: 1px solid red;
}

button:nth-child(2) {
  background: red;
  color: #fff;
  margin-left: 20px;
}

button:nth-child(2):hover {
  background: rgb(252, 60, 60);
}

form {
  position: absolute;
  padding: 20px;
  border-radius: 10px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}
</style>

<script>
export default {
  name: 'CambiarNombre',
  props: ['user'],
  data: function () {
    return {
      usuario: this.user,
      mensaje: '',
      mensajeFlag: false
    }
  },
  emits: ['bandera', 'update'],
  methods: {
    editUser: function (edit) {
      if (edit !== '' && edit.length <= 10) {
        let stringify = JSON.stringify(edit)
        localStorage.setItem('user', stringify)
        this.emitirFalse()
        console.log(edit)
        this.$emit('update', true)
      } else {
        this.mensajeFlag = true
        this.mensaje = 'Debe ingresar un minimo de un carácter para editar el perfil.'
        console.log(this.mensajeFlag)
      }
    },
    emitirFalse: function () {
      this.$emit('bandera', false)
    }
  }
}
</script>
