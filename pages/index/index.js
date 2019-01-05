//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
 
  onLoad: function (res) {
    console.log(app.data.initialpass);
    app.setpassword("this is new word");
    if(res.id==undefined){
      res.id="undefined"
    }
    wx.showModal({
      title: '查看参数',
      content: res.id,
    })
  },
  onShareAppMessage:function(res){
    console.log(res)
    return {
      withShareTicket: true,
      path:"pages/index/index?id=123"
    }
  }
})
