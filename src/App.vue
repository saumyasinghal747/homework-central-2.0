<template>
  <v-app id="app" class="pb-7" style="height:100%;width:100%;overflow-y:scroll;overflow-x: hidden">
    <v-main >
      <router-view ref="routerView"/>
    </v-main>
    <BottomNav />
    <Assignment :key="$store.state.notRnd" />
    <v-dialog
            v-model="$store.state.settingsDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
    
    >
      <template v-slot:activator="{on, attrs}">
        <v-speed-dial
                v-model="fab"
                
                style="position: fixed;bottom:71px;right:15px"
                
        >
          <template v-slot:activator>
            <v-btn
              
                    v-model="fab"
                    color="purple"
                    dark
                    
                    fab
            >
              <v-icon v-if="fab">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-wrench
              </v-icon>
            </v-btn>
          </template>
          <v-btn
                  fab
                  dark
                  v-bind="attrs"
                  v-on="on"
                  small
                  color="primary"
          >
            <v-icon>mdi-cog</v-icon>
          </v-btn>
          <v-btn
                  fab
                  dark
                  small
                  color="green"
                  @click.stop="$store.state.assignmentDialog =true"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
                  v-if="false"
                  fab
                  dark
                  small
                  color="red"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-speed-dial>
      </template>
      <Settings/>
    </v-dialog>
  </v-app>
  
</template>

<script>
import BottomNav from "@/components/BottomNav";
import Settings from "@/views/Settings";
import store from "@/store";
import Assignment from "@/components/Assignment";

export default {
  name: 'App',

  components: {
    Assignment,
    Settings,
    BottomNav
  },
  mounted(){
    const udata = localStorage.getItem('hcbetaCustomizations');
    this.$vuetify.theme.dark = JSON.parse(localStorage.getItem('hcbetaDark')||'false')
    if (udata) this.$store.state.customizations = JSON.parse(udata);
    const usettings = localStorage.getItem('hcbetaSettings');
    if (usettings) this.$store.state.settings = JSON.parse(usettings)
    const uassignments = localStorage.getItem('hcbetaAssignments');
    if (uassignments) this.$store.state.assignments = JSON.parse(uassignments);
    const vapp = this;
    window.addEventListener('storage', function(e) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem('hcbetaDark')||JSON.stringify(this.$vuetify.theme.dark))
      const udata = localStorage.getItem('hcbetaCustomizations');
      if (udata) this.$store.state.customizations = JSON.parse(udata);
      const usettings = localStorage.getItem('hcbetaSettings');
      if (usettings) this.$store.state.settings = JSON.parse(usettings)
      const uassignments = localStorage.getItem('hcbetaAssignments');
      if (uassignments) this.$store.state.assignments = JSON.parse(uassignments);
    });
    
  },
  data: () => ({
    fab:false
  }),
};
</script>
<style>
  .titlebar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
  }
</style>
