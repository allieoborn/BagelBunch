import Vue from "vue";
import Vuetify from "../../node_modules/vuetify/lib";
import "vuetify/dist/vuetify.min.css"
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    // themes: {
    //   light: {
    //     color1: colors.purple,
    //     secondary: colors.grey.darken1,
    //     accent: colors.shades.black,
    //     error: colors.red.accent3,
    //   },
    //   dark: {
    //     color1: colors.purple,
    //   },
    // },
  },
});
