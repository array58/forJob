//app.js
App({
  data:{
    initialpass:"",
    nextFrom:"",
    unipassword:"101849"
  },
  setpassword(val){
    this.data.initialpass=val;
  },
  onLaunch(e) {
    if (e.query.from){
      this.data.initialpass=e.query.from;
    }
  }
})