//app.js
App({
  data:{
    initialpass:"test"
  },
  setpassword(val){
    console.log(val);
    console.log(this)
  },
  onLaunch: function () {
    console.log("launched")
  }
  
  
})