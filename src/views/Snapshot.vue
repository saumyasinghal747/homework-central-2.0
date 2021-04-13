<template>
	<div class="text-center pt-15 pb-15" style="height: calc(100vh - 56px);" v-scroll:#app="onScroll"
	>
		<v-toolbar v-if="$store.state.offsetTop>=120"
		style="position: sticky;top:0;width: 100%;z-index: 4"
		>
			<v-progress-circular class=" elevation-0 mr-5" style="border-radius: 50%"
			                     
			                     :rotate="270"
			                     :size="30"
			                     :width="5"
			                     :value="$store.getters.currentEvent.percent"
			
			                     :color="($store.state.customizations[$store.getters.currentEvent.id]||{color:'blue-grey'}).color"
			
			
			></v-progress-circular>
			
			<v-toolbar-title>{{Math.ceil($store.getters.currentEvent.remaining||$store.getters.currentEvent.elapsed)}} mins {{$store.getters.currentEvent.displayText}} {{$store.getters.currentEvent.name}}</v-toolbar-title>
		</v-toolbar>
		<v-progress-circular class=" elevation-10 " style="border-radius: 50%"
				:rotate="270"
				:size="350"
				:width="35"
		  
				:value="$store.getters.currentEvent.percent"
				:color="($store.state.customizations[$store.getters.currentEvent.id]||{color:'blue-grey'}).color"
		>
			<v-col class="text-center" v-if="$store.getters.currentEvent.isValid">
				<v-row>
					<span class="display-4 mx-auto">{{Math.ceil($store.getters.currentEvent.remaining||$store.getters.currentEvent.elapsed)}}</span>
				</v-row>
				<v-row><span class=" mx-auto">minutes {{$store.getters.currentEvent.displayText}}</span></v-row>
				<v-row><span class=" display-1 mx-auto mt-2">{{$store.getters.currentEvent.name}}</span></v-row>
				<v-row></v-row>
			</v-col>
			<v-col v-else>
				<v-row>
					<span class="display-2 mx-auto">No School</span>
				</v-row>
				<v-row><span class="display-2 mt-2 mx-auto">Today</span></v-row>
			</v-col>
		</v-progress-circular>
		
		<v-card color="transparent" elevation="0" v-if="$store.getters.upcomingEvents.length>0" class="mt-15 pb-10">
		<p class="mx-auto pb-7 display-1">Up Next</p>
			<v-timeline   class="mb-15">
				<v-timeline-item :large="event.name===$store.getters.currentEvent.name"  v-bind:key="event.name" :color="($store.state.customizations[event.id]||{color:'blue-grey'}).color"
						:class="{
				            'text-left':index%2===0,
				            'text-right':index%2===1
						}"
						v-for="(event, index) in $store.getters.upcomingEvents"
				><span v-if="index%2==0" class="headline">{{event.name}}</span>
					<span v-else>{{event.start.getHours() | niceHours}}:{{event.start.getMinutes() | niceMinutes}} - {{event.end.getHours() | niceHours}}:{{event.end.getMinutes() | niceMinutes}}</span>
					<span slot="opposite">
						<span v-if="index%2==0">{{event.start.getHours() | niceHours}}:{{event.start.getMinutes() | niceMinutes}} - {{event.end.getHours() | niceHours}}:{{event.end.getMinutes() | niceMinutes}}</span>
						<span v-else class="headline">{{event.name}}</span>
					</span>
				</v-timeline-item>
				
			</v-timeline>
		</v-card>
		<v-card color="transparent" class="mt-15 pb-10" elevation="0" v-else>
			<p class="mx-auto pb-7 display-1">No Upcoming Events!</p>
		</v-card>
	</div>
</template>

<script>
	import store from '../store'
    export default {
        name: "Snapshot",
        data: () => ({
            offsetTop: 0,
        }),
	    methods:{
            onScroll (e) {
                
                this.$store.state.offsetTop = e.target.scrollTop
	           // console.log(e.target)
            }
	    },
	    filters: {
            niceMinutes(value){
                if (value>9){return value}
                else return "0"+value
            },
		    niceHours(value){
                if (value<13  || store.state.settings.militaryTime){return value}
                else return value-12
		    }
	    }
    }
</script>

<style scoped>

</style>
