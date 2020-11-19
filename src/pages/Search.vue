<template>
  <q-page class="bg-gradiend">
    <div class="q-pa-md column">
      <div class="col">
        <div class="main-title">Пошук</div>
        <br />
        <q-input class="bg-white rounded-borders brdrs-rd" rounded outlined label="Введіть..." />
        <br />
        <div class="main-title">Результати пошуку</div>
        <br />
        <q-card
          class="search-card"
          v-for="quest in search_result" 
          :key="quest.id"
        >
          <q-img
            :src="quest.img"
            basic
          >
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

.brdrs-rd {
  border-radius: 30px;
}

.search-card {
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
<script>
const search_result = [
  {
    id: 0,
    type: 'ar_only',
    title: 'Призраки Оболони 🧐',
    img: '../statics/img/quests/obolon_ghosts.jpg',
    color: 'bg-gray',
    text: 'Оставить след - просто. А выйти на него? Не потерять и понять - кто и зачем его тут оставил и при каких обстоятельствах? Разберемся?'+ 
          'Тогда надень удобную обувь, зови друзей и приходи на точку старта! '+
          'Лазерные пистолеты и ловушки - найдешь в процессе расследования. '+
          'Готов?)'
  },
  {
    id: 1,
    type: 'ar_only',
    title: 'Киев масонский 🙈🙉🙊',
    img: '../statics/img/quests/kiev_masons.jpg',
    color: 'bg-pink',
    text: 'Заговоооор!'+
          'Или нет? Масоны - сильный бренд, стильный бренд. Киев - древний город, герой - город. Что же их объединило? '+
          'Кто стал амбассадором масонов и почему? Опенспейс или андерграунд тусовки? При чем тут 500 гривен и что с собой взять - циркуль, капюшон или розовые свечи? '+
          'Эти и другие вопросы ждут свой ответ.'+
          'Если ты готов влиться в атмосферу тайного сообщества, жми на кнопку ниже! '
  },
  {
    id: 2,
    type: 'ar_only',
    title: 'Фонарики 🏮',
    img: '../statics/img/quests/lantern.jpg',
    color: 'bg-blue',
    text: 'Ночь. Улица. Фонарь. Аптека.'+ 
          'И повторится все, как встарь.. '+
          'Тур наш не исключение'+
          'Тут спрятан цикл повторения '+
          'Вопрос-ответ и выяснение: '+
          'Где фонари сидят в обнимку и не скрыть свою улыбку? '+
          'Как Монтекки и Капулетти увенчались в металл- дуэте? '+
          'Где жили дамы полусвета и домов терпимости легенда..'
  }
]

export default {
  data() {
    return {
      search_text: '',
      search_result
    }
  }
}
</script>
