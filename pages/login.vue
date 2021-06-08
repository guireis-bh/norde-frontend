<template>
  <div class="card col-md-12 big-top">
    <h1>Login</h1>
    <b-form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-6">
          <b-input-group label="E-mail" label-for="username">
            <b-input-group-text slot="prepend">
              <font-awesome-icon fas icon="envelope" />
            </b-input-group-text>
            <b-input
              id="username"
              v-model="inputs.username"
              placeholder="E-mail de acesso"
              type="text"
            />
          </b-input-group>
        </div>
        <div class="col-md-6">
          <b-input-group label="Senha" label-for="password">
            <b-input
              id="password"
              v-model="inputs.password"
              placeholder="Senha"
              type="password"
            />
            <b-input-group-text slot="append">
              <font-awesome-icon fas icon="lock" />
            </b-input-group-text>
          </b-input-group>
        </div>
      </div>
      <div class="row justify-content-center">
        <b-button variant="success" size="lg" type="submit">Entrar</b-button>
      </div>
    </b-form>
    <div class="row justify-content-center">
      <b-button size="md" to="/saiba-mais">Saiba Mais</b-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base-front',
  middleware: 'anonymous',
  data() {
    return {
      inputs: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.commit('SET_USER', this.inputs)
      return this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/bootstrap/scss/functions';
@import 'node_modules/bootstrap/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/_breakpoints';

section {
  margin-top: 8%;
}

.card .row input {
  width: auto;
}

@include media-breakpoint-down(sm) {
  #logo {
    width: 90%;
  }

  .col-md-6 {
    margin-bottom: 0.5em;
  }
}
</style>
