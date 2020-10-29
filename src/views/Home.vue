<template>
  <v-row  class="fill-height">
    <v-col>
      <v-sheet style="position: fixed;top: 0;z-index: 4;width: 100%;margin-bottom: 100px"  >
        <v-toolbar
        flat
        >
          <v-btn
                  outlined
                  class="mr-4"
                  color="grey darken-2"
                  @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
                  fab
                  text
                  small
                  color="grey darken-2"
                  @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
                  fab
                  text
                  small
                  color="grey darken-2"
                  @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title class="d-none d-sm-inline" v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
                  bottom
                  right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                      outlined
                      color="grey darken-2"
                      v-bind="attrs"
                      v-on="on"
              >
                <span>{{ typeToLabel[$store.state.calendarType ] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="$store.state.calendarType = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$store.state.calendarType  = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$store.state.calendarType  = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$store.state.calendarType  = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          
        </v-toolbar>
      </v-sheet>
      <v-sheet style="margin-top:54px;height: calc(100vh - 125px);overflow-y:scroll;bottom:56px;overflow-x:hidden" height="600">
        <v-calendar
                
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="events"
                :event-color="getEventColor"
                :type="$store.state.calendarType"
                :key="$store.state.notRnd"
                @click:more="viewDay"
                @click:date="viewDay"
                @change="updateRange"
        >
          <!--@click:event="showEvent"-->
          <template v-slot:day-body="{ date, week }">
            <div
                    :class="{ first: true || date === week[0].date, 'v-current-time':ready && cal.times.now.date===date }"
                    :style="{ top: nowY }"
            ></div>
          </template>
        </v-calendar>
        <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                max-width="400px"
                offset-x
                offset-y
        >
          <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
          >
            <v-toolbar
                    :color="selectedEvent.color"
                    dark
            >
              <!--<v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>-->
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <!--<v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>-->
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-text-field flat v-model="($store.state.customizations[selectedEvent.name]||{name:''}).name"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn
                      text
                      color="primary"
                      @click="selectedOpen = false"
              >
                Close
              </v-btn>
              <v-btn
                      text
                      color="primary"
                      
              >
                Mark all as done
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      focus: '',
      type: 'day',
      ready:false,
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted () {
      this.$refs.calendar.checkChange();
      this.ready = true
      this.scrollToTime()
      this.updateTime()
    },
    methods: {
      getCurrentTime () {
        return this.cal ? this.cal.times.now.hour * 60 + this.cal.times.now.minute : 0
      },
      scrollToTime () {
        const time = this.getCurrentTime()
        const first = Math.max(0, time - (time % 30) - 30)
    
        this.cal.scrollToTime(first)
      },
      updateTime () {
        setInterval(() => this.cal.updateTimes(), 60 * 1000)
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => {
            this.selectedOpen = true
          }, 10)
        }
        
        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }
        
        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) { //implement logic to calculate the schedule
        const events = []
        
        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const now = new Date();
        const days = (max.getTime() - min.getTime()) / 86400000 //amount of days
        
        
        for (let i = 0; i < days; i++) {
          
          const newDay = min.addDays(i);
          const schedForDay = this.$store.getters.scheduleForDate(newDay)
          // i represents the day of the week we are going for
          if (!schedForDay){
            continue
          }
         for (let period of schedForDay){
           //console.log(period)
           events.push(period)
         }
        }
        //console.log(events)
        this.events = events
      }
    },
    computed: {
      cal () {
        return this.ready ? this.$refs.calendar : null
      },
      nowY () {
        console.log(this.cal? this.cal.times.now.date: "")
        return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px'
        
      }
    }
  }
</script>
<style lang="scss">
  .v-current-time {
    height: 2px;
    background-color: #ea4335;
    position: absolute;
    left: -1px;
    right: 0;
    pointer-events: none;
    
    &.first::before {
      content: '';
      position: absolute;
      background-color: #ea4335;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-top: -5px;
      margin-left: -6.5px;
    }
  }
</style>
