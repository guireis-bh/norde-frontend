<template>
  <div id="family-form">
    <h2>Familiar</h2>
    <div class="row">
      <div class="col-md-12">
        <b-input-group class="form-group" label="Familiar" label-for="family">
          <label for="family">Familia</label>
          <b-typehead
            v-model="inputs.family"
            :data="families"
            placeholder="Familia Addans"
            class="input"
          />
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

export default {
  name: 'FamilyForm',
  components: {
    'b-typehead': VueBootstrapTypeahead
  },
  data() {
    return {
      inputs: {
        family: null
      },
      families: ['Familia Addans', 'Familia Buscapé']
    }
  }
}
</script>
