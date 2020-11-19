<template>
  <q-dialog
    ref="dialog"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-primary text-white" lazy>
      <q-bar class="fixed-top row">
        <q-btn class="justify-left" size="md" dense flat icon="keyboard_backspace" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Назад</q-tooltip>
        </q-btn>
      </q-bar>
      <l-map ref="map" :zoom="zoom" :center="center" :options="mapOptions">
        <l-tile-layer :url="url" :attribution="attribution" />

        <l-circle
            :lat-lng="convertLatLng(currentPos.lat, currentPos.long)"
            :radius="25"
            color="orange"
        />
        <l-marker 
          v-for="point in near_quests[selected_quest].points"
          :key="point.index"
          :lat-lng="convertLatLng(point.p_pos.lat, point.p_pos.long)"
        >
          <l-icon
            :icon-anchor="iconAnchor"
            class-name="someExtraClass"
          >
            <svg id="Layer_1" enable-background="new 0 0 497 497" height="32" viewBox="0 0 497 497" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m248.5 0v497l147.653-214.044c20.382-29.176 32.347-64.666 32.347-102.956 0-99.411-80.589-180-180-180z" fill="#ff1b10"/><path d="m398.5 180c0-99.411-67.157-180-150-180-99.411 0-180 80.589-180 180 0 38.29 11.965 73.78 32.347 102.956l147.653 214.044 123.044-214.044c16.985-29.176 26.956-64.666 26.956-102.956z" :fill='!point.p_locked ? "#008000" : "#ff451b"'/><path d="m248.5 30v300c82.843 0 150-67.157 150-150s-67.157-150-150-150z" fill="#d6faff"/><path d="m368.5 180c0-82.843-53.726-150-120-150-82.843 0-150 67.157-150 150s67.157 150 150 150c66.274 0 120-67.157 120-150z" fill="#fff"/><path d="m248.5 90v180c49.626 0 90-40.374 90-90s-40.374-90-90-90z" fill="#ff1b10"/><path d="m308.5 180c0-49.626-26.916-90-60-90-49.626 0-90 40.374-90 90s40.374 90 90 90c33.084 0 60-40.374 60-90z" fill="#ff451b"/></svg>
          </l-icon>
        </l-marker>
        <l-circle
          v-for="(point, index) in near_quests[selected_quest].points"
          :key="index"
          :lat-lng="convertLatLng(point.p_pos.lat, point.p_pos.long)"
          :radius="getPointRadius(index)"
          :color='!point.p_locked ? "#008000" : "#ff451b"'
        >
          <l-popup>{{ point.p_title }}</l-popup>
        </l-circle>


        <l-polyline :lat-lngs="pointsLine" color="orange"></l-polyline>

        <l-control position="topright">
          <q-btn
            class="justify-right"
            size="md"
            text-color="black"
            dense
            flat
            icon="highlight_off"
            v-close-popup
          >
            <q-tooltip content-class="bg-white text-primary">Назад</q-tooltip>
          </q-btn>
          <br />
          <br />
          <q-btn
            class="justify-right"
            size="md"
            text-color="black"
            dense
            flat
            icon="gps_fixed"
            @click="whereMyPosition()"
          >
            <q-tooltip content-class="bg-white text-primary">Де я?</q-tooltip>
          </q-btn>
          <!--<p class="text-black">H: {{ $store.getters['geo/currentHeading'] }}</p> 
          <p class="text-black">S: {{ $store.getters['geo/currentSpeed'] }}</p>-->
        </l-control>
        <l-control position="bottomleft">
          <q-btn
            @click="questCheckIn()"
            v-if="checkIn && continuedQuest != null && near_quests[continuedQuest.id].type != 'race'"
            color="primary justify-center"
            size="xl"
            label="CHECK-IN"
          />
          <q-btn
            @click="questCheckIn()"
            v-if="checkIn && continuedQuest != null && near_quests[continuedQuest.id].type === 'race' && continuedQuest.step === 0"
            color="primary justify-center"
            size="xl"
            label="CHECK-IN RACE"
          />
          <q-card class="bg-primary text-white" v-if="continuedQuest != null && near_quests[continuedQuest.id].type === 'race' && continuedQuest.step != 0">
            <q-card-section>
              <strong v-if="continuedQuest != null && near_quests[continuedQuest.id].type === 'race'">
                Час: {{ time }}
              </strong>
            </q-card-section>
          </q-card>
          <q-card class="bg-primary text-white" v-if="!checkIn">
            <q-card-section>
              <strong v-if="distanceToNextPoint != null">Відстань до наступної точки {{ distanceToNextPoint }} км</strong>
              <strong v-if="distanceToNextPoint === null">Пошук Вашої локації...</strong>
            </q-card-section>
          </q-card>
        </l-control>
      </l-map>
    </q-card>
  </q-dialog>
