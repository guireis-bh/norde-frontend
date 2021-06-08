<template>
  <section class="content row">
    <div class="card col-md-10  offset-md-1">
      <h1>Valores padrões</h1>
      <b-form @submit.prevent="onSubmit">
        <alert ref="alert" />
        <div class="row">
          <div class="col-md-2">
            <label>Administrador</label>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <b-input-group
                  class="form-group"
                  label="Tipo de salário"
                  label-for="admin[type]"
                >
                  <label for="admin[type]">Tipo de salário</label>
                  <b-form-select
                    id="admin[type]"
                    v-model="inputs.admin.type"
                    :options="types"
                  />
                </b-input-group>
              </div>
              <div class="col-md-6">
                <b-input-group
                  class="form-group"
                  label="Valor"
                  label-for="admin[value]"
                >
                  <label for="admin[value]">Valor</label>
                  <b-input
                    id="admin[value]"
                    v-model="inputs.admin.value"
                    v-money="money"
                    type="text"
                  />
                </b-input-group>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <label>Supervisor</label>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <b-input-group
                  class="form-group"
                  label="Tipo de salário"
                  label-for="supervisor[type]"
                >
                  <label for="supervisor[type]">Tipo de salário</label>
                  <b-form-select
                    id="supervisor[type]"
                    v-model="inputs.supervisor.type"
                    :options="types"
                  />
                </b-input-group>
              </div>
              <div class="col-md-6">
                <b-input-group
                  class="form-group"
                  label="Valor"
                  label-for="supervisor[value]"
                >
                  <label for="supervisor[value]">Valor</label>
                  <b-input
                    id="supervisor[value]"
                    v-model="inputs.supervisor.value"
                    v-money="money"
                    type="text"
                  />
                </b-input-group>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <label>Professor</label>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-6">
                <b-input-group
                  class="form-group"
                  label="Tipo de salário"
                  label-for="teacher[type]"
                >
                  <label for="teacher[type]">Tipo de salário</label>
                  <b-form-select
                    id="teacher[type]"
                    v-model="inputs.teacher.type"
                    :options="types"
                  />
                </b-input-group>
              </div>
              <div class="col-md-6">
                <b-input-group
                  class="form-group"
                  label="Valor"
                  label-for="teacher[value]"
                >
                  <label for="teacher[value]">Valor</label>
                  <b-input
                    id="teacher[value]"
                    v-model="inputs.teacher.value"
                    v-money="money"
                    type="text"
                  />
                </b-input-group>
              </div>
            </div>
          </div>
        </div>
        <b-button variant="success" size="lg" type="submit">
          Atualizar
        </b-button>
      </b-form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.col-md-2 {
  label {
    display: block;
    margin: 3em 1.5em 0;
  }
}
</style>

<script>
import { VMoney } from 'v-money'
import money from '~/configs/money'
import Alert from '~/components/Alert.vue'

export default {
  layout: 'default',
  directives: {
    money: VMoney
  },
  components: {
    Alert
  },
  data() {
    return {
      inputs: {
        admin: {
          type: null,
          value: null
        },
        supervisor: {
          type: null,
          value: null
        },
        teacher: {
          type: null,
          value: null
        }
      },
      money: money,
      types: [
        { value: 'hourly', text: 'Por hora' },
        { value: 'monthly', text: 'Por mês' }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$refs.alert.shot('Valores atualizados com sucesso.', 'success')
    }
  }
}
</script>
