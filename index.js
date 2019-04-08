let app = new Vue({
  el: '#app',
  data: {
    routes: [
      'Introduction',
      'Installation'      
    ],
    route: 'Introduction',
    routeIndex: 0,
    content: null,
    pickerShown: false
  },
  mounted: function() {
    this.show(this.routes[0]);
  },
  methods: {
    togglePicker: function() {
      if (!this.pickerShown) {
        this.pickerShown = !this.pickerShown;
      }
    },
    show: function(route) {
      this.route = route;
      axios.get('content/' + route.toLowerCase() + '.html').then(res => this.content = res.data);
      this.pickerShown = false;
    },
    handleWheel: function(e) {
      this.routeIndex += Math.sign(e.deltaY);
      this.routeIndex = this.routeIndex < 0 ? 0 : this.routeIndex;
      this.routeIndex = this.routeIndex > this.routes.length - 1 ? this.routes.length - 1 : this.routeIndex;
      this.show(this.routes[this.routeIndex]);
    }
  }
});