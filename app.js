var app = new Vue ({
  el: '#app',
  data: {
    inputFilled : false,
    tests: [
      'One',
      'Two',
      'Three'
    ]
  },
  methods: {
    showIt: function (event) {
      this.inputFilled = true;
      return console.log(this.tests);
    },
    bustArr: function (event) {
      alert(this.tests);
    }
  }
})