</template>

<script>
import { Plugins } from '@capacitor/core'

const { Haptics } = Plugins

import { mapGetters } from "vuex"

import { latLng } from "leaflet"
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LCircle, LPolyline, LControl, LPopup, LIcon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import questQuiz from './QuestQuiz.vue'

export default {
  name: "QuestMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle,
    LPolyline,
    LControl,
    LPopup,
    LIcon
  },
  data() {
    return {
			pointsLine: [],
      distanceToNextPoint: null,
      checkIn: false,
      currentPoint: 0,
      currentPointData: {},
      geoId: null,
      position: 'determining...',
      lat_long: 'determining...',
      time: 0,
      timer: null,
      map: null,
      iconAnchor: [16, 15],
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      }
		};
	},
	computed: {
    ...mapGetters({
      selected_quest: 'quest/selectedQuest',
      continuedQuest: 'quest/continuedQuest',
      near_quests: 'quest/quests',
      currentPos: 'geo/currentPos'
    })
  },
  mounted() {
    this.createPointsLine()

    setInterval(() => {
      this.getDistanceToNextPoint()
    }, 5000)
  },
	methods: {

    createPointsLine() {
      Object.keys(this.near_quests[this.selected_quest].points).forEach(key => {
        this.pointsLine.push(
          latLng(
            this.near_quests[this.selected_quest].points[key].p_pos.lat, 
            this.near_quests[this.selected_quest].points[key].p_pos.long
          )
        )
      })
      this.center = this.pointsLine[0]
    },
    getDistanceToNextPoint() {
      const lQuest = (this.continuedQuest != null) ? this.continuedQuest.id : this.selected_quest
      const lStep = (this.continuedQuest != null) ? this.continuedQuest.step : 0

      this.$store.dispatch('geo/getDistance', {
        from: {
          lat: this.currentPos.lat,
          long: this.currentPos.long
        },
        to: {
          lat: this.near_quests[lQuest].points[lStep].p_pos.lat,
          long: this.near_quests[lQuest].points[lStep].p_pos.long
        }
      }).then(resp => {
        this.distanceToNextPoint = resp.data.distance.toFixed(2)
        if(this.distanceToNextPoint < 0.05) {
          this.checkIn = true
          if( this.near_quests[lQuest].points[lStep].data.type === 'race_checkpoint' ) {
            //this.$store.commit('quest/QUEST_POINT_COMPLITED')
            //this.near_quests = this.$store.getters['quest/quests']
            this.questCheckIn()
            //this.questStepHandler()
            Haptics.vibrate()
          }
        }
        else
          this.checkIn = false
      })
    },
		convertLatLng(lat, long) {
      return latLng(lat, long)
    },
    getPointRadius(index) {
      const lStep = (this.continuedQuest != null) ? this.continuedQuest.step : 0

     if(index != lStep)
        return 30;
      else
        return Math.random() * (60 - 30) + 30;
    },
    whereMyPosition() {
      this.center = latLng(this.$store.getters['geo/currentPos'].lat, this.$store.getters['geo/currentPos'].long)
    },
    getPointsOfQuest(quest_id) {
      return this.near_quests[quest_id].points
    },

    questCheckIn() {

      if(this.continuedQuest === null) {
        this.$q.dialog({
          title: `${this.near_quests[this.selected_quest].title}`,
          message: `Бажаєте розпочати цей квест?`,
          html: true,
          position: 'bottom',
          cancel: true
          
        }).onOk(() => {
          this.$store.commit('quest/SET_CONTINUED_QUEST', {
            id: this.selected_quest,
            step: 0
          })
          this.questStepHandler()
        }).onCancel(() => {
          // console.log('>>>> Cancel')
        })
      }
      else {
        console.log(`You got starting point of ${this.continuedQuest.id}`)
        this.questStepHandler()
      }
    },

    questStepHandler() {
      const lQuest = this.continuedQuest

      if(lQuest != null) {
        switch( this.near_quests[lQuest.id].points[lQuest.step].data.type ) {
          case 'start_info_sm': 
            this.$q.dialog({
              title: `${this.near_quests[lQuest.id].points[lQuest.step].data.title}`,
              message: `${this.near_quests[lQuest.id].points[lQuest.step].data.text}`,
              html: true,
              position: 'bottom'
              
            }).onOk(() => {
              this.$store.commit('quest/QUEST_POINT_COMPLITED')
              this.near_quests = this.$store.getters['quest/quests']
              console.log('RACE STARTED')
              //this.questStepHandler()
              //this.questCheckIn()
              this.timer = setInterval(() => {
                this.time++
              }, 1000)
            })
            break;
          case 'race_checkpoint':
            this.$q.notify({
              message: `Ви проїхали точку ${this.near_quests[lQuest.id].points[lQuest.step].p_title}`,
              position: 'top'
            })
            this.$store.commit('quest/QUEST_POINT_COMPLITED')
            this.near_quests = this.$store.getters['quest/quests']
            //this.questStepHandler()
            break;
          case 'race_final':
            this.$store.commit('quest/QUEST_POINT_COMPLITED')
            this.near_quests = this.$store.getters['quest/quests']
            this.$q.dialog({
              title: `Вітаємо!`,
              message: `Ви пройшли квест-гонку ${this.near_quests[lQuest.id].title}. Ваш час ${this.time}.`,
              html: true,
              position: 'bottom'
            }).onOk(() => {
              clearInterval(this.timer)
            })
            break;

          case 'info':
            this.$q.dialog({
              title: `Інформація`,
              message: `${this.near_quests[lQuest.id].points[lQuest.step].data.text}`,
              html: true,
              position: 'standard'
              
            }).onOk(() => {
              this.$store.commit('quest/QUEST_POINT_COMPLITED')
            })
            break;
          case 'question':
            this.$q.dialog({
              title: 'Опитування',
              message: `${this.near_quests[lQuest.id].points[lQuest.step].data.text}`,
              prompt: {
                model: '',
                isValid: val => val.length > 2, // << here is the magic
                type: 'text' // optional
              },
              persistent: true
            }).onOk(data => {
              // console.log('>>>> OK, received', data)
              this.$store.commit('quest/QUEST_POINT_COMPLITED')
            })
            break;
          case 'quiz':
            this.$q.dialog({
              component: questQuiz,
              parent: this
            }).onOk((data) => {
              if(data.answer.right) {
                this.$q.notify({
                  message: 'Дійсно! Ви абсолютно праві! +1tus',
                  color: 'primary',
                  textColor: 'white',
                  icon: 'mood',
                  position: 'top'
                })
              }
              else {
                this.$q.notify({
                  message: 'Невірна відповідь. Наступного разу ти зможешь краще!\nРухайся до наступної точки.',
                  color: 'primary',
                  textColor: 'white',
                  icon: 'mood_bad',
                  position: 'top'
                })
              }
              this.$store.commit('quest/QUEST_POINT_COMPLITED')
            })
            break;
        }
        /*if(this.near_quests[lQuest.id].points[lQuest.step].data.type === 'start_info_sm') {
          this.$q.dialog({
            title: `${this.near_quests[lQuest.id].points[lQuest.step].data.title}`,
            message: `${this.near_quests[lQuest.id].points[lQuest.step].data.text}`,
            html: true,
            position: 'bottom'
            
          }).onOk(() => {
            this.$store.commit('quest/QUEST_POINT_COMPLITED')
            console.log('RACE STARTED')
          })
        }*/
      }
    },

		// following method is REQUIRED
		// (don't change its name --> "show")
		show () {
			this.$refs.dialog.show()
		},

		// following method is REQUIRED
		// (don't change its name --> "hide")
		hide () {
			this.$refs.dialog.hide()
		},

		onDialogHide () {
			// required to be emitted
			// when QDialog emits "hide" event
			this.$emit('hide')
		},

		onOKClick () {
			// on OK, it is REQUIRED to
			// emit "ok" event (with optional payload)
			// before hiding the QDialog
			this.$emit('ok')
			// or with payload: this.$emit('ok', { ... })

			// then hiding dialog
			this.hide()
		},

		onCancelClick () {
			// we just need to hide dialog
			this.hide()
		}
	},
  props: {
  }
}
</script>
