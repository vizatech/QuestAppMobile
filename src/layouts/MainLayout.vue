<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          @click="$router.go(-1)"
          class="justify-left" 
          dense 
          flat 
          round 
          icon="undo"
          size="sm"
        />
        <q-toolbar-title class="absolute-center">
          <q-avatar square>
            <img src="../statics/img/freegen-logo-white 2.svg">
          </q-avatar>
          FreeGen Reality
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-dialog
      ref="arwindow"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <div name="ar-camera" class="fit bg-dark">
          <iframe
            src="statics/ar-aframe.html"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-white">
      <q-toolbar class="text-black">
        <q-tabs
          class="full-width absolute-center fixed" 
          dense 
          align="justify"
        >
          <q-route-tab
            icon="o_home"
            to="/app"
            exact
          />
          <q-route-tab
            icon="ion-search"
            to="/app/search"
            exact
          />
          <q-btn
            flat
            @click="openArWindow()"
          >
            <q-icon style="width: 63px; height: 42px;">
              <svg width="75" height="54" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <path d="M55.7201 7.92987C49.9819 3.995 43.8407 2 37.4685 2C31.7342 2 26.1442 3.70625 20.8536 7.0505C15.5182 10.4302 10.2879 16.5687 6 23C9.46762 28.775 14.211 34.7127 19.1512 38.1174C24.8186 42.0207 30.9808 44 37.4685 44C43.8997 44 50.0488 42.0221 55.7516 38.1213C60.7719 34.6812 65.5494 28.7514 69 23C65.5376 17.2998 60.7444 11.3765 55.7201 7.92987ZM37.5 35.6C35.008 35.6 32.5719 34.861 30.4998 33.4765C28.4278 32.092 26.8128 30.1242 25.8591 27.8218C24.9055 25.5195 24.6559 22.986 25.1421 20.5419C25.6283 18.0977 26.8283 15.8526 28.5905 14.0905C30.3526 12.3283 32.5977 11.1283 35.0419 10.6421C37.486 10.1559 40.0195 10.4055 42.3218 11.3591C44.6242 12.3128 46.592 13.9278 47.9765 15.9998C49.361 18.0719 50.1 20.508 50.1 23C50.0962 26.3406 48.7675 29.5432 46.4053 31.9053C44.0432 34.2675 40.8406 35.5962 37.5 35.6Z" fill="#EB5C18"/>
                </g>
                <path d="M37.53 12.5327C31.748 12.5327 27.0608 17.2199 27.0608 23.0019C27.0608 25.8934 28.2331 28.5105 30.1268 30.4051C31.0979 31.3787 32.2519 32.1508 33.5224 32.677C34.7929 33.2032 36.1548 33.4731 37.53 33.4711C43.312 33.4711 47.9992 28.7839 47.9992 23.0019C47.9992 20.1105 46.8269 17.4934 44.9332 15.5987C43.9677 14.6256 42.8188 13.8536 41.5531 13.3273C40.2873 12.801 38.9297 12.531 37.5589 12.5327H37.5291H37.5309H37.53ZM46.5992 23.0019V23.0131C46.6016 24.4675 46.2502 25.9006 45.5753 27.1889L45.5987 27.1394L46.1885 28.1605L44.9761 28.8614L44.754 28.4769C43.1739 30.5498 40.7556 31.9134 38.0135 32.059L37.9911 32.0599L37.3965 33.0997L36.1813 32.4043L36.4109 32.0021C35.1004 31.8367 33.8415 31.3882 32.7217 30.6876C31.6019 29.987 30.648 29.0511 29.9261 27.9449L29.9047 27.9103H28.7193V26.5103H29.1645C28.6946 25.4012 28.4542 24.2084 28.458 23.0038C28.458 21.4797 28.8341 20.0433 29.4996 18.7823L29.4763 18.8318L28.8957 17.8201L30.11 17.1229L30.3256 17.4981C31.9113 15.4345 34.3324 14.0802 37.0745 13.9439L37.096 13.943L37.6896 12.9098L38.9029 13.6079L38.6752 14.0046C39.9816 14.1737 41.2358 14.6244 42.3511 15.3255C43.4663 16.0266 44.4161 16.9615 45.1348 18.0655L45.1563 18.101H46.3649V19.501H45.8945C46.3623 20.6054 46.6014 21.7932 46.5973 22.9926V23.0029V23.0019H46.5992Z" fill="black"/>
                <path d="M46.3666 18.101H36.3211L35.5166 19.501H39.5663L39.347 19.122L40.5594 18.4211L41.1838 19.501H46.3675V18.101H46.3666Z" fill="black"/>
                <path d="M40.5586 18.4211L39.3462 19.1221L41.5741 22.9758L41.7682 22.6361L42.9834 23.3314L42.3851 24.3786L44.977 28.8614L46.1894 28.1605L40.5586 18.4211Z" fill="black"/>
                <path d="M42.9843 23.3305L41.7691 22.6351L39.5533 26.5094H39.9379V27.9094H38.7525L36.1821 32.4034L37.3973 33.0987L42.9833 23.3305H42.9843Z" fill="black"/>
                <path d="M39.9379 27.9094V26.5094H35.5018L35.7118 26.8753L34.4975 27.5725L33.8871 26.5094H28.7202V27.9094H39.937H39.9379Z" fill="black"/>
                <path d="M34.4984 27.5734L35.7127 26.8762L33.496 23.0159L33.2888 23.3762L32.0755 22.6781L32.6896 21.6103L30.1117 17.1219L28.8975 17.8191L34.4984 27.5725V27.5734Z" fill="black"/>
                <path d="M32.0754 22.6781L33.2888 23.3762L38.9046 13.6079L37.6913 12.9098L32.0754 22.6781Z" fill="black"/>
                <defs>
                  <filter id="filter0_d" x="0" y="0" width="75" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="3"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </q-icon>
            <!--<q-icon name="ion-eye" class="text-primary" style="font-size: 4rem;">
              <q-icon name="camera" class="absolute-center text-grey-9" style="font-size: 2rem;" />
            </q-icon>-->
          </q-btn>
          <q-route-tab
            icon="chat_bubble_outline"
            to="/app/chat"
            exact
          >
            <q-badge color="red" floating>2</q-badge>
          </q-route-tab>
          <q-route-tab
            icon="person_outline"
            to="/app/profile"
            exact
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

