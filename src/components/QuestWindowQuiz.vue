<template>
	<q-dialog
		ref="dialog"
		persistent
		maximized
		transition-show="slide-up"
		transition-hide="slide-down"
	>
		<q-card class="bg-primary text-white" v-if="continuedQuest === null">
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
				<q-card-section>
					<q-btn
						class="full-width"
						color="green"
						v-if="continuedQuest === null"
						@click="startQuest(data.quest.id)"
					> 
						Розпочати вікторину
					</q-btn>
					<q-btn
						class="full-width"
						color="red"
						v-if="continuedQuest != null && continuedQuest.id === data.quest.id"
						@click="stopQuest(data.quest.id)"
					>
						Завершити вікторину
					</q-btn>
				</q-card-section>
			</div>
		</q-card>
		<q-card class="bg-primary" v-if="continuedQuest != null">
			<q-bar>
				<q-btn 
					class="justify-left" 
					size="md" 
					dense 
					flat
					@click="stopQuest(continuedQuest.id)" 
				>
					Завершити квест
				</q-btn>
			</q-bar>
			<q-img class="full-width" :src="quests[continuedQuest.id].points[continuedQuest.step].data.img" />
			<div class="q-pa-md">
				<div class="text-h5 text-center">{{ quests[continuedQuest.id].points[continuedQuest.step].data.question }}</div>
			</div>
			<q-card-section>
				<q-input 
					v-if="quests[continuedQuest.id].points[continuedQuest.step].data.type === 'quiz-input'"
					label="Відповідь..."
					type="number"
					outlined
					v-model="selected_answer"
				/>
			</q-card-section>
			<q-list
				v-if="quests[continuedQuest.id].points[continuedQuest.step].data.type === 'quiz-classic'" 
				bordered 
				separator
			>
				<q-item 
					v-for="(answer, index) in quests[continuedQuest.id].points[continuedQuest.step].data.answers"
					:key="index"
					:id="index"
					clickable 
					v-ripple
					@click="answerHandler(index)"
				>
					<q-item-section>{{ answer.text }}</q-item-section>
				</q-item>
			</q-list>
			<q-card-section>
				<q-btn
						class="full-width fixed-bottom"
						color="green"
						style="bottom: 10px;"
						@click="answerHandler()"
					> 
						Далі
					</q-btn>
			</q-card-section>
		</q-card>
	</q-dialog>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "QuestWindow",
  data() {
    return {
			selected_answer: null
    }
	},
  computed: {
    ...mapGetters({
			continuedQuest: 'quest/continuedQuest',
			quests: 'quest/quests'
    })
  },
	methods: {
		
		startQuest(quest_id) {
			console.log('Starting quest', quest_id)
			this.$q.dialog({
        title: 'Підтвердження',
				message: `Ви впевнені, що бажаєте розпочати <strong>${this.data.quest.title}<strong>?`,
				html: true,
				position: 'bottom',
				cancel: true
				
      }).onOk(() => {
				this.$store.commit('quest/SET_CONTINUED_QUEST', {
					id: quest_id,
					step: 0
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

		answerHandler(answer) {
			console.log(`LENGHT: ${Object.keys(this.quests[this.continuedQuest.id].points).length}`)
			console.log(`STEP: ${this.continuedQuest.step}`)
			if( Object.keys(this.quests[this.continuedQuest.id].points).length == this.continuedQuest.step+1) {
				this.$q.dialog({
					title: 'Вітаємо!',
					message: `Ви пройшли цей квест.`,
					html: true,
					position: 'bottom',
					cancel: false
					
				}).onOk(() => {
					this.$store.commit('quest/CLEAR_CONTINUED_QUEST')
					this.$refs.dialog.hide()
				})
			}
			else {
				switch(this.quests[this.continuedQuest.id].points[this.continuedQuest.step].data.type) {
					case 'quiz-input':
						if( this.selected_answer >= this.quests[this.continuedQuest.id].points[this.continuedQuest.step].data.answer-2
								&& this.selected_answer <= this.quests[this.continuedQuest.id].points[this.continuedQuest.step].data.answer+2 
							) {
							this.$q.notify({
								message: 'Майже! Правильна відповідь 47.63! +1tus',
								color: 'primary',
								textColor: 'white',
								icon: 'mood',
								position: 'top'
							})
						}
						else if( this.selected_answer == this.quests[this.continuedQuest.id].points[this.continuedQuest.step].data.answer ) {
							this.$q.notify({
								message: 'Дійсно! Ви абсолютно праві! +5tus',
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
						this.quests = this.$store.getters['quest/quests']
						break;
					
					case 'quiz-classic':
						if( this.quests[this.continuedQuest.id].points[this.continuedQuest.step].data.answers[answer].right === true ) {
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
						this.quests = this.$store.getters['quest/quests']
						break;
				}
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
  props: ['data']
}
</script>
