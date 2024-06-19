<template>
  <div class="contenedor-n animate__animated animate__bounceInRight">
    <div class="h2-n"><h2>Noticias</h2></div>

    <ul>
      <li class="noti-li" v-for="(item, index) in noticias" :key="index">
        <div class="noti-img">
          <img :src="item.img" alt="Imagen de la noticia" />
        </div>
        <div class="texto">
          <p>{{ item.noticia }}</p>

          <p>{{ item.fecha }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.contenedor-n {
  position: fixed;
  top: 0px;
  right: 220px;
  width: 400px;
  background: rgba(255, 255, 255, 0.932);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
}

@media screen and (max-width: 1850px) {
  .contenedor-n {
    right: 0px;
  }
}

@media screen and (max-width: 1400px) {
  .contenedor-n {
    display: none;
  }
}

.noti-img {
  height: 70px;
}

.noti-img > img {
  height: 100%;
}

.h2-n {
  text-align: center;
  font-size: 1rem;
  padding: 4px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.172);
}

h2 {
  font-weight: 400;
}

.contenedor-n > ul {
  list-style: none;
}

.noti-li:hover {
  background-color: rgba(255, 80, 80, 0.993);
  color: #fff;
}

.noti-li {
  display: flex;
  padding: 10px;
  background: rgba(255, 255, 255, 0.788);
  transition: all 0.2s;
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  margin: 10px;
}

p {
  padding-left: 10px;
}

.texto {
  position: relative;
}

p:nth-child(2) {
  position: absolute;
  bottom: 0;
  font-size: 0.8rem;
}
</style>

<script>
export default {
  name: 'Noticias',
  data: function () {
    return {
      noticias: [
        {
          img: '/src/assets/img/noticias/n1.jpg',
          noticia: 'Dallas aplasta a Boston y se agarra al milagro en las Finales',
          fecha: '15 JUNIO 2024'
        },
        {
          img: '/src/assets/img/noticias/n2.jpg',
          noticia: 'Los Celtics acarician el 18º',
          fecha: '13 JUNIO 2024'
        },
        {
          img: '/src/assets/img/noticias/n3.jpg',
          noticia: 'Los Knicks garantizarán el contrato de Bogdanovic',
          fecha: '17 JUNIO 2024'
        },
        {
          img: '/src/assets/img/noticias/n4.jpg',
          noticia: 'Jarret Allen, en el radar de los Pelicans',
          fecha: '17 JUNIO 2024'
        },
        {
          img: '/src/assets/img/noticias/n5.jpg',
          noticia: 'Andre Drummond busca nuevo equipo',
          fecha: '17 JUNIO 2024'
        }
      ]
    }
  }
}
</script>
