<template>
  <main class="animate__animated animate__slideInDown">
    <section>
      <login v-if="!flagSession" @submit="handleLogin()" />
      <template v-else>
        <Twit @submit="getTwits()" />
        <div v-show="flagLt" class="titleLT">
          <p>Tu Ultimo Posteo</p>
        </div>
        <transition name="fade">
          <div v-show="flagLt" class="lastTwit">
            <div class="buttonsAction">
              <router-link class="butOn" :to="'/twit/' + idLast">Editar</router-link>
              <button @click="borrar(idLast)">Eliminar</button>
            </div>
            <div class="img-perfil">
              <img :src="userIMG" alt="Descripción de la imagen" />
            </div>
            <div>
              <p class="user">@{{ user }}</p>
              <p>{{ lastTwit }}</p>
              <div>
                <ul class="social-b">
                  <li><i class="fa-regular fa-thumbs-up"></i> 0</li>
                  <li><i class="fa-solid fa-retweet"></i> 0</li>
                  <li><i class="fa-regular fa-bookmark"></i> 0</li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
        <div class="titleLT">
          <p>Todos los Posteos</p>
        </div>
        <allTwits />
      </template>
    </section>
  </main>
  <aside v-show="flagSession"><Noticias /></aside>
  <Acount v-show="flagSession" :user="user" :contador="contador" />
</template>

<style scoped>
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
.titleLT {
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: 520;
  color: red;
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
}
.user {
  font-weight: bolder;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.lastTwit.recar {
  opacity: 0;
  animation: op 1s all;
}

@keyframes op {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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

.lastTwit > div {
  overflow: hidden;
  word-wrap: break-word;
  white-space: normal;
}

.lastTwit > div > p:last-child {
  width: 490px;
  height: 100%;
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
import userIMG from '../assets/img/user.png'
import Noticias from '../components/noticias.vue'
import Login from '../components/login.vue'
import Twit from '../components/twit.vue'
import allTwits from '../components/allTwits.vue'
import Acount from '../components/Acount.vue'
export default {
  name: 'HomeView',
  components: {
    Login,
    Twit,
    allTwits,
    Noticias,
    Acount
  },
  data() {
    return {
      userIMG,
      flagSession: false,
      user: '',
      twits: [],
      lastTwit: '',
      flagLt: false,
      idLast: null,
      contador: 0
    }
  },
  created() {
    this.getUser(), this.getTwits()
  },
  methods: {
    borrar: function (indice) {
      this.twits.splice(indice, 1)
      localStorage.setItem('twits', JSON.stringify(this.twits))
      this.getTwits()
    },
    getTwits: function () {
      const loTwits = localStorage.getItem('twits')
      const lsTwit = document.querySelector('.lastTwit')
      if (loTwits) {
        this.twits = JSON.parse(loTwits)
        console.log(this.twits)
        this.contador = this.twits.length

        if (this.twits.length > 0) {
          this.lastTwit = this.twits[this.twits.length - 1]
          this.idLast = this.twits.length - 1
          console.log(this.idLast)
          this.flagLt = true
          if (lsTwit) {
            if (lsTwit) {
              lsTwit.classList.add('recar')
              setTimeout(function () {
                lsTwit.classList.remove('recar')
              }, 200)
            }
          }
        } else {
          this.flagLt = false
        }
      }
    },
    getUser() {
      const localUser = localStorage.getItem('user')
      if (localUser) {
        this.user = JSON.parse(localUser)
        this.flagSession = true
      } else {
        this.flagSession = false
      }
    },
    handleLogin() {
      const usuario = localStorage.getItem('user')
      if (usuario != '') {
        this.user = JSON.parse(usuario)
        this.flagSession = true
      }
    }
  }
}
</script>
