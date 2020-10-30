<template>
	<v-dialog
			v-model="$store.state.assignmentDialog"
			fullscreen
			hide-overlay
			transition="dialog-bottom-transition"
	
	>
	<v-card>
		<v-toolbar
				dark
				style="position: sticky;top:0;width: 100%;z-index: 4"
				color="green"
		>
			<v-btn
					icon
					dark
					@click="$store.state.assignmentDialog = false;"
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-toolbar-title>New Task</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn
						dark
						text
						@click="$store.state.assignmentDialog = false;"
				>
					Create
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		
		<v-list
				three-line
				subheader
		>
			<v-subheader>Content</v-subheader>
			<v-list-item >
				<v-list-item-content>
					<v-text-field  color="green" label="Title" v-model="title"></v-text-field>
				</v-list-item-content>
			</v-list-item>
			<v-list-item>
				<v-list-item-content>
					<v-textarea  label="Description"></v-textarea>
				</v-list-item-content>
			</v-list-item>
		
		</v-list>
		<v-divider></v-divider>
		<v-subheader>Details</v-subheader>
		<v-list>
			<v-card-title class="ml-5">What course is this from?</v-card-title>
			<v-radio-group v-model="courseId">
				<v-list-item v-for="course in $store.state.validIds" :key="course">
					<v-list-item-action><v-radio
							:color="($store.state.customizations[course]||{color:'blue-grey'}).color||'blue-grey'"
							:value="course"
					></v-radio></v-list-item-action>
					<v-list-item-content style="cursor: pointer"  @click="courseId=course">
						
						<span :style="{color:($store.state.customizations[course]||{color:'blue-grey'}).color||'blue-grey'}" >{{($store.state.customizations[course]||{name:course}).name || course}}</span>
					</v-list-item-content>
				</v-list-item>
				
			</v-radio-group>
		</v-list>
		
		
		
	</v-card>
	</v-dialog>
</template>

<script>
    export default {
        name: "Assignment",
        data: () => ({
            title:"",
	        description:"",
	        dueDate: null,
	        courseId:"Period 1"
        }),
	    mounted(){
            //this.dueDate = new Date();
            this.dueDate = new Date(this.$store.state.now.getFullYear(),this.$store.state.now.getMonth(),this.$store.state.now.getDate(),0,0)
		    
	    }
    }
</script>

<style scoped>

</style>
