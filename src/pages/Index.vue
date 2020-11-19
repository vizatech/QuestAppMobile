<template>
  <q-page class="bg-gradiend">
    <div class="q-pa-md column">
      <div class="col">
        <div class="main-title">Популярні</div>
        <q-scroll-area
          horizontal
          style="height: 130px; width: 100%;"
        >
          <div class="row no-wrap">
            <q-card
              inline
              class="top-card"
              v-for="quest in top_quests"
              :key="quest.id"
              clikable
              @click="selectQuest(quest.title)"
            >
              <q-img 
                :src="quest.img"
                style="border-radius: 10px;"
                spinner-color="primary"
                spinner-size="125px"
              >
                <q-icon v-if="quest.locked" name="lock" class="text-red-5 absolute-center" style="font-size: 3rem;" />
              </q-img>
              <div :class="'q-pa-sm '+ quest.color +' absolute-bottom text-white'">
                {{ quest.title }}
              </div>
            </q-card>
          </div>
        </q-scroll-area>
      </div>
      <div class="main-title">Поруч</div>
      <div class="col q-pb-md">
        <q-card
          class="near-card"
          v-for="quest in near_quests" 
          :key="quest.id"
          clikable
          @click="selectQuest(quest.id)"
        >
          <q-img
            :src="quest.img"
            basic
            spinner-color="primary"
            spinner-size="125px"
          >
            <q-icon v-if="quest.locked" name="lock" class="text-red-5 absolute-left" style="font-size: 2rem;" />
            <div :class="'absolute-bottom text-subtitle2 '+ quest.color">
              {{ quest.title }}
              <q-btn
                class="absolute-right"
                flat
                round
                dence
                icon="favorite_border"
              />
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="css">
html {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

html::-webkit-scrollbar {
  width: 0px; /* For Chrome, Safari, and Opera */
}

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

.main-title {
  font-family: Comfortaa;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.015em;

  color: #FFFFFF;
}

.com-reg {
  font-family: 'Comfortaa-regular';
  font-style: normal;
  font-weight: bold;
}

.top-card {
  border-radius: 10px;
  width: 125px;
  height: 125px;
  margin-right: 10px;
}
.near-card {
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>

<script>
import { Plugins } from '@capacitor/core'

const { Haptics } = Plugins

import { mapGetters } from "vuex"

import questWindowDef from '../components/QuestWindow.vue'
import questWindowQuiz from '../components/QuestWindowQuiz.vue'
import questWindowGame from '../components/QuestWindowGame.vue'

export default {
  components: {
  },
  data() {
    return {
      selected_quest: ''
    }
  },
  computed: {
    ...mapGetters({
      top_quests: 'geo/top_quests',
      points: 'geo/points',
      near_quests: 'quest/quests'
    })
  },
  mounted() {

  },
  methods: {
    selectQuest(quest_id) {

      if( this.near_quests[quest_id].locked === false ) {

        this.$store.commit('quest/SET_SELECTED_QUEST', quest_id)
        
        switch(this.near_quests[quest_id].type){

          case 'quiz':
            this.$q.dialog({
              component: questWindowQuiz,
              parent: this,
              data: {
                quest: {
                  id: this.near_quests[quest_id].id,
                  type: this.near_quests[quest_id].type,
                  title: this.near_quests[quest_id].title,
                  text: this.near_quests[quest_id].text,
                  img: this.near_quests[quest_id].img,
                  points: this.near_quests[quest_id].points
                }
              }
            })
            break;

          case 'html_game':
            this.$q.dialog({
              component: questWindowGame,
              parent: this,
              data: {
                quest: {
                  id: this.near_quests[quest_id].id,
                  type: this.near_quests[quest_id].type,
                  title: this.near_quests[quest_id].title,
                  text: this.near_quests[quest_id].text,
                  img: this.near_quests[quest_id].img,
                  points: this.near_quests[quest_id].points
                }
              }
            })
            break;

          default:
            this.$q.dialog({
              component: questWindowDef,
              parent: this,
              data: {
                quest: {
                  id: this.near_quests[quest_id].id,
                  type: this.near_quests[quest_id].type,
                  title: this.near_quests[quest_id].title,
                  text: this.near_quests[quest_id].text,
                  img: this.near_quests[quest_id].img,
                  points: this.near_quests[quest_id].points
                }
              }
            })
            break;
        }
      }
      else {
        this.$q.dialog({
          title: 'Системне повідомленя',
          message: 'Цей квест доступний на рівні Resident'
        })
        Haptics.vibrate(1000)
      }
    },
    whereMyPosition() {
      
    },

    
  }
}
</script>
