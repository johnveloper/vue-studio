let app = new Vue({
  el: '#app',
  data: {
    route: 'home',
    content: null
  },
  mounted: function() {
    axios.get('content/' + this.route + '.html').then(res => this.content = res.data);
  }
});