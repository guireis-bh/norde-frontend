<template>
  <div class="card col-md-12 big-top">
    <h1>Saiba Mais</h1>
    <b-form @submit.prevent="onSubmit">
      <alert ref="alert" />
      <user-form />
      <div class="row">
        <div class="col-md-6">
          <b-input-group class="form-group" label="Você é?" label-for="areyou">
            <label for="areyou">Você é?</label>
            <b-form-select
              id="areyou"
              v-model="inputs.areyou"
              :options="areyouOptions"
            />
          </b-input-group>
        </div>
      </div>
      <address-form />
      <b-button variant="success" size="lg" type="submit">Enviar</b-button>
    </b-form>
  </div>
</template>

<script>
import Alert from '~/components/Alert.vue'
import UserForm from '~/components/User/Form.vue'
import AddressForm from '~/components/Address/Form.vue'

export default {
  layout: 'base-front',
  middleware: 'anonymous',
  components: {
    Alert,
    UserForm,
    AddressForm
  },
  data() {
    return {
      inputs: {
        areyou: null
      },
      areyouOptions: [
        { value: 'teacher', text: 'Professor' },
        { value: 'studant', text: 'Estudante' },
        { value: 'relative', text: 'Familiar' }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$refs.alert.shot(
        'Em breve entraremos em contato com você.',
        'success'
      )
    }
  }
}
</script>
