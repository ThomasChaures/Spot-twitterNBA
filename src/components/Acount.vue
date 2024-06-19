<template v-if="user != ''">
  <aside class="animate__animated animate__bounceInLeft">
    <div class="titulo">
      <h1>Spot</h1>
    </div>

    <div class="perfil">
      <div class="img-user">
        <img src="@/assets/img/user.png" alt="" />
      </div>
      <div class="texto">
        <router-link class="pC" :to="'/cuenta'">
          <p>@{{ user }}</p>
          <p>Posteos: {{ contador }}</p>
        </router-link>
      </div>
    </div>

    <div v-if="lastGames.length > 0" class="matches">
      <div class="h2-m">
        <h2>Últimos partidos</h2>
      </div>
      <ul>
        <li
          class="animate__animated animate__fadeIn"
          v-for="(item, index) in lastGames"
          :key="index"
        >
          <div>
            <div
              class="img-team"
              :class="{ winner: item.scores.home.total > item.scores.away.total }"
            >
              <img :src="item.teams.home.logo" alt="" />
            </div>
          </div>
          <div class="m-texto">
            <p>{{ item.scores.home.total }} - {{ item.scores.away.total }}</p>
          </div>
          <div>
            <div
              class="img-team"
              :class="{ winner: item.scores.home.total < item.scores.away.total }"
            >
              <img :src="item.teams.away.logo" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
h2 {
  text-align: center;
  font-weight: 400;
}

.winner {
  background: green;
  padding: 4px;
}

.h2-m {
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
  padding: 10px;
}
.matches ul {
  list-style: none;
}

.m-texto {
  font-size: 1.2rem;
}

.matches {
  background: rgba(255, 255, 255, 0.932);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  padding-bottom: 5px;
}

.matches ul li {
  display: flex;
  margin: 15px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.932);
  width: 290px;
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  transition: all 0.2s;
}

.matches ul li:hover {
  background-color: rgba(255, 80, 80, 0.993);
  color: #fff;
}

.img-team {
  width: 50px;
  height: 50px;
  margin: 10px;
  padding: 4px;
}
.img-team > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titulo {
  background: rgba(255, 255, 255, 0.932);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
}

.titulo h1 {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  background-clip: text;
  background: -webkit-linear-gradient(#ff0000, rgb(150, 36, 36));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
}

aside {
  width: 320px;
  position: fixed;
  top: 0;
  left: 301px;
}

@media screen and (max-width: 1850px) {
  aside {
    left: 70px;
  }
}

@media screen and (max-width: 1400px) {
  aside {
    display: none;
  }
}

.perfil {
  display: flex;
  background: rgba(255, 255, 255, 0.932);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
}
.pC {
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 4px;
  transition: all 0.14s;
}

.pC:hover {
  color: red;
}

.pC > p:nth-child(2) {
  font-size: 0.9rem;
  font-weight: 400;
  margin-top: 5px;
}

.img-user {
  margin-left: 20px;
  border-radius: 50%;
  min-width: 50px;
  width: 70px;
  height: 70px;
  margin-right: 15px;
  border: solid 1px black;
  background: #fff;
  overflow: hidden;
}

.img-user img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
export default {
  name: 'Acount',
  props: ['user', 'contador'],
  data: function () {
    return {
      llave: '3b52f512e129d2636eb605ff782cbe4b',
      lastGames: []
    }
  },
  mounted() {
    this.getMatchs()
  },
  methods: {
    getMatchs: function () {
      const apiToken = this.llave

      const headers = {
        'x-rapidapi-key': apiToken,
        'x-rapidapi-host': 'v1.basketball.api-sports.io'
      }

      const urlAllGames = 'https://v1.basketball.api-sports.io/games?league=12&season=2023-2024'

      fetch(urlAllGames, { headers })
        .then((response) => response.json())
        .then((data) => {
          const games = data.response

          const pastGames = games.filter((game) => new Date(game.date) < new Date())

          pastGames.sort((a, b) => new Date(b.date) - new Date(a.date))
          const last4Games = pastGames.slice(0, 4)

          const upcomingGames = games.filter((game) => new Date(game.date) >= new Date())
          upcomingGames.sort((a, b) => new Date(a.date) - new Date(b.date))
          const next4Games = upcomingGames.slice(0, 4)

          console.log('Próximos 4 partidos:')
          console.log(next4Games)

          console.log('Últimos 4 partidos jugados:')
          console.log(last4Games)
          this.lastGames = last4Games
          console.log(this.lastGames)
        })
        .catch((error) => console.error('Error al obtener los partidos:', error))
    }
  }
}
</script>
