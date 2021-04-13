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
					@click="()=>{$store.state.assignmentDialog = false;}"
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-toolbar-title>New Task</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn
						dark
						text
						@click="$store.state.assignmentDialog = false;createAssignment()"
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
		
		</v-list>
		<v-divider></v-divider>
		<v-subheader>Details</v-subheader>
		<v-list>
			<v-card-title class="ml-5">When is it due?</v-card-title>
			<v-list-item>
				<v-list-item-content>
					<v-row>
						<v-col>
							<v-menu
									ref="menu1"
									v-model="menu1"
									:close-on-content-click="false"
									transition="scale-transition"
									offset-y
									max-width="290px"
									min-width="290px"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
											v-model="dateFormatted"
											label="Due date"
											
											persistent-hint
											prepend-icon="mdi-calendar"
											v-bind="attrs"
											@blur="date = parseDate(dateFormatted)"
											v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
										v-model="date"
										no-title
										color="primary"
										@input="menu1 = false"
								></v-date-picker>
							</v-menu>
						</v-col>
						<v-col>
					<v-menu
							ref="menu"
							v-model="menu2"
							:close-on-content-click="false"
							:nudge-right="40"
							:return-value.sync="time"
							transition="scale-transition"
							offset-y
							max-width="290px"
							min-width="290px"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
									v-model="time"
									label="Due time"
									prepend-icon="mdi-clock-time-four-outline"
									readonly
									v-bind="attrs"
									v-on="on"
							></v-text-field>
						</template>
						<v-time-picker
								v-if="menu2"
								v-model="time"
								full-width
								color="primary"
								@click:minute="$refs.menu.save(time)"
						></v-time-picker>
					</v-menu>
						</v-col>
						
					</v-row>
				</v-list-item-content>
			</v-list-item>
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
	        courseId:"Period 1",
	        menu1:false,
	        menu2:false,
	        time:'00:00',
	        dateFormatted:null,
	        date:null
        }),
	    mounted(){
            //this.dueDate = new Date();
            //this.dueDate = new Date(this.$store.state.now.getFullYear(),this.$store.state.now.getMonth(),this.$store.state.now.getDate(),0,0)
	    },
        computed: {
            computedDateFormatted () {
                return this.formatDate(this.date)
            },
	        dueDate(){
                let year, month, day, hours, minutes;
                if (!this.date) [year, month, day] = [this.$store.state.now.getFullYear(),this.$store.state.now.getMonth(),this.$store.state.now.getDate()]
                else  [year, month, day] = this.date.split('-');
                if (!this.time) [hours, minutes] = [0,0]
		        else [hours, minutes] = this.time.split(':').map(parseFloat);
		        
		        //console.log(hours,minutes, this.time.split(':'))
		        return new Date(year,month-1,day,hours,minutes)
	        }
        },

        watch: {
            date (val) {
                this.dateFormatted = this.formatDate(this.date)
            },
        },

        methods: {
            formatDate (date) {
                if (!date) return null

                const [year, month, day] = date.split('-')
                return `${month}/${day}/${year}`
            },
            parseDate (date) {
                if (!date) return null

                const [month, day, year] = date.split('/')
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },
	        createAssignment(){
                this.$store.dispatch('newAssignment',{
                    title:this.title,
	                dueDate: this.dueDate,
	                courseId: this.courseId
                });
                this.$store.state.notRnd = Date.now();
                
	        }
        },
    }
</script>

<style scoped>

</style>