import { Plugins } from '@capacitor/core'

const { Geolocation, StatusBar } = Plugins

StatusBar.setBackgroundColor({ color: '#EB5C18' })

export default {
  data() {
    return {
      geoId: null,
      position: 'determining...'
    }
  },
  mounted () {
    this.$store.dispatch('quest/initAllListLoad')

    this.$q.loading.show({
        backgroundColor: 'primary'
    })
    this.timer = setTimeout(() => {
      this.$q.loading.hide()
      this.timer = void 0
    }, 5000)

    setInterval(() => {
      this.getCurrentPosition()
    }, 3000)

    // we start listening
    this.geoId = Geolocation.watchPosition({}, (position, err) => {
      //console.log('New GPS position')
      this.position = position
    })
  },
  methods: {
    openArWindow() {
      this.$refs.arwindow.toggle()
      /*let scene = document.createElement("iframe")
      scene.setAttribute("src", "ar.html")
      scene.setAttribute("width", "100vw")
      scene.setAttribute("height", "100vh")
      document.getElementsByName("ar-camera").appendChild(scene)*/
    },
    getCurrentPosition() {
      Geolocation.getCurrentPosition().then(position => {
        //console.log('Current', position)
        this.position = position

        this.$store.commit('geo/SET_CURRENT_POSITION', {
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
        this.$store.commit('geo/SET_CURRENT_HEADING', position.coords.heading)
        this.$store.commit('geo/SET_CURRENT_SPEED', position.coords.speed)
      })
    }
  },
  beforeDestroy () {
    // we do cleanup
    Geolocation.clearWatch(this.geoId)
  }
}
</script>