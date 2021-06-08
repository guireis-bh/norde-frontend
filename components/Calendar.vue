<template>
  <FullCalendar
    :header="{
      left: 'dayGridMonth timeGridWeek timeGridDay',
      center: 'title'
    }"
    default-view="timeGridWeek"
    :plugins="calendarPlugins"
    :locale="calendarLocale"
    :events="events"
    @dateClick="addEvent"
  />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGripPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'

export default {
  components: {
    FullCalendar
  },
  props: {
    addEvent: {
      type: Function,
      required: true
    },
    events: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      calendarPlugins: [dayGripPlugin, timeGridPlugin, interactionPlugin],
      calendarLocale: ptBrLocale
    }
  }
}
</script>

<style lang="scss">
@import '@/node_modules/@fullcalendar/core/main.css';
@import '@/node_modules/@fullcalendar/daygrid/main.css';
@import '@/node_modules/@fullcalendar/timegrid/main.css';
.fc-button {
  &.fc-button-primary {
    background-color: #3b6d7b;
    border-color: #3b6d7b;
    &.fc-button-active {
      background-color: #1a333a;
      border-color: #1a333a;
    }
  }
}
.fc-event {
  .fc-content {
    color: #ffffff;
  }
}
</style>
