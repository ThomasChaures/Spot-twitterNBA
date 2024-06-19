<script>
export default {
  name: 'Twit',
  data: function () {
    return {
      twit: '',
      twitsArr: [],
      date: ''
    }
  },
  mounted: function () {},
  methods: {
    guardar() {
      let local = localStorage.getItem('twits')
      this.twitsArr = local ? JSON.parse(local) : []
      if (this.twit !== '') {
        this.twitsArr.push(this.twit)
        this.localRecetas()
        this.twit = ''

        console.log(this.twitsArr)
      } else {
        let form = document.querySelector('form')
        form.classList.add('animate__animated', 'animate__bounceIn')
        setTimeout(function () {
          form.classList.remove('animate__bounceIn')
        }, 200)
      }
    },
    localRecetas() {
      localStorage.setItem('twits', JSON.stringify(this.twitsArr))
    }
  }
}
</script>

<template>
  <form @submit.prevent="guardar">
    <textarea
      name="twit"
      id="twit"
      v-model="twit"
      placeholder="Que esta pasando en la NBA?"
    ></textarea>
    <button type="submit">Postear</button>
  </form>
</template>

<style scoped>
textarea {
  resize: none;
  width: 100%;
  min-height: 50px;
  color: black;
  font-size: 1.3rem;
  border: none;
  outline: none;
  background: #ffffff00;
}

form {
  border: 1px solid rgba(0, 0, 0, 0.172);
  border-left: none;
  border-right: none;
  padding: 20px;
  min-width: 340px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
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
</style>
