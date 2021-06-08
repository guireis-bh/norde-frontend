<template>
  <section class="content row">
    <div class="card col-md-10  offset-md-1">
      <h1>Novo familiar</h1>
      <b-form @submit.prevent="onSubmit">
        <alert ref="alert" />
        <family-form />
        <user-form />
        <address-form />
        <b-button variant="success" size="lg" type="submit">
          Cadastrar
        </b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import Alert from '~/components/Alert.vue'
import UserForm from '~/components/User/Form.vue'
import FamilyForm from '~/components/Family/Form.vue'
import AddressForm from '~/components/Address/Form.vue'

export default {
  layout: 'default',
  components: {
    Alert,
    UserForm,
    FamilyForm,
    AddressForm
  },
  methods: {
    onSubmit() {
      this.$refs.alert.shot('Familiar adicionado com sucesso.', 'success')
    }
  }
}
</script>
