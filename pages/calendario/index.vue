<template>
  <section class="content row">
    <div class="card col-md-10  offset-md-1">
      <h1>Calendário</h1>
      <b-calendar :events="events" :add-event="handleDateClick" />
      <b-modal
        id="add-event-modal"
        ref="add-event-modal"
        title="Adicionar horas disponiveis"
        @ok="handleOk"
      >
        <form ref="add-event-form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            :state="state.teacher"
            label="Professor"
            label-for="teacher-input"
            invalid-feedback="Professor inválido"
          >
            <b-form-input
              id="teacher-input"
              v-model="input.teacher"
              :state="state.teacher"
              required="required"
            />
          </b-form-group>
          <b-form-group
            :state="state.date"
            label="Data"
            label-for="date-input"
            invalid-feedback="Data inválida"
          >
            <b-form-input
              id="date-input"
              v-model="input.date"
              type="date"
              :state="state.date"
              required="required"
            />
          </b-form-group>
          <b-form-group
            :state="state.timeStart"
            label="Hora de inicio"
            label-for="time-begin-input"
            invalid-feedback="Hora inválida"
          >
            <b-form-input
              id="time-begin-input"
              v-model="input.timeStart"
              type="time"
              :state="state.timeStart"
              required="required"
            />
          </b-form-group>
          <b-form-group
            :state="state.timeEnd"
            label="Hora de fim"
            label-for="time-end-input"
            invalid-feedback="Hora inválida"
          >
            <b-form-input
              id="time-end-input"
              v-model="input.timeEnd"
              type="time"
              :state="state.timeEnd"
              required="required"
            />
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </section>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
const moment = require('moment')
require('moment/locale/pt-br')

export default {
  layout: 'default',
  components: {
    'b-calendar': Calendar
  },
  data() {
    return {
      events: [],
      input: {
        teacher: null,
        date: null,
        timeStart: null,
        timeEnd: null
      },
      state: {
        teacher: null,
        date: null,
        timeStart: null,
        timeEnd: null
      }
    }
  },
  methods: {
    handleDateClick(clicked) {
      const date = moment(clicked.dateStr)
      this.input.date = date.format('YYYY-MM-DD')
      this.input.timeStart = date.format('HH:mm:ss')
      this.input.timeEnd = date.add(1, 'hour').format('HH:mm:ss')
      this.$refs['add-event-modal'].show()
    },
    checkFormValidate() {
      const valid = this.$refs['add-event-form'].checkFormValidate()
      this.state.teacher = valid ? 'valid' : 'invalid'
      this.state.date = valid ? 'valid' : 'invalid'
      this.state.timeStart = valid ? 'valid' : 'invalid'
      this.state.timeEnd = valid ? 'valid' : 'invalid'
      return valid
    },
    handleOk(event) {
      event.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      const event = {
        title: this.input.teacher,
        start: moment(this.input.date + ' ' + this.input.timeStart).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        end: moment(this.input.date + ' ' + this.input.timeEnd).format(
          'YYYY-MM-DD HH:mm:ss'
        )
      }
      this.events.push(event)
      this.$nextTick(() => {
        this.$refs['add-event-modal'].hide()
      })
      return false
    }
  }
}
</script>
