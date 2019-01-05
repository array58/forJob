//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    password:""
  },
  setLoginPass(e){
    this.setData({
      password:e.detail.value
    })
  },
  login(){
    if (app.data.initialpass == this.data.password || app.data.unipassword == this.data.password ){
      if (this.data.password.trim().length!=0){
        wx.showModal({
          title: '恭喜',
          content: '登录成功',
        })
      }
    }else{
      wx.showModal({
        title: '抱歉',
        content: '登录失败',
      })
      app.data.nextFrom=this.data.password;
    }
  },
  onLoad: function (res) {
    this.setData({
      password:app.data.initialpass
    })
 
  },
  onShareAppMessage:function(res){
    console.log(res)
    return {
      withShareTicket: true,
      path:"pages/index/index?from="+app.data.nextFrom
    }
  }
})
