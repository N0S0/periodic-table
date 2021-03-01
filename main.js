var app = new Vue({
  el: "#app",
  data: function () {
    return {
      elements: [],
      an: 0,
      random: [],
      min: 0,
      max: 9,
      random: false,
      hide1: true,
      hide2: true,
      hide3: true,
      hide4: true,
      hide5: true
    };
  },
  mounted: function () {
    var self = this;
    axios
      .get("./data.json")
      .then(function (response) {
        self.elements = response.data;
      })
      .catch(function (error) {
        console.log("取得に失敗しました", error);
      });
  },
  methods: {
    randomNumber: function () {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    prev: function () {
      if (this.random == true) {
        this.an = this.randomNumber();
      } else {
        if (this.min < this.an) {
          this.an--;
        }
      }
    },
    next: function () {
      if (this.random == true) {
        this.an = this.randomNumber();
      } else {
        if (this.an < this.max) {
          this.an++;
        }
      }
    },
    hide: function(){
      if(this.hide1 == false){
        this.hide1.display = false;
      }
      if(this.hide2 == false){
        this.hide2.display = false;
      }
      if(this.hide3 == false){
        this.hide3.display = false;
      }
      if(this.hide4 == false){
        this.hide4.display = false;
      }
      if(this.hide5 == false){
        this.hide5.display = false;
      }
    }
  }
});
