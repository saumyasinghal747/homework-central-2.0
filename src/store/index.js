import Vue from 'vue'
import Vuex from 'vuex'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuex)
import vuetify from "@/plugins/vuetify";


export default new Vuex.Store({
  state: {
    theSchedule:{
      "holidays": {
        "8-7-2020": "Labor Day"
      },
      "vacations": {},
      "overrides": {
        "7-17-2020": [
          {
            "name": "Assembly",
            "start": [
              10,
              0
            ],
            "end": [
              11,
              0
            ]
          },
          {
            "name": "Period 1",
            "start": [
              11,
              10
            ],
            "end": [
              11,
              30
            ]
          },
          {
            "name": "Period 2",
            "start": [
              11,
              40
            ],
            "end": [
              12,
              0
            ]
          },
          {
            "name": "Period 3",
            "start": [
              12,
              10
            ],
            "end": [
              12,
              30
            ]
          },
          {
            "name": "Lunch",
            "start": [
              12,
              30
            ],
            "end": [
              13,
              0
            ]
          },
          {
            "name": "Period 4",
            "start": [
              13,
              10
            ],
            "end": [
              13,
              35
            ]
          },
          {
            "name": "Period 5",
            "start": [
              13,
              45
            ],
            "end": [
              14,
              5
            ]
          },
          {
            "name": "Period 6",
            "start": [
              14,
              15
            ],
            "end": [
              14,
              35
            ]
          },
          {
            "name": "Period 7",
            "start": [
              14,
              45
            ],
            "end": [
              15,
              5
            ]
          },
          {
            "name": "Period 8",
            "start": [
              15,
              15
            ],
            "end": [
              15,
              35
            ]
          }
        ],
        "7-19-2020": [
          {
            "name": "Period 5",
            "start": [
              9,
              40
            ],
            "end": [
              10,
              55
            ]
          },
          {
            "name": "Go to Period 5",
            "start": [
              11,
              5
            ],
            "end": [
              11,
              40
            ]
          },
          {
            "name": "Lunch",
            "start": [
              11,
              40
            ],
            "end": [
              12,
              10
            ]
          },
          {
            "name": "Period 6",
            "start": [
              12,
              20
            ],
            "end": [
              13,
              35
            ]
          },
          {
            "name": "Period 7",
            "start": [
              13,
              45
            ],
            "end": [
              15,
              0
            ]
          }
        ],
        "8-2-2020": [
          {
            "name": "Period 5",
            "start": [
              9,
              40
            ],
            "end": [
              10,
              55
            ]
          },
          {
            "name": "SELF",
            "start": [
              11,
              5
            ],
            "end": [
              11,
              40
            ]
          },
          {
            "name": "Lunch",
            "start": [
              11,
              40
            ],
            "end": [
              12,
              10
            ]
          },
          {
            "name": "Period 6",
            "start": [
              12,
              20
            ],
            "end": [
              13,
              40
            ]
          },
          {
            "name": "Period 7",
            "start": [
              13,
              50
            ],
            "end": [
              15,
              5
            ]
          }
        ],
        "8-4-2020": [
          {
            "name": "Collab/Prep",
            "start": [
              8,
              30
            ],
            "end": [
              9,
              35
            ]
          },
          {
            "name": "Period 5",
            "start": [
              9,
              40
            ],
            "end": [
              10,
              45
            ]
          },
          {
            "name": "Period 6",
            "start": [
              10,
              55
            ],
            "end": [
              12,
              5
            ]
          },
          {
            "name": "Period 7",
            "start": [
              12,
              15
            ],
            "end": [
              1,
              20
            ]
          }
        ]
      },
      "defaults": [
        null,
        [
          {
            "name": "Period 1",
            "start": [
              10,
              0
            ],
            "end": [
              10,
              30
            ]
          },
          {
            "name": "Period 2",
            "start": [
              10,
              40
            ],
            "end": [
              11,
              10
            ]
          },
          {
            "name": "Period 3",
            "start": [
              11,
              20
            ],
            "end": [
              11,
              50
            ]
          },
          {
            "name": "Period 4",
            "start": [
              12,
              0
            ],
            "end": [
              12,
              35
            ]
          },
          {
            "name": "Lunch",
            "start": [
              12,
              35
            ],
            "end": [
              13,
              5
            ]
          },
          {
            "name": "Period 5",
            "start": [
              13,
              15
            ],
            "end": [
              13,
              45
            ]
          },
          {
            "name": "Period 6",
            "start": [
              13,
              55
            ],
            "end": [
              14,
              25
            ]
          },
          {
            "name": "Period 7",
            "start": [
              14,
              35
            ],
            "end": [
              15,
              5
            ]
          },
          {
            "name": "Period 8",
            "start": [
              15,
              45
            ],
            "end": [
              16,
              15
            ]
          }
        ],
        [
          {
            "name": "Period 1",
            "start": [
              9,
              0
            ],
            "end": [
              10,
              15
            ]
          },
          {
            "name": "Period 2",
            "start": [
              10,
              25
            ],
            "end": [
              11,
              40
            ]
          },
          {
            "name": "Lunch",
            "start": [
              11,
              40
            ],
            "end": [
              12,
              10
            ]
          },
          {
            "name": "Period 3",
            "start": [
              12,
              20
            ],
            "end": [
              13,
              40
            ]
          },
          {
            "name": "Period 4",
            "start": [
              13,
              50
            ],
            "end": [
              15,
              5
            ]
          },
          {
            "name": "Period 8",
            "start": [
              15,
              45
            ],
            "end": [
              17,
              0
            ]
          }
        ],
        [
          {
            "name": "Period 5",
            "start": [
              9,
              40
            ],
            "end": [
              10,
              55
            ]
          },
          {
            "name": "Gunn Together",
            "start": [
              11,
              5
            ],
            "end": [
              11,
              40
            ]
          },
          {
            "name": "Lunch",
            "start": [
              11,
              40
            ],
            "end": [
              12,
              10
            ]
          },
          {
            "name": "Period 6",
            "start": [
              12,
              20
            ],
            "end": [
              13,
              40
            ]
          },
          {
            "name": "Period 7",
            "start": [
              13,
              50
            ],
            "end": [
              15,
              5
            ]
          }
        ],
        [
          {
            "name": "Period 1",
            "start": [
              9,
              0
            ],
            "end": [
              10,
              15
            ]
          },
          {
            "name": "Period 2",
            "start": [
              10,
              25
            ],
            "end": [
              11,
              40
            ]
          },
          {
            "name": "Lunch",
            "start": [
              11,
              40
            ],
            "end": [
              12,
              10
            ]
          },
          {
            "name": "Period 3",
            "start": [
              12,
              20
            ],
            "end": [
              13,
              40
            ]
          },
          {
            "name": "Period 4",
            "start": [
              13,
              50
            ],
            "end": [
              15,
              5
            ]
          },
          {
            "name": "Period 8",
            "start": [
              15,
              45
            ],
            "end": [
              17,
              0
            ]
          }
        ],
        [
          {
            "name": "Period 5",
            "start": [
              9,
              40
            ],
            "end": [
              10,
              55
            ]
          },
          {
            "name": "SELF",
            "start": [
              11,
              5
            ],
            "end": [
              11,
              40
            ]
          },
          {
            "name": "Lunch",
            "start": [
              11,
              40
            ],
            "end": [
              12,
              10
            ]
          },
          {
            "name": "Period 6",
            "start": [
              12,
              20
            ],
            "end": [
              13,
              40
            ]
          },
          {
            "name": "Period 7",
            "start": [
              13,
              50
            ],
            "end": [
              15,
              5
            ]
          }
        ],
        null
      ]
    },
    notRnd:Date.now(),
    offsetTop:0,
    calendarType:"day",
    validIds:["Period 1","Period 2","Period 3","Period 4","Period 5","Period 6","Period 7","Period 8","Lunch","Other"],
    customizations:{
      "Period 1":{
          color: colors.deepOrange.base
      },
      "Period 2":{
        color: colors.yellow.darken2
      },
      "Period 3":{
        color: colors.green.base
      },
      "Period 4":{
        color: colors.blue.base
      },
      "Period 5":{
        color:colors.teal.lighten1
      },
      "Period 6":{
        color:colors.indigo.base
      },
      "Period 7":{
        color:colors.deepPurple.base
      },
      "Period 8":{
        color:colors.brown.lighten1
      },
      "Lunch":{
        color: colors.blueGrey.base
      },
      "Other":{
        color: colors.blueGrey.base
      }
    },
    now: new Date(),
    settings:{
      militaryTime:false,
      insetSlider:false
    }
  },
  mutations: {
  },
  actions: {
    saveToLocal(context){
      localStorage.setItem('hcbetaSettings',JSON.stringify(context.state.settings))
      localStorage.setItem('hcbetaCustomizations',JSON.stringify(context.state.customizations));
      localStorage.setItem('dataVersion','1.0.0')
    }
  },
  modules: {
  },
  getters:{
    timeModulus:state => {
      return state.settings.militaryTime? 24 : 12
    },
    scheduleForDate: (state) => (dob) => {
      const sched = state.theSchedule;
      const ref = dob.getMonth()+ "-"+dob.getDate()+"-"+dob.getFullYear();
      if (dob < new Date(2020,7,17)){
        return []
      }
      if (ref in sched.overrides){
        //console.log("overridden");

        return sched.overrides[ref];
      }
      else if (ref in sched.holidays){
       /* if (mainView) {
          this.holidayReason = sched.holidays[ref]
        }*/
        return [] //empty schedule, and set the holiday reason to what it is
      }
      else{
        //console.log("default");
        //if (mainView) this.holidayReason = null;
        return sched.defaults[dob.getDay()].map(function (event) {
          return {
            name: (state.customizations[event.name]||{name:undefined}).name || event.name,
            id:event.name,
            start: new Date(dob.getFullYear(),dob.getMonth(),dob.getDate(),event.start[0],event.start[1]),
            end:new Date(dob.getFullYear(),dob.getMonth(),dob.getDate(),event.end[0],event.end[1]),
            timed:true,
            color:(state.customizations[event.name] || {color:"blue-grey"}).color
          }
        });//regular schedule for this day of the week
      }
    },
    currentEvent: (state, getters) => {
      const now = state.now
      const sched = getters.scheduleForDate(now);
      for (let index in sched){
        const event = sched[index];
        const start = event.start
        //console.log(start);
        // if we even got here, then either the previous doesn't exist or isn't happening.
        if (now< start){
          return {
            type:"future",
            name: (state.customizations[event.name]||{name:undefined} ).name||event.name,
            id: event.id,
            displayText:"until",
            remaining: (+start-now)/60000,
            elapsed:null,
            total:null,
            percent: index!==0? (100-(+start-now)/6000) : null,
            isValid: true
          }
        }
        const end = event.end
        if (start<=now && now<=end){
          return {
            type:"current",
            name: (state.customizations[event.name]||{name:undefined} ).name||event.name,
            id: event.id,
            displayText:"left in",
            remaining: (+end-now)/60000,
            elapsed:(+now-start)/60000,
            total:(+end-start)/60000,
            percent: (+now-start)*(100)/(+end-start),
            isValid: true
          }
        }
      // ok so either it's the last period or some later period is happening
      else if (parseInt(index)===sched.length-1) {
        // since!
          return {
            type:"since",
            name: (state.customizations[event.name]||{name:undefined} ).name||event.name,
            id: event.id,
            displayText:"since",
            remaining:null,
            elapsed:(+now-end)/60000,
            total:null,
            percent:null,
            isValid: true
          }

        }

      }

      return {
        type:"none",
        name:"the day",
        isValid:false,
        remaining: "No School"
      }

    },
    upcomingEvents: (state, getters) => {
      const schedule = getters.scheduleForDate(state.now);
      const currId = getters.currentEvent.name;
      let upcoming = [];
      let ready = false;
      for (let event of schedule){
        if (ready){
          upcoming.push(event);
        }

        if (event.name===currId){

          ready=true
          if (getters.currentEvent.type==='future'){
            upcoming.push(event);
          }
        }

      }
      return upcoming
    }
  }

})


