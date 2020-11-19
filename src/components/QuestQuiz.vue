<template>
	<q-dialog
		ref="dialog"
		persistent
		position="bottom"
		transition-show="slide-up"
		transition-hide="slide-down"
	>
		<q-card class="bg-primary text-white">
			<q-card-section>
				<strong>{{ quests[continuedQuest.id].points[continuedQuest.step].data.question }}</strong>
			</q-card-section>
			<q-list bordered separator>
				<q-item 
					v-for="answer in quests[continuedQuest.id].points[continuedQuest.step].data.answers"
					:key="answer.index"
					:id="answer.index"
					clickable 
					v-ripple
					@click="answerHandler(answer)"
				>
					<q-item-section>{{ answer.text }}</q-item-section>
				</q-item>
			</q-list>
		</q-card>
	</q-dialog>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "QuestQuiz",
  data() {
    return {
    }
	},
  computed: {
    ...mapGetters({
			continuedQuest: 'quest/continuedQuest',
			quests: 'quest/quests'
    })
  },
	methods: {

		answerHandler(answer) {
			if(answer.right) {
				this.$emit('ok', { answer: answer })

				this.hide()
			}
			else {
				this.$emit('ok', { answer: answer })

				this.hide()
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
