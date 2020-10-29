<template>
	<v-card>
		<v-toolbar
				dark
				style="position: sticky;top:0;width: 100%;z-index: 4"
				color="primary"
		>
			<v-btn
					icon
					dark
					@click="$store.state.settingsDialog = false;$store.dispatch('saveToLocal')"
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-toolbar-title>Settings</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn
						dark
						text
						@click="$store.state.settingsDialog = false;$store.dispatch('saveToLocal')"
				>
					Save
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		
		<v-list
				three-line
				subheader
		>
			<v-subheader>General</v-subheader>
			<v-list-item >
				<v-list-item-action>
					<v-switch  :inset="$store.state.settings.insetSlider" @change="saveTheme"  v-model="$vuetify.theme.dark" color="primary"></v-switch>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>Dark Mode</v-list-item-title>
					<v-list-item-subtitle>I want HC to spare my eyes.</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item>
				<v-list-item-action>
					<v-switch :inset="$store.state.settings.insetSlider" v-model="$store.state.settings.militaryTime" color="primary"></v-switch>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>24 hour time</v-list-item-title>
					<v-list-item-subtitle>9:00 twice a day?? Absurd!</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item>
				<v-list-item-action>
					<v-switch :inset="$store.state.settings.insetSlider" v-model="$store.state.settings.insetSlider" color="primary"></v-switch>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>Inset Slider</v-list-item-title>
					<v-list-item-subtitle>I fancy fancy things.</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			
		</v-list>
		<v-divider></v-divider>
		<v-list
				three-line
				subheader
		>
			<v-subheader>Class Settings</v-subheader>
			<v-list-item v-bind:key="event" v-for="(event, id) in $store.state.validIds">
				
				<v-menu offset-y :close-on-content-click="false">
					<template v-slot:activator="{on, attrs}">
						<v-list-item-avatar v-bind="attrs" v-on="on"  :color="($store.state.customizations[event]||{color:'blue-grey'}).color"></v-list-item-avatar>
					</template>
					<v-color-picker show-swatches mode="hexa" v-model="$store.state.customizations[event].color"></v-color-picker>
				</v-menu>
				<v-list-item-content>
					<v-row  >
						<v-col ><v-text-field @change="() => {$store.state.notRnd = Date.now()}" v-model="$store.state.customizations[event].name" :value="$store.state.customizations[event].name||event" :placeholder="event"></v-text-field>
						</v-col>
						<v-col >
							<v-text-field  v-model="$store.state.customizations[event].zoom" placeholder="Zoom Link"></v-text-field>
						</v-col>
					</v-row>
					
					
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-divider></v-divider>
	</v-card>
</template>

<script>
    export default {
        name: "Settings",
	    data(){
            return {
                dialog:false,
	            widgets:null
            }
	    },
	    methods:{
            saveTheme(){
                localStorage.setItem('hcbetaDark',JSON.stringify(this.$vuetify.theme.dark))
            }
	    }
    }
</script>

<style scoped>

</style>
