import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
const myTheme = {
    primary: '#4eb0ce',
    secondary: '#434ac1',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
}
export default new Vuetify({
    theme:{
        themes:{
            light: myTheme,
            dark: myTheme
        }
    }
});
