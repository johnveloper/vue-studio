let app = new Vue({
  el: '#app',
  data: {
    route: 'Home',
    content: null,
    pickerShown: false
  },
  mounted: function() {
    this.show(this.route);
  },
  methods: {
    togglePicker: function() {
      this.pickerShown = !this.pickerShown;
    },
    show: function(route) {
      this.route = route;
      axios.get('content/' + route.toLowerCase() + '.html').then(res => this.content = res.data);
    }
  }
});