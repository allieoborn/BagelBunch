import Vue from "vue";
import Vuetify from "../../node_modules/vuetify/lib";
import "vuetify/dist/vuetify.min.css"
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#C5CAE9', //'#FFD54F', // #E53935
        secondary: '#272727', // #FFCDD2
        // accent: '#82B1FF',
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FFC107',
        // color1: '#272727', // dark-grey
        // color2: '#FFD54F'  // amber
      },
      dark: {
        primary: '#FFD54F', // #E53935
        secondary: '#272727', // #FFCDD2
      }
    },
  }
});
