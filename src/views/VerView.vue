vue Copiar código
<template>
  <main class="animate__animated animate__slideInDown">
    <Login v-if="!user" @submit="handleLogin" />
    <template v-else>
      <div v-show="flagEdit">
        <CambiarNombre :user="user" @bandera="toggleEdit" @update="getUser" />
      </div>
      <section class="firsUserS">
        <div class="banner"></div>
        <div class="img-user">
          <img src="@/assets/img/user.png" alt="User Image" />
        </div>
        <div class="userTg">
          <p>@{{ user }}</p>
          <button @click="flagEdit = true">Editar Perfil</button>
        </div>
      </section>

      <section>
        <template v-if="twits.length > 0">
          <ul>
            <li v-for="(item, index) in twits" :class="'index-' + index" :key="index">
              <div class="lastTwit">
                <div class="buttonsAction">
                  <router-link class="butOn" :to="'/twit/' + index">Editar</router-link>
                  <button @click="deleteTwit(index)">Eliminar</button>
                </div>
                <div class="img-perfil">
                  <img src="@/assets/img/user.png" alt="User Profile Image" />
                </div>
                <div>
                  <p class="user">@{{ user }}</p>
                  <p>{{ item }}</p>
                  <div>
                    <ul class="social-b">
                      <li><i class="fa-regular fa-thumbs-up"></i> 0</li>
                      <li><i class="fa-solid fa-retweet"></i> 0</li>
                      <li><i class="fa-regular fa-bookmark"></i> 0</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </template>
        <template v-else>
          <p class="m-empty">{{ mensaje }}</p>
        </template>
      </section>
    </template>
  </main>
</template>

<style scoped>
section > ul > li {
  list-style: none;
}

.m-empty {
  text-align: center;
  padding: 20px;
  color: #00000093;
  font-size: 1.3rem;
}

.firsUserS {
  padding-bottom: 140px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
}
.banner {
  background-image: url('../assets/img/banner.jpg');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
}

section {
  position: relative;
}

.social-b {
  display: flex;
  list-style: none;
  cursor: pointer;
}

.social-b > li:nth-child(1) {
  padding-left: 0;
}

.social-b > li {
  padding: 10px;
}

.user {
  font-weight: bolder;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.userTg {
  text-align: center;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.userTg > button {
  background: red;
  padding: 4px 13px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  outline: none;
  margin-top: 8px;
  transition: all 0.2s;
}

.userTg > button:hover {
  background: rgb(253, 41, 41);
}

.userTg p {
  font-weight: bold;
  font-size: 1.3rem;
}

.img-user {
  position: absolute;
  border-radius: 50%;
  min-width: 50px;
  width: 150px;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 150px;
  margin-right: 15px;
  border: solid 1px rgb(255, 255, 255);
  background: #fff;
  overflow: hidden;
}

.img-user > img {
  width: 150px;
  height: 100%;
  object-fit: cover;
}

.lastTwit {
  opacity: 1;
  transition: all 0.3s;
  width: 600px;
  padding: 20px;
  display: flex;
  position: relative;
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
}
.lastTwit:hover {
  background-color: rgba(128, 128, 128, 0.109);
}

.buttonsAction {
  position: absolute;
  bottom: 25px;
  right: 20px;
  display: flex;
}
.buttonsAction > button,
.butOn {
  text-decoration: none;
  background: #ffffffad;
  border: solid 1px rgba(0, 0, 0, 0.232);
  border-radius: 50px;
  padding: 2px 10px;
  margin: 2px;
  transition: all 0.2s;
  cursor: pointer;
}

.butOn {
  color: black;
  font-size: 0.9rem;
}

.buttonsAction > button:hover,
.butOn:hover {
  background: red;
  border: solid 1px red;
  color: white;
}

.lastTwit > div > p:last-child {
  width: 490px;
  height: 100%;
  word-wrap: break-word;
  white-space: normal;
}
.lastTwit > div {
  overflow: hidden;
  word-wrap: break-word;
  white-space: normal;
}
.img-perfil {
  border-radius: 50%;
  min-width: 50px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border: solid 1px black;
  background: #fff;
  overflow: hidden;
}

.img-perfil > img {
  width: 50px;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import Login from '../components/login.vue'
import CambiarNombre from '../components/CambiarNombre.vue'

export default {
  name: 'VerView',
  components: {
    Login,
    CambiarNombre
  },
  data() {
    return {
      user: '',
      twits: [],
      flagEdit: false,
      mensaje: 'No cuenta con ningún posteo hecho.'
    }
  },
  mounted() {
    this.initializeUserAndTwits()
  },
  methods: {
    initializeUserAndTwits() {
      this.getUser()
      this.getTwits()
    },
    getTwits() {
      const storedTwits = localStorage.getItem('twits')
      this.twits = storedTwits ? JSON.parse(storedTwits) : []
    },
    deleteTwit(index) {
      this.twits.splice(index, 1)
      localStorage.setItem('twits', JSON.stringify(this.twits))
    },
    toggleEdit(bool) {
      this.flagEdit = bool
    },
    getUser() {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        this.user = JSON.parse(storedUser)
      }
    },
    handleLogin() {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        this.user = JSON.parse(storedUser)
      }
    }
  }
}
</script>
