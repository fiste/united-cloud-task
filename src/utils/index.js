import moment from 'moment'

export default {
  methods: {
    getPic: function (name) {
      var images = require.context('../static/images/', false, /\.jpg$/)
      return images('./' + name)
    },
    date: function () {
      return moment().format('ddd D MMM')
    },
    time: function () {
      return moment().format('H:mm')
    }
  }
}
