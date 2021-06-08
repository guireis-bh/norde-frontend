<template>
  <section class="content row">
    <div class="card col-md-10  offset-md-1">
      <h1>Novo funcionário</h1>
      <b-form @submit.prevent="onSubmit">
        <alert ref="alert" />
        <user-form />
        <address-form />
        <academic-form />
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
import AddressForm from '~/components/Address/Form.vue'
import AcademicForm from '~/components/Academic/Form.vue'

export default {
  layout: 'default',
  components: {
    Alert,
    UserForm,
    AddressForm,
    AcademicForm
  },
  methods: {
    onSubmit() {
      this.$refs.alert.shot('Aluno adicionado com sucesso.', 'success')
    }
  }
}
</script>
