import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);
const myTheme = {
    primary: colors.blue.base,
    secondary: '#434ac1',
    accent: '#0b00c9',
    error: '#ff5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
}
export default new Vuetify({
    theme:{
        themes:{
            light: myTheme,
            dark: myTheme
        },
        dark: false,

    }
});
