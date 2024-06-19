<template>
  <div class="lastTwit" v-for="(item, index) in twitsAjenos" :key="index">
    <div class="img-perfil">
      <img :src="item.img" alt="Descripción de la imagen" />
    </div>
    <div>
      <p class="user">@{{ item.user }}</p>
      <p class="twit-p">{{ item.twit }}</p>

      <div>
        <ul class="social-b">
          <li><i class="fa-regular fa-thumbs-up"></i> {{ item.likes }}</li>
          <li><i class="fa-solid fa-retweet"></i> {{ item.retweets }}</li>
          <li><i class="fa-regular fa-bookmark"></i> {{ item.guardados }}</li>
        </ul>
      </div>
    </div>
  </div>
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
.user {
  font-weight: bolder;
  font-size: 1.1rem;
  margin-bottom: 5px;
}
.lastTwit {
  width: 600px;
  padding: 20px;
  align-items: flex-start;
  display: flex;
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
}
.lastTwit:hover {
  background-color: rgba(128, 128, 128, 0.109);
}
.twit-p {
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
export default {
  name: 'allTwits',
  data: function () {
    return {
      twitsAjenos: [
        {
          user: 'BasketFan123',
          img: '@/assets/img/imgUsers/user-1.png',
          twit: '¡Qué temporada tan increíble de los Nuggets! Jokic está imparable. 🏀🔥 #MVP',
          likes: 120,
          guardados: 30,
          retweets: 50
        },
        {
          user: 'HoopsLover',
          img: '/src/assets/img/imgUsers/user-2.png',
          twit: '¿Alguien más piensa que los Lakers necesitan un nuevo entrenador? 🤔 #NBA',
          likes: 80,
          guardados: 15,
          retweets: 25
        },
        {
          user: 'DunkMaster',
          img: '/src/assets/img/imgUsers/user-3.png',
          twit: '¡Ese mate de Ja Morant fue de otro mundo! 😱👏 #HighlightReel',
          likes: 200,
          guardados: 50,
          retweets: 70
        },
        {
          user: 'CourtSideVibes',
          img: '/src/assets/img/imgUsers/user-4.png',
          twit: 'Los Celtics están mostrando un juego muy sólido esta temporada. #BostonStrong 🍀',
          likes: 150,
          guardados: 40,
          retweets: 60
        },
        {
          user: 'SwishQueen',
          img: '/src/assets/img/imgUsers/user-5.png',
          twit: '¡Steph Curry no para de meter triples desde el logo! 🔥🏀 #ChefCurry',
          likes: 220,
          guardados: 55,
          retweets: 85
        },
        {
          user: 'ReboundKing',
          img: '/src/assets/img/imgUsers/user-6.png',
          twit: 'Andre Drummond está dominando los tableros como nunca. #Rebotes',
          likes: 90,
          guardados: 20,
          retweets: 30
        },
        {
          user: 'FastBreakFanatic',
          img: '/src/assets/img/imgUsers/user-8.png',
          twit: "La velocidad de De'Aaron Fox es una locura, ¡nadie puede alcanzarlo! ⚡🏀 #SpeedDemon",
          likes: 170,
          guardados: 45,
          retweets: 65
        },
        {
          user: '3PointSniper',
          img: '/src/assets/img/imgUsers/user-9.png',
          twit: 'Klay Thompson está de vuelta y mejor que nunca. ¡Splash! 💦 #SplashBrothers',
          likes: 210,
          guardados: 60,
          retweets: 90
        },
        {
          user: 'DefenseWins',
          img: '/src/assets/img/imgUsers/user-10.png',
          twit: '¡Increíble bloqueo de Rudy Gobert! La defensa es la clave del juego. 🛡️🏀 #DefensivePlayerOfTheYear',
          likes: 140,
          guardados: 35,
          retweets: 55
        },
        {
          user: 'ClutchPerformer',
          img: '/src/assets/img/imgUsers/user-11.png',
          twit: 'Dame Lillard con otro buzzer beater. ¡Es el rey del clutch! ⏰🏀 #DameTime',
          likes: 190,
          guardados: 50,
          retweets: 80
        },
        {
          user: 'PostUpPro',
          img: '/src/assets/img/imgUsers/user-12.png',
          twit: 'Joel Embiid es una bestia en el poste bajo, ¡imparable! #TrustTheProcess',
          likes: 160,
          guardados: 40,
          retweets: 60
        },
        {
          user: 'AssistMaster',
          img: '/src/assets/img/imgUsers/user-13.png',
          twit: '¡Qué visión de juego tiene Luka Doncic! Sus asistencias son mágicas. 🎩🏀 #WonderBoy',
          likes: 200,
          guardados: 55,
          retweets: 85
        },
        {
          user: 'RookieWatch',
          img: '/src/assets/img/imgUsers/user-14.png',
          twit: 'Cade Cunningham está mostrando mucho potencial en su año de novato. #FutureStar',
          likes: 130,
          guardados: 30,
          retweets: 45
        },
        {
          user: 'TripleDoubleKing',
          img: '/src/assets/img/imgUsers/user-15.png',
          twit: 'Russell Westbrook con otro triple-doble. ¡Es una máquina! 🔥🏀 #TripleDouble',
          likes: 210,
          guardados: 60,
          retweets: 90
        },
        {
          user: 'BuzzerBeater',
          img: '/src/assets/img/imgUsers/user-16.png',
          twit: 'El partido de anoche entre los Suns y los Warriors fue épico. ¡Qué final! 🌅🏀 #GameWinner',
          likes: 180,
          guardados: 45,
          retweets: 70
        },
        {
          user: 'NBAAnalyst',
          img: '/src/assets/img/imgUsers/user-17.png',
          twit: 'La química entre LeBron y AD es impresionante. Los Lakers tienen una dupla de ensueño. 🏆 #LakeShow',
          likes: 200,
          guardados: 50,
          retweets: 75
        },
        {
          user: 'FantasyHoops',
          img: '/src/assets/img/imgUsers/user-18.png',
          twit: 'Si tienes a Giannis en tu equipo de fantasía, ¡estás de suerte! Está arrasando esta temporada. 📈🏀 #FantasyBasketball',
          likes: 220,
          guardados: 55,
          retweets: 85
        },
        {
          user: 'ShotClockCheese',
          img: '/src/assets/img/imgUsers/user-19.png',
          twit: 'Ese tiro de último segundo de Kyrie fue pura magia. #UncleDrew 🎯',
          likes: 210,
          guardados: 50,
          retweets: 80
        },
        {
          user: 'BigManMoves',
          img: '/src/assets/img/imgUsers/user-20.png',
          twit: 'Nikola Vucevic está siendo subestimado, ¡es un talento increíble en la pintura! 🏀 #BigManSkills',
          likes: 170,
          guardados: 40,
          retweets: 65
        },
        {
          user: 'PureShooter',
          img: '/src/assets/img/imgUsers/user-21.png',
          twit: 'Buddy Hield tiene uno de los tiros más bonitos de la liga. 🎯🏀 #Sharpshooter',
          likes: 180,
          guardados: 45,
          retweets: 70
        }
      ]
    }
  },
  mounted: function () {},
  methods: {}
}
</script>
