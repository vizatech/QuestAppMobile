<template>
  <q-page class="flex column bg-gradiend">
		<q-toolbar class="justife-top text-white">
      <q-btn
        @click="$router.go(-1)"
        class="absolute-left" 
        dense 
        flat 
        round 
        icon="undo"
        size="sm"
      />
      <q-toolbar-title align="center">
        <q-avatar square>
          <img src="../../statics/img/freegen-logo-small.png">
        </q-avatar>
        FreeGen Reality
      </q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-md">
      <q-form
        class="q-pb-md"
        @submit="onSubmit"
      >
        <q-input class="bg-white rounded-borders brdrs-rd" rounded outlined label="Email" />
        <br />
        <q-input class="bg-white rounded-borders brdrs-rd" rounded outlined label="Пароль" />
        <br />
        <q-btn
          class="full-width"
          rounded
          color="primary"
          text-color="white"
          align="center"
          to="/app"
          label="Далі"
        />
      </q-form>
    </div>
  </q-page>
</template>

<style lang="css">
.bg-gradiend {
  background: #eb5c18;
  background: -moz-linear-gradient(top, #eb5c18 40%, #ffffff 90%);
  background: -webkit-linear-gradient(top, #eb5c18 40%, #ffffff 90%);
  background: linear-gradient(to bottom, #eb5c18 40%, #ffffff 90%);
  /**
  min-height: calc(100vh);
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  */
}

.brdrs-rd {
  border-radius: 30px;
}

</style>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>
