<template>
  <div id="address-form">
    <h2>Endereço</h2>
    <div class="row">
      <div class="col-md-6">
        <b-input-group class="form-group" label="CEP" label-for="cep">
          <label for="cep">CEP</label>
          <b-input
            id="cep"
            v-model="inputs.cep"
            v-mask="'#####-###'"
            placeholder="00000-000"
            type="text"
            @blur="getAddressByCEP"
          />
        </b-input-group>
      </div>
      <div class="col-md-6">
        <b-input-group class="form-group" label="city" label-for="city">
          <label for="city">Cidade</label>
          <b-input
            id="city"
            v-model="inputs.city"
            placeholder="Cidadela"
            type="text"
          />
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <b-input-group
          class="form-group"
          label="neighborhood"
          label-for="neighborhood"
        >
          <label for="neighborhood">Bairro</label>
          <b-input
            id="neighborhood"
            v-model="inputs.neighborhood"
            placeholder="Boim Derrude"
            type="text"
          />
        </b-input-group>
      </div>
      <div class="col-md-2">
        <b-input-group class="form-group" label="state" label-for="state">
          <label for="state">Estado</label>
          <b-input
            id="state"
            v-model="inputs.state"
            placeholder="MG"
            type="text"
          />
        </b-input-group>
      </div>
      <div class="col-md-4">
        <b-input-group class="form-group" label="Numero" label-for="number">
          <label for="number">Numero</label>
          <b-input
            id="number"
            v-model="inputs.number"
            placeholder="25B"
            type="text"
          />
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  name: 'AddressForm',
  directives: {
    mask
  },
  data() {
    return {
      inputs: {
        cep: null,
        city: null,
        state: null,
        number: null,
        neighborhood: null
      }
    }
  },
  methods: {
    async getAddressByCEP() {
      const cep = this.inputs.cep.replace('-', '')
      const cepRequest = await this.$axios.get(
        'https://viacep.com.br/ws/' + cep + '/json/'
      )
      if (cepRequest.status === 200) {
        this.inputs.city = cepRequest.data.localidade
        this.inputs.state = cepRequest.data.uf
        this.inputs.neighborhood = cepRequest.data.bairro
      }
    }
  }
}
</script>
