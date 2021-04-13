<template>
<v-row class="fill-height px-8">
	
	<v-col>
		<h1 class="pb-5">Assignments</h1>
		<v-card v-for="(assignment, aid) in $store.getters.pendingAssignments" v-bind:key="assignment.id" :elevation="6"  :color="$store.state.customizations[assignment.courseId].color">
			<v-row  class="fill-height">
				<v-col  ><v-card-title style="word-break: break-word">{{assignment.title}}</v-card-title>
					<v-card-subtitle>{{assignment.dueDate.toDateString()}}  {{assignment.dueDateParams[3]|niceHours}}:{{assignment.dueDateParams[4] | niceMinutes}} {{!$store.state.settings.militaryTime? (assignment.dueDateParams[3]>11? 'PM':'AM'): null}} {{assignment.courseId}}</v-card-subtitle>
				</v-col>
				<v-col class="grey" :class="{'lighten-3':!$vuetify.theme.dark, 'darken-3':$vuetify.theme.dark}" style="max-width: 50px;margin-right: 11px">
					
					<v-btn small @click="$store.dispatch('completeAssignment',assignment.id)" color="green" icon>
						<v-icon>mdi-check</v-icon>
					</v-btn>
					<v-btn small color="blue" class="my-2" icon>
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<v-btn small @click="$store.dispatch('deleteAssignment',assignment.id)" color="red" icon>
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</v-col>
			</v-row>
		</v-card>
		<h1 class="py-5">Completed</h1>
		<v-card v-for="(assignment, aid) in $store.getters.completedAssignments" v-bind:key="assignment.id" :elevation="6"  :color="$store.state.customizations[assignment.courseId].color">
			<v-row  class="fill-height">
				<v-col  ><v-card-title style="word-break: break-word">{{assignment.title}}</v-card-title>
					<v-card-subtitle>{{assignment.dueDate.toDateString()}} {{assignment.dueDateParams[3]|niceHours}}:{{assignment.dueDateParams[4] | niceMinutes}} {{!$store.state.settings.militaryTime? (assignment.dueDateParams[3]>11? 'PM':'AM'): null}} {{assignment.courseId}}</v-card-subtitle>
				</v-col>
				<v-col class="grey" :class="{'lighten-3':!$vuetify.theme.dark, 'darken-3':$vuetify.theme.dark}" style="max-width: 50px;margin-right: 11px">
					
					<v-btn small @click="$store.dispatch('uncompleteAssignment',assignment.id)" color="amber" icon>
						<v-icon>mdi-circle</v-icon>
					</v-btn>
					<v-btn small color="blue" class="my-2" icon>
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<v-btn small @click="$store.dispatch('deleteAssignment',assignment.id)" color="red" icon>
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
