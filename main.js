var app = new Vue({
  el:'#app',
  data: function(){
    return{
      elements: [],
      an: 0,
      random:[],
      min: 0,
      max: 4,
      random:false
    }
  },
  mounted: function(){
    var self = this;
    axios
    .get('./data.json')
    .then(function(response){
      self.elements = response.data
    })
    .catch(function(error){
      console.log('取得に失敗しました',error);
    });
  },
  methods:{
    randomNumber:function(){
      return Math.floor(Math.random()*(this.max-this.min +1) + this.min);
    },
    prev:function(){
      if(this.random == true){
        this.an = this.randomNumber();
      }else{
        if(this.min < this.an){
          this.an--
        }
      }
    },
    next:function(){
      if(this.random == true){
        this.an = this.randomNumber();
      }else{
        if(this.an < this.max){
          this.an++
        }
      }
    }
  }
});