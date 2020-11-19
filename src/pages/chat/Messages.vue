<template>
  <q-page class="bg-gradiend">
		<q-card class="bg-primary row justify-center">
			<q-card-section class="text-white text-center">
				<q-avatar size="66px">
					<img src="../../statics/img/other/vlad.png" />
				</q-avatar>
				<br />
				<div class="text-h6">Влад Тіунов</div>
				<div class="text-subtitle5">Explorer</div>
			</q-card-section>
		</q-card>
		<div class="q-pa-md row justify-center">
			<div style="width: 100%;">
				<q-chat-message label="Середа, 1 квітня"></q-chat-message>
				<q-chat-message
					:text="['Привіт! О 12:00 починаємо квест?!']"
					stamp="Прочитано 16:26"
					sent
					bg-color="blue-6"
					text-color="white"
				/>
				<q-chat-message
					:text="['Добре!']"
					bg-color="grey-4"
				/>
				<q-chat-message
					:text="['Пропоную <strong>Велопрогулянка вздовж Дніпра</strong>']"
					bg-color="grey-4"
				/>
				<q-chat-message
					style="border-radius: 30px;"
					:text="['Чудова думка! Зустрічаємось на першій точці - зачекинемось і вперед?!']"
					stamp="Прочитано 16:26"
					sent
					bg-color="blue-6"
					text-color="white"
				/>
				<q-chat-message
					:text="['Авжеж! Цього разу сподіваюся побити наш попрередній рекорд. Але доведеться напружитись!']"
					bg-color="grey-4"
				/>
				<q-chat-message
					style="border-radius: 30px;"
					:text="['Сьогодні гарна погода, минулого разу було слизько, тому рухалися трохи повільно. Сподіваюсь, сьогодні потрапимо на перше місце в рейтингу!']"
					stamp="Доставлено"
					sent
					bg-color="blue-6"
					text-color="white"
				/>
			</div>
		</div>
		<q-toolbar class="bg-white absolute-bottom" :style="`bottom: ${message_input};`">
			<q-input
				class="fit"
				rounded 
				outlined 
				v-model="text" 
				label="Напиши повідомлення..." 
				dense
			>
				<template v-slot:before>
					<q-btn 
						@click="takePicture()"
						round 
						dense 
						flat 
						icon="add_a_photo" 
					/>
					<q-btn round dense flat icon="camera" />
				</template>

				<template v-slot:append>
					<q-btn round dense flat icon="mic" />
				</template>
			</q-input>
		</q-toolbar>
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

.q-message-sent .q-message-text {
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	border-top-right-radius: 20px;
}

.q-message-sent .q-message-stamp {
	text-align: right;
}

.q-message-received .q-message-text {
	border-top-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
}
</style>
<script>
import { Plugins, CameraResultType } from '@capacitor/core'

const { Keyboard, Camera } = Plugins

let capacitor_input = '0px'

/*Keyboard.addListener('keyboardDidShow', (info) => {
	console.log('keyboard did show with height', info.keyboardHeight)
	capacitor_input = info.keyboardHeight+'px'
})

Keyboard.addListener('keyboardDidHide', () => {
	console.log('keyboard did hide')
	capacitor_input = '0px'
})*/

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  // image.webPath will contain a path that can be set as an image src. 
  // You can access the original file using image.path, which can be 
  // passed to the Filesystem API to read the raw data of the image, 
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;
  // Can be set to the src of an image now
  imageElement.src = imageUrl;
}

/*---------*/

export default {
  data () {
    return {
      message_input: capacitor_input
    }
  }
}
</script>
