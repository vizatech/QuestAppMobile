<template>
  <q-page class="flex q-pa-sm column bg-gradiend">
    <q-toolbar class="row justify-center" style="z-index: 1;">
      <q-avatar size="33vw" @click="coin = !coin">
        <transition
          appear
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY"
        >
          <img v-if="!coin" src="../statics/img/other/vlad_profile.png" />
        </transition>
        <transition
          appear
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY"
        >
          <img v-if="coin" src="../statics/img/other/qr_real.png" />
        </transition>
      </q-avatar>
    </q-toolbar>
    <q-card class="bg-white" style="border-radius: 10px; top: -8vh; height: 33vh; max-height: 33vh;">
      <q-card-section class="row justify-center" style="top: 6vh;">
        <div class="text-h6">Влад Тіунов</div>
      </q-card-section>
      <q-card-section class="full-width" style="top: 4vh;">
        <div class="full-width row">
          <div class="col text-center">
            <div class="text-h6">24</div> 
            <p>TUS</p>
          </div>
          <q-separator vertical inset />
          <div class="col text-center">
            <div class="text-h6">9</div> 
            <p>FOINTS</p>
          </div>
          <q-separator vertical inset />
          <div class="col text-center">
            <div class="text-h6">807</div> 
            <p>SKILL</p> 
          </div>
        </div>
        <div class="full-width row">
          <div class="col text-center">
            <div class="text-h6">11</div> 
            <p>TIKI</p>
          </div>
          <q-separator vertical inset />
          <div class="col text-center">
            <div class="text-h6">79</div> 
            <p>KARMA</p>
          </div>
          <q-separator vertical inset />
          <div class="col text-center">
            <div class="text-h6">371</div> 
            <p>HIP</p> 
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="titleprofile text-center text-white">Твоя власна картка FreeGen</div>
    <q-card class="bg-white" style="border-radius: 10px; height: 10vh; max-height: 10vh;">
      <q-card-section class="text-center">
        <img src="../statics/img/other/pngkey.png" />
        <p>ID: 010020120021</p>
      </q-card-section>
    </q-card>
    <div class="titleprofile text-center text-white">Твої винагороди</div>
    <q-card class="bg-white" style="border-radius: 10px;">
      <q-card-section class="text-center row">
        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/1.png" />
          <p class="acvtext">закінчив 5 власних ініціатив - 4/5</p>
        </div>
        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/2.png" />
          <p class="acvtext">активний учасник соц. акцій - 3/5</p>
        </div>
        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/3.png" />
          <p class="acvtext">захисник природи - 2/5</p>
        </div>
        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/4.png" />
          <p class="acvtext">подолав 20 км на вейку - 2/5</p>
        </div>

        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/5.png" />
          <p class="acvtext">воїн соціальних мереж  3/5</p>
        </div>
        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/6.png" />
          <p class="acvtext">лідер політичного руху  3/5</p>
        </div>
        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/7.png" />
          <p class="acvtext">відвідав 30 івентів - 1/5</p>
        </div>
        <div class="col-3">
          <q-img style="width: 56px; height: 56px;" src="../statics/img/achievements/8.png" />
          <p class="acvtext">адепт руху моржування - 3/5</p>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="css">
.bg-gradiend {
  background: #eb5c18;
  background: -moz-linear-gradient(top, #eb5c18 40%, #ffffff 110%);
  background: -webkit-linear-gradient(top, #eb5c18 40%, #ffffff 110%);
  background: linear-gradient(to bottom, #eb5c18 40%, #ffffff 110%);
  /**
  min-height: calc(100vh);
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  */
}

.acvtext {
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  font-size: 7px;
  line-height: 8px;
  text-align: center;

  color: #949494;
}

.titleprofile {
  font-family: Comfortaa;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: -0.015em;
}
</style>
<script>
export default {
  data() {
    return {
      coin: false
    }
  },
  methods: {
    showPersonalQR() {
      console.log('test!!!!')
      return this.coin = !this.coin;
    }
  }
}
</script>
