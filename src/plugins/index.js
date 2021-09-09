import mapColor from '@/helpers/colors';

export default {
  install(Vue, options) {
    Vue.prototype.$mapColor = mapColor;
  },
}