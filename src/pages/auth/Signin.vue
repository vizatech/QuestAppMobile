<template>
  <q-page class="flex column">
		<q-carousel
      ref="welcome_carousel"
      v-model="welcome_slide" 
      class="bg-gradiend fullscreen"
      swipeable
      animated
    >
      <q-carousel-slide v-for="tmpt in welcome_templates" :key="tmpt.id" :name="tmpt.id" class="no-padding">
        <div v-if="tmpt.title !== 'auth'">
          <q-toolbar class="q-pa-sm justife-top text-white">
            <q-btn
              @click="$refs.welcome_carousel.previous()"
              class="justify-left" 
              dense 
              flat 
              round 
              icon="undo"
              size="sm"
            />
            <q-toolbar-title align="center">
              <q-avatar square>
                <img style="width: 39px; height: 34px;" src="../../statics/img/freegen-logo-small.png">
              </q-avatar>
              FreeGen Reality
            </q-toolbar-title>
            <q-btn
              @click="$refs.welcome_carousel.goTo(4)"
              class="justify-right" 
              dense 
              flat 
              round 
              icon="close"
              size="sm"
            />
          </q-toolbar>
          <q-img :src="tmpt.img" />
          <p class="q-pa-md slide-title">{{ tmpt.title }}</p>
          <p class="q-pa-md" align="center">
            {{ tmpt.text }}
          </p>
          <div class="row justify-center absolute-bottom" style="padding-bottom: 25px;">
            <q-btn
              @click="$refs.welcome_carousel.next()"
              rounded
              size="md"
              color="primary"
              text-color="white"
              label="Далі"
              style="width: 60vw"
            />
          </div>
        </div>
        <div v-else>
          <div align="center">
            <q-img width="60%" style="margin-top: 10%" src="../../statics/img/freegen-logo-white 2.svg" />
            <h3 class="text-white justify-center" style="logo-text">FreeGen <br /> Reality</h3>
          </div>
          <div class="q-pa-md column col fixed-bottom">
            <q-btn
              rounded
              size="md"
              color="primary"
              text-color="white"
              align="between"
            >
              <q-icon name="ion-logo-google" />
              <div class="col" style="font-weight: 600;">Вхід через Google</div>
            </q-btn>
            <br />
            <q-btn
              rounded
              size="md"
              color="primary"
              text-color="white"
              align="between"
              to="/email"
            >
              <q-icon name="ion-mail" />
              <div class="col" style="font-weight: 600;">Вхід через Email</div>
            </q-btn>
            <br />
            <q-btn
              rounded
              size="md"
              color="primary"
              text-color="white"
              align="between"
            >
              <q-icon name="ion-logo-facebook" />
              <div class="col" style="font-weight: 600;">Вхід через Facebook</div>
            </q-btn>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<style lang="css">
.bg-gradiend {
  background: #eb5c18;
  background: -moz-linear-gradient(top, #eb5c18 40%, #ffffff 90%);
  background: -webkit-linear-gradient(top, #eb5c18 40%, #ffffff 90%);
  background: linear-gradient(to bottom, #eb5c18 40%, #ffffff 90%);
  /**
  min-height: calc(100vh);
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  */
}

.logo-text {
  font-family: "Arial Rounded MT Bold";
  font-style: normal;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #FFFFFF;
}

.slide-title {
  font-family: Comfortaa;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  /* or 136% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  color: #000000;
}
</style>

<script>

const welcome_templates = [
  {
    id: 1,
    img: '../../statics/img/welcome/first-slide.png',
    title: 'Самостійні та групові квести або екскурсії простонеба!',
    text: ' Перетвори свій телефон в персонального гіда, '+
          'який проведе екскурсію, або квест-гру по цікавим місцям. Просто обери, або '+
          'вподобай квест чи прогулянку та почни в будь-який час.'
  },
  {
    id: 2,
    img: '../../statics/img/welcome/second-slide.png',
    title: 'Усі пригоди у твоїй власній у кишені!',
    text: 'Квести наповнені історіями і цікавими фактами від місцевих, аудіогідами, вікторинами '+
          'та загадками з доповненою реальністю. Буде яскраво!'
  },
  {
    id: 3,
    img: '../../statics/img/welcome/third-slide.png',
    title: 'Найкращий спосіб ознайомитися із закладом, локацією, або містом',
    text: 'Вбудовані карти, контрольні мітки, считувач: QR-кодів, зображень та об’єктів, '+
          '- не дозволять тобі нудьгувати. А цікаві коментарі, історії та загадки, допоможуть дізнатися більше корисної інформації про місцевість.'
  },
  {
    id: 4,
    title: 'auth'
  }
]

export default {
  data() {
    return {
      welcome_slide: 1,
      welcome_templates
    }
  }
}
</script>
