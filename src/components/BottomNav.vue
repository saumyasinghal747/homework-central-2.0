<template>
	<v-bottom-navigation style="position:fixed;bottom:0"   fixed color="primary">
		<v-btn to="/">
			<span>Schedule</span>
			
			<v-icon>mdi-calendar</v-icon>
		</v-btn>
		
		<v-btn to="/people">
			<span>Clubs & Staff</span>
			
			<v-icon>mdi-account-group</v-icon>
		</v-btn>
		
		<v-btn to="/todo">
			<span>To Do</span>
			
			<v-icon>mdi-format-list-bulleted</v-icon>
		</v-btn>
		<v-btn to="/settings">
			<span>Settings</span>
			
			<v-icon>mdi-cog</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNav",

        data: () => ({
            value:'recent'
        }),
    }
</script>

<style scoped>

</style>
