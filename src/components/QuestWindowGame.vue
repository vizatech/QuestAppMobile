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
			<div name="html-game" class="fit bg-dark">
                <iframe
                    class="bg-dark"
                    src="statics/corona-game/index.html"
                    width="100%"
                    height="100%"
                    frameborder="0"
                ></iframe>
            </div>
		</q-card>
	</q-dialog>
</template>

<script>
import { mapGetters } from "vuex"

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
		}
  },
  props: ['data']
}
</script>
