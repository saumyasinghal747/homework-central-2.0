<template>
  <v-app id="app" class="pb-7" style="height:100%;width:100%;overflow-y:scroll;overflow-x: hidden">
    <v-main >
      <router-view ref="routerView"/>
    </v-main>
    <BottomNav />
    <v-dialog
            v-model="$store.state.settingsDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
    bottom right
    >
      <template v-slot:activator="{on, attrs}">
        <v-btn small
              v-bind="attrs"
              v-on="on"
                color="blue darken-2" class="mb-13"
                dark
               style="position: fixed;bottom:15px;right:15px" right bottom
                fab
        >
          <v-icon v-if="false">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-cog
          </v-icon>
        </v-btn>
      </template>
      <Settings/>
    </v-dialog>
  </v-app>
  
</template>

<script>
import BottomNav from "@/components/BottomNav";
import Settings from "@/views/Settings";
import store from "@/store";

export default {
  name: 'App',

  components: {
    Settings,
    BottomNav
  },
  mounted(){
    const udata = localStorage.getItem('hcbetaCustomizations');
    this.$vuetify.theme.dark = JSON.parse(localStorage.getItem('hcbetaDark')||'false')
    if (udata) this.$store.state.customizations = JSON.parse(udata);
    const usettings = localStorage.getItem('hcbetaSettings');
    if (usettings) this.$store.state.settings = JSON.parse(usettings)
    
    const vapp = this;
    window.addEventListener('storage', function(e) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.getItem('hcbetaDark')||JSON.stringify(this.$vuetify.theme.dark))
      const udata = localStorage.getItem('hcbetaCustomizations');
      if (udata){
        //console.log(udata)
        vapp.$store.state.customizations = JSON.parse(udata)
      }
      else {
        // console.log("hmmm")
      }
    });
    
  },
  data: () => ({
  
  }),
};
</script>
