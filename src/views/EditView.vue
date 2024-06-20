<script>
export default {
  name: 'EditView',
  data: function () {
    return {
      idTwit: null,
      TwitArr: [],
      nuevoTwit: '',
      twit: '',
      mensaje: '',
      mensajeFlag: false
    }
  },
  mounted: function () {
    this.recuperarTwitId()
    this.getTwits()
  },
  methods: {
    recuperarTwitId: function () {
      this.idTwit = parseInt(this.$route.params.id)
      console.log(this.idTwit)
    },
    modificarTwit: function (arr, index, twit) {
      if (twit.trim() !== '') {
        if (index >= 0 && index < arr.length) {
          arr[index] = twit
          localStorage.setItem('twits', JSON.stringify(arr))
          this.mensajeFlag = false
          this.$router.push('/cuenta')
        }
      } else {
        this.mensajeFlag = true
        this.mensaje = 'Debe ingresar un minimo de un carácter para editar el post.'
        console.log(this.mensajeFlag)
      }
    },
    getTwits: function () {
      const loTwits = localStorage.getItem('twits')
      if (loTwits) {
        try {
          this.TwitArr = JSON.parse(loTwits)
          console.log(this.TwitArr)

          if (!Array.isArray(this.TwitArr)) {
            console.error('TwitArr no es un Array')
            return
          }

          if (this.idTwit >= 0 && this.idTwit < this.TwitArr.length) {
            this.nuevoTwit = this.TwitArr[this.idTwit]
            console.log(this.nuevoTwit)
          }
        } catch (e) {
          console.error('Error', e)
        }
      } else {
        console.error('No se encontro')
      }
    }
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="modificarTwit(TwitArr, idTwit, nuevoTwit)">
      <label for="twit">Editar Posteo</label>
      <textarea name="twit" id="twit" cols="30" rows="10" v-model="nuevoTwit"></textarea>
      <div>
        <router-link class="butOn" :to="'/cuenta'">Cancelar</router-link>
        <button type="submit">Confirmar edicion</button>
      </div>
    </form>

    <p class="redError animate__animated animate__shakeX" v-show="mensajeFlag">{{ mensaje }}</p>
  </main>
</template>

<style scoped>
.butOn {
  cursor: pointer;
  background: #ffffff;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 0.678);
  margin-right: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 10px;
  text-decoration: none;
  transition: all 0.3s;
}

.butOn:hover {
  background: #d4d4d4;
}

textarea {
  width: 100%;
  resize: none;
  min-height: 50px;
  color: black;
  font-size: 1.3rem;
  border: none;
  padding: 5px;
  outline: none;
  background: #ffffff;
  margin: 2px;
  margin-top: 20px;
}

label {
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 1.3rem;
  font-weight: bold;
}

button {
  cursor: pointer;
  background: red;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s;
}

button:hover {
  background: rgb(245, 76, 76);
}

form {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.172);
  border-left: none;
  border-right: none;
  padding: 20px;
  min-width: 340px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>
