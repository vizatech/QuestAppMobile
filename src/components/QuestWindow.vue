<template>
	<q-dialog
		ref="dialog"
		persistent
		maximized
		transition-show="slide-up"
		transition-hide="slide-down"
	>
		<q-card class="bg-primary text-white">
			<q-bar>
				<q-btn class="justify-left" size="md" dense flat icon="keyboard_backspace" v-close-popup>
					<q-tooltip content-class="bg-white text-primary">Назад</q-tooltip>
				</q-btn>
			</q-bar>
			<q-img class="full-width" :src="data.quest.img" />
			<div class="q-pa-md">
				<div class="text-h5 text-center">{{ data.quest.title }}</div>
				<div class="text-center">{{ data.quest.text }}</div>
			</div>
			<div class="full-width">
				<q-list bordered>
					<q-item
						clickable
						v-ripple
					>
						<q-item-section avatar>
							<q-icon name="format_list_numbered" />
						</q-item-section>

						<q-item-section>Список лідерів</q-item-section>
						<q-item-section avatar class="absolute-right">
							<q-icon name="keyboard_arrow_right" />
						</q-item-section>
					</q-item>
				</q-list>
				<q-card-section>
					<div class="text-h6">Завдання</div>
					<q-linear-progress color="blue" size="md" :value="getQuestProgressPercentage()" />
					<p>{{ getQuestProgressCount() }} виконано</p>
				</q-card-section>
				<q-card-section>
					<q-btn
						class="full-width"
						color="green"
						v-if="continuedQuest === null"
						@click="startQuest(data.quest.id)"
					> 
						Розпочати квест
					</q-btn>
					<q-btn
						class="full-width"
						color="red"
						v-if="continuedQuest != null && continuedQuest.id === data.quest.id"
						@click="stopQuest(data.quest.id)"
					>
						Завершити квест
					</q-btn>
				</q-card-section>
				<div class="fit bg-indigo">
					<q-list bordered separator>
						<q-item
							v-for="point in data.quest.points"
							:key="point.index"
							clickable
							v-ripple
							@click="openQuestMap()"
						>
							<q-item-section avatar>
								<q-icon :name="point.p_locked ? 'lock' : 'directions'" />
							</q-item-section>

							<q-item-section>{{ point.p_title }}</q-item-section>
							<q-item-section v-if="!point.p_locked" avatar class="absolute-right">
								<q-icon name="keyboard_arrow_right" />
							</q-item-section>
						</q-item>
					</q-list>
				</div>
			</div>
		</q-card>
	</q-dialog>
</template>

<script>
import { mapGetters } from "vuex"

import questMap from '../components/QuestMap.vue'

export default {
  name: "QuestWindow",
  data() {
    return {
    }
	},
  computed: {
    ...mapGetters({
      continuedQuest: 'quest/continuedQuest',
    })
  },
	methods: {

    openQuestMap() {
      this.$q.dialog({
        component: questMap,
        parent: this
      })
		},
		
		startQuest(quest_id) {
			console.log('Starting quest', quest_id)
			this.$q.dialog({
        title: 'Підтвердження',
				message: `Ви впевнені, що бажаєте розпочати квест <strong>${this.data.quest.title}<strong>?`,
				html: true,
				position: 'bottom',
				cancel: true
				
      }).onOk(() => {
				this.$store.commit('quest/SET_CONTINUED_QUEST', {
					id: quest_id,
					step: 0
				})
				this.$q.dialog({
					title: 'Чудово!',
					message: `Перейдіть до мапи та доберіться до першої локації. Там ви отримаете інструції по виконанню квеста.`,
					html: true,
					position: 'bottom'
					
				})
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
		},
		stopQuest(quest_id) {
			console.log('Canceled quest', quest_id)
			this.$q.dialog({
        title: 'Підтвердження',
				message: `Ви впевнені, що бажаєте завершити цей квест?`,
				html: true,
				position: 'bottom',
				cancel: true
				
      }).onOk(() => {
				this.$store.commit('quest/CLEAR_CONTINUED_QUEST')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
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
		},
		
		getQuestProgressPercentage() {
			return 0;
		},
		getQuestProgressCount() {

			//console.dir(this.data.quest.points)
			let count = 0
			/*for(let [key, value] in Object.entries(this.data.quest.points)) {
				if(point.p_locked === true)
					count++
			}*/
			return `${count}/${Object.keys(this.data.quest.points).length}`;
		}
  },
  props: ['data']
}
</script>
