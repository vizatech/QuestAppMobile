<template>
  <q-page class="bg-gradiend">
    <q-list bordered>
      <q-item 
        v-for="contact in contacts" 
        :key="contact.id" 
        class="q-my-sm text-white" 
        clickable 
        v-ripple
        to="/app/messages"
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="`${contact.avatar}`" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>

    </q-list>
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
</style>
<script>
const contacts = [ {
  id: 1,
  name: 'Влад Тіунов',
  email: 'vlad',
  avatar: '../statics/img/other/vlad.png'
} ]


export default {
  data () {
    return {
      contacts
    }
  }
}
</script>
