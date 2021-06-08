<template>
  <div id="user-form">
    <h2>Dados pessoais</h2>
    <div class="row">
      <div class="col-md-6">
        <b-input-group class="form-group" label="Nome" label-for="name">
          <label for="name">Nome</label>
          <b-input
            id="name"
            v-model="inputs.name"
            placeholder="José da Silva"
          />
        </b-input-group>
      </div>
      <div class="col-md-6">
        <b-input-group class="form-group" label="E-mail" label-for="email">
          <label for="email" class="float-left">E-mail</label>
          <b-input
            id="email"
            v-model="inputs.email"
            placeholder="jose@mail.com"
          />
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <b-input-group class="form-group" label="CPF" label-for="cpf">
          <label for="cpf">CPF</label>
          <b-input
            id="cpf"
            v-model="inputs.cpf"
            v-mask="'###.###.###-##'"
            placeholder="999.999.999-99"
          />
        </b-input-group>
      </div>
      <div class="col-md-6">
        <b-input-group class="form-group" label="RG" label-for="rg">
          <label for="rg">RG</label>
          <b-input
            id="rg"
            v-model="inputs.rg"
            v-mask="'##.###.###-X'"
            placeholder="99.999.999-X"
          />
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <b-input-group class="form-group" label="Celular" label-for="cellphone">
          <label for="cellphone">Celular</label>
          <b-input
            id="cellphone"
            v-model="inputs.cellphone"
            v-mask="'(##) #####-####'"
            placeholder="(11) 99999-9999"
          />
        </b-input-group>
      </div>
      <div class="col-md-6">
        <b-input-group class="form-group" label="Telefone" label-for="phone">
          <label for="phone">Telefone</label>
          <b-input
            id="phone"
            v-model="inputs.phone"
            v-mask="'(##) ####-####'"
            placeholder="(11) 9999-9999"
          />
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <b-input-group
          class="form-group"
          label="Nascimento"
          label-for="birthday"
        >
          <label for="birthday">Nascimento</label>
          <b-input
            id="birthday"
            v-model="inputs.birthday"
            v-mask="'##/##/####'"
            placeholder="01/01/1989"
          />
        </b-input-group>
      </div>
      <div class="col-md-6">
        <b-input-group class="form-group" label="Gênero" label-for="gender">
          <label for="gender">Gênero</label>
          <b-form-select
            id="gender"
            v-model="inputs.gender"
            :options="genders"
          />
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  name: 'UserForm',
  directives: {
    mask
  },
  data() {
    return {
      inputs: {
        name: null,
        email: null,
        cpf: null,
        cellphone: null,
        phone: null,
        birthday: null,
        gender: null
      },
      genders: [
        { value: 'male', text: 'Masculino' },
        { value: 'female', text: 'Feminino' },
        { value: 'other', text: 'Outro' }
      ]
    }
  }
}
</script>
