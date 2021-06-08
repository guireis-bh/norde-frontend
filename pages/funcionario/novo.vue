<template>
  <section class="content row">
    <div class="card col-md-10  offset-md-1">
      <h1>Novo funcionário</h1>
      <b-form @submit.prevent="onSubmit">
        <alert ref="alert" />
        <user-form />
        <address-form />
        <div id="bank-form">
          <h2>Dados do bancários</h2>
          <div class="row">
            <div class="col-md-6">
              <b-input-group class="form-group" label="Banco" label-for="bank">
                <label for="bank">Banco</label>
                <b-input id="bank" v-model="inputs.bank" placeholder="Nubank" />
              </b-input-group>
            </div>
            <div class="col-md-6">
              <b-input-group
                class="form-group"
                label="Agência"
                label-for="bank_office"
              >
                <label for="bank_office">Agência</label>
                <b-input
                  id="bank_office"
                  v-model="inputs.bank_office"
                  v-mask="['###', '###-#', '###-##']"
                  placeholder="000-1"
                />
              </b-input-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <b-input-group
                class="form-group"
                label="Conta"
                label-for="bank_account"
              >
                <label for="bank_account">Conta</label>
                <b-input
                  id="bank_account"
                  v-model="inputs.bank_account"
                  v-mask="['###-#', '####-#', '#####-#', '######-#']"
                  placeholder="000-1"
                />
              </b-input-group>
            </div>
            <div class="col-md-6">
              <b-input-group
                class="form-group"
                label="Cidade"
                label-for="bank_city"
              >
                <label for="bank_city">Cidade</label>
                <b-input
                  id="bank_city"
                  v-model="inputs.bank_city"
                  placeholder="Nowhere"
                />
              </b-input-group>
            </div>
          </div>
        </div>
        <div id="employee-form">
          <h2>Dados do Funcionário</h2>
          <div class="row">
            <div class="col-md-6">
              <b-input-group
                class="form-group"
                label="Tipo do funcionário"
                label-for="type"
              >
                <label for="type">Tipo do funcionário</label>
                <b-form-select
                  id="type"
                  v-model="inputs.type"
                  :options="types"
                />
              </b-input-group>
            </div>
            <div class="col-md-6">
              <b-input-group
                class="form-group"
                label="Valor parão"
                label-for="salary_default"
              >
                <label for="salary_default">Valor parão</label>
                <b-form-select
                  id="salary_default"
                  v-model="inputs.salary_default"
                  :options="[
                    { value: true, text: 'Sim' },
                    { value: false, text: 'Não' }
                  ]"
                />
              </b-input-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <b-input-group
                class="form-group"
                label="Tipo do salário"
                label-for="salary_type"
              >
                <label for="salary_type">Tipo do salário</label>
                <b-form-select
                  id="salary_type"
                  v-model="inputs.salary_type"
                  :options="salaryTypes"
                  :disabled="inputs.salary_default"
                />
              </b-input-group>
            </div>
            <div class="col-md-6">
              <b-input-group
                class="form-group"
                label="Valor"
                label-for="salary_value"
              >
                <label for="salary_value">Valor</label>
                <b-input
                  id="salary_value"
                  v-model="inputs.salary_value"
                  v-money="money"
                  type="text"
                  :disabled="inputs.salary_default"
                />
              </b-input-group>
            </div>
          </div>
        </div>
        <academic-form v-show="inputs.type == 'teacher'" />
        <b-button variant="success" size="lg" type="submit">
          Cadastrar
        </b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import { VMoney } from 'v-money'
import { mask } from 'vue-the-mask'
import money from '~/configs/money'
import Alert from '~/components/Alert.vue'
import UserForm from '~/components/User/Form.vue'
import AddressForm from '~/components/Address/Form.vue'
import AcademicForm from '~/components/Academic/Form.vue'

export default {
  layout: 'default',
  directives: {
    mask,
    money: VMoney
  },
  components: {
    Alert,
    UserForm,
    AddressForm,
    AcademicForm
  },
  data() {
    return {
      money: money,
      inputs: {
        bank: null,
        bank_office: null,
        bank_account: null,
        bank_city: null,
        type: null,
        salary_default: false,
        salary_type: null,
        salary_value: 0
      },
      types: [
        { value: 'admin', text: 'Administrador' },
        { value: 'supervisor', text: 'Supervisor' },
        { value: 'teacher', text: 'Professor' }
      ],
      salaryTypes: [
        { value: 'hourly', text: 'Por hora' },
        { value: 'monthly', text: 'Por mês' }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$refs.alert.shot('Funcionario adicionado com sucesso.', 'success')
    }
  }
}
</script>
