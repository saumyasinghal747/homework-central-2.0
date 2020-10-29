<template>
	<v-bottom-navigation app grow style="position:fixed;bottom:0" v-model="value" dark :background-color="color"  fixed >
		<v-btn to="/">
			<span>Home</span>
			
			<v-icon>mdi-home</v-icon>
		</v-btn>
		<v-btn to="/schedule">
			<span>Schedule</span>
			
			<v-icon>mdi-calendar</v-icon>
		</v-btn>
		<v-btn to="/todo">
			<span>To Do</span>
			
			<v-icon>mdi-format-list-bulleted</v-icon>
		</v-btn>
		<v-btn to="/people">
			<span>Directory</span>
			
			<v-icon>mdi-account-group</v-icon>
		</v-btn>
		
		
		<!--<v-btn to="/settings">
			<span>Settings</span>
			
			<v-icon>mdi-cog</v-icon>
		</v-btn>-->
	</v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNav",

        data: () => ({
            value: 0
        }),
	    computed:{
            color(){
                switch (this.value) {
					case 0: return 'blue'
	                case 1: return 'indigo'
	                case 2: return 'green'
	                case 3: return 'purple'
                }
            }
	    }
    }
</script>

<style scoped>

</style>
