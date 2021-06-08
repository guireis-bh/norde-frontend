<template>
  <div id="teacher-studant-form">
    <h2>Cadastro complementar</h2>
    <div class="row">
      <div class="col-md-12">
        <b-input-group class="form-group" label="Assuntos" label-for="subjects">
          <label for="subjects">Assuntos</label>
          <b-tagsinput
            v-model="subject"
            :tags="inputs.subjects"
            :autocomplete-items="subjects"
            placeholder="Selecione assuntos de interesse"
            @tags-changed="newTags => (inputs.subjects = newTags)"
          />
        </b-input-group>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <b-input-group class="form-group" label="Matérias" label-for="matters">
          <label for="matters">Matérias</label>
          <b-form-select
            v-model="inputs.metters"
            :options="matters"
            multiple
            :select-size="6"
          />
        </b-input-group>
      </div>
      <div class="col-md-6">
        <b-input-group class="form-group" label="Bio" label-for="bio">
          <label for="bio">Bio</label>
          <Vueditor />
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vueditor from 'vueditor'
import VueTagsInput from '@johmun/vue-tags-input'

import 'vueditor/dist/style/vueditor.min.css'

Vue.use(Vueditor, {
  toolbar: [
    'removeFormat',
    '|',
    'elements',
    'fontName',
    'fontSize',
    'bold',
    'italic',
    'underline',
    'indent',
    'outdent',
    'insertOrderedList',
    'insertUnorderedList'
  ],
  fontSize: [
    '12px',
    '14px',
    '16px',
    '18px',
    '0.8rem',
    '1.0rem',
    '1.2rem',
    '1.5rem',
    '2.0rem'
  ]
})

export default {
  name: 'AcademicForm',
  components: {
    'b-tagsinput': VueTagsInput
  },
  data() {
    return {
      inputs: {
        subjects: [],
        matters: null,
        bio: null
      },
      subject: '',
      subjects: [{ text: 'TDH' }, { text: 'Necessidades especiais' }],
      matters: [
        'Matemática',
        'Português',
        'Ciências',
        'Geografia',
        'Filosofia',
        'Fisica'
      ]
    }
  }
}
</script>
