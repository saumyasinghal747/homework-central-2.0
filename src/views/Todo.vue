<template>
<v-row class="fill-height px-8">
	
	<v-col>
		<h1 class="pb-5">Assignments</h1>
		<v-card v-for="(assignment, aid) in $store.getters.assignments" v-bind:key="aid" :elevation="6" color="green--text">
			<v-row  class="fill-height">
				<v-col  ><v-card-title style="word-break: break-word">{{assignment.title}}</v-card-title>
					<v-card-subtitle>{{assignment.dueDateParams[3]|niceHours}}:{{assignment.dueDateParams[4] | niceMinutes}} {{!$store.state.settings.militaryTime? (assignment.dueDateParams[3]>11? 'PM':'AM'): null}} {{assignment.courseId}}</v-card-subtitle>
					<v-card-text>{{assignment.description}}</v-card-text></v-col>
				<v-col class="grey lighten-3" style="max-width: 60px;margin-right: 11px">
					
					<v-btn  color="green" icon>
						<v-icon>mdi-check</v-icon>
					</v-btn>
					<v-btn  color="blue" class="my-4" icon>
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<v-btn  color="red" icon>
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			

		</v-card>
	</v-col>
</v-row>
</template>

<script>
    import store from '../store'
    export default {
        name: "Todo",
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
